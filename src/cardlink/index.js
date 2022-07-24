import Form from 'react-bootstrap/Form';
// import {useNavigate} from "react-router-dom"
import {useNavigate} from "react-router-dom"

// import "./style.css"
const Cardlink=()=>{
    // const navigate = useNavigate()
    const navegate = useNavigate()
return(

<div>

<Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
 <button onClick={()=>{

    navegate("/home")
 }}>Login</button>
    </div>
)

}

export default Cardlink