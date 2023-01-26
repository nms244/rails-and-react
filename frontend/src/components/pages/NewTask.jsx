import { useState } from "react";
import axios from "axios";
import requests from '../../Request';

export const NewTask = (props) => {
  const { userId, tasks, setTasks } = props
  const defaultTaskParams = {
    name: '',
    description: '',
    goal: '',
    unit: '',
    user_id: userId
  }

  const [data, setData] = useState(defaultTaskParams);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      name: data.name,
      description: data.description,
      goal: data.goal,
      unit: data.unit,
      user_id: userId
    };
    axios.post(requests.task, taskData).then((response) => {
      console.log(response.status);
      console.log(response.data.task);
    });
  };

  return (
    <main className="mb-16">
      <form onSubmit={handleSubmit} className="flex m-16">
        <div className="flex flex-col w-full px-5 py-5 bg-white rounded-lg ring-gray-200 ring-2 shadow-2xl">
          <div className="mb-auto text-3 font-light text-center text-gray-800">
            タスクの新規作成
          </div>
          <div className="mb-3 text-3xl font-light text-center text-gray-800">
            <input
              type="text"
              name="name"
              value={data.email}
              placeholder='"TOEICの単語暗記"'
              onChange={handleChange}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-3 text-3xl font-light text-center text-gray-800">
            <textarea
              rows="5"
              cols="30"
              name="description"
              value={data.description}
              placeholder='"TOEICの単語帳を1周間で1000語覚える。"'
              onChange={handleChange}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="flex mb-3 text-2xl font-light text-center text-gray-800">
            <div className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">0</div>
            <span className="mx-2">/</span>
            <input
              type="text"
              name="goal"
              value={data.goal}
              placeholder='"200"'
              onChange={handleChange}
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <input
              type="text"
              name="unit"
              value={data.unit}
              placeholder='"単語"'
              onChange={handleChange}
              className="ml-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="mt-auto py-2 px-4 bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Send
          </button>
        </div>
      </form>
    </main>
  )
}
