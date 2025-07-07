import {
    Box,
    Button,
    Chip,
    Typography,
} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import RefreshIcon from '@mui/icons-material/Refresh';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import { Padding } from "@mui/icons-material";


// 模拟数据
// 公司数量的数据
const card = (
    <React.Fragment>
        <CardContent>
            <Box display="flex" alignItems="center">
                {/* 左侧文本 */}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    The number of the company:
                </Typography>

                {/* 右侧 Chip（通过 marginLeft: auto 推到最右边） */}
                <Box component="span" sx={{ marginLeft: 'auto' }}>
                    <Chip
                        color="primary"
                        label="This Year"
                        size="small"
                        sx={{
                            fontWeight: 400,
                            minWidth: 80,
                        }}
                    />
                </Box>
            </Box>

            {/* 数据展示 */}
            <Typography variant="h5" component="div">
                23
            </Typography>

            {/* 数据比较 */}
            <Box mt={1}>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Compare to last Year:
                </Typography>

                <Chip
                    label={
                        <Box display="flex" alignItems="center">
                            <Typography component="span" sx={{ fontSize: "15px", marginRight: "5px" }}>
                                +2%
                            </Typography>
                            <TrendingUpIcon fontSize="small" />
                        </Box>
                    }
                    sx={{
                        backgroundColor: "#e6f7e6",
                        color: "#2e7d32",
                        borderRadius: "4px",
                    }}
                />
            </Box>

        </CardContent>
    </React.Fragment>
);

// 公司盈利的数据
const card2 = (
    <React.Fragment>
        <CardContent>
            <Box display="flex" alignItems="center">
                {/* 左侧文本 */}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Total Earning:
                </Typography>

                {/* 右侧 Chip（通过 marginLeft: auto 推到最右边） */}
                <Box component="span" sx={{ marginLeft: 'auto' }}>
                    <Chip
                        color="primary"
                        label="This Year"
                        size="small"
                        sx={{
                            fontWeight: 400,
                            minWidth: 80,
                        }}
                    />
                </Box>
            </Box>

            {/* 数据展示 */}
            <Typography variant="h5" component="div">
                $ 25,396,000
            </Typography>

            {/* 数据比较 */}
            <Box mt={1}>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Compare to last Year:
                </Typography>

                <Chip
                    label={
                        <Box display="flex" alignItems="center">
                            <Typography component="span" sx={{ fontSize: "15px", marginRight: "5px" }}>
                                -28%
                            </Typography>
                            <TrendingDownIcon fontSize="small" />
                        </Box>
                    }
                    sx={{
                        backgroundColor: "#F7CFCF",
                        color: "#FC0709",
                        borderRadius: "4px",
                    }}
                />
            </Box>

        </CardContent>
    </React.Fragment>
);

// 覆盖国家的数量
const card3 = (
    <React.Fragment>
        <CardContent>
            <Box display="flex" alignItems="center">
                {/* 左侧文本 */}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Number of countries covered:
                </Typography>

                {/* 右侧 Chip（通过 marginLeft: auto 推到最右边） */}
                <Box component="span" sx={{ marginLeft: 'auto' }}>
                    <Chip
                        color="primary"
                        label="This Year"
                        size="small"
                        sx={{
                            fontWeight: 400,
                            minWidth: 80,
                        }}
                    />
                </Box>
            </Box>

            {/* 数据展示 */}
            <Typography variant="h5" component="div">
                12/197
            </Typography>

            {/* 数据比较 */}
            <Box mt={1}>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Compare to last Year:
                </Typography>

                <Chip
                    label={
                        <Box display="flex" alignItems="center">
                            <Typography component="span" sx={{ fontSize: "15px", marginRight: "5px" }}>
                                ±0%
                            </Typography>
                            <TrendingFlatIcon fontSize="small" />
                        </Box>
                    }
                    sx={{
                        backgroundColor: "#e6f7e6",
                        color: "#2e7d32",
                        borderRadius: "4px",
                    }}
                />
            </Box>

        </CardContent>
    </React.Fragment>
);

