import React, {useState} from 'react';
import s from './Navbar.module.scss'
import {useTrail, animated} from "react-spring";
import {NavLink} from "react-router-dom";

type PropsType = {
    color: string
}

export const Navbar = ({color}: PropsType) => {

    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [{title: 'Main', link: '/'}, {title: 'About', link: '/about'}, {title: 'Portfolio', link: '/projects'},]

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

    return (
        <nav className={s.navbar}>
            <div className={s.buttonContainer}>
                <button onClick={() => {
                    setIsOpen(!isOpen)
                }}>Menu
                </button>
            </div>
            <div className={s.menuItemContainer}>
                {animation.map((props, index) => (
                   <animated.p
                       key={index}
                       style={props}
                       className={s.menuItem}
                   >
                       <NavLink to={menuItems[index].link} style={{color: color}}>
                           {menuItems[index].title}
                       </NavLink>
                   </animated.p>
                ))}
            </div>
        </nav>
    );
};
