import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'


const PostDetails = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    console.log('PostDetails:', post)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                console.log("Post ID:", id); //DEBUG LINE ONLY
                if (!id) {
                    throw new Error("Missing post ID in URL");
                }
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts/${id}'
                );

                console.log(response.data);

                setPost(response.data);
            }   catch (err) {
                console.log("ERROR:", error);
            } 
        };

        fetchPost();
  }, [id]);

  if (!post) {
    return <h1>Loading posts....</h1>
  }

  return (
    <div className="border p-5 rounded">
        <h1 className="text-3xl font-bold mb-4">
            {post.title}
        </h1>
        <p>{post.body}</p>
    </div>
  )
}

export default PostDetails