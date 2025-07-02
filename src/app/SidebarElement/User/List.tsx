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
    InputLabel
} from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// 状态标签颜色映射
const statusColors: Record<string, 'success' | 'warning' | 'error' | 'default'> = {
    Active: "success",
    Pending: "warning",
    Banned: "error",
    Rejected: "error"
};

// Define the User type
interface User {
    id: number;
    name: string;
    phone: string;
    company: string;
    role: string;
    status: string;
    email: string;
}

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 180,
        renderCell: (params) => (
            <Box>
                <Typography fontWeight={600}>{params.value}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {params.row.email}
                </Typography>
            </Box>
        )
    },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'role', headerName: 'Role', width: 120 },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value}
                color={statusColors[params.value] || 'default'}
                size="small"
                sx={{
                    fontWeight: 500,
                    minWidth: 80
                }}
            />
        )
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 100,
        sortable: false,
        renderCell: (params) => (
            <Button
                variant="outlined"
                size="small"
                sx={{
                    textTransform: 'none',
                    borderColor: 'divider',
                    color: 'text.secondary'
                }}
                onClick={() => params.api.setRowMode(params.id, 'edit')}
            >
                Manage
            </Button>
        )
    }
];

const rows: User[] = [
    {
        id: 1,
        name: "Angelique Morse",
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "CEO",
        status: "Pending",
        email: "angelique@example.com"
    },
    {
        id: 2,
        name: "Lannister Cersei",
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "IT Administrator",
        status: "Pending",
        email: "Lannister@example.com"
    },
    {
        id: 3,
        name: 'Lannister Jaime',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "IT Administrator",
        status: "Banned",
        email: "Jaime@example.com"
    },
    {
        id: 4,
        name: 'Stark Arya',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "Content Creator",
        status: "Banned",
        email: "Stark@example.com"
    },
    {
        id: 5,
        name: 'Targaryen Daenerys',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "CTO",
        status: "Banned",
        email: "Targaryen@example.com"
    },
    {
        id: 6,
        name: 'Melisandre',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "Content Creator",
        status: "Active",
        email: "Melisandre@example.com"
    },
    {
        id: 7,
        name: 'Clifford Ferrara',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "Content Creator",
        status: "Active",
        email: "Clifford@example.com"
    },
    {
        id: 8,
        name: 'Frances Rossini',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "Content Creator",
        status: "Rejected",
        email: "Rossini@example.com"
    },
    {
        id: 9,
        name: 'Roxie Harvey',
        phone: "+46 8 123 456",
        company: "Wuckert Inc",
        role: "Content Creator",
        status: "Rejected",
        email: "Roxie@example.com"
    },
];

//筛选的选项
const options = ['CEO', 'CTO', 'IT Administrator', 'Content Creator'];
const statusOptions = ['Active', 'Pending', 'Banned', 'Rejected'];

