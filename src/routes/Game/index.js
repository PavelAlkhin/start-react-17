import POKEMONS_ from "../../components/PockemonCard/data.json";
import PokemonCard from "../../components/PockemonCard/pokemoncard";
import { useState } from 'react';

const GamePage = ({ gangePageButton }) => {

    const [items, setItems] = useState(POKEMONS_)
    const onclickPokemon = (id) => {

        // let updatedList = items
        for(var i = 0; i < items.length; i++) {
            if( items[i].id === id) {
                items[i].active = items[i].active ? false : true;
                console.log("@@@(item.active:"+items[i].active);
            }
        }
        setItems([...items]);

    }

    const handleClick = () => {
        gangePageButton && gangePageButton('app')
    }

    return (
        <>
            <div className="flex">
                {
                    items.map((item) => <PokemonCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        type={item.type}
                        values={item.values}
                        // isActive={item.id===idd ? !item.isActive : item.isActive}
                        active={item.active}
                        onclickPokemon={onclickPokemon}
                    />)
                }
            </div>

            <div>
                This is game page
                <button onClick={ handleClick }>
                    Back to main page
                </button>
            </div>
        </>
    )
}

export default GamePage;