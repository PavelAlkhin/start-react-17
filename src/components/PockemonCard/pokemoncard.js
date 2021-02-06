// import { useState } from 'react';
import cn from 'classnames'
import carBackPic from "../../assets/card-back-side.jpg";
import s from "./pokemon.module.css";

const PokemonCard = ({id, name, img, type, values, active, onclickPokemon}) => {

    const onClickHandle = () => {

        onclickPokemon && onclickPokemon(id);
        console.log("###id:"+ id );
        console.log("@@@isActive:"+active)


    }

    // let act = false
    //
    // idSate.filter(({key}) => key === id).forEach(v => { act = v.isActive; });

    // console.log('!!!!!!!!!!idSate:'+{ ...id })

    return (
        <div className={s.root} onClick={onClickHandle} >
            <div className={cn(s.pokemonCard, {
                [s.active] : active
            })} >
                <div className={s.cardFront}>
                    <div className={`${s.wrap} ${s.front}`}>
                        <div className={`${s.pokemon} ${s[type]}`}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}></div>
                                <div className={cn(s.count, s.right)}>{values.right}</div>
                                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                                <div className={cn(s.count, s.left)}>{values.left}</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s[type]}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>
                        <img src={carBackPic} alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonCard;