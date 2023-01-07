import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './styles.css';

export default function Dash(){
    const[locais, set_locais]= useState([])

    useEffect(()=>{
        async function carregar_locais(){
            const user_id = localStorage.getItem('user')
            const resposta = await axios.get('http://localhost:4000/dash', {headers: {user_id}})
            set_locais(resposta.data)
        }
        
        carregar_locais()
    }, [] )
    return (
        <>
            <ul className="lista-locais">
                {locais.map(local => (
                    <li key={local._id}>
                        <header style={{ backgroundImage:`url(${local.thumbnail_url})` }}></header>
                        <strong>{local.company}</strong>
                        <span>{local.price ? `RS${local.price}/Dia` : `Gratuito!` }</span>
                    </li>
                ))}
            </ul>

            <Link to="/criar"><button className="botao">Cadastrar Local</button></Link>
        </>
    )
}