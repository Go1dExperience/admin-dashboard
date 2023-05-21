import * as React from "react";
import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "../Typography";
import { TimelineIcon } from "./Timeline";
import "./index.css";

export default function CustomTimeline() {
  return (
    <Box
      sx={{
        borderColor: "#112875",
        borderWidth: "1px",
        borderRadius: "15px",
        background: "#f4f7f9",
        maxWidth: '200px'
      }}
    >
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem sx={{ marginTop: '30px' }}>
          <TimelineSeparator>
            <TimelineIcon />
            <TimelineConnector
              sx={{ backgroundColor: "#60B74F", width: "1px" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body5" sx={{ fontWeight: "bold" }}>
              Filed
            </Typography>
            <Typography variant="body5">2017-06-19</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon />
            <TimelineConnector
              sx={{ backgroundColor: "#60B74F", width: "1px" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body5" sx={{ fontWeight: "bold" }}>
              Examined
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon />
            <TimelineConnector
              sx={{ backgroundColor: "#60B74F", width: "1px" }}
            />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body5" sx={{ fontWeight: "bold" }}>
              Acceptance/
              <br />
              Opposition
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineIcon />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body5" sx={{ fontWeight: "bold" }}>
              Registered
            </Typography>
            <Typography variant="body5">2021-06-19</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
