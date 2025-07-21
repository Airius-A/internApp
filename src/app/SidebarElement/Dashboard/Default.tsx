import { Box, Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card from "@mui/material/Card";
import React, { useState, useEffect } from "react";
import Papa from "papaparse";

// 导入拆分后的组件
import { CompanyCountCard } from "./defaultComponent/CompanyCountCard";
import { TotalEarningCard } from "./defaultComponent/TotalEarningCard";
import { CountriesCoveredCard } from "./defaultComponent/CountriesCoveredCard";
import { EmployeesCountCard } from "./defaultComponent/EmployeesCountCard";
import { CompanyTrendChart } from "./defaultComponent/CompanyTrendChart";
import { CompanyRankPieChart } from "./defaultComponent/CompanyRankPieChart";
import { CompanyRankTable } from "./defaultComponent/CompanyRankTable";
import CompanyBarChart from "./defaultComponent/CompanyBarChart";

export default function Default() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/companies.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (result) => setData(result.data),
        });
      });
  }, []);

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

      {/* 以卡片的形式显示数据 */}
      <Box display="flex">
        <Box marginTop={3}>
          <CompanyCountCard />
          <TotalEarningCard />
          <CountriesCoveredCard />
          <EmployeesCountCard />
        </Box>
        {/* 以折线图的形式显示数据 */}
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

          {/* 以饼图的数据显示数据 */}
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
      {/* 以柱状图的形式显示数据 */}
      <Box marginTop={3} gap={2}>
        <CompanyBarChart data={data} />
      </Box>
    </Box>
  );
}
