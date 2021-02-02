import { useState } from 'react';
import Menu from '../Menu';
import NavBar from "../NavBar";

const MenuHeader = () => {

    const [isActBurg, setActBurg] = useState(false);
    const [isActMenu, setActMenu] = useState(false);
    const [isDeactiveMenu, setDeactiveMenu] = useState(true);

    const onClickBurger = () => {
        setActBurg(!isActBurg);
        setActMenu(!isActBurg);
        setDeactiveMenu(isActBurg);
        console.log('#onClickBurger:' +isActBurg)
    }

    const onClickMenu = () => {
        // setActMenu(!isActMenu);
        // setDeactiveMenu(!isActMenu);
    }

    return (
        <>
            <Menu isActMenu={isActMenu} isDeactive={isDeactiveMenu} onClickMenu={onClickMenu}/>
            <NavBar isActBurg={isActBurg} onClickBurger={onClickBurger}/>
        </>
    )
}

export default MenuHeader;