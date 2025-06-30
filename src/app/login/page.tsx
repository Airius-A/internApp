"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LeftImagePanel from './component/LeftImgPannel';
import CenterButtonPanel from './component/CenterButtonPannel';
import RightContentPanel from './component/RightContentPannel';
import WebtitleImg from './component/WebtitleImg';

export default function Login() {
    const [activeContent, setActiveContent] = React.useState<'login' | 'register' | 'forgot'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // 模拟API请求延迟
        setTimeout(() => {
            if (email === 'admin@gmail.com' && password === '1234567') {
                setSuccess(true);
                router.push('/dashboard');
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
            {/* 网站名字和网站logo */}
            <WebtitleImg />

            {/* 左侧图片框 */}
            <LeftImagePanel imageSrc="/next.svg" altText="Next.js Logo" />

            {/* 中间按钮区域 */}
            <CenterButtonPanel 
                activeContent={activeContent} 
                setActiveContent={setActiveContent} 
            />

            {/* 右侧内容区域 */}
            <RightContentPanel
                activeContent={activeContent}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                loading={loading}
                success={success}
                handleLogin={handleLogin}
            />
        </Box>
    );
}