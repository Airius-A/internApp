"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

export default function Login() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // 水平居中
                alignItems: 'center',    // 垂直居中
                minHeight: '100vh',      // 确保容器高度充满整个视口
            }}
        >
            <Box
                sx={{
                    width: 300,
                    height: 600,
                    borderRadius: 1,
                    bgcolor: '#ffffff',
                }}
            >
                <Image
                    src="/next.svg"
                    alt="描述文字"
                    width={100}
                    height={100}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover' // 控制图片填充方式
                    }}
                />


            </Box>

            <Stack direction="column">
                <Box
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: 1,
                        bgcolor: '#4CD2E4',
                        display: 'grid',
                        placeItems: 'center', // 水平和垂直居中d
                    }}
                >
                    <Typography variant="h6">
                        Login
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: 1,
                        bgcolor: '#4CD2E4',
                        display: 'grid',
                        placeItems: 'center', // 水平和垂直居中d
                    }}
                >
                    <Typography variant="h6">
                        Register
                    </Typography>
                </Box>


                <Box
                    sx={{
                        width: 300,
                        height: 200,
                        borderRadius: 1,
                        bgcolor: '#4CD2E4',
                        display: 'grid',
                        placeItems: 'center', // 水平和垂直居中d
                    }}
                >
                    <Typography variant="h6">
                        Forgot Password
                    </Typography>
                </Box>
            </Stack>


            <Box
                sx={{
                    width: 500,
                    height: 600,
                    borderRadius: 1,
                    bgcolor: '#6AE44C',
                }}
            />
        </Box>
    );
}