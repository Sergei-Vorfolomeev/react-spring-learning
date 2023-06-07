import {createSlice} from "@reduxjs/toolkit";
import picture1 from "common/img/neom-RqfFauPXJx0-unsplash.jpg";
import picture2 from "common/img/museum-of-new-zealand-te-papa-tongarewa-7Rv-coHjxTM-unsplash.jpg";
import picture3 from "common/img/jonathan-notay-e_hq1euh5lI-unsplash.jpg";
import {v1} from "uuid";

export type AlbumType = {
    id: number
    url: string
}
export type ProjectsType = {
    id: string
    title: string
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

const initialState = [
    {
        id: v1(),
        title: 'Food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit.',
        album: collection,
        style: {gridArea: 'project1', background: '#ffc504'}
    },
    {
        id: v1(),
        title: 'Clubs',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project2', background: '#c2f50a'}
    },
    {
        id: v1(),
        title: 'Private',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project3', background: '#77c7c8'}
    },
    {
        id: v1(),
        title: 'Official',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project4', background: '#b18ad0'}
    },
    {
        id: v1(),
        title: 'Lessons',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project5', background: '#adf1fc'}
    },
    {
        id: v1(),
        title: 'Street',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project6', background: '#ff9696'}
    },
    {
        id: v1(),
        title: 'Art',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project7', background: '#76b2fc'}
    },
    {
        id: v1(),
        title: 'Other',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sedsuscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo, nobis quidem repellat sed suscipit.',
        album: collection,
        style: {gridArea: 'project8', background: '#feffc9'}
    },
] as ProjectsType[]


const slice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}
})

export const projectsReducer = slice.reducer
export const projectsActions = slice.actions