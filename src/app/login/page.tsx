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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Alert } from '@mui/material';
import { CircularProgress } from '@mui/material';

export default function Login() {
    // 状态管理当前显示的内容
    const [activeContent, setActiveContent] = React.useState<'login' | 'register' | 'forgot'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();


    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // 模拟API请求延迟
        setTimeout(() => {
            if (email === 'admin@gmail.com' && password === '1234567') {
                setSuccess(true);
                // 登录成功后跳转或执行其他操作
                router.push('/dashboard'); // 示例：跳转到仪表盘
            } else {
                setError('Invalid email or password');
            }
            setLoading(false);
        }, 1000);
    };


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >

            {/* Logo 图片 */}
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

            {/* 文字标题 */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 70,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
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
                        bgcolor: activeContent === 'login' ? '#4CD2E4' : 'transparent',
                    }}
                >
                    {/* 添加登录图标 */}
                    <AccountCircleIcon
                        sx={{
                            fontSize: 48,
                            color: 'white'
                        }}
                    />
                    <Typography variant="h6" color='white'>Login</Typography>
                </Button>

                <Button
                    variant={activeContent === 'register' ? 'contained' : 'outlined'}
                    onClick={() => setActiveContent('register')}
                    sx={{
                        width: 300,
                        height: 160,
                        bgcolor: activeContent === 'register' ? '#4CD2E4' : 'transparent',
                    }}
                >
                    {/* 添加注册图标 */}
                    <HowToRegIcon
                        sx={{
                            fontSize: 48,
                            color: 'white'
                        }}
                    />
                    <Typography variant="h6" color='white'>Register</Typography>
                </Button>

                <Button
                    variant={activeContent === 'forgot' ? 'contained' : 'outlined'}
                    onClick={() => setActiveContent('forgot')}
                    sx={{
                        width: 300,
                        height: 160,
                        bgcolor: activeContent === 'forgot' ? '#4CD2E4' : 'transparent',
                    }}
                >
                    {/* 添加忘记密码图标 */}
                    <LockResetIcon
                        sx={{
                            fontSize: 48,
                            color: 'white'
                        }}
                    />

                    <Typography variant="h6" color='white'>Forgot Password</Typography>
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
                {/* 如果点击登录按钮，则跳转登录页面 */}
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

                        {/* 登录所需要的input内容 */}
                        <Box component="form" onSubmit={handleLogin} sx={{ width: '80%', maxWidth: 400 }}>

                            {/* 错误提示 */}
                            {error && (
                                <Alert severity="error" sx={{ mb: 3 }}>
                                    {error}
                                </Alert>
                            )}


                            {/* 成功提示 */}
                            {success && (
                                <Alert severity="success" sx={{ mb: 3 }}>
                                    Login successful! Redirecting...
                                </Alert>
                            )}



                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"

                                // 验证Email是否正确
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                                // 验证password是否正确
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={loading}
                                sx={{ height: 48 }}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Login'}
                            </Button>
                        </Box>
                    </>
                )}

                {/* 如果点击注册按钮，则会跳到注册页面 */}
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

                        {/* 注册所需要的input内容 */}
                        <Box component="form" sx={{ width: '80%', maxWidth: 400, pt: 10 }}>
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

                {/* 如果点击忘记密码按钮，则跳到忘记密码的页面 */}
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

                        {/* 忘记密码所需要的input内容 */}
                        <Box component="form" sx={{ width: '80%', maxWidth: 400, pt: 10 }}>
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