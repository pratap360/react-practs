// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isPending, data : blogs} = useFetch('http://localhost:8000/blogs')
    // const {data:blogs,error,isPending} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {isPending && <div>Loading...</div> }
            {error && <div>{ error }</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs !"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='raja')} title="Raja's Blogs !"/> */}
            {/* <button onClick={() => setName('raja')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}


export default Home;