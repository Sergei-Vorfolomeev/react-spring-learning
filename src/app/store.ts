import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {projectsReducer} from "feature/projects/projectsReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    projects: projectsReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector