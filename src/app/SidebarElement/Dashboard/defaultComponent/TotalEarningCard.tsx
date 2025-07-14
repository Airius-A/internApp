import { Box, Chip, Typography } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";

export const TotalEarningCard = () => (
  <Card
    variant="elevation"
    sx={{ width: "400px", height: "150px", marginBottom: "20px" }}
  >
    <CardContent>
      <Box display="flex" alignItems="center">
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Total Earning:
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
        $ 25,396,000
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
  </Card>
);
