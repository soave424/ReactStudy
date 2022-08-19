import React from "react";
import Comment from "./Commment";

const comments = [
  { name: "이주영", comment: "안녕하세요." },
  { name: "이관영", comment: "반가워요." },
  { name: "호민지", comment: "건강하세요." },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} commnet={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
