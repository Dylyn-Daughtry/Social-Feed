import React, { useState } from 'react';
import './LikeDislikeButton.css'

const LikeDislikeButton = (props) => {

    const[mybutton, setButtonClass] = useState('inactive');
    const[dislikebutton, setDislikeButton] = useState('inactive');

    function handleClickLike(){
        if(mybutton === 'inactive'){
            setButtonClass('active');
        }
        
            
        else {
            setButtonClass('inactive');
        }
    }
    function handleClickDislike(){
        if(dislikebutton === 'inactive'){
            setDislikeButton('active');
        }
        
            
        else {
            setDislikeButton('inactive');
        }
    }
        return (
            <div>
                <button className={mybutton} onClick={handleClickLike}>
                    <i class="fas fa-thumbs-up fa-2x"></i>
                </button>
                <button className={dislikebutton} onClick={handleClickDislike}>
                    <i class="fas fa-thumbs-down fa-2x"></i>
                </button>
            </div>
        )

}

export default LikeDislikeButton;