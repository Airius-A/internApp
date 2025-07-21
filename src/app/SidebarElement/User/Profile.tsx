import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Papa from "papaparse";
import React, { useState, useEffect } from "react";

import CompanyBarChart from "../Dashboard/defaultComponent/CompanyBarChart";
import { CompanyRankPieChart } from "../Dashboard/defaultComponent/CompanyRankPieChart";
import { CompanyTrendChart } from "../Dashboard/defaultComponent/CompanyTrendChart";

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

export default function BasicTabs() {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CompanyTrendChart />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CompanyRankPieChart />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CompanyBarChart data={data} />
      </CustomTabPanel>
    </Box>
  );
}
