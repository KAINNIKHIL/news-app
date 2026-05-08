import {
   useEffect,
   useState
} from "react";

import api from "../api/api";

const Bookmarks = () => {

   const [stories, setStories] = useState([]);

   const [loading, setLoading] = useState(true);

   useEffect(() => {

      fetchBookmarks();

   }, []);

   const fetchBookmarks = async () => {

      try {

         const response = await api.get(
            "/stories/bookmarks"
         );

         setStories(response.data);

      } catch (error) {

         console.log(error);

      } finally {

         setLoading(false);
      }
   };

   const removeBookmark = async (storyId) => {

      try {

         await api.post(
            `/stories/${storyId}/bookmark`
         );

         setStories((prev) =>
            prev.filter(
               (story) =>
                  story._id !== storyId
            )
         );

      } catch (error) {

         console.log(error);
      }
   };

   if (loading) {
      return (
         <div className="p-6">
            Loading...
         </div>
      );
   }

   return (

      <div className="max-w-4xl mx-auto p-6">

         <h1 className="text-3xl font-bold mb-6">
            Bookmarked Stories
         </h1>

         {
            stories.length === 0 ? (

               <p>
                  No bookmarks yet
               </p>

            ) : (

               <div className="space-y-4">

                  {stories.map((story) => (

                     <div
                        key={story._id}
                        className="bg-white p-5 rounded-lg shadow"
                     >

                        <a
                           href={story.url}
                           target="_blank"
                           className="text-xl font-semibold text-blue-600"
                        >
                           {story.title}
                        </a>

                        <div className="mt-2 text-gray-600 text-sm">

                           <p>
                              Points:
                              {" "}
                              {story.points}
                           </p>

                           <p>
                              Author:
                              {" "}
                              {story.author}
                           </p>

                           <p>
                              Posted:
                              {" "}
                              {story.postedAt}
                           </p>

                        </div>

                        <button
                           onClick={() =>
                              removeBookmark(story._id)
                           }
                           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        >
                           Remove Bookmark
                        </button>

                     </div>
                  ))}

               </div>
            )
         }

      </div>
   );
};

export default Bookmarks;