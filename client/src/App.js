import React from 'react';
import { Navbar } from './subcomponents/Navbar';
import { Posts } from './components/Posts/Posts';
import { Forms } from './components/Form/Forms';


export default function App() {
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
