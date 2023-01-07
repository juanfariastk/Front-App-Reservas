import React, {useState, useMemo} from "react";
import axios from "axios";

import camera from '../../assets/camera.svg'
import './styles.css'
export default function CriarLocal({history}){

    const[local, set_local] = useState('')
    const[palavras, set_palavras] = useState('')
    const[preco, set_preco] = useState('')
    const[img_thumb, set_img_thumb] = useState(null)

    const prev = useMemo(
        ()=>{ return img_thumb ? URL.createObjectURL(img_thumb) : null  } ,[img_thumb]
    )

    async function handleSubmit(e){
        e.preventDefault()

        const user_id = localStorage.getItem('user')

        const dados = new FormData()
        dados.append('thumbnail', img_thumb)
        dados.append('company', local)
        dados.append('techs', palavras)
        dados.append('price', preco)


        await axios.post('http://localhost:4000/locais', dados, {headers:{user_id}})
        history.push('/dash')
        //console.log(resposta.data)
    }

    return (

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="company">Local</label>
            <input type="text" id="company" placeholder="Nome do seu Local!" value={local} onChange={e => set_local(e.target.value)}/>

            <label htmlFor="techs">Palavras Chave</label>
            <input type="text" id="techs" placeholder="Digite palavras chaves para seu local!" value={palavras} onChange={e => set_palavras(e.target.value)}/>

            <label htmlFor="price">Preço</label>
            <input type="text" id="price" placeholder="Digite o valor da diária!" value={preco} onChange={e => set_preco(e.target.value)}/>

            <label id="thumb" style={{backgroundImage: `url(${prev})`}} className={img_thumb? 'thumb_set' : ''}>
                <input type="file" onChange={e => set_img_thumb(e.target.files[0])} />
                <img src={camera} alt="" />
            </label>

            <button type="submit" className="botao">Cadastrar</button>
        </form>

        
    )
}