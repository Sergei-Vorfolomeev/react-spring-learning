import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "feature/main/MainPage";
import {Projects} from "feature/projects/Projects";

export function App() {

    return (
        <Routes>
            <Route path={'/'} element={ <MainPage /> }/>
            <Route path={'/projects'} element={ <Projects /> }/>
        </Routes>
    )
}