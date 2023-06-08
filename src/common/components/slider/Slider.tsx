import React, {useRef, useState} from 'react';
import {animated, useTransition} from "@react-spring/web";
import s from "common/components/slider/Slider.module.scss";
import {AlbumType} from "feature/projects/projectsReducer";

type PropsType = {
    album: AlbumType[]
}

export const Slider = ({album}: PropsType) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const prevIndexRef = useRef(-1)

    const transitions = useTransition(album[activeIndex], {
        from: {opacity: 0, transform: activeIndex > prevIndexRef.current ? 'translateX(100%)' : 'translateX(-100%)'},
        enter: {opacity: 1, transform: 'translateX(0)'},
        leave: {opacity: 0.3, transform: activeIndex > prevIndexRef.current ? 'translateX(-100%)' : 'translateX(100%)'},
        config: {
            duration: 500
        },
        onRest: () => {
            prevIndexRef.current = activeIndex
        }
    })

    // const onClick = () => setActiveIndex((activeIndex + 1) % 3)

    return (
        <div>
            <div className={s.slides}>
                {transitions((style, item) => (
                    <animated.img
                        style={style}
                        src={item.url}
                        className={s.slide}
                    >
                    </animated.img>
                ))}
            </div>
            <div>
                <button onClick={() => setActiveIndex(activeIndex - 1)} disabled={activeIndex === 0} className={s.prevButton}></button>
                <button onClick={() => setActiveIndex(activeIndex + 1)} disabled={activeIndex === album.length - 1} className={s.nextButton}></button>
            </div>
        </div>
    );
};
