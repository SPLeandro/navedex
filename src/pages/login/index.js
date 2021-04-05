import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css'

import Input from '../../Components/Input';
import Button from '../../Components/Button/index';
import logoFull from '../../assets/LogoFull.svg';

import api from '../../services/api';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

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
                alert(response)
            }
        })
        .catch(error => {
            alert('Usuário ou senha inválido!')
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
        </div>
    )
}

export default Login;