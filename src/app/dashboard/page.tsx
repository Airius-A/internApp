"use client"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import { useState } from "react"

export default function Dashboard() {
    const [mode, setMode] = useState("dark") // 建议小写 "dark"（MUI 标准）

    const theme = createTheme({
        palette: {
            mode: mode === "dark" ? "dark" : "light" // 确保值是 "light" 或 "dark"
        }
    })

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
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed />
                </Stack>
            </Box>
        </ThemeProvider>
    )
}