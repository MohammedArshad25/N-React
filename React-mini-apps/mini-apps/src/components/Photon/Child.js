import React, { useEffect, useState } from 'react';

const Child = ({ handleClick }) => {
  const [userList, setUserList] = useState([]);
  const [text, setText] = useState('');
  const [originaluserList, setOriginalUserList] = useState([]);

  async function getData() {
    const response = await fetch('https://dummyjson.com/users');
    const jsonData = await response.json();
    setUserList(jsonData.users);
    setOriginalUserList(jsonData.users);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFirstName = (ele) => {
    handleClick(ele);
  };

  useEffect(() => {
    let prevUserList = [...userList];
    let newUserList = prevUserList.filter((ele) => {
      if (ele.lastName.toLowerCase().includes(text)) {
        return ele;
      }
    });
    setUserList(newUserList);

    if (text =="") {
      setUserList(originaluserList);
      handleClick({});
    }
  }, [text]);
  return (
    <>
      <p>child</p>
      <input type="text" value={text} onChange={(e) => handleChange(e)} />
      <ul>
        {userList.map((ele) => {
          return <li onClick={() => handleFirstName(ele)}>{ele.lastName}</li>;
        })}
      </ul>
    </>
  );
};

export default Child;
