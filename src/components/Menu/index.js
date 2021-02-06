import cn from 'classnames';
import {Link} from 'react-router-dom';

import st from './style.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: '/game',
    },
    {
        title: 'ABOUT',
        to: '/about',
    },
    {
        title: 'CONTACT',
        to: '/contact',
    },
]

const Menu = ( { isOpen } ) => {

    console.log('@@@@: '+isOpen)

    return (
     <div className={cn(st.menuContainer, {
         [st.active]: isOpen === true,
         [st.deactive]: isOpen === false
     })} >
         <div className={st.overlay}/>
         {/*<div className={st.menuContainer}>*/}
         <div>
             <ul>
                 {
                     MENU.map(({title, to}, index)=>(
                         <li>
                             <Link to={to}>
                                 {title}
                             </Link>
                         </li>
                     ))
                 }
             </ul>
         </div>
     </div>
 )

}
export default Menu