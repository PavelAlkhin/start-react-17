import cn from 'classnames'
import l from "./layout.module.css"

const Layout = (props) => {

    let rootStyle = {};

    if(props.useBg === "pic"){
        rootStyle = {backgroundImage: `url(${props.urlBg})`};
    }

    if(props.useBg === "color"){
        rootStyle = {backgroundColor: props.colorBg};
    }

    return(
        <section className={l.root} id={props.id} style={rootStyle}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>{ props.title }</h3>
                        <span className={l.separator}></span>
                        {props.ch}
                    </div>
                    <div className={cn(l.desc, l.full)}>
                        {props.children}
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout