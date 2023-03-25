import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const onDeleteTask = (index) => setTasks(tasks.filter((task, i) => i !== index));
  const onTaskFormSubmit = (newTask) => setTasks([...tasks, newTask]);
  const onSelectCategory = (category) => setCategory(category);
  const filteredTasks = tasks.filter((task) => (category === "All") ? true : task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={onSelectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}

export default App;
