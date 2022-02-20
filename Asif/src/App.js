import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!data) return alert("Please Add Item First!");
    let tasks_copy = [...tasks];
    tasks_copy.push(data);
    setTasks(tasks_copy);
    setData("");
  };

  const edit_task = (index) => {};

  const delete_task = (index) => {};
  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="form-container">
        <form className="form" onSubmit={onFormSubmit}>
          <TextField
            label="task"
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setData("")}
          >
            Clear
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
      <div className="tasks-list">
        {tasks.length == 0 ? (
          <Typography align="center" variant="h3" color="textSecondary">
            No Task Add Yet!
          </Typography>
        ) : (
          tasks.map((task, index) => (
            <div className="task-container">
              <div className="task-info">
                <p>{task}</p>
              </div>
              <div className="task-actions">
                <Button variant="outlined" color="default">
                  Edit
                </Button>
                <Button
                  onClick={() =>
                    setTasks([...tasks[index - 1], ...tasks[index + 1]])
                  }
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
