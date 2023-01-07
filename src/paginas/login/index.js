import React, {useState} from "react";
import axios from 'axios'

export default function Login( {history} ){
    const [email, set_email] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        const resp = await axios.post('http://localhost:4000/sessao', {email:email})
        const {_id} =  resp.data

        localStorage.setItem('user', _id)

        history.push('dash')
  }
    return (
        <>
            <p>
            Anuncie <strong>seu espaço</strong> com segurança!
            </p>


            <form action="" onSubmit={handleSubmit}>

            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder='Digite seu Email!' value={email} onChange={e => set_email(e.target.value) }/>
            <button className='botao' type="submit">Entrar</button>

            </form>
        </>
    )
}