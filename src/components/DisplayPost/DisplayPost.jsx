import React, { useState, useEffect } from 'react';

const DisplayPost = (props) => {


    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Post</th>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((e, i)=>{
                return (
                    <tr key={`entry-row-${i}`}>
                        <td>{e.name}</td>
                        <td>{e.body}</td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </div>
    );
}

export default DisplayPost;
