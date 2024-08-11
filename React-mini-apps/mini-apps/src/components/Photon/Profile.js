import React, { useState } from 'react';
import Child from './Child';

const Profile = () => {
  const [firstname, setFirstName] = useState('');

  const [selectedUser, setSelecteduser] = useState({});

  const handleClick = (selectedElementUser) => {
    setSelecteduser(selectedElementUser);
    console.log(selectedUser);
  };
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <p>profile</p>
      <p>firstName : {selectedUser.firstName}</p>
      <p>lastName : {selectedUser.lastName}</p>
      <p>age : {selectedUser.age}</p>
      <p>bloodgroup : {selectedUser.bloodGroup}</p>
      <Child handleClick={(fname) => handleClick(fname)} />
    </div>
  );
};

export default Profile;
