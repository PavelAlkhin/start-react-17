import l from "./layout.module.css"

const Layout = (props) => {

    const classs = l.desc + ' ' + l.full;

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
                    </div>
                    <div className={classs}>
                        <p>{ props.desc }</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout