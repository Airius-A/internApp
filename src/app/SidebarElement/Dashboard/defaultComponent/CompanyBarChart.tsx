"use client";

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  FormGroup,
  FormControlLabel,
  Slider,
  Stack,
  SelectChangeEvent,
  Grid,
} from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

interface CompanyBarChartProps {
  data: any[];
}

export default function CompanyBarChart({ data }: CompanyBarChartProps) {
  const [dimension, setDimension] = React.useState("level");
  const [selectedLevels, setSelectedLevels] = React.useState<number[]>([]);
  const [regions, setRegions] = React.useState<string[]>([]);
  const [cities, setCities] = React.useState<string[]>([]);
  const [foundedYearRange, setFoundedYearRange] = React.useState<number[]>([]);
  const [revenueRange, setRevenueRange] = React.useState<number[]>([]);
  const [employeeRange, setEmployeeRange] = React.useState<number[]>([]);

  // 计算唯一值
  const uniqueCountries = useMemo(() => {
    const countries = data.map((item) => item.country);
    return Array.from(new Set(countries)).filter(Boolean);
  }, [data]);

  const uniqueCities = useMemo(() => {
    const cities = data.map((item) => item.city);
    return Array.from(new Set(cities)).filter(Boolean);
  }, [data]);

  const foundedYear = useMemo(() => {
    const years = data.map((d) => d.founded_year).filter(Boolean);
    const min = Math.min(...years);
    const max = Math.max(...years);
    return [min, max];
  }, [data]);

  const revenue = useMemo(() => {
    const annualRevenue = data.map((d) => d.annual_revenue).filter(Boolean);
    const min = Math.min(...annualRevenue);
    const max = Math.max(...annualRevenue);
    return [min, max];
  }, [data]);

  const employees = useMemo(() => {
    const no_employee = data.map((d) => d.employees).filter(Boolean);
    const min = Math.min(...no_employee);
    const max = Math.max(...no_employee);
    return [min, max];
  }, [data]);

  // 初始化范围
  React.useEffect(() => {
    if (foundedYear.length === 2) {
      setFoundedYearRange(foundedYear);
    }
    if (revenue.length === 2) {
      setRevenueRange(revenue);
    }
    if (employees.length === 2) {
      setEmployeeRange(employees);
    }
  }, [foundedYear, revenue, employees]);

  // 处理函数
  const handleLevelChange = (level: number) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((l) => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  const handleRegionChange = (event: SelectChangeEvent<typeof regions>) => {
    const {
      target: { value },
    } = event;
    setRegions(typeof value === "string" ? value.split(",") : value);
  };

  const handleCityChange = (event: SelectChangeEvent<typeof cities>) => {
    const {
      target: { value },
    } = event;
    setCities(typeof value === "string" ? value.split(",") : value);
  };

  const handleYearRangeChange = (event: Event, newValue: number | number[]) => {
    setFoundedYearRange(newValue as number[]);
  };

  const handleRevenueRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setRevenueRange(newValue as number[]);
  };

  const handleEmployeeRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setEmployeeRange(newValue as number[]);
  };

  // 过滤数据
  const filteredData = useMemo(() => {
    return data.filter(
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
  }, [
    data,
    selectedLevels,
    regions,
    cities,
    foundedYearRange,
    revenueRange,
    employeeRange,
  ]);

  // 聚合数据：按维度统计数量
  const grouped = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      const key = item[dimension];
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [filteredData, dimension]);

  const chartData = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: `The number of company (based on ${dimension})`,
        data: Object.values(grouped),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: `Company Bar chart (based on ${dimension})`,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
  };

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Grid container spacing={2}>
      {/* 左侧图表区域 - 占3/4宽度 */}
      <Box width={"1000px"}>
        <Box
          sx={{
            height: "600px",
            backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
            p: 2,
            borderRadius: 1,
          }}
        >
          <Bar data={chartData} options={options} />
        </Box>
      </Box>

      {/* 右侧过滤器区域 - 占1/4宽度 */}
      <Box width={"557px"}>
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            p: 2,
            borderRadius: 2,
            height: "600px",
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
              <option value="country">Country</option>
              <option value="city">City</option>
            </select>
          </Box>
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
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{foundedYearRange[0] || 0}</Typography>
                <Slider
                  min={foundedYear[0]}
                  max={foundedYear[1]}
                  value={foundedYearRange}
                  onChange={handleYearRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{foundedYearRange[1] || 0}</Typography>
              </Stack>
            </Box>

            {/* 年收入筛选 */}
            <Typography variant="body1">Annual Revenue Selection</Typography>
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{revenueRange[0] || 0}</Typography>
                <Slider
                  min={revenue[0]}
                  max={revenue[1]}
                  value={revenueRange}
                  onChange={handleRevenueRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{revenueRange[1] || 0}</Typography>
              </Stack>
            </Box>

            {/* 员工范围的筛选 */}
            <Typography variant="body1">Employee range Selection</Typography>
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", mb: 1 }}
              >
                <Typography>{employeeRange[0] || 0}</Typography>
                <Slider
                  min={employees[0]}
                  max={employees[1]}
                  value={employeeRange}
                  onChange={handleEmployeeRangeChange}
                  valueLabelDisplay="auto"
                />
                <Typography>{employeeRange[1] || 0}</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
