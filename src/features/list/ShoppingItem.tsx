import { useState } from 'react';
import { Category } from '../../models/category';

interface Props {
	name: string;
	category: Category;
	notes?: string;
	isDone: boolean;
}

export default function ShoppingItem({
	name,
	category,
	notes,
	isDone,
}: Props) {
	const [done, setDone] = useState(isDone);

	const toggleDone = () => {
		setDone(!done);
	}

	const getDoneIcon = () => {
		return done ? '✅' : '❌';
	}

	return (
		<li>
			<div>
				<h3>{name}</h3>
				<p>{category}</p>
				<span>{notes}</span>
				<button onClick={toggleDone}>{getDoneIcon()}</button>
			</div>
		</li>
	);
}
