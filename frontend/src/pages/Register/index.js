import React, { useState } from 'react';
import './style.css';

import api from '../../services/api'

import { Link ,useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

const Register = props => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history=useHistory();

    const   handleRegister =async e => {
        e.preventDefault();
        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso:${response.data.id}`)
            history.push('/')
        }catch(err){
            alert("Deu erro")
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos de sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />Não tenho cadastro</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp..."
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            style={{ width: 80 }}
                        />
                    </div>
                    <button className="button" type="submit ">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}


export default Register;