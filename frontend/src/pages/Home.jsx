import { toast } from "react-toastify";
import {
   useEffect,
   useState
} from "react";

import { useAuth } from "../context/AuthContext";

import api from "../api/api";

const Home = () => {

   const [stories, setStories] = useState([]);

   const [loading, setLoading] = useState(true);

   const [bookmarkLoading, setBookmarkLoading] =
      useState(null);

   const { user } = useAuth();

   useEffect(() => {

      fetchStories();

   }, []);

   const fetchStories = async () => {

      try {

         const response = await api.get(
            "/stories"
         );

         setStories(response.data.stories);

      } catch (error) {

         console.log(error);

      } finally {

         setLoading(false);
      }
   };

   const toggleBookmark = async (storyId) => {

      try {

         setBookmarkLoading(storyId);

         const response = await api.post(
            `/stories/${storyId}/bookmark`
         );

        toast.success(response.data.message);

      } catch (error) {

         toast.error(
   error.response?.data?.message ||
   "Failed to bookmark"
);

      } finally {

         setBookmarkLoading(null);
      }
   };

   if (loading) {

      return (
         <div className="flex justify-center items-center min-h-screen text-xl">
            Loading stories...
         </div>
      );
   }

   return (

      <div className="max-w-4xl mx-auto p-6">

         <h1 className="text-3xl font-bold mb-6 text-center">
            Top Hacker News Stories
         </h1>

         {
            stories.length === 0 && (
               <p className="text-center text-gray-500">
                  No stories found
               </p>
            )
         }

         <div className="space-y-5">

            {stories.map((story) => (

               <div
                  key={story._id}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
               >

                  <a
                     href={story.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl font-semibold text-blue-600 hover:underline"
                  >
                     {story.title}
                  </a>

                  <div className="mt-3 text-gray-600 text-sm space-y-1">

                     <p>
                        <span className="font-medium">
                           Points:
                        </span>
                        {" "}
                        {story.points}
                     </p>

                     <p>
                        <span className="font-medium">
                           Author:
                        </span>
                        {" "}
                        {story.author || "Unknown"}
                     </p>

                     <p>
                        <span className="font-medium">
                           Posted:
                        </span>
                        {" "}
                        {story.postedAt}
                     </p>

                  </div>

                  {
                     user && (
                        <button
                           onClick={() =>
                              toggleBookmark(story._id)
                           }
                           disabled={
                              bookmarkLoading === story._id
                           }
                           className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
                        >

                           {
                              bookmarkLoading === story._id
                                 ? "Processing..."
                                 : "Bookmark"
                           }

                        </button>
                     )
                  }

               </div>
            ))}

         </div>

      </div>
   );
};

export default Home;