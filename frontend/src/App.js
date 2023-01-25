import './App.css';
import axios from "axios"
import requests from './Request';
import{useState, useEffect} from "react"
import { NewTask } from './components/pages/NewTask'
import { DayTasks } from './components/pages/DayTasks'
import { TaskIndex } from './components/pages/TaskIndex'
import { DefaultLayout } from './components/templates/DefaultLayout'

function App() {
  const WDAYS = Object.freeze({sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6})
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

  const today = new Date().getDay();

  const [wday, setWday] = useState(today);
  const [tasks, setTasks] = useState([]);
  const [arrangements, setArrangements] = useState([]);


  // console.log('day: '+day);


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

  const day_tasks = arrangements.map((arr) => {
    return {task: arr.task, arrangements: arr.arrangements.filter((a) => WDAYS[a.day] === wday)}
  }).flat();

  return (
    <div className="App min-h-screen">
      <DefaultLayout>
        <DayTasks  day_tasks={day_tasks} />
        {/* <TaskIndex tasks={tasks} /> */}
        {/* <NewTask /> */}
      </DefaultLayout>
    </div>
  );
}

export default App;
