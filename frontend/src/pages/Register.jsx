import { toast } from "react-toastify";

import {
   useState
} from "react";

import {
   useNavigate,
   Link
} from "react-router-dom";

import api from "../api/api";

import { useAuth } from "../context/AuthContext";

const Register = () => {

   const navigate = useNavigate();

   const { login } = useAuth();

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
   });

   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {

      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         setLoading(true);

         const response = await api.post(
            "/auth/register",
            formData
         );

         login(
            response.data.user,
            response.data.token
         );

         toast.success("Registration successful");

      } catch (error) {

         toast.error(
   error.response?.data?.message ||
   "Something went wrong"
);

      } finally {

         setLoading(false);
      }
   };

   return (

      <div className="flex justify-center items-center min-h-screen">

         <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
         >

            <h1 className="text-2xl font-bold mb-6 text-center">
               Register
            </h1>

            <input
               type="text"
               name="name"
               placeholder="Name"
               value={formData.name}
               onChange={handleChange}
               className="w-full border p-3 mb-4 rounded"
            />

            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               className="w-full border p-3 mb-4 rounded"
            />

            <input
               type="password"
               name="password"
               placeholder="Password"
               value={formData.password}
               onChange={handleChange}
               className="w-full border p-3 mb-4 rounded"
            />

            <button
               type="submit"
               className="w-full bg-black text-white p-3 rounded"
            >
               {loading
                  ? "Loading..."
                  : "Register"}
            </button>

            <p className="mt-4 text-center">
               Already have an account?

               <Link
                  to="/login"
                  className="text-blue-500 ml-1"
               >
                  Login
               </Link>
            </p>

         </form>

      </div>
   );
};

export default Register;