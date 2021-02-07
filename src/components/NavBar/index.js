// import {useState} from 'react';
import cn from 'classnames';
import st from './style.module.css';

const NavBar = ( { isOpen, bgActive = false, onClickBurger } ) => {

    const onclickHandle = () => {
        onClickBurger && onClickBurger()
    }

    return (
        <nav id={st.navbar} className={cn({
            [st.bgActive] : bgActive
        })}>
            <div className={st.navWrapper}>
                <p className={st.brand}>
                    LOGO
                </p>
                <div className={cn(st.menuButton, {
                    [st.active] : isOpen
                })}
                     onClick={onclickHandle}
                >
                    <span  />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;