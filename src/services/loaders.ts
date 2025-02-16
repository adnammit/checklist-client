import { getShopping } from "./shoppingAPI";

export async function shoppingLoader() {
	const items = await getShopping();
	console.log("items in loader", items);
	return items;
}
