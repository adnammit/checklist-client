import { useLoaderData } from "react-router-dom";
// import { getPizzas } from "../../services/pizza";
import Item from "../../models/shoppingItem";
import ShoppingItem from "./ShoppingItem";
// import { MenuItemDto } from "./menu";

export default function ShoppingList() {
	// const pizzas = getPizzas();

	const items = useLoaderData() as Item[];
	console.log(items);
	// const pizzas = menu?.pizzas ?? [];
	// console.log(menu);

	return (
		<main className="menu">
			<h2>Shopping List</h2>
			{items.length > 0 ? (
				<>
					<p>
						Shopping time! You have {items.length} items on your list.
					</p>

					<ul>
						{items.map((item) => (
							<ShoppingItem
								name={item.name}
								category={item.category}
								isDone={item.isDone}
								// imageUrl={item.imageUrl}
								// photoName={item.photoName}
								// ingredients={item.ingredients}
								// price={item.unitPrice}
								// key={item.name}
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
