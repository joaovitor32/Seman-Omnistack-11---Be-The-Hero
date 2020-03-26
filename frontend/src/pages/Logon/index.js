import React from 'react'

import {Link} from 'react-router-dom'

import './styles.css';

import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

const Logon = props => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo-img" />
                <form>
                    <h1>Faça o seu logon</h1>
                    <input placeholder="Sua ID..." />
                    <button className="button" type="submit">Entrar</button>
                </form>
                <Link className="back-link"  to="/register">
                    <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro</Link>
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    )
};

export default Logon;