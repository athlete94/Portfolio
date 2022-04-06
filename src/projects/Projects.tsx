import React from 'react';
import s from './Projects.module.css'
import style from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <h2>My Projects</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'}
                             description={'This is description'}/>
                    <Project title={'Social Network'}
                             description={'This is description'}/>
                </div>
            </div>
        </div>
    );
};