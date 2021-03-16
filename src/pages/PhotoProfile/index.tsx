import React, { useEffect, useState } from 'react';

import {
  Container,
  Img,
  InfosContainer,
  TitleContainer,
  Title,
  TitleDescription,
  DescriptionContainer,
  Description,
} from './styles';

import { data } from '../../mocked/data';
import { useRoute } from '@react-navigation/core';
import { ImageSourcePropType } from 'react-native';

interface DataState {
  title: string;
  img: ImageSourcePropType;
  id: number;
}

interface RouteParams {
  id: number;
}

const PhotoProfile: React.FC = () => {
  const [dataState, setDataState] = useState<DataState>();

  const route = useRoute();
  const { id } = route.params as RouteParams;

  useEffect(() => {
    const filteredData = data.filter((item) => item.id === id)[0];
    setDataState(filteredData);
  }, [id]);

  return (
    <Container>
      {dataState && <Img source={dataState.img} />}
      <InfosContainer style={{ elevation: 25 }}>
        <TitleContainer>
          <TitleDescription>Titulo</TitleDescription>
          <Title>{dataState?.title}</Title>
        </TitleContainer>
        <DescriptionContainer>
          <Description>Descrição</Description>
        </DescriptionContainer>
      </InfosContainer>
    </Container>
  );
};

export default PhotoProfile;
