import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string,
    description: string
}

export const Project = ({title, description}: ProjectPropsType) => {
    return (
        <div className={s.projectItem}>
              <div className={s.photo}>
                  <button className={s.viewButton}>View</button>
              </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};