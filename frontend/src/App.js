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

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTrendMovie = async () => {
      const response = await axios.get(requests.task_index);
      console.log(response.data.tasks);
      setTasks(response.data.tasks);
    }
    getTrendMovie();
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
