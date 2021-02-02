// import { useState } from 'react';
import cn from 'classnames'

import st from './style.module.css'

const Menu = ( { isActMenu, isDeactive, onClickMenu } ) => {

    const onclickHandle = () => {
        onClickMenu && onClickMenu();
    }

    console.log('======:' + isActMenu)
    return (
     <div className={cn(st.menuContainer, {[st.active] : isActMenu}, {[st.deactive] : isDeactive})} onClick={onclickHandle}>
         <div className={st.overlay}/>
         <div className={st.menuContainer}>
             <ul>
                 <li>
                     <a href="#welcome">
                         HOME
                     </a>
                 </li>
                 <li>
                     <a href="#game">
                         GAME
                     </a>
                 </li>
                 <li>
                     <a href="#about">
                         ABOUT
                     </a>
                 </li>
                 <li>
                     <a href="#contact">
                         CONTACT
                     </a>
                 </li>
             </ul>
         </div>
     </div>
 )

}
export default Menu