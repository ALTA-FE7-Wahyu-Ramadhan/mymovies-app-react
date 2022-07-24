import React, { useState} from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

const TestPage =()=> {
  const [counter, setCounter] = useState (0);
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [show, setShow] = useState (true);

  const handleIncrement =() => {
    setCounter (counter + 1);
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(email, password)
  }
  
  return(
    <div className='w-full h-screen'>
      <Header/>
        <Button label="INCREMENT" onClick={()=>handleIncrement()}/>
        {/* <Button label="unHide/Hide" onClick={()=>setShow(!show)}/> */}
        <Button label="RESET" onClick={()=>setShow(!show)}/>
      {show && <p>{counter}</p>}
      <form onSubmit={handleSubmit}>
        <label>
            email: {''}
            <input
            value={email} onChange={(e)=>{
              setEmail(e.target.value);}} />
        </label>
        <label>
            password: {''} 
            <input value={password} onChange={(e)=>{
              setPassword(e.target.value);}}
            />
        </label>
          <Button label="BUTTON" type='submit'/>
      </form>
    </div>
  );
}

export default TestPage;
