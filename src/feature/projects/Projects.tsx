import React from 'react';
import picture1 from 'common/img/neom-RqfFauPXJx0-unsplash.jpg'
import picture2 from 'common/img/museum-of-new-zealand-te-papa-tongarewa-7Rv-coHjxTM-unsplash.jpg'
import picture3 from 'common/img/jonathan-notay-e_hq1euh5lI-unsplash.jpg'
import {Slider} from "common/components/Slider";
import s from './Projects.module.scss'
import {useNavigate} from "react-router-dom";

export type AlbumType = {
    id: number
    url: string
}
export type ProjectsType = {
    id: number
    name: string
    description: string
    album: AlbumType[]
    style: {
        gridArea: string,
        background: string
    }
}

export const collection: AlbumType[] = [
    {
        id: 0,
        url: picture1,
    },
    {
        id: 1,
        url: picture2,
    },
    {
        id: 2,
        url: picture3,
    },
]
export const projects: ProjectsType[] = [
    {
        id: 0,
        name: 'Food',
        description: '',
        album: collection,
        style: {gridArea: 'project1',  background: '#ffc504'}
    },
    {
        id: 1,
        name: 'Clubs',
        description: '',
        album: collection,
        style: {gridArea: 'project2',  background: '#c2f50a'}
    },{
        id: 2,
        name: 'Private',
        description: '',
        album: collection,
        style: {gridArea: 'project3', background: '#77c7c8'}
    },{
        id: 3,
        name: 'Official',
        description: '',
        album: collection,
        style: {gridArea: 'project4', background: '#b18ad0'}
    },{
        id: 4,
        name: 'Lessons',
        description: '',
        album: collection,
        style: {gridArea: 'project5', background: '#adf1fc'}
    },{
        id: 5,
        name: 'Street',
        description: '',
        album: collection,
        style: {gridArea: 'project6', background: '#ff9696'}
    },{
        id: 6,
        name: 'Art',
        description: '',
        album: collection,
        style: {gridArea: 'project7', background: '#76b2fc'}
    },{
        id: 7,
        name: 'Other',
        description: '',
        album: collection,
        style: {gridArea: 'project8', background: '#feffc9'}
    },
]

export const Projects = () => {

    const navigate = useNavigate()

    return (
        <div className={s.mainContainer}>
            <div className={s.titleContainer}>
                <h1>Portfolio</h1>
            </div>
            <div className={s.grid}>
                {projects.map(el => (
                    <div key={el.id} style={el.style} onClick={() => {}}></div>
                ))}
                {/*<div className={s.project1} onClick={() => {}}></div>*/}
                {/*<div className={s.project2} onClick={() => {}}></div>*/}
                {/*<div className={s.project3} onClick={() => {}}></div>*/}
                {/*<div className={s.project4} onClick={() => {}}></div>*/}
                {/*<div className={s.project5} onClick={() => {}}></div>*/}
                {/*<div className={s.project6} onClick={() => {}}></div>*/}
                {/*<div className={s.project7} onClick={() => {}}></div>*/}
                {/*<div className={s.project8} onClick={() => {}}></div>*/}
            </div>
        </div>
        // <Slider album={collection} />
    )
};
