import { TaskCard } from '../organisms/TaskCard'

export const DayTasks = (props) => {
  const { today_tasks } = props

  return (
    <main className="w-full flex flex-wrap m-4 mb-16">
      {today_tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  )
}
