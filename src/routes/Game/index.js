// import POKEMONS_ from "../../components/PockemonCard/data.json";
import PokemonCard from "../../components/PockemonCard/pokemoncard";
import { useState, useEffect } from 'react';
import database from "../../services/firebase";


const GamePage = ({ gangePageButton }) => {

    const [pokemons, setPokemons] = useState({})

    useEffect(()=>{
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });

    },[])

    const onclickPokemon = (id) => {

        // for(var i = 0; i < pokemons.length; i++) {
        //     if( pokemons[i].id === id) {
        //         pokemons[i].active = pokemons[i].active ? false : true;
        //         // console.log("@@@(item.active:"+pokemons[i].active);
        //     }
        // }
        // setPokemons([...pokemons]);

        // setPokemons(prevState => {
        //     return Array.from( prevState, (item) => {
        //         if (item.id ===id){
        //             item.active = true;
        //         }
        //         return item;
        //     } )
        // });

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                // objID - это тот самый непонятный ключ у нашего объекта.
                database.ref('pokemons/'+ item[0]).set({
                    pokemon
                });

                return acc;
            }, {});
        });

    }

    const handleClick = () => {
        gangePageButton && gangePageButton('app')
    }

    const handleClickAddPokemon = () => {

        const newKey = database().ref().child('pokemons').push().key;
        database().ref('pokemons/' + newKey).set(
            {
                abilities: ["blaze", "solar-power"],
                active: false,
                stats: {
                    "hp": 39,
                    "attack": 52,
                    "defense": 43,
                    "special-attack": 60,
                    "special-defense": 50,
                    "speed": 65
                },
                type: "fire",
                img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
                name: "charmander",
                base_experience: 62,
                height: 6,
                id: 4,
                values: {
                    "top": 7,
                    "right": 6,
                    "bottom": 1,
                    "left": 4
                }
            });

    }

    return (
        <>
            <div>
                Add new pokemon
                <button onClick={ handleClickAddPokemon }>
                    Add new pokemon
                </button>
            </div>

            <div className="flex">
                {
                    Object.entries(pokemons).map(([key,{name, img, id, type, values, active}]) =>
                        <PokemonCard
                            key={key}
                            id={id}
                            name={name}
                            img={img}
                            type={type}
                            values={values}
                            isActive={active}
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