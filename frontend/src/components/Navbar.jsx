import {
   Link
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {

   const {
      user,
      logout
   } = useAuth();

   return (

      <nav className="bg-black text-white p-4 flex justify-between">

         <Link to="/">
            Hacker News
         </Link>

         <div className="flex gap-4">

            {user ? (
               <>
                  <Link to="/bookmarks">
                     Bookmarks
                  </Link>

                  <button onClick={logout}>
                     Logout
                  </button>
               </>
            ) : (
               <>
                  <Link to="/login">
                     Login
                  </Link>

                  <Link to="/register">
                     Register
                  </Link>
               </>
            )}

         </div>

      </nav>
   );
};

export default Navbar;