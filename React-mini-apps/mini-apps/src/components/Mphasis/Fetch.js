import React, { useState, useEffect, useRef } from 'react';
import { Post } from './Post';
import './fetch.css';

// 1. Fetch Posts from https://jsonplaceholder.typicode.com/posts
// 2. Display first 10 posts using <Post /> component
// 3. Implement search that matches posts by title (client side filtering)
// Optional: Fetch Comments of each Post in the same request from https://jsonplaceholder.typicode.com/posts/{id}/comments
const  Fetch= () => {
  const [list, setList] = useState([]);
  const [originalList, setoriginalList] = useState('')
  const [text, setText] = useState('');

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await response.json();
    setList(jsonData.slice(0,10));
    setoriginalList(jsonData.slice(0,10));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    if (inputValue === '') {
      // Reset the list to the original list when input is cleared
      console.log("hi")
      setList(originalList);
    }
  };

  const handleSearch = () => {
    let currentList = [...list];
    let filteredList = currentList.filter((ele) => {
      if (list.length > 0 && ele.title.includes(text)) {
        return ele;
      }
    });
    setList(filteredList);
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div>
        <input type="text" onChange={(e) => handleInput(e)} value={text} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="posts">
        {
          /* <Post> component goes here */
          list.map((ele, index) => {
            return <Post post={ele} key={ele.id} />;
          })
        }
      </div>
      <button>load more</button>
    </div>
  );
}

export default Fetch;
