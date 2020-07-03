import React, { FunctionComponent } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Image, Title } from './styles';

const SignIn: FunctionComponent = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button
        onPress={() => {
          console.log('Ok!');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
