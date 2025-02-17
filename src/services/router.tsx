import { createBrowserRouter } from "react-router-dom";
import { shoppingLoader } from "./loaders";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import Home from "../ui/Home";
import User from "../features/user/User";
import ShoppingList from '../features/list/ShoppingList';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
				errorElement: <Error />,
			},
			{ path: "/user", element: <User /> },
			{
				path: "/list",
				element: <ShoppingList />,
				loader: shoppingLoader,
				errorElement: <Error />,
			},
			// { path: "/order/new", element: <Order closeHour={0} openHour={0} /> },
		],
	},
]);

export default router;
