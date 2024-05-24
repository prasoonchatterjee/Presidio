import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/auth/signup";
import LogIn from "./pages/auth/login";
import RentalHomePage from "./pages/rentals/RentalHomePage.jsx";
const router = createBrowserRouter([
  {path:"/signup",
    element:<SignUp/>
  },
  {path:"/login",
    element:<LogIn/>
  },
  {path:"/",
    element:<RentalHomePage/>
  }
])

export default router;