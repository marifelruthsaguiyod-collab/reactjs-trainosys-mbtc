import { useState} from "react"

const UserForm = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    alert('First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${Email}')
  }

  return (
    <div className="events-component">

      <br />
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default UserForm;