import { Box, Chip, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";

export const CompanyCountCard = () => (
  <Card
    variant="elevation"
    sx={{ width: "400px", height: "150px", marginBottom: "20px" }}
  >
    <CardContent>
      <Box display="flex" alignItems="center">
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          The number of the company:
        </Typography>
        <Box component="span" sx={{ marginLeft: "auto" }}>
          <Chip
            color="primary"
            label="This Year"
            size="small"
            sx={{ fontWeight: 400, minWidth: 80 }}
          />
        </Box>
      </Box>
      <Typography variant="h5" component="div">
        23
      </Typography>
      <Box mt={1}>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Compare to last Year:
        </Typography>
        <Chip
          label={
            <Box display="flex" alignItems="center">
              <Typography
                component="span"
                sx={{ fontSize: "15px", marginRight: "5px" }}
              >
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
  </Card>
);
