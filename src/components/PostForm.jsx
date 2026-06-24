import React, { useState } from "react";
import MyInput from "./ui/inpuut/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()

        // const newPost={
        //   id: Date.now(),
        //   title,
        //   body,
        // }
        // setPosts([...posts, { ...post, id: Date.now() }])//newPost]) 2step
        const newPost={
            ...post,id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
        // setTitle('')
        // setBody('')
        console.log(newPost)
        // console.log(bodyInputRef.current.value)
    }


    return (
        <form action="">
            <MyInput
                value={post.title}//title
                // onChange={e => setPost({ ...post, title: e.targer.value })}//(e.target.value)}
                onChange={e=> setPost({...post, title:e.target.value})}
                type="text"
                placeholder="asdh"
            />
            <MyInput
                value={post.body}//body
                onChange={e => setPost({ ...post, body: e.target.value })}//Body(e.target.value)} 
                type="text"
                placeholder="asjdhksahd"
            />
            {/* <MyInput 
        ref={bodyInputRef}
        type="text" 
        placeholder="asjdhksahd"
        /> */}
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    )
}

export default PostForm;