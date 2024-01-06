import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 mb-4 rounded-md">
      <div>
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-5 w-5"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-600 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
