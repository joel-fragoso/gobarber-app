import React, { FunctionComponent } from 'react';

import { Container, Image } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: FunctionComponent = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default SignIn;
