import React from 'react';

import { ButtonContainer, Container, Title, Img } from './styles';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CardProps {
  title: string;
  img: ImageSourcePropType;
  id: number;
}

const Card: React.FC<CardProps> = ({ title, img, id }) => {
  const navigation = useNavigation();

  return (
    <ButtonContainer
      onPress={() => navigation.navigate('PhotoProfile', { id })}
    >
      <Container>
        <Img source={img} />
        <Title>{title}</Title>
      </Container>
    </ButtonContainer>
  );
};

export default Card;
