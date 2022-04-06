import React from 'react';
import s from './Contacts.module.css'
import style from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${style.container}`}>
                <h2>Contacts</h2>
                <form className={s.form} >
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" ></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};
