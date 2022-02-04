import React, { useState } from 'react';
import MyButtons from './UI/Buttons/MyButtons';
import MyInput from './UI/Input/MyInput';

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (event) => {
    event.preventDefault();
    
    const newPost = {...post, id: Date.now()}
    setPost({title: '', body: ''});
    create(newPost)
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={event => setPost({...post, title: event.target.value}) }
        type='text'
        placeholder='title post'></MyInput>
      <MyInput 
        value={post.body}
        onChange={event => setPost({...post, body: event.target.value}) }
        type='text' 
        placeholder='description post'></MyInput>
      <MyButtons onClick={addNewPost}>create new post</MyButtons>
    </form>
  );
};

export default PostForm;
