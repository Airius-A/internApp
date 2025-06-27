"use client"

import { Box, Button, Typography } from "@mui/material";
import LeftImagePanel from './login/component/LeftImgPannel';
import WebtitleImg from "./login/component/WebtitleImg";
import { useRouter } from "next/navigation";
import { Fade, Grow } from "@mui/material"; // 导入动画组件
import { useEffect, useState } from "react"; // 导入React hooks

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false); // 控制动画显示的状态

  useEffect(() => {
    // 组件加载后触发动画
    setShow(true);
  }, []);

  const handleClick = () => {
    router.push("/login");
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {/* 网站名字和网站logo - 添加Fade动画 */}
      <Fade in={show} timeout={1000}>
        <div>
          <WebtitleImg />
        </div>
      </Fade>

      {/* 左侧图片 - 添加Grow动画 */}
      <Grow in={show} timeout={1000}>
        <Box sx={{ marginRight: "20px", position: "absolute", right: 1100 }}>
          <LeftImagePanel imageSrc="/next.svg" altText="Next.js Logo" />
        </Box>
      </Grow>

      {/* 右侧介绍网站区域 - 添加Fade动画 */}
      <Fade in={show} timeout={1500}>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            position: "absolute",
            top: 200,
            right: 800
          }}
        >
          Xtreme
        </Typography>
      </Fade>

      <Fade in={show} timeout={2000}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            position: "absolute",
            top: 330,
            width: 700,
            right: 400
          }}
        >
          Xtreme is a professional data visualization and analysis platform dedicated to helping individuals,
          businesses, and research institutions efficiently present, quantify, and analyze data.
          Whether it's market trends, business performance, or research data,
          Xtreme can transform complex data into clear and understandable visual charts and reports through powerful tools and an intuitive interface.
        </Typography>
      </Fade>

      {/* 按钮 - 添加Grow动画 */}
      <Grow in={show} timeout={2500}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            position:"absolute",
            top: 550,
            right: 920
          }}
        >
          Let's get started
        </Button>
      </Grow>
    </Box>
  );
}