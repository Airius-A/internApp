import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Typography } from "@mui/material";

export default function ContinuousSlider() {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 400 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <Typography>1960</Typography>
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <Typography>2000</Typography>
      </Stack>
    </Box>
  );
}
