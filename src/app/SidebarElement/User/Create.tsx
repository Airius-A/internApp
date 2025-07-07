import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';


const card = (
    <React.Fragment>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                The number of the company:
            </Typography>
            <Box component="span" display="inline-flex" alignItems="center" sx={{ marginRight: "auto"}}>
                <Typography variant="h5" component="div">
                    23
                </Typography>
                <Box ml={2}>
                <Chip color="primary" 
                label="This Year" 
                size="small" 
                sx={{
                    fontWeight: 400,
                    minWidth: 80
                }}/>
                </Box>
            </Box>
        </CardContent>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
            <Card variant="outlined" sx={{ width: "200px" }}>{card}</Card>
    );
}