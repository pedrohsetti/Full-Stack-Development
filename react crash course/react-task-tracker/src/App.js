// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tasks from './components/Tasks.js';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask.js'
import About from './components/About.js'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    
  ]);

  // Get Tasks
  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    if (!res.ok) {
      throw new Error('Failed to fetch tasks')
    }
    const data = await res.json()
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch task with id ${id}`)
    }
    const data = await res.json()
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    // console.log(task);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    //console.log('delete', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  
  }
  
  // Toggle Reminder
  const toggleReminder = async (id) => {
    // console.log(id);
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? data : task
      )
    );
  };

  return (
    <Router>
    <div className="container">
      <Header title="My Task Tracker" onAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {showAddTask && <AddTask onAdd={addTask} showAddTask={showAddTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <p>No tasks to display</p>
              )}
            </>
          }
        />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
