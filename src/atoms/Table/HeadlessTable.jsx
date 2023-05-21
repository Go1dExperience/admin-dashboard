import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (name, value) => ({ name, value });
const data = [
  createData("Number", 110023451003),
  createData("IP Type", "Patents"),
  createData("Applicant Name", "Company Ltd"),
  createData("Inventor Name", "Company Ltd"),
  createData("Invention Title", "Suspension Controller"),
  createData("Status", "Registered"),
  createData("Priority Date", "1996-06-10"),
  createData("Owner", "John Doe"),
];

function HeadlessTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, borderRadius: '15px' }} aria-label="custom pagination table">
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" sx={{ fontWeight: 700, width: '35%' }}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HeadlessTable;
