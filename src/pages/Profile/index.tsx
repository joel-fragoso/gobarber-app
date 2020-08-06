import React, { FunctionComponent } from 'react';
import { Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Title } from './styles';

const Profile: FunctionComponent = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>Profile</Title>
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Profile;
