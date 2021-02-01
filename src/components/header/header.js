import h from "./header.module.css";

const Header = (props) => {
  return (
    <header className={h.root}>
      <div className={h.forest}></div>
      <div className={h.container}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </header>
  );
};

export default Header;
