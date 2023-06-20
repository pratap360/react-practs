import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'mere blog hai',body:'lorem ipsum...', author:'bapi',id:1},
        {title:'ayush ka blog hai',body:'lorem ipsum...', author:'arusho',id:2},
        {title:'tera blog hai',body:'lorem ipsum...', author:'raja',id:3}
    ]);

    return(
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
   
 
export default Home;