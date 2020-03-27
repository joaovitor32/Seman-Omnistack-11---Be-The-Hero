import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './style.css'

const Profile = props => {

    const ongName = localStorage.getItem('ongName')
    const ong_id = localStorage.getItem('ongId')
    const history=useHistory();

    const [incidents, setIncidents ] = useState([])

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization:ong_id
            }
        }).then(response => {
            console.log(response.data)
            setIncidents(response.data)
        })
    }, [ong_id])

    const handleDeleteIncident =async id=>{
        try{
            await api.delete(`incidents/${id}`,{
                headers: {
                    authorization: ong_id
                }
            })
            setIncidents(incidents.filter(incident=>incident.id!==id));
        }catch(err){
            alert('Erro ao deletar caso')
        }
    }

    const handleLogout = ()=>{
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new" >Cadastrar Novo Caso</Link>
                <button onClick={()=>handleLogout()} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos cadastrados:</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>Caso:</strong>
                            <p>{incident.title}</p>

                            <strong>Descrição:</strong>
                            <p>{incident.description}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pr-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</p>

                            <button onClick={()=>handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Profile;