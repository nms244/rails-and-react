import './App.css';
import axios from "axios"
import requests from './Request';
import{ useState, useEffect } from "react"
import { TaskIndex } from './components/pages/TaskIndex'
import { DayTasks } from './components/pages/DayTasks'
import { NewTask } from './components/pages/NewTask'
import { NoMatch } from "./components/pages/NoMatch";
import { DefaultLayout } from './components/templates/DefaultLayout'
import { Routes, Route } from 'react-router-dom'

function App() {
  const WDAYS = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'])
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

  const today = new Date().getDay();

  const [wday, setWday] = useState(today);
  // const [dayTasks, setDayTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [arrangements, setArrangements] = useState([]);


  useEffect(() => {
    const getTasksAndArrangements = async () => {
      const task_response = await axios.get(requests.task_index);
      const arrangement_response = await axios.get(requests.arrangement_index);
      // console.log(task_response.data.tasks);
      // console.log(arrangement_response.data.arrangements);
      setTasks(task_response.data.tasks);
      setArrangements(arrangement_response.data.arrangements);
    }
    getTasksAndArrangements();
  }, [])

  // useEffect(() => {
  // }, [wday])

  const day_tasks = arrangements.map((arr) => {
    return {task: arr.task, arrangements: arr.arrangements.filter((a) => WDAYS[wday] === a.day)}
  }).flat();

  return (
    <div className="App min-h-screen">
      <DefaultLayout WDAYS={WDAYS}>
        <Routes>
          <Route path="/" element={<DayTasks day_tasks={day_tasks} /> } />
          <Route path="/index" element={<TaskIndex tasks={tasks} />} />
          <Route path="/new_task" element={<NewTask />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;