import React, {useState} from 'react';
import s from './Navbar.module.scss'
import {useTrail, animated} from "react-spring";
import {NavLink} from "react-router-dom";
import {useSpring} from "@react-spring/web";

type PropsType = {
    color: string
}

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [{title: 'Main', link: '/'}, {title: 'About', link: '/about'}, {title: 'Portfolio', link: '/projects'},]
    const clientWidth = document.body.clientWidth

    const animation = useTrail(menuItems.length, {
        config: {
            mass: 3,
            tension: 2000,
            friction: 200,
        },
        from: {
            transform: 'translateY(-200px)',
            opacity: 0,
        },
        to: {
            transform: isOpen ? 'translateY(0px)' : 'translateY(-200px)',
            opacity: 1,
        }
    })
    const animationForMobileScreen = useTrail(menuItems.length, {
        config: {
            mass: 3,
            tension: 2000,
            friction: 200,
            duration: 200
        },
        from: {
            transform: 'scale(0)',
            display: 'none'
        },
        to: {
            transform: isOpen ? 'scale(1)' : 'scale(0)',
            opacity: 1,
            display: isOpen ? 'inline-block' : 'none'
        }
    })
    const popupMenu = useSpring({
        config: {
            duration: 100
        },
        from: {
            height: '0px'
        },
        to: {
            height: isOpen ? '100px' : '0px'
        }
    })
    const popupMenuForMobileScreen = useSpring({
        config: {
            duration: 150
        },
        from: {
            width: '0px',
            height: '100vh'
        },
        to: {
            width: isOpen ? '100%' : '0px',
            height: '100vh'
        }
    })

    // if (isOpen) {
    //     document.body.style.overflow = 'hidden'
    // }

    return (
        <nav className={s.navbar}>
            <div className={s.buttonContainer}>
                <button onClick={() => {
                    setIsOpen(!isOpen)
                }}>Menu
                </button>
            </div>
            <animated.div style={clientWidth > 600 ? popupMenu : popupMenuForMobileScreen} className={s.menuItemContainer}>
                {clientWidth > 600
                    ? animation.map((props, index) => (
                   <animated.p
                       key={index}
                       style={props}
                       className={s.menuItem}
                   >
                       <NavLink to={menuItems[index].link}>
                           {menuItems[index].title}
                       </NavLink>
                   </animated.p>
                ))
                    : animationForMobileScreen.map((props, index) => (
                        <animated.p
                            key={index}
                            style={props}
                            className={s.menuItem}
                        >
                            <NavLink to={menuItems[index].link}>
                                {menuItems[index].title}
                            </NavLink>
                        </animated.p>
                    ))
                }
            </animated.div>
        </nav>
    );
};
