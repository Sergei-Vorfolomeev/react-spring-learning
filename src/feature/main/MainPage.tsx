import React from 'react';
import s from "./MainPage.module.scss";
import universeVideo from "common/video/video.mp4";

export const MainPage = () => {
    return (
        <section className={s.app}>
            <div className={s.videoContainer}>
                <video className={s.video} autoPlay muted loop>
                    <source src={universeVideo} type='video/mp4'/>
                </video>
            </div>
            <div className={s.glassContainer}>
                <div className={s.glass}></div>
            </div>
        </section>
    );
};
