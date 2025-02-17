// const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getShopping() {
	// const res = await fetch(`${API_URL}/menu`);

	// // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
	// if (!res.ok) throw Error("Failed getting menu");

	// const { data } = await res.json();

	const data: unknown[] = [
		{
			id: '1',
			name: 'Tomato',
			category: 'Produce',
			isDone: false,
		},
		{
			id: '2',
			name: 'Tofu',
			category: 'Produce',
			isDone: true,
		},
		{
			id: '3',
			name: 'Bread',
			category: 'Bakery',
			notes: 'Whole grain',
			isDone: true,
		},
		{
			id: '4',
			name: 'Beer',
			category: 'Beverage',
			isDone: false,
		},
		{
			id: '5',
			name: 'Chips',
			category: 'Snacks',
			notes: `Don't get the healthy kind, they taste like cardboard`,
			isDone: true,
		},
	];
	console.log('data is ', data);
	return Promise.resolve(data);
}

// export async function getOrder(id: string) {
// 	const res = await fetch(`${API_URL}/order/${id}`);
// 	if (!res.ok) throw Error(`Couldn't find order #${id}`);

// 	const { data } = await res.json();
// 	return data;
// }

// export async function createOrder(newOrder: unknown) {
// 	try {
// 		const res = await fetch(`${API_URL}/order`, {
// 			method: "POST",
// 			body: JSON.stringify(newOrder),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		if (!res.ok) throw Error();
// 		const { data } = await res.json();
// 		return data;
// 	} catch {
// 		throw Error("Failed creating your order");
// 	}
// }

// export async function updateOrder(id: string, updateObj: unknown) {
// 	try {
// 		const res = await fetch(`${API_URL}/order/${id}`, {
// 			method: "PATCH",
// 			body: JSON.stringify(updateObj),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});

// 		if (!res.ok) throw Error();
// 		// We don't need the data, so we don't return anything
// 	} catch (err) {
// 		throw Error("Failed updating your order");
// 	}
// }
