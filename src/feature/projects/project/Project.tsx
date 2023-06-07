import React from 'react';
import s from './Project.module.scss'
import {Slider} from "common/components/Slider";
import {useAppSelector} from "app/store";
import {useParams} from "react-router-dom";
import {ProjectsType} from "feature/projects/projectsReducer";

export const Project = () => {

    const projects = useAppSelector<ProjectsType[]>(state => state.projects)
    const {projectId} = useParams()

    const project = projects.find(el => el.id === projectId)
    console.log(project)

    return (
        <div className={s.mainContainer}>
            <Slider album={project!.album}/>
            <div className={s.infoContainer}>
                <h1>{project?.title}</h1>
                <p>{project?.description}</p>
            </div>
        </div>
    );
};
