import {useRef} from 'react'

function Register() {
  const userNameDom = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userNameDom);
  }
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <span>username :---</span>
        <input ref={useRef} type="text" placeholder='username' />
      </div>
      <div>
        <span>First name :---</span>
        <input type="text" placeholder='first name' />
      </div>
      <div>
        <span>last name :---</span>
        <input type="text" placeholder='last name'></input>
      </div>
      <div>
        <span>email :---</span>
        <input type="email" placeholder='email' />
      </div>
      <div>
        <span>password :---</span>
        <input type="password" placeholder='password' />
      </div>
      <button type='submit'>Register</button>
      </form>
    </section>
  )
}
      
  

export default Register