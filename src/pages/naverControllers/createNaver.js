import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {MdKeyboardArrowLeft} from 'react-icons/md';

import './styles.css'

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Alert from '../../Components/Alert';

import api from '../../services/api';

function NaverOptions(props){

    const [alertConfig, setAlertConfig] = useState({
        visible: false,
        title: "",
        message: "",
        buttons: "",
    });

    const [name, setName] = useState('Jose');
    const [job_role, setJob_role] = useState('Dev');
    const [admission_date, setAdmission_date] = useState('10/04/2020');
    const [birthdate, setBirthdate] = useState('05/10/2003');   
    const [project, setProject] = useState('Project Frontend Test');
    const [url, setUrl] = useState('https://ibcdn.canaltech.com.br/J8C9xiYBlDcfeTZrFl6rNBtYhMU=/138x138:5315x3052/512x288/smart/i321928.jpeg');

    function handleCreateNewNaver() {

        if (name && job_role && admission_date && birthdate && project && url) {

            const data = {
                job_role,
                admission_date,
                birthdate,
                project,
                name,       
                url
            }

            api.post('/navers', data, {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            })
            .then(response => {
                if (response.status >= 200 && response.status < 300){

                    const alertConfig = {
                        visible: true,
                        title: "Naver criado",
                        message: "Naver criado com Sucesso!",
                        buttons: null,
                    }
                    setAlertConfig(alertConfig);
                }
            })
            .catch(error => {
                alert(error);
                console.log(error);
            })
        } else {
            alert('erro, campo em branco')
        }

        
    }

    return (
        <div className="container">
        <div className="content">
            <div className="contentHeader">
                <Link to="/"><MdKeyboardArrowLeft size={24} /> </Link>
                <h2>Adicionar Naver</h2>
            </div>

            <div className="contentBody">        
                <Input 
                    label="Nome" 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={e=>{setName(e.target.value)}} 
                />

                <Input 
                    label="Cargo" 
                    type="text" 
                    placeholder="Cargo" 
                    value={job_role}
                    onChange={e=>{setJob_role(e.target.value)}} 
                />

                <Input 
                    label="Idade" 
                    type="text" 
                    placeholder="Idade" 
                    value={birthdate}
                    onChange={e=>{setBirthdate(e.target.value)}}  
                />

                <Input 
                    label="Tempo de empresa" 
                    type="text" 
                    placeholder="Tempo de empresa" 
                    value={admission_date}
                    onChange={e=>{setAdmission_date(e.target.value)}} 
                />

                <Input 
                    label="Projetos que participou" 
                    type="text" 
                    placeholder="Projetos que participou" 
                    value={project}
                    onChange={e=>{setProject(e.target.value)}} 
                />

                <Input 
                    label="URL da foto do Naver" 
                    type="text" 
                    placeholder="URL da foto do Naver" 
                    value={url}
                    onChange={e=>{setUrl(e.target.value)}} 
                />  
                
            </div>

            <div className="contentFooter">
                <Button onClick={()=>{handleCreateNewNaver()}} >Salvar</Button>
            </div>

            <Alert
                messageTitle={alertConfig.title}
                messageText={alertConfig.message}
                visible={alertConfig.visible} setVisible={setAlertConfig} 
            />
            
        </div>
        </div>
    )   
}

export default NaverOptions;