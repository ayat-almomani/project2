
import { Routes, Route, Link } from "react-router-dom";
import react from "react"
import CardComponent from "./card";
import Cardlink from "./cardlink";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useNavigate} from "react-router-dom"


import "./style.css"
import VideoJs from "./Video/VideoJs";
function App() {
  const navegate = useNavigate()
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="App">

<VideoJs/>

<Button className="lin"  variant="primary" onClick={handleShow}>
        menu
       
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Subject</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="buttons">

          <button onClick={()=>{

navegate("/home")
}}>Home</button>
<button>Login</button>
         <button >Math</button>
         <button>Physics</button>
         <button>Chemistry</button>
         <Button>English</Button>
          </div>
    
        </Offcanvas.Body>
      </Offcanvas>



<div className="lin">

    {/* <Cardlink/> */}
    <Link to="/home" className="home">Home</Link>
    <Link to ="/card" className="card">Login</Link>
      
</div>

   
      <Routes>

        <Route path="/card" element={<Cardlink/>} />
        <Route path="/home" element={<CardComponent />} />

      
      </Routes>



      
      
    </div>
  );
}

export default App;
