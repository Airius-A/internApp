import {
    Box,
    Typography,
} from "@mui/material";



export default function Company() {

    return (
        <Box>
            <Typography variant="h5">Company Info</Typography>
            {/* 这里是公司信息的具体内容 */}
            <Typography>Company Name: ABC Corp</Typography>
        </Box>
    );
}