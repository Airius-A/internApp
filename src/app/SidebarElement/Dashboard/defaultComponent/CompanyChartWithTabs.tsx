"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab, useTheme } from "@mui/material";
import CompanyBarChart from "./CompanyBarChart";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

export default function CompanyChartWithTabs({ data }: { data: any[] }) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="chart tabs"
          variant="fullWidth"
        >
          <Tab label="Bar Chart" {...a11yProps(0)} />
          <Tab label="Line Chart" {...a11yProps(1)} />
          <Tab label="Pie Chart" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CompanyBarChart data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Bubble chart
      </TabPanel>
    </Box>
  );
}
