
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/index.css';
import { Container1, InputSenha, Container2, ContainerForm, P, H1, H2, Label, InputCPF, Button, Form } from '../Style/Login';

const Login = ({ onLoginSuccess }) => {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const[error, setError] = React.useState('')

    function verifaLogin() {
        const dados = {
            cpf,
            senha
        }
        console.log(dados)
        saveDados(dados)
    }



    function preventDefault(event) {
        event.preventDefault();
        if (cpf === '' || senha === '') {
            setError('Preencha os campos vazios')
        } else {
            setError(null)
        }
    }


    const handleLogin = () => {
        if (cpf === '123456789' && senha === 'password') {
            onLoginSuccess();
            navigate('/home');
        } else {
            alert('CPF ou Senha incorretos');
        }
    };

    return (
        <>

            <Container1>
                <H1>Control-Clean</H1>
                <Container2>
                    <P>Plataforma de apoio aos colaboradores na efetuação de suas tarefas.</P>
                </Container2>
            </Container1>
            <Form onSubmit={ preventDefault }>
                <ContainerForm>
                    <H2>Login</H2>
                    <Label htmlFor="cpf">CPF</Label>
                    <InputCPF
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        style={error ? {borderColor: "red"} :{borderColor:"green"}}
                    />
                    <Label htmlFor="senha">SENHA</Label>
                    <InputSenha
                        value={senha}
                        type="password"
                        onChange={(e) => setSenha(e.target.value)}
                        style={error ? {borderColor: "red"} :{borderColor:"green"}}
                    />
                    <Button onClick={handleLogin}>ENTRAR</Button>
                </ContainerForm>
            </Form>
        </>
    );
};

export default Login;
