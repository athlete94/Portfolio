import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";
import Title from "../common/components/Title";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'} overTitle={'What I Do?'}/>
                <div className={s.skills}>
                    <Skill title={'HTML'}
                           description={'This is Description!'}/>
                    <Skill title={'CSS'}
                           description={'This is Description!'}/>
                    <Skill title={'JS'}
                           description={'This is Description!'}/>
                    <Skill title={'TS'}
                           description={'This is Description!'}/>
                    <Skill title={'React'}
                           description={'This is Description!'}/>
                    <Skill title={'Redux'}
                           description={'This is Description!'}/>
                </div>
            </div>

        </div>
    );
}