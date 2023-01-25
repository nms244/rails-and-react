import { TaskCard } from '../organisms/TaskCard'

export const DayTasks = (props) => {
  const { day_tasks } = props

  return (
    <main className="w-full flex flex-wrap m-4 mb-16">
      {day_tasks.map((task_and_arrangement) => (
        <TaskCard key={task_and_arrangement.task.id} task={task_and_arrangement.task} arrangement={task_and_arrangement.arrangements[0]} />
      ))}
    </main>
  )
}
