// import { useEffect } from "react";
import { KeyboardEvent } from 'react';
import { useLoaderData } from "react-router-dom";
import Item from "../../models/shoppingItem";
import ShoppingItem from "./ShoppingItem";
import { useState } from 'react';

export default function ShoppingList() {
	const [newItemName, setNewItemName] = useState('');
	const items = useLoaderData() as Item[];
	console.log('loader items ',items);

	const addItem = () => {
		items.push({
			name: newItemName,
			category: 'Other',
			isDone: false,
		});
		setNewItemName('');
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			addItem();
		}
	};

	return (
		<main>
			<h2>Shopping List</h2>
			{items.length > 0 ? (
				<>
					<p>
						Shopping time! You have {items.length} items on your list.
					</p>

					<input
						type="text"
						placeholder="Add Item"
						value={newItemName}
						onChange={(e) => setNewItemName(e.target.value)}
						onKeyDown={(e) => onKeyPressHandler(e)}
					/>
					<button type="button" onClick={addItem}>Add</button>

					<ul>
						{items.map((item) => (
							<ShoppingItem
								name={item.name}
								category={item.category}
								notes={item.notes}
								isDone={item.isDone}
							/>
						))}
					</ul>
				</>
			) : (
				<p>There's nothing on the list - add an item to get shopping!</p>
			)}
		</main>
	);
}
