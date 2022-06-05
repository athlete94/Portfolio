import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string,
    description: string
    style?: any
}

export const Project = ({title, description, style}: ProjectPropsType) => {
    return (
        <div className={s.projectItem}>
              <div className={s.photo} style={style}>
                  <a className={s.itemDescription}>
                      <h3>{title}</h3>
                      <span className={s.description}>{description}</span>
                  </a>
              </div>

        </div>
    );
};