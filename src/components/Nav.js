import { useContext } from "react"

import { UserContext } from "../App"

export default function Nav() {
  const {userState, setUserState} = useContext(UserContext)

  return (
    <header>
      <ul>
        <li><a href="/"  rel="noopener noreferrer">Home</a></li>
        <li><a href="/new-post"  rel="noopener noreferrer">Add Post</a></li>
        <li><a href="/login"  rel="noopener noreferrer">Login</a></li>
        <li><a href="/signup"  rel="noopener noreferrer">Sign up</a></li>
        <li style={{color: 'white'}}>{userState.email}</li>
      </ul>
    </header>
  )
}