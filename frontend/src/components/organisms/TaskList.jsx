import { TaskIndex } from "../pages/TaskIndex"

export const TaskList = (props) => {
  const { task } = props

  return (
        <li className="flex flex-row mb-1 mr-2">
          <div className="grid grid-cols-4 justify-between p-2 transition duration-500 shadow border-4 border-white hover:border-4 hover:border-green-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md ">
            <div className="col-span-3 pl-1">
              <div className="mb-2 break-all font-semibold">{task.name}</div>
              <div className="break-all text-sm text-left text-gray-600 dark:text-gray-200">
              {task.description}
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center text-gray-600 dark:text-gray-200">
              {task.done} / {task.goal} <br /> {task.unit}
            </div>
          </div>
        </li>
  )
}
