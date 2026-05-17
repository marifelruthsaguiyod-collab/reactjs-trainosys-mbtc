const InputComponent = () => {

  const InputFields = [
    { 
      label: 'First Name: ', 
      type: 'text', 
      name: 'firstname',
      placeholder: 'Enter your first name'
    },
    { 
      label: 'Last Name: ', 
      type: 'text',
      name: 'lastname', 
      placeholder: 'Enter your last name' 
    },
    { 
      label: 'Email: ', 
      type: 'email', 
      name: 'email',
      placeholder: 'Enter your email address' 
    },
    { 
      label: 'Password: ', 
      type: 'password',
      name: 'password',
      placeholder: 'Enter your secure password' 
    },
  ];  

  return (
    <div>
      {InputFields.map((props) => (
        <div key={props.name} style={{ 
          marginBottom: '20px', 
          textAlign: 'left'}}>
          <label>{props.label}</label>
          <br />

          <input 
            type={props.type} 
            placeholder={props.placeholder} style={{ width: '700px', height: '10px', padding: '10px' }}/>
        </div>
      ))}
    </div>
  )
}

export default InputComponent;