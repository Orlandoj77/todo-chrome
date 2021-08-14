import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import List from "./components/List";

function Home() {
  const [tasks, setTasks] = useState([]);

  return (
    <div class="container">
      <List tasks={tasks} />
      <Fab
        color="primary"
        style={{ position: "absolute", bottom: "30px", right: "10px" }}>
        <Add />
      </Fab>
    </div>
  );
}

export default Home;
