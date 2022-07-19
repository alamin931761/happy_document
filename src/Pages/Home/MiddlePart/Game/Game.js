import React from 'react';
import './Game.css';

const Game = ({ data }) => {
    const { image, text, genre, popularity, button1, button2 } = data;
    return (
        <section className='d-flex border rounded ms-3 me-3'>
            <div className='ms-3 image mt-3 mb-3'>
                <img src={image} alt=''></img>
            </div>
            <div className='ms-3 mt-3 mb-3'>
                <p>{text}</p>
                <p><b>Genre:</b> {genre}</p>
                <p><b>Game popularity: </b>{popularity}</p>
                <button className='btn1'>{button1}</button>
                <button className='btn2'>{button2}</button>
            </div>
        </section>
    );
};

export default Game;