// 员工的数量
const card4 = (
    <React.Fragment>
        <CardContent>
            <Box display="flex" alignItems="center">
                {/* 左侧文本 */}
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    The number of employees:
                </Typography>

                {/* 右侧 Chip（通过 marginLeft: auto 推到最右边） */}
                <Box component="span" sx={{ marginLeft: 'auto' }}>
                    <Chip
                        color="primary"
                        label="This Year"
                        size="small"
                        sx={{
                            fontWeight: 400,
                            minWidth: 80,
                        }}
                    />
                </Box>
            </Box>

            {/* 数据展示 */}
            <Typography variant="h5" component="div">
                23,964
            </Typography>

            {/* 数据比较 */}
            <Box mt={1}>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Compare to last Year:
                </Typography>

                <Chip
                    label={
                        <Box display="flex" alignItems="center">
                            <Typography component="span" sx={{ fontSize: "15px", marginRight: "5px" }}>
                                +12%
                            </Typography>
                            <TrendingUpIcon fontSize="small" />
                        </Box>
                    }
                    sx={{
                        backgroundColor: "#e6f7e6",
                        color: "#2e7d32",
                        borderRadius: "4px",
                    }}
                />
            </Box>

        </CardContent>
    </React.Fragment>
);

// 注册必要的 ChartJS 组件
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// 示例数据
const labels = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
const data = {
    labels,
    datasets: [
        {
            label: "Trend of companies",
            data: [10, 12, 12, 15, 17, 17, 18, 20, 21, 22, 23],
            borderColor: "rgb(0, 81, 255)",
            backgroundColor: "rgba(104, 252, 252, 0.2)",
            tension: 0.1, // 曲线平滑度（0为完全折线）
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false, //允许图表拉伸填充容器
    plugins: {
        legend: {
            position: "bottom" as const,
        },
        title: {
            display: true,
            text: "Annual trend in the number of companies",
            align: 'start' as const, // 标题居左
            font: {
                size: 15, // 字体大小
            },
        },
    },
};

const ChartJSLineChart = () => {
    return <Line data={data} options={options} />;
};

export default function Default() {

    return (
        <Box p={3}>
            {/* 页面主名称（如果需要可以放在这里） */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight={600} mr={2}>
                    Default Dashboard
                </Typography>
            </Box>

            {/* 页面导航（Dashboard → Default） */}
            <Box display="flex" alignItems="center">
                <Typography display="flex" alignItems="center" color="black">
                    Dashboard
                    <Box component="span" display="inline-flex" alignItems="center" color="black">
                        <ArrowRightIcon />
                    </Box>
                </Typography>
                <Typography display="flex" alignItems="center" color="black" ml={1}>
                    Default
                </Typography>

                {/* RefreshIcon 推到最右侧 */}
                <Box component="span" display="inline-flex" alignItems="center" color="black" sx={{ marginLeft: "auto" }} >
                    <RefreshIcon />
                    <Box ml={2}>
                        <Button variant="contained" size="medium" color="success"> Today: July 12</Button>
                    </Box>
                </Box>

            </Box>

            <Box display="flex">
                <Box marginTop={3}>
                    {/* 以卡片的形式显示数据 */}
                    <Card variant="elevation" sx={{ width: "400px", height: "150px", marginBottom: "20px" }}>{card}</Card>
                    <Card variant="elevation" sx={{ width: "400px", height: "150px", marginBottom: "20px" }}>{card2}</Card>
                    <Card variant="elevation" sx={{ width: "400px", height: "150px", marginBottom: "20px" }}>{card3}</Card>
                    <Card variant="elevation" sx={{ width: "400px", height: "150px", marginBottom: "20px" }}>{card4}</Card>
                </Box>
                {/* 以折线图的形式显示数据 */}
                <Box marginTop={3} marginLeft={3} sx={{ width: "100%" }}>
                    <Card
                        variant="elevation"
                        sx={{
                            width: "100%", // 填充父容器
                            height: "318px",
                            marginBottom: "20px",
                            display: "flex", // 启用flex布局
                            flexDirection: "column"
                        }}
                    >
                        <Box sx={{
                            padding: 2,
                            flex: 1, // 填充剩余高度
                            minHeight: 0, // 修复flex容器溢出问题
                            width: "100%"
                        }}>
                            <ChartJSLineChart />
                        </Box>
                    </Card>

                    {/* 以饼图的形式显示数据 TODO */}
                    <Box marginTop={3}>
                    <Card
                        variant="elevation"
                        sx={{
                            width: "100%", // 填充父容器
                            height: "318px",
                            marginBottom: "20px",
                            display: "flex", // 启用flex布局
                            flexDirection: "column"
                        }}
                    >
                        <Box sx={{
                            padding: 2,
                            flex: 1, // 填充剩余高度
                            minHeight: 0, // 修复flex容器溢出问题
                            width: "100%"
                        }}>
                            <ChartJSLineChart />
                        </Box>
                    </Card>
                    </Box>
                </Box>

            </Box>

        </Box>
    );
}