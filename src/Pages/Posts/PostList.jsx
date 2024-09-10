import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { postApi } from '../../api/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
       
        const response = await axios.get(postApi);
        
        const postsWithImages = response.data.map((post, index) => ({
          ...post,
          image: `https://picsum.photos/seed/${index + 1}/400/300`,
        }));
        setPosts(postsWithImages);
      } catch (error) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-gray-200"
          >
            <img
              src={post.image}
              alt={`Image for ${post.title}`}
              className="w-full h-56 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => window.open(`https://jsonplaceholder.typicode.com/posts/${post.id}`)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
