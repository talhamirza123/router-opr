import React from 'react'


export const Post = ({  match }) => {
   
   return <h2>id is = { match.params.id}</h2>
}

export default Post;