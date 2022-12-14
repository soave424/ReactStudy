import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";

// root DOM에 연결
const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter 03
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

//chapter 04
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }, 1000);

//chapter 05
// root.render(
// <React.StrictMode>
// <CommentList />
// </React.StrictMode>,
// document.getElementById("root")
//)
