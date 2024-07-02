import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
 
function Profile() {
  const {user} = useContext(UserContext)
  return (
    <>
     {(!user)? <div>Please Login First</div>
               :
      <div>Welcome {user.userName}</div>}
    </>
  )
}

export default Profile