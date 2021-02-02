import { useState } from 'react';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";

const App = () => {

    const [page, setPage] = useState('app');

    const onClickChangePage = (page) => {
        setPage(page);
    };

    switch (page){
        case "app":
            return <HomePage gangePageButton={onClickChangePage} />;
        case "game":
            return <GamePage gangePageButton={onClickChangePage} />;
        default:
            return <HomePage />;

    };

};

export default App;