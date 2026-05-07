import {
   Routes,
   Route
} from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
   return (
      <>
         <Navbar />

         <Routes>

            <Route
               path="/"
               element={<Home />}
            />

            <Route
               path="/login"
               element={<Login />}
            />

            <Route
               path="/register"
               element={<Register />}
            />

            <Route
   path="/bookmarks"
   element={
      <ProtectedRoute>
         <Bookmarks />
      </ProtectedRoute>
   }
/>

         </Routes>
      </>
   );
};

export default App;