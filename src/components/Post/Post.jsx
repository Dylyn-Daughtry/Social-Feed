import React, { useState, useEffect } from 'react';

const Post = (props) => {


        const [name, setName] = useState([])
        const [body, setBody] = useState([])
        // const [entries, setEntries] = useState([])

        // useEffect(()=>{
        //     console.log("from post", entries)
        // })
        

        function handleSubmit(submissionForm){
            submissionForm.preventDefault();
            let newEntry = {
                name: name,
                body: body
            };
            console.log(newEntry)
            props.addNewEntryProperty(newEntry)
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <label>What do you want to say?</label>
                <input type='body' value={body} onChange={(e) => setBody(e.target.value)}/>
                <button type='submit'>Submit</button>
                
            </form>
        </div>
    );
}

export default Post;