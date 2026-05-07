import {
   useEffect,
   useState
} from "react";

import api from "../api/api";

const Home = () => {

   const [stories, setStories] = useState([]);

   const [loading, setLoading] = useState(true);

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
            Top Hacker News Stories
         </h1>

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

               </div>
            ))}

         </div>

      </div>
   );
};

export default Home;