import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { FiPower,FiTrash2 } from 'react-icons/fi'

import './style.css'

const Profile = props => {
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo" />
                <span>Bem vinda, APAD</span>
                <Link className="button" to="/incidents/new" >Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados:</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso test</p>

                    <strong>Descrição:</strong>
                    <p>Descrição test</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>
                    
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>

    )
}

export default Profile;