import React from 'react';
import s from './Main.module.css'
import photo from './vin.jpg'
import styleContainer from "../common/styles/Container.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.helloBlock}>
                    <h1>HI, I'M AZAMAT KHAMRAEV</h1>
                    <h1><span>FRONTEND DEVELOPER</span></h1>
                    <p>based in Sankt-Petersburg, Russia</p>
                    <a className={s.btnWork} href="#">View My Works</a>
                    <a className={s.contactMe} href="#">
                        Contact Me
                        <span className={s.spanIcon}>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </span>
                    </a>
                </div>
                <div className={s.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
};
