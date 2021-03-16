import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { Container, Img, Button, ButtonText } from './styles';
import iconSpash from '../../assets/iconSplash1.png';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Img source={iconSpash} />
      <Button onPress={() => navigation.navigate('PhotosList')}>
        <ButtonText>Prosseguir</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
