import React from 'react';
import s from './Main.module.css'
import photo from './vin.jpg'
import styleContainer from "../common/styles/Container.module.css";

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.helloBlock}>
                    <span>Hello!</span>
                    <h1>I am Azamat Khamraev.</h1>
                    <p> Frontend developer.</p>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
};
