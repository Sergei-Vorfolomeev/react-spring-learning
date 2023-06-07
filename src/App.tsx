import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "feature/main/MainPage";
import {Projects} from "feature/projects/Projects";
import s from 'App.module.scss'
import {Slider} from "common/components/Slider";

export function App() {

    return (
        <div className={s.app}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/projects'} element={<Projects/>}/>
                <Route path={'/projects/:projectId'} element={<Projects />}/>

            </Routes>
        </div>
    )
}