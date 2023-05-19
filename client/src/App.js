import React, {useEffect} from 'react';
import { Navbar } from './subcomponents/Navbar';
import { Posts } from './components/Posts/Posts';
import { Forms } from './components/Form/Forms';
import {useDispatch} from "react-redux";
import { getPosts} from "./actions/posts";

export default function App() {
  const dispach = useDispatch();
  useEffect(()=>{
    dispach(getPosts());
  },[dispach]);

  return (
    <>
    <Navbar/>
    <div className="row">
      <div className="col-7 border">
        <Posts/>
      </div>
      <div className="col-5 border">
        <Forms/>
      </div>
    </div>
    </>
  )
}
