import React, { useState } from 'react';
import './App.css';
import { Muitext } from './components/TaskForm';
// import { Taskfiled } from './components/Taskfield';

type Task = { titlr: string; description: string; priority: string };
function App() {
  const [task, setTask] = useState<any[]>([]);

  // const AddTask = (newTask: any[]) => {
  //   const updated = [...task, ...newTask];
  //   setTask(updated);
  // };

  return (
    <>
      <Muitext />
      {/* <Taskfiled AddTask={AddTask} />  */}
    </>
  );
}

export default App;
