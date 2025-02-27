import { useState } from 'react';
import { Category } from '../../models/category';

interface Props {
  name: string;
  notes?: string;
  quantity?: number;
  category: Category;
  completed: boolean;
}

export default function ShoppingItem({
  name,
  notes,
  quantity,
  category,
  completed
}: Props) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const getCompletedIcon = () => {
    return isCompleted ? '✅' : '❌';
  };

  return (
    // TODO this looks so bad -- fix it asap after you select a component library
    <li style={{ listStyleType: 'none' }}>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{notes}</span>
        <span>{quantity}</span>
        <br />
        <button onClick={toggleCompleted}>{getCompletedIcon()}</button>
      </div>
    </li>
  );
}
