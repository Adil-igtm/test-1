import React from "react";
import PostItem from "./PostItem";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import cl from "../style/PostList.css"

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1>Posts not found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {/* <TransitionGroup> */}
        {posts.map((post, index) => 
        // {
        //   const nodeRef = useRef(null);
        //   return (
        //     <CSSTransition
        //       key={post.id}
        //       nodeRef={nodeRef}
        //       timeout={500}
        //       classNames="post"
        //     >
        //       <div ref={nodeRef}>
                <PostItem remove={remove} number={index + 1} post={post}  key={post.id}/>
        // }
        )}  
       </div> 
       )
    }           

{/* // 
//             </CSSTransition>
//           );
//         })}
//       </TransitionGroup>
//     </div>
//   );
// }; */}

export default PostList;
