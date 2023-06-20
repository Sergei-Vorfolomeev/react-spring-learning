import React from 'react';
import s from "./MainPage.module.scss";
import {Navbar} from "common/components/navbar/Navbar";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

export const MainPage = () => {
    return (
        <section className={s.app}>
            <Navbar />
            <div className={s.animation}>
                <Parallax pages={2} style={{top: '0', left: '0'}}>
                    <ParallaxLayer offset={0} speed={-0.7} >
                        <div className={s.animationLayer} id={s.skyLayer} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-0.4}>
                        <div className={s.nameContainer}>
                            <h1 id={s.name}>Artem Pchemyan</h1>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={-0.15}>
                        <div className={s.animationLayer} id={s.houseLayer} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0}>
                        <div className={s.animationLayer} id={s.groundLayer} />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0}>
                        <div className={s.animationLayer} id={s.grassLayer} />
                    </ParallaxLayer>
                </Parallax>
            </div>
        </section>
    );
};
