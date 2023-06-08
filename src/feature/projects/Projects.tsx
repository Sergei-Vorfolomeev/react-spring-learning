import React from 'react';
import s from './Projects.module.scss'
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "app/store";
import {ProjectsType} from "feature/projects/projectsReducer";
import {Navbar} from "common/components/navbar/Navbar";

export const Projects = () => {
    const projects = useAppSelector<ProjectsType[]>(state => state.projects)
    const navigate = useNavigate()

    return (
        <div className={s.mainContainer}>
            <div className={s.navbarContainer}>
                <Navbar color={'#fff'}/>
            </div>
            <div className={s.titleContainer}>
                <h1>Portfolio</h1>
            </div>
            <div className={s.grid}>
                {projects.map(el => (
                    <div key={el.id} style={el.style} onClick={() => {navigate(`/projects/${el.id}`)}}></div>
                ))}
            </div>
        </div>
    )
};
