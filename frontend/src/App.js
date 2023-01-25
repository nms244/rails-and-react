import './App.css';
import axios from "axios"
import requests from './Request';
import{useState, useEffect} from "react"
import { NewTask } from './components/pages/NewTask'
import { DayTasks } from './components/pages/DayTasks'
import { TaskIndex } from './components/pages/TaskIndex'
import { DefaultLayout } from './components/templates/DefaultLayout'

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

  const today = new Date().getDay();

  const [day, setDay] = useState(today);
  const [tasks, setTasks] = useState([]);

  // const day_tasks = tasks.filter((task) => task.days === day)

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get(requests.task_index);
      console.log(response.data.tasks);
      console.log(today);
      setTasks(response.data.tasks);
    }
    getTasks();
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
