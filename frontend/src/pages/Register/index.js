import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../Services/api'
import './styles.css'

export default function Register(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [cnpj,setCnpj]= useState('')
    const [whatsapp,setWhatsapp]=useState('')
    const [city,setCity]=useState('')
    const [uf,setUf]=useState('')

    const history = useHistory();
   async function handleRegister(e){
       e.preventDefault();

       const data = {
           name,
           email,
           cnpj,
           whatsapp,
           city,
           uf,
       };
       
       try{
           
       const response = await api.post('users',data)
       alert(`Seu ID de acesso: ${response.data.id}`)

       
       history.push('/')
       }catch(err){
           console.log(err)
           alert('Erro no cadastro, tente novamente')
       }
    }
    return(
     <div className="register-container">
         <div className="content">
             <section>

              <h1>Cadastro</h1>
              <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem doações</p>
              <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar para Home
              </Link>
             </section>
             <form onSubmit={handleRegister}>
              <input 
              placeholder="Seu Nome"
              value={name}
              onChange={e=> setName(e.target.value)}
              />
              <input 
              type="email" placeholder="E-mail"
              value={email}
              onChange={e=> setEmail(e.target.value)}
              />
              <input 
              placeholder="CPF ou CNPJ"
              value={cnpj}
              onChange={e=> setCnpj(e.target.value)}
              />
              
              <input 
              placeholder=" Informe seu WhatsApp com 91 na frente"
              value={whatsapp}
              onChange={e=> setWhatsapp(e.target.value)}
              />

              <div className="input-group">
                <input
                 placeholder="Cidade"
                 value={city}
                 onChange={e=> setCity(e.target.value)}
                 />
                <input 
                placeholder="UF" style={{width: 80}}
                value={uf}
                onChange={e=> setUf(e.target.value)}
                />
              </div>

              <button className="button" type="submit">Cadastrar</button>
             </form>
         </div>
     </div>
    )
}