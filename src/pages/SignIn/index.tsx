import React, { FunctionComponent } from 'react';

import { Container, Image, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: FunctionComponent = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
