import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css'
import logoFull from '../../assets/LogoFull.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Alert from '../../Components/Alert';

import api from '../../services/api';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const [alertConfig, setAlertConfig] = useState({});

    const showAlert = (title, message, buttons = null) => {

        const alertConfig = {
            visible: true,
            title,
            message,
            buttons,
        }
        setAlertConfig(alertConfig);
    }

    const HandleSubmitLogin = async () => {

        const data = {
            email,
            password
        }


        api.post('/users/login', data)
        .then(response => {        
            if (response.status === 200){
                sessionStorage.setItem('token', response.data.token);
                history.replace('/');
            } else {
                showAlert(response)
            }
        })
        .catch(error => {
            const {errorCode, name, message} = error.response.data;
            showAlert(`Request Error ${errorCode}`, `${name} - ${message}`);
        });
        
    }


    return (
        <div className="container" >
            <div className="Card">

                <img src={logoFull} alt="Logo-Nave.rs"></img>     

                <Input
                    width="100%"
                    label="E-mail"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    width="100%"
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button width="100%" onClick={() => {HandleSubmitLogin()}}>Entrar</Button>
            </div>

            <Alert
                messageTitle={alertConfig.title} 
                messageText={alertConfig.message}
                buttons={alertConfig.buttons}
                visible={alertConfig.visible} setVisible={setAlertConfig} 
            />

        </div>
    )
}

export default Login;