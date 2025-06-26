"use client"
import { useState } from "react";
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    height: "100%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center"
}))

export default function Navbar() {
    const [open, setOpen] = useState(false)


    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h4">Xtreme</Typography>
                <Search><InputBase placeholder="Search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <EmailIcon />
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>

                    <Avatar sx={{ width: 30, height: 30 }}
                        src="/1.jpg"
                        onClick={(e) => setOpen(true)}
                    />

                </Icons>
            </StyledToolBar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}