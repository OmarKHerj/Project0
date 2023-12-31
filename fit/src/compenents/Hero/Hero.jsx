import React from 'react';
import './Hero.css'
import Header from '../Heades/Header';
import Heart from '../../assets/heart.png';
import Heros from '../../assets/heros.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>
                            Ideal body
                        </span>
                    </div>
                    <div>
                        <span>In here we will help you shape and build your ideal body and live up your life to fullest</span>
                        </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
            </div>
            <img src={Heros} alt="" className='hero-image'/>
            <div className="calories">
                <img src="" alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    )
}

export default Hero