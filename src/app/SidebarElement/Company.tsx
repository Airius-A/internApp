import {
    Box,
    Typography,
    Chip,
    Button,
    Paper,
    useTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Collapse,
    IconButton,
    TableFooter,
    TablePagination
} from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


// 状态标签颜色映射
const statusColors: Record<string, 'success' | 'error' | 'default'> = {
    Profitable: "success",
    Loss: "error",
};

// define company type
interface Company {
    name: string;
    level: string;
    country: string;
    efficiency: number;
    city: string;
    foundedYear: number;
    annualRevenue: number;
    employees: number;
}

// 创建 Dummy Data
const rows: Company[] = [
    {
        name: "Quantum Innovations",
        level: "A",
        country: "United States",
        efficiency: 1.32,
        city: "San Francisco",
        foundedYear: 2015,
        annualRevenue: 9200000,
        employees: 900
    },
    {
        name: "Nexus Technologies",
        level: "B",
        country: "Germany",
        efficiency: 0.75,
        city: "Berlin",
        foundedYear: 2010,
        annualRevenue: 7500000,
        employees: 1000
    },
    {
        name: "Solaris Energy",
        level: "A",
        country: "Japan",
        efficiency: 1.18,
        city: "Tokyo",
        foundedYear: 2008,
        annualRevenue: 8800000,
        employees: 1000
    },
    {
        name: "Alpine Logistics",
        level: "C",
        country: "Switzerland",
        efficiency: 0.65,
        city: "Zurich",
        foundedYear: 2012,
        annualRevenue: 6500000,
        employees: 1000
    },
    {
        name: "Urban Foods",
        level: "B",
        country: "Canada",
        efficiency: 0.78,
        city: "Toronto",
        foundedYear: 2005,
        annualRevenue: 7800000,
        employees: 1000
    },
    {
        name: "Marine Shipping Co.",
        level: "A",
        country: "Singapore",
        efficiency: 0.95,
        city: "Singapore",
        foundedYear: 2000,
        annualRevenue: 9500000,
        employees: 1000
    },
    {
        name: "Digital Horizon",
        level: "S",
        country: "China",
        efficiency: 1.2,
        city: "Shenzhen",
        foundedYear: 2018,
        annualRevenue: 12000000,
        employees: 1000
    },
    {
        name: "Green Future",
        level: "B",
        country: "Sweden",
        efficiency: 0.72,
        city: "Stockholm",
        foundedYear: 2007,
        annualRevenue: 7200000,
        employees: 1000
    },
    {
        name: "Desert Solar",
        level: "C",
        country: "UAE",
        efficiency: 0.58,
        city: "Dubai",
        foundedYear: 2014,
        annualRevenue: 5800000,
        employees: 1000
    },
    {
        name: "Oceanic Research",
        level: "A",
        country: "Australia",
        efficiency: 0.85,
        city: "Sydney",
        foundedYear: 2003,
        annualRevenue: 8500000,
        employees: 1000
    }
];

// 创建筛选选项
const options = ['S', 'A', 'B', 'C'];

// 可折叠行组件
const Row = ({ row }: { row: Company }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.level}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell align="right" sx={{
                    color: row.efficiency > 1 ? 'success.main' : 'error.main',
                    fontWeight: 'bold'
                }}>
                    {row.efficiency.toFixed(2)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Detailed information
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>City</TableCell>
                                        <TableCell align="right">Founded Year</TableCell>
                                        <TableCell align="right">Annual Revenue</TableCell>
                                        <TableCell align="right">Employee</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.city}
                                        </TableCell>
                                        <TableCell align="right">{row.foundedYear}</TableCell>
                                        <TableCell align="right">{row.annualRevenue.toLocaleString()}</TableCell>
                                        <TableCell align="right">{row.employees.toLocaleString()}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default function Company() {
    const theme = useTheme();
    const [selectedStatus, setSelectedStatus] = React.useState<string | null>('All');
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');

    // 分页状态
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleStatusClick = (status: string) => {
        setSelectedStatus(status === selectedStatus ? 'All' : status);
        setPage(0); // 重置页码当筛选条件变化时
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setPage(0); // 重置页码当筛选条件变化时
    };

    // 过滤数据
    const filteredRows = rows.filter(row => {
        // 状态过滤
        const statusFilter = selectedStatus === 'All' ||
            (selectedStatus === 'Profitable' && row.efficiency > 1) ||
            (selectedStatus === 'Loss' && row.efficiency <= 1);

        // 等级过滤
        const levelFilter = !value || row.level === value;

        // 搜索过滤
        const searchFilter = !searchTerm ||
            row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            row.city.toLowerCase().includes(searchTerm.toLowerCase());

        return statusFilter && levelFilter && searchFilter;
    });


    // 分页处理
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // 计算当前页显示的数据
    const paginatedRows = filteredRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    // 避免空数据时分页显示问题
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

    return (
        <Box p={3}>
            {/* 标题和筛选栏 */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight={600}>
                    Company Analysis
                </Typography>
            </Box>

            {/* 状态导航 */}
            <Box display="flex" alignItems="center" mb={3}>
                <Typography display="flex" alignItems="center" color="black">
                    Company
                    <Box component="span" display="inline-flex" alignItems="center" color="black">
                    </Box>
                </Typography>
            </Box>

            {/* 状态筛选按钮 */}
            <Box display="flex" gap={1} mb={3} flexWrap="wrap">
                {["All", "Profitable", "Loss"].map((item) => (
                    <Button
                        key={item}
                        variant={item === selectedStatus ? "contained" : "outlined"}
                        color={statusColors[item] || "primary"}
                        onClick={() => handleStatusClick(item)}
                        sx={{
                            borderRadius: 1,
                            fontWeight: 500,
                            textTransform: 'none',
                            minWidth: 100,
                            ...(item === selectedStatus && item === 'All' && {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText
                            })
                        }}
                    >
                        {`${item} ${item === "All"
                            ? rows.length
                            : rows.filter(u => item === "Profitable" ? u.efficiency > 1 : u.efficiency <= 1).length
                            }`}
                    </Button>
                ))}
            </Box>

            {/* 公司等级筛选功能 */}
            <Box display="flex" gap={2} mb={3} flexWrap="wrap" alignItems="center">
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="rank-filter"
                    options={options}
                    sx={{
                        width: 250,
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Filter by company level"
                            variant="outlined"
                        />
                    )}
                    clearOnEscape
                    clearOnBlur
                />

                {/* 搜索框 */}
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search company..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                        sx: {
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                            width: 400,
                            height: 55
                        }
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.main,
                            },
                        }
                    }}
                />
            </Box>

            {/* 可折叠表格 */}
            <TableContainer component={Paper} sx={{ borderRadius: 2,  width: "70%"}}>
                <Table aria-label="collapsible table">
                    <TableHead sx={{ backgroundColor: theme.palette.background.default }}>
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Level</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Region</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Efficiency</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedRows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={filteredRows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sx={{
                                    '& .MuiTablePagination-selectLabel': {
                                        marginTop: 'auto',
                                        marginBottom: 'auto'
                                    },
                                    '& .MuiTablePagination-displayedRows': {
                                        marginTop: 'auto',
                                        marginBottom: 'auto'
                                    }
                                }}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );
}