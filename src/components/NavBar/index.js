// import {useState} from 'react';
import cn from 'classnames';
import st from './style.module.css';

const NavBar = ( { isActBurg, onClickBurger } ) => {

    const onclickHandle = () => {
        onClickBurger && onClickBurger()
    }

    return (
        <nav id={st.navbar}>
            <div className={st.navWrapper}>
                <p className={st.brand}>
                    LOGO
                </p>
                <a className={cn(st.menuButton, {[st.active] : isActBurg})} href="#/" onClick={onclickHandle} >
                    <span  />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;