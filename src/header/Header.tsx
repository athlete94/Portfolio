import React from 'react';
import s from './Header.module.css'
import {Nav} from "./nav/Nav";
import styleContainer from '../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.headerContainer}`} >
                <Nav />
            </div>
        </div>
    );
};
