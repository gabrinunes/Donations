import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../Services/api'


import './styles.css'
export default function NewIncidentUpdate(){
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[picture,setPicture]=useState('')

    const history = useHistory();

    const ongId = localStorage.getItem('ongID')
    const id = localStorage.getItem('updateID')

    async function handleNewIncident(e){
        e.preventDefault();

        const formdData = new FormData();

        formdData.append('title', title)
        formdData.append('description', description)
        formdData.append('picture',picture)

        try{
          await api.put(`donations/${id}`,formdData,{
              headers:{
                  Authorization: ongId,
              }
          })
          history.push('/profile')
        }catch (err){
            alert('Erro ao atualizar doaç,tente novamente')
        }
    }

    return(
        <div className="new-incident-container">
         <div className="content">
             <section>

              <h1>Atualizar sua Doação cadastrada</h1>
              <p>Descreva o item que você deseja doar,para que possa chegar a realmente quem precise</p>
              <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar para Home
              </Link>
             </section>
             <form onSubmit={handleNewIncident}>
              <input 
              placeholder="Titulo do caso"
              value={title}
              onChange={e=> setTitle(e.target.value)}
              />
              <textarea 
              placeholder="Descrição"
              value={description}
              onChange={e=> setDescription(e.target.value)}
              />
              
              <input type="file"
               onChange={e=>setPicture(e.target.files[0])}
              />
              <button className="button" type="submit">Cadastrar</button>
             </form>
         </div>
     </div>
    )
}