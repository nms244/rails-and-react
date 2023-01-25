export const TaskCard = (props) => {
  const { task } = props

  return (
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer min-w-max max-w-xs flex-auto border border-gray-400 shadow bg-white dark:bg-gray-800 rounded-md flex flex-col items-center p-2 mr-2 mb-2">
      <div className="w-64 font-medium dark:text-white">{task.name}</div>
      <div className="w-64 pt-2 text-gray-600 dark:text-gray-200 text-sm">
        {task.description}
      </div>
      <div className="w-64 pt-2 mt-auto text-gray-600 dark:text-gray-200 text-base">
        {task.done} / {task.goal} [{task.unit}]
      </div>
    </div>
  )
}
