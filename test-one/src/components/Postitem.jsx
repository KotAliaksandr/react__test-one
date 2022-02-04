import React from "react";
import MyButtons from "./UI/Buttons/MyButtons";

const Postitem = (props) => {

  return (
    <div className="post">
    <div className="post__content">
      <strong>{props.number}. {props.post.title}</strong>
      <div>
      {props.post.body}
      </div>
    </div>
    <div className="post__btns">
      <MyButtons onClick={() => props.remove(props.post)}>Delete</MyButtons>
    </div>
  </div>
  );
};

export default Postitem;
