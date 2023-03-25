import React, { useState } from "react";

function NewTaskForm(props) {
  const [newTask, setNewTask] = useState({ text: "", category: "Code" });

  function handleTaskChange(event) {
    setNewTask({ ...newTask, text: event.target.value });
  }

  function handleCategoryChange(event) {
    setNewTask({ ...newTask, category: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: "Code" });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleTaskChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleCategoryChange}>
          {props.categories.filter((category) => category !== "All").map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
