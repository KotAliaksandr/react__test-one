import React, {useState} from "react";
import Postitem from "./components/Postitem";
import './styles/App.css'

function App() {

  const [post, setPost] = useState(
    [
      {id: 1, title: 'JavaScript', body: 'description'},
      {id: 2, title: 'JavaScript', body: 'description'},
      {id: 3, title: 'JavaScript', body: 'description'},
    ]
  );

  return (
    <div className="App">

      <h1 className="titlePage">List posts</h1>
      {post.map(post => 
        <Postitem post={post} key={post.id}/>
        )}
    </div>
  );
}

export default App;
