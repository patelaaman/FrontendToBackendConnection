import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Insert=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
         let name = e.target.name;
         let value = e.target.value;
         setInput(values=>({...values,[name]:value}));
         console.log(input);
         
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        let api = "http://localhost:8000/student/studentSave";
        axios.post(api,input).then((res)=>{
            console.log(res);
                alert("data Save!!!")
                
        }).catch(error => {
            // Handle error, possibly from CORS or other issues
            console.error("There was an error!", error);
          });
    };


    return(
        <>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Roll No</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput} placeholder=" Enter Roll No " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student Name </Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput} placeholder=" Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student School</Form.Label>
        <Form.Control type="text" name="school" value={input.school} onChange={handleInput} placeholder="Enter School" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name="pass" value={input.pass} onChange={handleInput} placeholder=" Password " />
      </Form.Group>
     
      <Button  variant="primary" type='submit'  onClick={handleSubmit}>
        Submits
      </Button>
    </Form>
        </>
    )
}
export default Insert ;