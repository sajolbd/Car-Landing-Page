import React from 'react';
import './Background.css'

const Background = ({playStatus,heroCount}) => {

    if(playStatus){
        return (
            <video src='../../video1.mp4' className='background fade-in' autoPlay loop muted></video>
        )
    }
    else if(heroCount === 0 ){
        return(
            <img src="../../image1.png" className='background fade-in'  alt="" />
        )
    }
    else if(heroCount === 1 ){
        return(
            <img src="../../image2.png" className='background fade-in'  alt="" />
        )
    }
    else if(heroCount === 2 ){
        return(
            <img src="../../image3.png" className='background fade-in'  alt="" />
        )
    }
    return (
        <div>
            
regargre
        </div>
    );
};

export default Background;