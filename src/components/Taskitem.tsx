import React from 'react';
import Task from '../Types';

type Props = {
  task: Task
}

const App:React.FC<Props>  = ({task}) => {
  return (
    <li>
        <label>
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-label">{ task.title}</span>
        </label>
        
    </li>
}

export default App;
