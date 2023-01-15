import './App.css';
import{useState, useEffect} from "react"
import axios from "axios"
import requests from './Request';


function App() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

  const [test, setTest] = useState('test');

  useEffect(() => {
    const getTrendMovie = async () => {
      const response = await axios.get(requests.helloWorld);
      setTest(response.data.results)
    }
    getTrendMovie();
  }, [])

  return (
    <div className="App">
      tsuyoshi<br/>
      {console.log(test.text)}
    </div>
  );
}

export default App;
