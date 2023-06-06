import React from 'react';
import picture1 from 'common/img/neom-RqfFauPXJx0-unsplash.jpg'
import picture2 from 'common/img/museum-of-new-zealand-te-papa-tongarewa-7Rv-coHjxTM-unsplash.jpg'
import picture3 from 'common/img/jonathan-notay-e_hq1euh5lI-unsplash.jpg'
import {Slider} from "common/components/Slider";

export type AlbumType = {
    id: number
    url: string
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

export const Projects = () => {
return (
    <Slider album={collection} />
)
};
