import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'; // 汉堡菜单图标
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
    setActiveTab: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ mode, setMode, setActiveTab }: SidebarProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 检测是否为移动设备
    const [mobileOpen, setMobileOpen] = React.useState(false); // 控制移动端抽屉的开关

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

    const getIconColor = () => {
        return mode === "dark" ? "white" : "black";
    };

    const getSecondaryColor = () => {
        return mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";
    };

    const muiTheme = createTheme({
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

    const drawerContent = (
        <Box
            bgcolor={mode === "dark" ? "#121212" : "white"}
            flex={1}
            p={2}
            color={mode === "dark" ? "white" : "black"}
        >
            <ThemeProvider theme={muiTheme}>
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
                            <ListItemButton component="a" href="#analytics" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("analytics")}>
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
                            <ListItemButton component="a" href="#Edit" sx={{ pl: 4, left: "40px" }} onClick={() => setActiveTab("Edit")}>
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

    return (
        <>
            {/* 移动端汉堡菜单按钮 */}
            {isMobile && (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ position: 'fixed', top: 90, left: 10, zIndex: 1200 }}
                >
                    <MenuIcon />
                </IconButton>
            )}
    
            {/* 统一使用 Drawer 组件渲染侧边栏 */}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : true}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        position: 'relative', // 修复桌面端布局问题
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </>
    );
}