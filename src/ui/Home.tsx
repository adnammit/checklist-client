// import { useSelector } from 'react-redux';
// import CreateUser from '../features/user/CreateUser';
// import Button from './Button';

export default function Home() {
	//   const username = useSelector((state) => state.user.username);

	return (
		<div>
			<h1>
				The best pizza.
				<br />
				<span>
					Straight out of the oven, straight to you.
				</span>
			</h1>

			{/* {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )} */}
		</div>
	);
}
