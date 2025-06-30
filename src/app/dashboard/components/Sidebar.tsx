import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { Home } from "@mui/icons-material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SecurityIcon from '@mui/icons-material/Security';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Dispatch, SetStateAction } from "react";
import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const theme = createTheme({
    components: {
        MuiListItemText: {
            styleOverrides: {
                secondary: {
                    color: "black", // 全局修改 secondary 颜色
                },
            },
        },
    },
});


interface SidebarProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ mode, setMode }: SidebarProps) {

    const handleThemeChange = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    type ExpandedKeys = "dashboard" | "user"; // 定义允许的键


    // 用一个对象管理所有折叠状态
  const [expanded, setExpanded] = React.useState({
    dashboard: true,
    user: true,
    // 可以继续添加其他区域
  });

  // 统一处理折叠/展开
  const handleToggle = (key: ExpandedKeys) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

    return (
        <Box
            bgcolor="white"
            flex={1}
            p={2}
            color="black"
        >
            <List>

                {/* dashboard 的按钮 */}
                <ListItemButton onClick={() => handleToggle("dashboard")}  component="a" href="#dashboard" >
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                    {expanded.dashboard ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <ThemeProvider theme={theme}>
                    <Collapse in={expanded.dashboard} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Default" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Analytics" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </ThemeProvider>

                {/* user的按钮部分 */}

                <ListItemButton onClick={() => handleToggle("user")}  component="a" href="#user" >
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                    {expanded.user ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <ThemeProvider theme={theme}>
                    <Collapse in={expanded.user} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Profile" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="List" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Create" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Edit" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Account" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </ThemeProvider>


                <ListItem disablePadding>
                    <ListItemButton component="a" href="#project">
                        <ListItemIcon>
                            <BusinessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Project" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#orders">
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#task">
                        <ListItemIcon>
                            <TaskAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tasks" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#calendar">
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#auth">
                        <ListItemIcon>
                            <SecurityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Auth" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <Switch
                            checked={mode === "dark"} // 如果 mode 是 dark，Switch 就是 checked
                            onChange={handleThemeChange}
                        ></Switch>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>

    )
}