import { TaskList } from '../organisms/TaskList'
import { TaskShow } from '../organisms/TaskShow'

export const TaskIndex = (props) => {
  const { tasks } = props

  return (
    <main className="flex mb-16">
      <ul className="flex flex-col min-w-[320px] max-w-xl w-full mr-auto">
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
      <TaskShow tasks={tasks} />
    </main>
  )
}
