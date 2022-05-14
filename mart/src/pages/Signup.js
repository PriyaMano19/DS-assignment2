import React, {useState} from 'react'
import { Container,Col,Row,Form,Button } from 'react-bootstrap'
import "./Signup.css";
import {Link} from "react-router-dom";
import imge from "../assets/live-chat-4.jpg";




function Signup() {

  const [email,SetEmail] = useState("");
   const [password,SetPassword] = useState("");
    const [name,SetName] = useState("");

   //image upload states
    const [image,setImage] = useState(null);
    const [uploadingImg,SetUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

  function validationImg(e){
  /*const file = e.target.files(0);
  if(file.size >= 1048576){
    return alert("Max file size is 1mb");
  }else{
    setImage(file);
    setImagePreview(URL.createObjectURL(file));}*/
  
  }

  async function uploadImage(){
     const data = new FormData();
     data.append('file',image);
     data.append('upload_present', '')
  }

async function handleSignup(e){
e.preventDefault();
if(!image) return alert("please Upload the picture");
const url =  uploadImage(image);

}

 


  return (
   <Container>
    <Row>
   
    <Col md = {7} className ="d-flex align-items-center justify-content-center flex-direction-coloumn" >
    <Form  style={{width: '80%',maxWidth:500} } onSubmit={handleSignup}>
      <h1 className="text-cenrer"> Create Account</h1>
<div className='signup-profile-pic__container'>
  <img src = { imagePreview || imge} className='signup-profile-pic'/>
  <label htmlFor='image-upload' className='image-upload-label'> 
  <i className='fas fa-plus-circle add-picture-icon'></i>
  </label>
  <input type="file" id="image-upload" hidden accepted="image/png,image/png" onChange={validationImg()}/>
  </div>
    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Enter Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" onChange={(e) => SetName(e.target.value)} value = {name}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  onChange={(e) => SetEmail(e.target.value)} value={email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e) => SetPassword(e.target.value)} value={password}/>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Create Account
  </Button>
  <div className='py-4'>
    <p className='text-center'>Already have an Account? <Link to = "/login">Login</Link></p>
  </div>
</Form>
<Col md = {5} className="Signup__bg"></Col>
</Col>
</Row>
    

    </Container>
  )
  }

export default Signup

