import React from 'react'
import TaskItem, { Task } from './TaskItem'
import { Task } from '../Types'

type Props = {
  task: Task[]
}

const TaskList:React.FC<Props>  = ({ task }) => {
  return (
    <div className="inner">
      {
        TaskList.length <= 0 ? '登録されたTODOはありません';
      <ul className="task-list">
      { TaskList.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
      </ul>
      }
    </div>
  ）
}

export default TaskItem;
