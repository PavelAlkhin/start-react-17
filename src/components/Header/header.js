import h from "./header.module.css";

const Header = ({title, desc, onClickButton}) => {

    const handleClick = (page) => {
        onClickButton && onClickButton('game');
    }
    return (
        <header className={h.root}>
            <div className={h.forest}></div>
            <div className={h.silhouette}></div>
            <div className={h.moon}></div>
            <div className={h.container}>
              <h1>{title}</h1>
              <p>{desc}</p>
              <button onClick={handleClick}>
                  Start game
              </button>
            </div>
        </header>
    );
};

export default Header;