export default function UserList() {
    const theme = useTheme();
    const [value, setValue] = React.useState<string | null>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedStatus, setSelectedStatus] = React.useState<string | null>('All');
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
    const [editedUser, setEditedUser] = React.useState<User | null>(null);

    // Filter rows based on selected filters
    const filteredRows = React.useMemo(() => {
        return rows.filter(row => {
            // Status filter
            const statusMatch = selectedStatus === 'All' || row.status === selectedStatus;

            // Role filter
            const roleMatch = !value || row.role === value;

            // Search filter (case insensitive)
            const searchMatch = !searchTerm ||
                row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                row.email.toLowerCase().includes(searchTerm.toLowerCase());

            return statusMatch && roleMatch && searchMatch;
        });
    }, [selectedStatus, value, searchTerm]);

    const handleStatusClick = (status: string) => {
        setSelectedStatus(status === selectedStatus ? 'All' : status);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleManageClick = (user: User) => {
        setSelectedUser(user);
        setEditedUser({ ...user });
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedUser(null);
        setEditedUser(null);
    };

    const handleSaveChanges = () => {
        if (editedUser) {
            // In a real app, you would update the data in your backend here
            console.log("Updated user:", editedUser);
            // Update the rows array with the edited user data
            const index = rows.findIndex(u => u.id === editedUser.id);
            if (index !== -1) {
                rows[index] = editedUser;
            }
            handleCloseModal();
        }
    };

    const handleFieldChange = (field: keyof User, value: string) => {
        if (editedUser) {
            setEditedUser({
                ...editedUser,
                [field]: value
            });
        }
    };

    return (
        <Box p={3}>
            {/* 标题和筛选栏 */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight={600}>
                    User List
                </Typography>

            </Box>

            {/* 状态导航 */}
            <Box display="flex" alignItems="center" mb={3}>
                <Typography display="flex" alignItems="center" color="black">
                    Users
                    <Box component="span" display="inline-flex" alignItems="center" color="black">
                        <ArrowRightIcon />
                    </Box>
                </Typography>
                <Typography display="flex" alignItems="center" color="black">
                    User List
                </Typography>
            </Box>

            {/* 状态筛选按钮 */}
            <Box display="flex" gap={1} mb={3} flexWrap="wrap">
                {["All", "Active", "Pending", "Banned", "Rejected"].map((item) => (
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
                        {`${item} ${item === "All" ? rows.length : rows.filter(u => u.status === item).length}`}
                    </Button>
                ))}
            </Box>

            {/* 职位筛选功能 */}
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
                    id="role-filter"
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
                            label="Filter by role"
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
                    placeholder="Search users..."
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

            {/* 数据表格 */}
            <Paper
                elevation={0}
                sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    width: '70%'
                }}
            >
                <DataGrid
                    rows={filteredRows}
                    columns={columns.map(col => {
                        if (col.field === 'action') {
                            return {
                                ...col,
                                renderCell: (params) => (
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            textTransform: 'none',
                                            borderColor: 'divider',
                                            color: 'text.secondary'
                                        }}
                                        onClick={() => handleManageClick(params.row as User)}
                                    >
                                        Manage
                                    </Button>
                                )
                            };
                        }
                        return col;
                    })}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } }
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    sx={{
                        [`& .${gridClasses.row}`]: {
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover
                            }
                        },
                        [`& .${gridClasses.columnHeaders}`]: {
                            backgroundColor: theme.palette.background.default,
                            borderBottom: `1px solid ${theme.palette.divider}`
                        },
                        [`& .${gridClasses.cell}`]: {
                            borderBottom: `1px solid ${theme.palette.divider}`
                        },
                        '& .MuiDataGrid-virtualScroller': {
                            backgroundColor: theme.palette.background.paper
                        }
                    }}
                />
            </Paper>

            {/* Edit User Modal */}
            <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm" fullWidth>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    {editedUser && (
                        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                label="Full Name"
                                value={editedUser.name}
                                onChange={(e) => handleFieldChange('name', e.target.value)}
                                fullWidth
                            />
                            <FormControl fullWidth>
                                <InputLabel>Role</InputLabel>
                                <Select
                                    value={editedUser.role}
                                    label="Role"
                                    onChange={(e) => handleFieldChange('role', e.target.value)}
                                >
                                    {options.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel>Status</InputLabel>
                                <Select
                                    value={editedUser.status}
                                    label="Status"
                                    onChange={(e) => handleFieldChange('status', e.target.value)}
                                >
                                    {statusOptions.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                label="Phone Number"
                                value={editedUser.phone}
                                onChange={(e) => handleFieldChange('phone', e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Company"
                                value={editedUser.company}
                                onChange={(e) => handleFieldChange('company', e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Email"
                                value={editedUser.email}
                                onChange={(e) => handleFieldChange('email', e.target.value)}
                                fullWidth
                                disabled
                            />
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button onClick={handleSaveChanges} variant="contained" color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}