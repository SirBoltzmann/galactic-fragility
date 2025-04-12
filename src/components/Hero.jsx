import React from 'react';
import './Hero.css';


const Hero = (props) => {
    return (
        <div className='hero'>
            <img src={props.bgImg} alt="hero-img" />

            <div className="hero-text">
                <h1 className='heading'>{props.heading}</h1>
                <h2 className='subheading'>{props.subheading}</h2>
                
                <p className="hero-des"> {/* hero-des stands for hero-description */}
                    {props.text.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>

                <a className={props.btnClass} href={props.url}>{props.buttonText}</a>
            </div>
        </div>
    )
}

export default Hero;
