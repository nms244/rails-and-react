import './App.css';
import axios from "axios"
import requests from './Request';
import{ useState, useEffect } from "react"
import { TaskIndex } from './components/pages/TaskIndex'
import { DayTasks } from './components/pages/DayTasks'
import { NewTask } from './components/pages/NewTask'
import { NoMatch } from "./components/pages/NoMatch";
import { DefaultLayout } from './components/templates/DefaultLayout'
import { Routes, Route, useNavigate } from 'react-router-dom'

const WDAYS = Object.freeze(['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
const userId = 1;
const today = new Date().getDay();

function App() {



  // const navigate = useNavigate();
  const [wday, setWday] = useState(today);
  // const [dayTasks, setDayTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [arrangements, setArrangements] = useState([]);

  const onClickRearrange = async () => {
    const tasks_response = await axios.get(requests.tasks_rearrange);
    setTasks(tasks_response.data.tasks);
    // navigate('/index');
  };



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
      <DefaultLayout WDAYS={WDAYS} onClickRearrange={onClickRearrange} >
        <Routes>
          <Route path="/" element={<DayTasks userId={userId} day_tasks={day_tasks} tasks={tasks} setTasks={setTasks} /> } />
          <Route path="/index" element={<TaskIndex userId={userId} tasks={tasks} />} />
          <Route path="/new_task" element={<NewTask userId={userId} tasks={tasks} setTasks={setTasks} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;