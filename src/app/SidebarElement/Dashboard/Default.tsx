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
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

// 示例数据 (折线图的数据)
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


// 饼图数据
// 注册必需的 ChartJS 组件
ChartJS.register(ArcElement, Tooltip, Legend);
// 示例数据

const data2 = {
    labels: ["S", "A", "B", "C"],
    datasets: [
        {
            label: "# Level Ratio",
            data: [2, 5, 10, 16],
            backgroundColor: [
                "rgb(255, 238, 0)",
                "rgb(54, 163, 235)",
                "rgb(255, 207, 86)",
                "rgb(75, 192, 192)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
            labels: {
                color: "grey", // 图例文字颜色
                font: {
                    size: 12,    // 图例文字大小

                },
            },
        },
        title: {
            display: true,
            text: "Company rank ratio",
            align: 'start',
            font: {
                size: 15,
            },
        },
        tooltip: {
            callbacks: {
                label: (context) => {
                    const label = context.label || "";
                    const value = context.raw || 0;
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${label}: ${value} (${percentage}%)`;
                },
            },
        },
    },
};

const PieChart = () => {
    return <Pie data={data2} options={options2} />;
};



function createData(
    Rank: string,
    Amount: number,
    Ratio: string,
) {
    return { Rank, Amount, Ratio };
}

const rows = [
    createData('S Rank', 2, '6%'),
    createData('A Rank', 5, '15%'),
    createData('B Rank', 10, '30%'),
    createData('C Rank', 16, '48%'),
];



export default function Default() {

    return (
        <Box p={3}>
            {/* 页面主名称 */}
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
                            width: "1150px", // 填充父容器
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
                    <Box marginTop={3} display="flex">
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
                            <Box display="flex"
                                sx={{
                                    padding: 2,
                                    flex: 1, // 填充剩余高度
                                    minHeight: 0, // 修复flex容器溢出问题
                                    width: "100%"
                                }}>
                                <PieChart />

                                {/* 饼图的表格 */}
                                {/* 调整表格容器宽度 */}
                                <Box sx={{ width: "50%", marginLeft: 20, marginTop: 7 }}>
                                    {/* 表格的名字 */}
                                    <Box >
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                color: "gray",
                                                fontWeight: "bold"
                                            }}>
                                            Company Rank Ratio Table
                                        </Typography>
                                    </Box>

                                    <TableContainer component={Paper}>
                                        <Table
                                            sx={{
                                                minWidth: 'auto', // 改为auto以适应内容
                                                '& .MuiTableCell-root': {
                                                    padding: '8px', // 减小单元格内边距
                                                    fontSize: '0.875rem' // 减小字体大小
                                                }
                                            }}
                                            aria-label="simple table"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Rank</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                    <TableCell align="right">Ratio</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.Rank}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.Rank}
                                                        </TableCell>
                                                        <TableCell align="right">{row.Amount}</TableCell>
                                                        <TableCell align="right">{row.Ratio}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}