import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function createData(Rank: string, Amount: number, Ratio: string) {
  return { Rank, Amount, Ratio };
}

const rows = [
  createData("S", 2, "6%"),
  createData("A", 5, "15%"),
  createData("B", 10, "30%"),
  createData("C", 16, "48%"),
];

export const CompanyRankTable = () => (
  <Box sx={{ width: "50%", marginLeft: 20, marginTop: 7 }}>
    <Typography sx={{ fontSize: "15px", color: "gray", fontWeight: "bold" }}>
      Company Rank Ratio Table
    </Typography>
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: "auto",
          "& .MuiTableCell-root": {
            padding: "8px",
            fontSize: "0.875rem",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Rank}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Rank}
              </TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              <TableCell align="right">{row.Ratio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
