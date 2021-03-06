import React, { Component } from 'react';
import styled from 'styled-components';

import UserAvatar from '../assets/img/user.png';

const InfoComponent = (props) => (
  <Wrapper>
    <StudentHeader>
      <StudentImage />
      <StudentName>{props.studentName}</StudentName>
    </StudentHeader>
    <StudentInfo>
      <InfoSection>
        <Title>Name</Title>
        <Info>{props.studentName}</Info>
      </InfoSection>
      <InfoSection>
        <Title>Description</Title>
        <Info>{props.studentDescription}</Info>
      </InfoSection>
    </StudentInfo>
  </Wrapper>  
);

export default InfoComponent;

const Wrapper = styled.View`
  flex: 1;
`;

const StudentHeader = styled.View`
  flex: 1;
  backgroundColor: #00AB64;
  alignItems: center;
  justifyContent: center;
`;

const Title = styled.Text`
  paddingTop: 15;
  fontWeight: bold;
`;

const InfoSection = styled.View`
  borderBottomWidth: 1;
  borderColor: #B4C0C8;
`;

const Info = styled.Text`
  color: #B4C0C8;
  paddingVertical: 10;
`;

const StudentName = styled.Text`
  fontWeight: bold;
  fontSize: 18;
  color: #FFFFFF;
  paddingTop: 5;
`;

const StudentInfo = styled.View`
  flex: 2;
  paddingHorizontal: 15px;
  backgroundColor: #FFFFFF;
`;

const StudentImage = styled.Image.attrs({
  source: UserAvatar,
})`
  height: 80;
  width: 80;
  borderWidth: 2;
  borderRadius: 40;
`;