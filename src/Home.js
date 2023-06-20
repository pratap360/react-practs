import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title:'mere blog hai',body:'lorem ipsum...', author:'bapi',id:1},
        {title:'ayush ka blog hai',body:'lorem ipsum...', author:'arusho',id:2},
        {title:'tera blog hai',body:'lorem ipsum...', author:'raja',id:3}
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }

    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='raja')} title="Raja's Blogs !"/>
        </div>
    );
}
   
 
export default Home;