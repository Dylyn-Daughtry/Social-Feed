import React, { useState, useEffect } from 'react';
import LikeDislikeButton from '../LikeDislikeButton/LikeDislikeButton';
import './DisplayPost.css'
const DisplayPost = (props) => {


    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th className='name'>Name</th>
                    <th className='post'>Post</th>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((e, i)=>{
                return (
                    <tr key={`entry-row-${i}`}>
                        <td className='nameTitle'>{e.name}</td>
                        <td className='nameTitle'>{e.body}</td>
                        <td><LikeDislikeButton/></td>
                    </tr>
                );
            })}
            </tbody>
            </table>

        </div>
    );
}

export default DisplayPost;
