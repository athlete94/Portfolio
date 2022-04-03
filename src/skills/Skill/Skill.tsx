import React from 'react';
import s from './Skill.module.css'

type SkillsPropsType = {
    title: string
    description: string
}

export const Skill = ({title, description}: SkillsPropsType) => {
    return (
        <div className={s.skillsItem}>
            <div className={s.icon}>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};
