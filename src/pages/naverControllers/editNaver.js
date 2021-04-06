import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {MdKeyboardArrowLeft} from 'react-icons/md';

import './styles.css'

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Alert from '../../Components/Alert';

import api from '../../services/api';

function NaverOptions(props){

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [job_role, setJob_role] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [project, setProject] = useState('');
    const [url, setUrl] = useState('');

    const [alertConfig, setAlertConfig] = useState({
        visible: false,
        title: "",
        message: "",
        buttons: "",
    });

    useEffect(()=>{
        const {id, name, job_role, admission_date, birthdate, project, url} = props.location.state;

        function convertDate(date){
            return `${date.substring(8, 10)}/${date.substring(5, 7)}/${date.substring(0, 4)}`
        }

        setId(id);
        setName(name);
        setJob_role(job_role);
        setAdmission_date(convertDate(admission_date));
        setBirthdate(convertDate(birthdate));
        setProject(project);
        setUrl(url);
    },[])
    

    function handleEditNaver() {

        if (name && job_role && admission_date && birthdate && project && url) {

            const data = {
                job_role,
                admission_date,
                birthdate,
                project,
                name,       
                url
            }

            console.log(data);

            api.put(`/navers/${id}`, data, {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response);
                if (response.status >= 200 && response.status < 300){

                    const alertConfig = {
                        visible: true,
                        title: "Naver atualizado",
                        message: "Naver atualizado com Sucesso!",
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
                <h2>Editar Naver</h2>
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
                <Button onClick={()=>{handleEditNaver()}} >Salvar</Button>
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