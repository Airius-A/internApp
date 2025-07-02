import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { Home } from "@mui/icons-material";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';

interface SidebarProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
    setActiveTab: Dispatch<SetStateAction<string>>; // 新增：用于更新选中的菜单项
}

export default function Sidebar({ mode, setMode, setActiveTab }: SidebarProps) {
    const handleThemeChange = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    type ExpandedKeys = "dashboard" | "user";

    const [expanded, setExpanded] = React.useState({
        dashboard: false,
        user: false,
    });

    const handleToggle = (key: ExpandedKeys) => {
        setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // 根据 mode 动态设置图标颜色
    const getIconColor = () => {
        return mode === "dark" ? "white" : "black";
    };

    // 根据 mode 动态设置 secondary 文本颜色
    const getSecondaryColor = () => {
        return mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";
    };

    // 动态创建 theme，根据 mode 调整 secondary 颜色
    const theme = createTheme({
        components: {
            MuiListItemText: {
                styleOverrides: {
                    secondary: {
                        color: getSecondaryColor(),
                    },
                },
            },
        },
    });

    return (
        <Box
            bgcolor={mode === "dark" ? "#121212" : "white"}
            flex={1}
            p={2}
            color={mode === "dark" ? "white" : "black"}
        >
            <ThemeProvider theme={theme}>
                <List>
                    {/* Dashboard 的按钮 */}
                    <ListItemButton onClick={() => handleToggle("dashboard")} component="a" href="#dashboard">
                        <ListItemIcon>
                            <Home sx={{ color: getIconColor() }} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                        {expanded.dashboard ? <ExpandLess sx={{ color: getIconColor() }} /> : <ExpandMore sx={{ color: getIconColor() }} />}
                    </ListItemButton>
                    <Collapse in={expanded.dashboard} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#default" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("default")}>
                                <ListItemText secondary="Default" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#analytics" sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Analytics" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* User 的按钮部分 */}
                    <ListItemButton onClick={() => handleToggle("user")} component="a" href="#user">
                        <ListItemIcon>
                            <AccountCircleIcon sx={{ color: getIconColor() }} />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                        {expanded.user ? <ExpandLess sx={{ color: getIconColor() }} /> : <ExpandMore sx={{ color: getIconColor() }} />}
                    </ListItemButton>
                    <Collapse in={expanded.user} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#Profile" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("profile")}>
                                <ListItemText secondary="Profile" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#List" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("list")} >
                                <ListItemText secondary="List" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#Create" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("create")}>
                                <ListItemText secondary="Create" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#Edit" sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Edit" />
                            </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="#Account" sx={{ pl: 4, left: "40px" }}>
                                <ListItemText secondary="Account" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    {/* 其他按钮部分 */}
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#company" onClick={() => setActiveTab("company")}>
                            <ListItemIcon>
                                <BusinessIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <ListItemText primary="Company" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#orders">
                            <ListItemIcon>
                                <ShoppingCartIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <ListItemText primary="Orders" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#task">
                            <ListItemIcon>
                                <TaskAltIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <ListItemText primary="Tasks" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#calendar">
                            <ListItemIcon>
                                <CalendarTodayIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <ListItemText primary="Calendar" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#auth">
                            <ListItemIcon>
                                <SecurityIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <ListItemText primary="Auth" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DarkModeIcon sx={{ color: getIconColor() }} />
                            </ListItemIcon>
                            <Switch
                                checked={mode === "dark"}
                                onChange={handleThemeChange}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </ThemeProvider>
        </Box>
    );
}