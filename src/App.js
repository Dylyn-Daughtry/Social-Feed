import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import DisplayPost from './components/DisplayPost/DisplayPost';
import './App.css'

function App() {

  const [entries, SetEntries] = useState([{name: '', body: ''}])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];

    SetEntries(tempEntries);
  }

  return (
      <div>
            <NavBar/>
            <Post addNewEntryProperty={addNewEntry}/>      
            <DisplayPost parentEntries={entries}/>
      </div>
  );
}

export default App;
