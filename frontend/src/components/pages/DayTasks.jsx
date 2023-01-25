import { TaskCard } from '../organisms/TaskCard'

export const DayTasks = (props) => {
  const { day_tasks } = props

  return (
    <main className="w-full flex flex-wrap m-4 mb-16">
      {day_tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </main>
  )
}
