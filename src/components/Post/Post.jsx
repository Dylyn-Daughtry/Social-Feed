import React, { useState, useEffect } from 'react';

const Post = (props) => {


        const [name, setName] = useState('')
        const [body, setBody] = useState('')
        // const [entries, setEntries] = useState([])

        // useEffect(()=>{
        //     console.log("from post", entries)
        // })
        

        function handleSubmit(submissionForm){
            submissionForm.preventDefault();
            // props.addEntries({name:name, body:body});
            let temp = {
                name: name,
                body: body
            };
            console.log(temp)
            props.addNewEntryProperty(temp)
            // temp.push({name:name, body:body});
            // console.log("temp", temp)
            // setEntries(temp)
            // console.log("entries", entries)
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='Name' onChange={(e) => setName(e.target.value)} value={name} />
                <label>What do you want to say?</label>
                <input type='body' onChange={(e) => setBody(e.target.value)} value={body} />
                <button type='submit'>Submit</button>
                
            </form>
        </div>
    );
}

export default Post;