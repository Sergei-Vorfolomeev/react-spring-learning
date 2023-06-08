import React from 'react';
import s from './Project.module.scss'
import {Slider} from "common/components/slider/Slider";
import {useAppSelector} from "app/store";
import {useParams} from "react-router-dom";
import {ProjectsType} from "feature/projects/projectsReducer";
import {Navbar} from "common/components/navbar/Navbar";

export const Project = () => {

    const projects = useAppSelector<ProjectsType[]>(state => state.projects)
    const { projectId } = useParams()

    const project = projects.find(el => el.id === projectId)

    return (
        <div className={s.mainContainer}>
            <Navbar />
            <Slider album={project!.album}/>
            <div className={s.infoContainer}>
                <h1>{project?.title}</h1>
                <p>{project?.description}</p>
            </div>
        </div>
    );
};
