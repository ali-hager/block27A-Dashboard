import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockTransactions } from "../MockData";


export default function Transactions() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Tax ID</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTransactions.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.txId}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
