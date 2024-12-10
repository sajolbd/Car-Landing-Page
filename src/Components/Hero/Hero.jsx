import React from 'react';
import './Hero.css'
import pause_icon from '/pause_icon.png'
import play_icon from '/play_icon.png'

const Hero = ({heroData,heroCount,setHeroCount,playStatus,setPlayStatus}) => {
    return (
        <div className='hero'>
            <div className="hero-txt">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-exp">
                <p>Explore the Feature</p>
                <img src="../../arrow_btn.png" alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount === 0? "hero-dot orange":"hero-dot"}> </li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount === 1? "hero-dot orange":"hero-dot"}> </li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount === 2? "hero-dot orange":"hero-dot"}> </li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause_icon: play_icon } alt="" />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;