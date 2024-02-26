import {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../axiosConfig";


function Register() {
 const  navigate = useNavigate();
  const userNameDom = useRef(null);
	const firstnameDom = useRef();
	const lastnameDom = useRef();
	const emailDom = useRef();
	const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = userNameDom.current.value;
		const firstnameValue = firstnameDom.current.value;
		const lastnameValue = lastnameDom.current.value;
		const emailValue = emailDom.current.value;
		const passwordvalue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordvalue
    ) {
      alert('please provide all required information')
    }
    try {
      await axios.post('/users/check', {
        username:"usernameValue",
        firstname:"firstnameValue",
        lastname: "lastnameValue",
        email:"emailValue",
        password:"passwordvalue"
      })
      alert("register Successful please login");
      navigate('./')
      

    } catch (error) {
      alert('Something went wrong!')
      console.log(error.response);
    }

    
  }
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <span>username :---</span>
        <input ref={userNameDom} type="text" placeholder='username' />
      </div>
      <div>
        <span>First name :---</span>
        <input ref={firstnameDom} type="text" placeholder='first name' />
      </div>
      <div>
        <span>last name :---</span>
        <input ref={lastnameDom} type="text" placeholder='last name'></input>
      </div>
      <div>
        <span>email :---</span>
        <input ref={emailDom} type="email" placeholder='email' />
      </div>
      <div>
        <span>password :---</span>
        <input ref={passwordDom} type="password" placeholder='password' />
      </div>
      <button type='submit'>Register</button>
      </form>
    </section>
  )
}
      
  

export default Register