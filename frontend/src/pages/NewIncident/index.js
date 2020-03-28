import React, { useState } from 'react';


import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'


const NewIncident = props => {
    
    const ong_id = localStorage.getItem('ongId')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()

    const handleNewIncident = async e => {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        console.log(data)
        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization:ong_id
                }
            })
            history.push('/profile')
        } catch (err) {
            alert('erro ao cadastrar caso')
        }
    }


    return (<div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="be the hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />Voltar para home</Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input
                    onChange={e => setTitle(e.target.value)} value={title} placeholder="Título do caso..."
                />
                <textarea
                    onChange={e => setDescription(e.target.value)} value={description} placeholder="Descrição"></textarea>
                <input
                    onChange={e => setValue(e.target.value)} value={value} placeholder="Valor" />
                <button className="button" type="submit ">Cadastrar</button>
            </form>
        </div>
    </div>)
}

export default NewIncident;