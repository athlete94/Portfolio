import React from 'react';
import s from './Projects.module.css'
import style from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import Title from "../common/components/Title";
import social from '../assets/image/socialNetwork.jpg'
import todolist from '../assets/image/todolist.png'

export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${social})`,
    };

    const todoList = {
        backgroundImage: `url(${todolist})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <Title title={'Some of my most recent projects'} overTitle={'Portfolio'}/>
                <div className={s.projects}>
                    <Project title={'Todolist'}
                             description={'This is description'}
                             style={socialNetwork}/>
                    <Project title={'Social Network'}
                             description={'This is description'}
                             style={todoList}/>
                </div>
            </div>
        </div>
    );
};