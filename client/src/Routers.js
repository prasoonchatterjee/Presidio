import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/buyer/homepage";
import SignUp from "./pages/auth/signup";
import LogIn from "./pages/auth/login";

const router = createBrowserRouter([
  {path:"/",
    element:<HomePage/>
  },
  {path:"/signup",
    element:<SignUp/>
  },
  {path:"/login",
    element:<LogIn/>
  }
])

export default router;