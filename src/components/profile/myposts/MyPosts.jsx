import React from 'react'
import style from './MyPosts.module.css'
import Post from './post/Post'

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post => <Post messages={post.post} likes={post.likesCounter} id={post.id} key={post.id} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
      <div className={style.profile}>
      <div>
          <h3>My posts</h3>
      </div>
      <div>
          <div><textarea ref={newPostElement} placeholder="Your news"></textarea></div>
          <div><button onClick={addPost}>Add News</button></div>
      </div>
          {postsElements}
      </div>
    )
}

export default MyPosts;