import { useState } from 'react';
import { Category } from '../../models/category';

interface Props {
  name: string;
  notes?: string;
  quantity?: number;
  category: Category;
  isDone: boolean;
}

export default function ShoppingItem({
  name,
  notes,
  quantity,
  category,
  isDone
}: Props) {
  const [done, setDone] = useState(isDone);

  const toggleDone = () => {
    setDone(!done);
  };

  const getDoneIcon = () => {
    return done ? '✅' : '❌';
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
        <button onClick={toggleDone}>{getDoneIcon()}</button>
      </div>
    </li>
  );
}
