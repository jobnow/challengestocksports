import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 32px;
  align-items: center;
  justify-content: center;

  height: 100%;
  background-color: #ffffff;
`;

export const Img = styled.Image`
  width: 263px;
  height: 267px;
`;
export const InfosContainer = styled.View`
  width: 100%;
  height: 170px;

  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  margin-top: 40px;
`;
export const TitleContainer = styled.View`
  height: 50%;
  padding: 16px 23px 21px 23px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-family: 'Lato-Bold';
`;

export const TitleDescription = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: 'Lato-Regular';
  margin-bottom: 3px;
`;

export const DescriptionContainer = styled.View`
  height: 50%;
  border-top-color: #c6c6c6;
  border-top-width: 1px;
  padding: 19px 23px 19px 23px;
`;
export const Description = styled.Text`
  font-style: normal;
  font-size: 14px;
  font-family: 'Lato-Bold';

  color: #000000;
`;
