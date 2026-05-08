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

      <nav className="bg-black text-white p-4 flex justify-between items-center">

         <Link
            to="/"
            className="font-bold text-xl hover:text-gray-300"
         >
            Hacker News
         </Link>

         <div className="flex gap-4 items-center">

            {user ? (
               <>

                  <span>
                     Hi, {user.name}
                  </span>

                  <Link
                     to="/bookmarks"
                     className="hover:text-gray-300"
                  >
                     Bookmarks
                  </Link>

                  <button
                     onClick={logout}
                     className="hover:text-gray-300"
                  >
                     Logout
                  </button>

               </>
            ) : (
               <>

                  <Link
                     to="/login"
                     className="hover:text-gray-300"
                  >
                     Login
                  </Link>

                  <Link
                     to="/register"
                     className="hover:text-gray-300"
                  >
                     Register
                  </Link>

               </>
            )}

         </div>

      </nav>
   );
};

export default Navbar;