import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card from "@mui/material/Card";
import React from "react";

// 导入拆分后的组件
import { CompanyCountCard } from "./defaultComponent/CompanyCountCard";
import { TotalEarningCard } from "./defaultComponent/TotalEarningCard";
import { CountriesCoveredCard } from "./defaultComponent/CountriesCoveredCard";
import { EmployeesCountCard } from "./defaultComponent/EmployeesCountCard";
import { CompanyTrendChart } from "./defaultComponent/CompanyTrendChart";
import { CompanyRankPieChart } from "./defaultComponent/CompanyRankPieChart";
import { CompanyRankTable } from "./defaultComponent/CompanyRankTable";

export default function Default() {
  return (
    <Box p={3}>
      {/* 页面主名称 */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight={600} mr={2}>
          Default Dashboard
        </Typography>
      </Box>

      {/* 页面导航 */}
      <Box display="flex" alignItems="center">
        <Typography display="flex" alignItems="center" color="black">
          Dashboard
          <Box
            component="span"
            display="inline-flex"
            alignItems="center"
            color="black"
          >
            <ArrowRightIcon />
          </Box>
        </Typography>
        <Typography display="flex" alignItems="center" color="black" ml={1}>
          Default
        </Typography>

        <Box
          component="span"
          display="inline-flex"
          alignItems="center"
          color="black"
          sx={{ marginLeft: "auto" }}
        >
          <RefreshIcon />
          <Box ml={2}>
            <Button variant="contained" size="medium" color="success">
              {" "}
              Today: July 12
            </Button>
          </Box>
        </Box>
      </Box>

      <Box display="flex">
        <Box marginTop={3}>
          <CompanyCountCard />
          <TotalEarningCard />
          <CountriesCoveredCard />
          <EmployeesCountCard />
        </Box>

        <Box marginTop={3} marginLeft={3} sx={{ width: "100%" }}>
          <Card
            variant="elevation"
            sx={{
              width: "1150px",
              height: "318px",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ padding: 2, flex: 1, minHeight: 0, width: "100%" }}>
              <CompanyTrendChart />
            </Box>
          </Card>

          <Box marginTop={3} display="flex">
            <Card
              variant="elevation"
              sx={{
                width: "100%",
                height: "318px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                display="flex"
                sx={{ padding: 2, flex: 1, minHeight: 0, width: "100%" }}
              >
                <CompanyRankPieChart />
                <CompanyRankTable />
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
