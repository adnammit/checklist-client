// import { formatCurrency } from "../../utils/helpers";

import { Category } from '../../models/category';

interface Props {
	name: string;
	category: Category;
	isDone: boolean;
	// photoName: string;
	// imageUrl: string;
	// ingredients: string[];
	// price: number;
}

export default function ShoppingItem({
	name,
	category,
	isDone: done = false,
	// imageUrl,
	// ingredients,
	// price,
}: Props) {
	// const getClass = () => {
	// 	return done ? "" : "";
	// };

	return (
		// <li className={`pizza ${getClass()}`}>
		<li>
			{/* <img src={imageUrl} alt={name} /> */}
			<div>
				<h3>{name}</h3>
				<p>{category}</p>
				<span>{ done ? '✅' : '❌' }</span>

				{/* <p>{ingredients}</p> */}
				{/* <span>{soldOut ? "SOLD OUT" : price}</span>
				<div>{!soldOut ? <p>{formatCurrency(price)}</p> : <p>Sold out</p>}</div> */}
			</div>
		</li>
	);
}
