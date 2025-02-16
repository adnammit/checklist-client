import { createBrowserRouter } from "react-router-dom";
import { shoppingLoader } from "./loaders";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import Home from "../ui/Home";
import User from "../features/user/User";
import ShoppingList from '../features/list/ShoppingList';
// import Menu from "../features/menu/Menu";
// import Cart from "../features/cart/Cart";
// import Order from "../features/order/Order";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
				// loader: shoppingLoader,
				errorElement: <Error />,
			},
			{ path: "/user", element: <User /> },
			{
				path: "/list",
				element: <ShoppingList />,
				loader: shoppingLoader,
				errorElement: <Error />,
			},
			// { path: "/cart", element: <Cart /> },
			// { path: "/order/new", element: <Order closeHour={0} openHour={0} /> },
			// {
			// 	path: "/order/:orderId",
			// 	element: <Order closeHour={0} openHour={0} />,
			// },
			// {
			//   path: '/order/new',
			//   element: <CreateOrder />,
			//   action: createOrderAction,
			// },
			// {
			//   path: '/order/:orderId',
			//   element: <Order />,
			//   loader: orderLoader,
			//   errorElement: <Error />,
			//   action: updateOrderAction,
			// },
		],
	},
]);

export default router;
