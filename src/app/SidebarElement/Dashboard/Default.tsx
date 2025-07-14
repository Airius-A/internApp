import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import Card from "@mui/material/Card";
import React from "react";

import { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
import CompanyBarChart from "./defaultComponent/CompanyBarChart";
import { SelectChangeEvent } from "@mui/material/Select";

// 导入拆分后的组件
import { CompanyCountCard } from "./defaultComponent/CompanyCountCard";
import { TotalEarningCard } from "./defaultComponent/TotalEarningCard";
import { CountriesCoveredCard } from "./defaultComponent/CountriesCoveredCard";
import { EmployeesCountCard } from "./defaultComponent/EmployeesCountCard";
import { CompanyTrendChart } from "./defaultComponent/CompanyTrendChart";
import { CompanyRankPieChart } from "./defaultComponent/CompanyRankPieChart";
import { CompanyRankTable } from "./defaultComponent/CompanyRankTable";

export default function Default() {
  // 导入csv的数据
  const [data, setData] = useState<any[]>([]);
  const [dimension, setDimension] = useState("level");
  // 公司等级过滤的渲染
  const [selectedLevels, setSelectedLevels] = useState([]);
  const handleLevelChange = (level: number) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((l) => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };
  // 公司国家过滤的渲染
  const [regions, setRegions] = React.useState<string[]>([]);
  const uniqueCountries = useMemo(() => {
    const countries = data.map((item) => item.country);
    return Array.from(new Set(countries)).filter(Boolean);
  }, [data]);

  const handleRegionChange = (event: SelectChangeEvent<typeof regions>) => {
    const {
      target: { value },
    } = event;
    setRegions(typeof value === "string" ? value.split(",") : value);
  };

  // 公司城市过滤的渲染
  const [cities, setCities] = React.useState<string[]>([]);
  const uniqueCities = useMemo(() => {
    const cities = data.map((item) => item.city);
    return Array.from(new Set(cities)).filter(Boolean);
  }, [data]);

  const handleCityChange = (event: SelectChangeEvent<typeof regions>) => {
    const {
      target: { value },
    } = event;
    setCities(typeof value === "string" ? value.split(",") : value);
  };
  //过滤公司的创始年份
  const foundedYear = useMemo(() => {
    const years = data.map((d) => d.founded_year).filter(Boolean);
    const min = Math.min(...years);
    const max = Math.max(...years);
    return [min, max];
  }, [data]);

  const [foundedYearRange, setFoundedYearRange] =
    useState<number[]>(foundedYear);

  const handleYearRangeChange = (event: Event, newValue: number | number[]) => {
    setFoundedYearRange(newValue as number[]);
  };

  //过滤公司的营收利润
  const revenue = useMemo(() => {
    const annualRevenue = data.map((d) => d.annual_revenue).filter(Boolean);
    const min = Math.min(...annualRevenue);
    const max = Math.max(...annualRevenue);
    return [min, max];
  }, [data]);

  const [revenueRange, setRevenueRange] = useState<number[]>(revenue);

  const handleRevenueRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setRevenueRange(newValue as number[]);
  };

  //过滤公司的营收利润
  const employees = useMemo(() => {
    const no_employee = data.map((d) => d.employees).filter(Boolean);
    const min = Math.min(...no_employee);
    const max = Math.max(...no_employee);
    return [min, max];
  }, [data]);

  const [employeeRange, setemployeeRange] = useState<number[]>(employees);

  const handleEmployeeRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setemployeeRange(newValue as number[]);
  };

  //过滤数据
  const filteredData = data.filter(
    (d) =>
      (selectedLevels.length === 0 || selectedLevels.includes(d.level)) &&
      (regions.length === 0 || regions.includes(d.country)) &&
      (cities.length === 0 || cities.includes(d.city)) &&
      d.founded_year >= foundedYearRange[0] &&
      d.founded_year <= foundedYearRange[1] &&
      d.annual_revenue >= revenueRange[0] &&
      d.annual_revenue <= revenueRange[1] &&
      d.employees >= employeeRange[0] &&
      d.employees <= employeeRange[1]
  );

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
      <Box marginTop={3} display="flex" gap={2}>
        {/* 左侧条形图 */}
        <Box flex={3} sx={{ backgroundColor: "#fff", padding: 2, width: 50 }}>
          <CompanyBarChart data={filteredData} dimension={dimension} />
        </Box>

        {/* 右侧过滤器区域 */}
        <Box
          flex={1}
          sx={{
            backgroundColor: "#f9f9f9",
            padding: 2,
            borderRadius: 2,
            // width: "50%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Dimension selection
          </Typography>
          <Box mb={2}>
            <Typography variant="body1">Select dimension</Typography>
            <select
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            >
              <option value="level">Company level</option>
              <option value="country">Contry</option>
              <option value="city">City</option>
            </select>
          </Box>
          {/* 将来可以在这里加：国家、城市、创始日期范围、收入范围、员工范围 */}
          <Box mb={2}>
            <Typography variant="h6">Filtration</Typography>
            {/* 公司等级 */}
            <Typography variant="body1">Company level</Typography>
            <Box display="flex">
              <FormGroup row>
                {[1, 2, 3, 4].map((level) => (
                  <FormControlLabel
                    key={level}
                    control={
                      <Checkbox
                        checked={selectedLevels.includes(level)}
                        onChange={() => handleLevelChange(level)}
                        sx={{ color: "black" }}
                      />
                    }
                    label={level.toString()}
                  />
                ))}
              </FormGroup>
            </Box>
            {/* 公司国家筛选 */}
            <Typography variant="body1">Country Selection</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ backgroundColor: "black" }}>
                <InputLabel id="region-select-label" sx={{ color: "white" }}>
                  Country
                </InputLabel>
                <Select
                  labelId="region-select-label"
                  id="region-multi-select"
                  multiple
                  value={regions}
                  onChange={handleRegionChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {uniqueCountries.map((country) => (
                    <MenuItem key={country} value={country}>
                      <Checkbox checked={regions.indexOf(country) > -1} />
                      <ListItemText primary={country} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* 公司城市筛选 */}
            <Typography variant="body1">City Selection</Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ backgroundColor: "black" }}>
                <InputLabel id="city-select-label" sx={{ color: "white" }}>
                  City
                </InputLabel>
                <Select
                  labelId="city-select-label"
                  id="city-multi-select"
                  multiple
                  value={cities}
                  onChange={handleCityChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {uniqueCities.map((city) => (
                    <MenuItem key={city} value={city}>
                      <Checkbox checked={cities.indexOf(city) > -1} />
                      <ListItemText primary={city} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* 创始日期筛选 */}
            <Typography variant="body1">Founded Year Selection</Typography>
            <Box sx={{ width: 400 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{foundedYearRange[0]}</Typography>
                <Slider
                  min={foundedYear[0]}
                  max={foundedYear[1]}
                  value={foundedYearRange}
                  onChange={handleYearRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{foundedYearRange[1]}</Typography>
              </Stack>
            </Box>

            {/* 年收入筛选 */}
            <Typography variant="body1">Annual Revenue Selection</Typography>
            <Box sx={{ width: 400 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{revenueRange[0]}</Typography>
                <Slider
                  min={revenue[0]}
                  max={revenue[1]}
                  value={revenueRange}
                  onChange={handleRevenueRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{revenueRange[1]}</Typography>
              </Stack>
            </Box>

            {/* 员工范围的筛选 */}
            <Typography variant="body1">Empolyee range Selection</Typography>
            <Box sx={{ width: 400 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{employeeRange[0]}</Typography>
                <Slider
                  min={employees[0]}
                  max={employees[1]}
                  value={employeeRange}
                  onChange={handleEmployeeRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{employeeRange[1]}</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
