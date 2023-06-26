import React from "react";
import { useNavigate } from "react-router-dom";



const Blog = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Blog</h1>
            <button onClick={() => navigate("/Contact")}>Contact</button>

        </div>
        
    )
};

export default Blog;