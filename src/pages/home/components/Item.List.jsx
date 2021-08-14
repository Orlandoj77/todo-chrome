import React from "react";
import { Box, Paper, Grid } from "@material-ui/core";
import { DateRange, AccessTime } from "@material-ui/icons";

function randomColor() {
  const colors = ["#eb4034", "#B8FF33", "#33FFA8", "#7B5EBF"];

  return colors[Math.floor(Math.random() * (colors.length - 1)) + 1];
}
function ItemList({ task, onClick }) {
    return (
      <Box
        paddingLeft={0.5}
        borderRadius={4}
        style={{ backgroundColor: randomColor() }}
        onClick={() => onClick(task.id)}
      >
        <Paper style={{ minHeight: 60, padding: 10, paddingTop: 1 }}>
          <h3>{task.title}</h3>
          <Grid container justify="space-between">
            <Grid>
              <small>
                <Grid container justify="center" alignItems="center">
                  <DateRange fontSize="small" /> {task.date}
                </Grid>
              </small>
            </Grid>
            <Grid>
              <small>
                <Grid container justify="center" alignItems="center">
                  <AccessTime fontSize="small" />
                  {task.time}
                </Grid>
              </small>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  }
export default ItemList;