import React,{useState} from 'react'

import {Link,useHistory} from 'react-router-dom'

import api from '../../services/api'
import './styles.css';

import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

const Logon = props => {

    const [id,setId]=useState('');
    const history=useHistory();

    const handleLogin=async e=>{
        e.preventDefault();

        try{
            const response=await api.post('sessions',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name)
            history.push('/profile')
        }catch(err){
            alert("Algo deu errado!")
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo-img" />
                <form onSubmit={handleLogin}>
                    <h1>Faça o seu logon</h1>
                    <input placeholder="Sua ID..." 
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
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