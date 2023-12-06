import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
  }
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

const Userspage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
  {cache:'no-store'})
  const users: User[]  = await res.json()
  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default Userspage
