import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import { Home } from "@mui/icons-material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SecurityIcon from '@mui/icons-material/Security';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
  }

export default function Sidebar({ mode, setMode }: SidebarProps) {

    const handleThemeChange = () => {
        setMode(mode === "light" ? "dark" : "light");
      };

    return (
        <Box
            bgcolor="white"
            flex={1}
            p={2}
            color="black"
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#dashboard">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>

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