import { useState } from "react";

const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('bapi');
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author}

        // console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new blog added');
            setIsPending(false)
        })
    } 

    return ( 
        <div className="create">
            <h2>Add your blogs</h2>
            <form onClick={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                required>
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="bapi">bapi</option>
                    <option value="arusho">arusho</option>
                    <option value="raja">raja</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;