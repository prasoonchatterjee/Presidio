import { createBrowserRouter } from 'react-router-dom';
import SignUp from './pages/auth/signup';
import LogIn from './pages/auth/login';
import RentalHomePage from './pages/rentals/RentalHomePage.jsx';
import PostRental from './pages/rentals/PostRental.jsx';
import RentalDetails from './pages/rentals/RentalDetails.jsx';

const router = createBrowserRouter([
  { path: '/signup', element: <SignUp /> },
  { path: '/login', element: <LogIn /> },
  { path: '/', element: <RentalHomePage /> },
  { path: '/rental', element: <PostRental /> },
  {
    path: '/rental/:rentalId',
    element: <RentalDetails />,
  },
]);

export default router;
