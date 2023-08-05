import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setlocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(null)
  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()
  const storeDataElemet = useRef()

  const submitFunction = async() => {
    
  }

  const handleSubmit = () => {
    setError(false)

    const { value: comment } = commentElement.current
    const { value: name } = nameElement.current
    const { value: email } = emailElement.current
    const { checked: storeData } = storeDataElemet.current
    
    if(!comment || !name || !email){
      setError(true)
      return
    }
    
    const commentObj = {
      name, email, comment, slug
    }

    if(storeData){
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    }
    else{
      localStorage.removeItem('name', name)
      localStorage.removeItem('email', email)
    }
  }

  return (
    <div className='w-4/5 bg-blue-100'>
      <h3>Comments</h3>
      <div>
        <textarea 
          ref={commentElement} 
          placeholder="Enter Comment here"
          className='w-full'
          name='comment'
        />
      </div>
      <div>
        <input 
          type="text"
          className=''
          ref={nameElement}
          placeholder={"Name"}
          name="name"
        />
        <input 
          type="email"
          className=''
          ref={emailElement}
          placeholder={"Email"}
          name="email"
        />
      </div>

      <div>
        <div>
          <input ref={storeDataElemet} type="checkbox" id='storeData' name='storeData' value={true}/>
          <label htmlFor="">Remember me</label>
        </div>
      </div>
      
      <button
        type='button'
        onClick={handleSubmit}
      >Submit
      </button>
      {error && <p>All fields are required </p>}
    </div>
  )
}

export default CommentsForm