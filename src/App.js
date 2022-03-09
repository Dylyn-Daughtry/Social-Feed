import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import DisplayPost from './components/DisplayPost/DisplayPost';
import './App.css'

function App() {

  const [entries, SetEntries] = useState([{name: 'name', body: 'body'}])

  return (
      <div>
            <NavBar/>
            <Post/>      
            <DisplayPost parentEntries={entries}/>
      </div>
  );
}

export default App;
