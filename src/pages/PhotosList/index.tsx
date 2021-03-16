import React from 'react';

import { Container, ListContainer } from './styles';
import { data } from '../../mocked/data';
import Card from '../../components/Card';
import { NavigationScreenProp } from 'react-navigation';

interface PhotosListScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const PhotosList: React.FC<PhotosListScreenProps> = () => {
  return (
    <Container>
      <ListContainer>
        {data.map((item) => (
          <Card key={item.id} id={item.id} img={item.img} title={item.title} />
        ))}
      </ListContainer>
    </Container>
  );
};

export default PhotosList;
