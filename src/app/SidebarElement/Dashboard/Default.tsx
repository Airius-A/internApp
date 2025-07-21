import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
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
import Tooltip from "@mui/material/Tooltip";

//tab组件相关代码
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

  // tab的代码
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              color: "black",
              "&.Mui-selected": {
                color: "black",
                fontWeight: "bold",
              },
            },
          }}
        >
          <Tooltip title="Company Bar Chart Analysis (with filter)">
            <Tab label="Company Bar Chart" {...a11yProps(0)} />
          </Tooltip>
          <Tooltip title="Company Bubble Chart Analysis">
            <Tab label="Company Bubble Chart" {...a11yProps(1)} />
          </Tooltip>
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Box display={"flex"} alignItems={"center"}>
            {/* 以柱状图的形式显示数据 */}
            <CompanyBarChart data={data} />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* 以泡泡图的形式显示数据 */}
          {/* Todo */}
          <CompanyRankPieChart />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
