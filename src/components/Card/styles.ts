import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 105px;
  margin: 4.5px 0;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;
  align-items: center;
  padding: 20px 28px;

  background: rgba(199, 199, 199, 0.2);
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-size: 20px;
  color: #000000;
  font-family: 'Lato-Bold';
`;
export const Img = styled.Image`
  width: 64px;
  height: 64px;

  margin-right: 30px;
`;
