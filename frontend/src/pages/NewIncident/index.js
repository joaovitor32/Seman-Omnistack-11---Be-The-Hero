import React from 'react';

import './style.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

const NewIncident = props => {
    return (<div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="be the hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />Voltar para home</Link>
            </section>
            <form>
                <input placeholder="Título do caso..." />
                <textarea placeholder="Descrição"></textarea>
                <input placeholder="Valor"/>
                <button className="button" type="submit ">Cadastrar</button>
            </form>
        </div>
    </div>)
}

export default NewIncident;