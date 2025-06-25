"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Stack, Button, Typography, TextField, InputAdornment } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockResetIcon from '@mui/icons-material/LockReset';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

export default function Login() {
    // 状态管理当前显示的内容
    const [activeContent, setActiveContent] = React.useState<'login' | 'register' | 'forgot'>('login');
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >


            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'white',
                }}
            >
                {/* Logo 图片 */}
                <Image
                    src="/next.svg"
                    alt="Xtreme logo"
                    width={40} // 设置适当宽度
                    height={40} // 设置适当高度
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 70,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                {/* 文字标题 */}
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                    }}>
                    Xtreme
                </Typography>

            </Box>

            {/* 左侧图片框 */}
            <Box
                sx={{
                    width: 300,
                    height: 480,
                    borderRadius: 1,
                    bgcolor: '#ffffff',
                }}
            >
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={100}
                    height={100}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            {/* 中间按钮区域 */}
            <Stack direction="column">
                <Button
                    variant={activeContent === 'login' ? 'contained' : 'outlined'}
                    onClick={() => setActiveContent('login')}
                    sx={{
                        width: 300,
                        height: 160,
                        borderRadius: 1,
                        bgcolor: activeContent === 'login' ? '#4CD2E4' : 'transparent',
                        color: activeContent === 'login' ? 'white' : '#4CD2E4',
                        borderColor: '#4CD2E4',
                        '&:hover': {
                            bgcolor: '#4CD2E4',
                            color: 'white'
                        }
                    }}
                >
                    <AccountCircleIcon
                        sx={{
                            fontSize: 48,
                            color: activeContent === 'login' ? 'white' : '#4CD2E4'
                        }}
                    />
                    <Typography variant="h6">Login</Typography>
                </Button>

                <Button
                    variant={activeContent === 'register' ? 'contained' : 'outlined'}
                    onClick={() => setActiveContent('register')}
                    sx={{
                        width: 300,
                        height: 160,
                        borderRadius: 1,
                        bgcolor: activeContent === 'register' ? '#4CD2E4' : 'transparent',
                        color: activeContent === 'register' ? 'white' : '#4CD2E4',
                        borderColor: '#4CD2E4',
                        '&:hover': {
                            bgcolor: '#4CD2E4',
                            color: 'white'
                        }
                    }}
                >

                    <HowToRegIcon
                        sx={{
                            fontSize: 48,
                            color: activeContent === 'register' ? 'white' : '#4CD2E4'
                        }}
                    />
                    <Typography variant="h6">Register</Typography>
                </Button>

                <Button
                    variant={activeContent === 'forgot' ? 'contained' : 'outlined'}
                    onClick={() => setActiveContent('forgot')}
                    sx={{
                        width: 300,
                        height: 160,
                        borderRadius: 1,
                        bgcolor: activeContent === 'forgot' ? '#4CD2E4' : 'transparent',
                        color: activeContent === 'forgot' ? 'white' : '#4CD2E4',
                        borderColor: '#4CD2E4',
                        '&:hover': {
                            bgcolor: '#4CD2E4',
                            color: 'white'
                        }
                    }}
                >

                    <LockResetIcon
                        sx={{
                            fontSize: 48,
                            color: activeContent === 'forgot' ? 'white' : '#4CD2E4'
                        }}
                    />

                    <Typography variant="h6">Forgot Password</Typography>
                </Button>
            </Stack>

            {/* 右侧内容区域 */}
            <Box
                sx={{
                    width: 700,
                    height: 480,
                    borderRadius: 1,
                    bgcolor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {activeContent === 'login' && (
                    <>
                        <Typography
                            variant="h3"
                            sx={{
                                position: 'absolute',
                                top: '30%',
                                color: 'black',
                                textAlign: 'center', // 文字居中
                                width: '100%',      // 确保transform居中生效
                            }}
                        >
                            Login Here
                        </Typography>

                        <Box component="form" sx={{ width: '80%', maxWidth: 400 }}>

                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3 }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ height: 48 }}
                            >
                                Login
                            </Button>
                        </Box>
                    </>
                )}

                {activeContent === 'register' && (
                    <>
                        <Typography
                            variant="h3"
                            sx={{
                                position: 'absolute',
                                top: '30%',
                                color: 'black',
                                textAlign: 'center', // 文字居中
                                width: '100%',      // 确保transform居中生效
                            }}
                        >
                            Register Here
                        </Typography>

                        <Box component="form" sx={{ width: '80%', maxWidth: 400, pt:10 }}>

                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 3 }}
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ height: 48 }}
                            >
                                Register now
                            </Button>
                        </Box>
                    </>
                )}
                {activeContent === 'forgot' && (
                    <>
                    <Typography
                        variant="h3"
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            color: 'black',
                            textAlign: 'center', // 文字居中
                            width: '100%',      // 确保transform居中生效
                        }}
                    >
                        Reset Password Here
                    </Typography>

                    <Box component="form" sx={{ width: '80%', maxWidth: 400, pt:10 }}>

                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 3 }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ height: 48 }}
                        >
                            Send reset email
                        </Button>
                    </Box>
                </>
                )}
            </Box>
        </Box>
    );
}