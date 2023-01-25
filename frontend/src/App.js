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

  const [day, setDay] = useState(today);
  const [tasks, setTasks] = useState([]);
  const [arrangements, setArrangements] = useState([]);

  const day_arrangements = arrangements.filter((arr) => WDAYS.arr.day === day)
  console.log(day);
  console.log(day_arrangements);

  useEffect(() => {
    const getTasksAndArrangements = async () => {
      const task_response = await axios.get(requests.task_index);
      const arrangement_response = await axios.get(requests.arrangement_index);
      console.log(task_response.data.tasks);
      console.log(arrangement_response.data.arrangements);
      setTasks(task_response.data.tasks);
      setArrangements(arrangement_response.data.arrangements);
    }
    getTasksAndArrangements();
  }, [])

  return (
    <div className="App min-h-screen">
      <DefaultLayout>
        {/* <DayTasks today_tasks={day_tasks} /> */}
        <TaskIndex tasks={tasks} />
        {/* <NewTask /> */}
      </DefaultLayout>
    </div>
  );
}

export default App;
