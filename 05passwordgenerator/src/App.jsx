import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    console.log(str.length);

    if(numberAllowed) str += "0123456789";

    if(specialChar) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 0; i<length; i++) {
      let char = Math.floor(Math.random()*str.length);

      pass += str.charAt(char);

    }

    setPassword(pass)

  }, [length, numberAllowed, specialChar, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password); 
  }, [password]);

  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowed, specialChar, passwordGenerator]);



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div
        className='flex items-center gap-x-1'
        >
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div
        className='flex items-center gap-x-1'
        >
          <input 
          type="checkbox"
          defaultValue={numberAllowed}
          id="numberInput"
          className='cursor-pointer'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div
        className='flex items-center gap-x-1'
        >
          <input 
          type="checkbox"
          defaultValue={specialChar}
          id="charInput"
          className='cursor-pointer'
          onChange={() => {
            setSpecialChar((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
