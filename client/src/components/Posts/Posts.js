import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from './Post/Post'
export const Posts = () => {
  const posts = useSelector((state)=> state.posts);
  console.log(posts)
  return (
    <>
      <Post/>
      <Post/>
    </>
  )
}