import React, { useState } from "react";

import List from "./components/List";

function Home() {
  const [tasks, setTasks] = useState([]);

  return <List tasks={tasks} />;
}

export default Home;