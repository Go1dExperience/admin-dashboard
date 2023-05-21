import { Box } from "@mui/material";
import Typography from "../../atoms/Typography";
import React from "react";
import { Chart } from "../../atoms/Chart";

export default function ChartSummary(props) {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
			marginBottom={"50px"}
    >
      <Chart height={300} />
      <Typography
        variant="caption7"
        sx={{ fontWeight: 700, color: "#1E2E7F", whiteSpace: "nowrap" }}
      >
        Total: 50
      </Typography>
    </Box>
  );
}
