import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewTask from './AddNewTask';
import { BsSearch } from 'react-icons/bs';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filtering tasks based on name or date
  const filteredTasks = tasks.filter((task) => {
    return (
      task.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Router>
      <div>
        <nav className="bg-gray-200 p-4">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-new-task">Add New Task</Link>
            </li>
          </ul>
        </nav>

        {/* Search input */}
        <div className="container mx-auto max-w-md p-4">
        
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or date"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none pl-8" // Add left padding to accommodate icon
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <BsSearch className="text-gray-500" /> {/* Use the search icon here */}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/add-new-task" element={<AddNewTask addTask={addTask} />} />
          <Route
            path="/"
            element={
              <div className="container mx-auto max-w-md p-4">
                <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
                <table className="w-full table-auto bg-green-500"> 
                    <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">Name</th>
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Task Description</th>
                    </tr>
                  </thead>
                  <tbody>
                  {tasks.map((task) => (
                      <tr key={task.id}>
                        <td className="border px-4 py-2">{task.text}</td>
                        <td className="border px-4 py-2">{task.date}</td>
                        <td className="border px-4 py-2">{task.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Display filtered tasks */}
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">Filtered Tasks</h2>
                  <table className="w-full table-auto bg-green-500">
                    <tbody>
                      {filteredTasks.map((task) => (
                        <tr key={task.id}>
                          <td className="border px-4 py-2">{task.text}</td>
                          <td className="border px-4 py-2">{task.date}</td>
                          <td className="border px-4 py-2">{task.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


