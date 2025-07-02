"use client"

import Navbar from "../pageElement/Navbar"
import Sidebar from "../pageElement/Sidebar"
import Feed from "../pageElement/Feed"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import { useState } from "react"

export default function Dashboard() {
    const [mode, setMode] = useState("dark")

    const theme = createTheme({
        palette: {
            mode: mode === "dark" ? "dark" : "light" // 确保值是 "light" 或 "dark"
        }
    })
    const [activeTab, setActiveTab] = useState("default"); // 默认选中 list

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ 
                bgcolor: 'background.default', 
                color: 'text.primary',
                minHeight: '100vh' // 建议添加最小高度
            }}>
                <Navbar />
                <Stack 
                    direction="row" 
                    spacing={2} 
                    justifyContent="space-between"
                    sx={{ pt: 2 }} // 添加顶部内边距
                >
                    <Sidebar setMode={setMode} mode={mode} setActiveTab={setActiveTab}/>
                    <Feed activeTab={activeTab}/>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}