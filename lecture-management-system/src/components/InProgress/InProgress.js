import React, { useState } from "react";
import { Tabs, Tab, Button, Checkbox } from "@material-ui/core";
import "./InProgress.css";

const InProgress = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "ACS 2022-2024", completed: false },
    { id: 2, text: "ACS 2023 - 2025", completed: false },
    { id: 3, text: "ACS 2024 - 2026", completed: false },
  ]);

  const [value, setValue] = useState(0);

  const handleEdit = (id) => {
    console.log(`Edit item with ID ${id}`);
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="In Progress" />
        <Tab label="Completed" />
        <Tab label="Approved" />
      </Tabs>

      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => handleComplete(todo.id)}
          />
          <p>{todo.text}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleEdit(todo.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleComplete(todo.id)}
          >
            Complete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default InProgress;
