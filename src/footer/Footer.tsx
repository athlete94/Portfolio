import React from 'react';
import s from './Footer.module.css'
import style from '../common/styles/Container.module.css'
import {Item} from "./Item";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.footerContainer} ${style.container}`}>
                <h2>Azamat Khamraev</h2>
                <div className={s.items}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
               <span>Copyright © 2022.       All Rights Reserved.</span>
            </div>
        </div>
    );
};
