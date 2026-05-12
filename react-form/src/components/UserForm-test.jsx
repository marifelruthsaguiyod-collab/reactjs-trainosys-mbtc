const UserForm = () => {

  const UserFields = [
    { inputfield: 'First Name: ', type: 'text', name: 'firstName' },
    { inputfield: 'Last Name: ', type: 'text', name: 'lastName' },
    { inputfield: 'Email: ', type: 'email', name: 'email' },
    { inputfield: 'Password: ', type: 'password', name: 'password' },
  ];  

  return (
    <div>
      {UserFields.map((field) => (
        <div key={field.name}>
          <p>{field.inputfield}</p>
          <input ype={field.type} name={field.name} />
        </div>
      ))}
      <button>Submit</button>
    </div>   
  )
}

export default UserForm;