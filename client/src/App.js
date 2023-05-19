import React from 'react';
import { Navbar } from './subcomponents/Navbar';
import { Posts } from './components/Posts/Posts';
import { Forms } from './components/Form/Forms';


export default function App() {
  return (
    <>
    <Navbar/>
    <div class="row">
      <div class="col-7 border">
        <Posts/>
      </div>
      <div class="col-5 border">
        <Forms/>
      </div>
    </div>
    </>
  )
}
