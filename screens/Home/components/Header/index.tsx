import React from 'react';
import {Image, View} from 'react-native';
import {
  HeaderSection,
  Container,
  SparkWrapper,
  SearchIconWrapper,
  LogoSection,
  ImageContainer,
  ImageWrapper,
  RightContainer,
  HeaderContainer,
} from './styles';
import {Typography} from '../../../../components';
import ProfilePicture from '../../../../assets/images/Elipse50.png';
import MotoBoy from '../../../../assets/images/MotoBoy.png';
import Phone from '../../../../assets/images/Phone.png';
import SparkIcon from '../../../../assets/icons/Spark.svg';
import SearchIcon from '../../../../assets/icons/SearchIcon.svg';
import DotsIcon from '../../../../assets/icons/Dots.svg';

const Header = () => (
  <HeaderContainer>
    <HeaderSection>
      <Image source={ProfilePicture} />
      <Container flexDirection="row" marginLeft={100}>
        <SparkWrapper paddingTop={50} paddingLeft={50} rotate={25}>
          <SparkIcon />
        </SparkWrapper>

        <SparkWrapper paddingTop={30} paddingLeft={10}>
          <SparkIcon />
        </SparkWrapper>
      </Container>

      <Container alignItems="flex-end" marginRight={15}>
        <SearchIconWrapper onPress={() => console.log('pressed search icon')}>
          <SearchIcon />
        </SearchIconWrapper>
        <SparkWrapper paddingTop={30} paddingRight={20} rotate={30}>
          <SparkIcon />
        </SparkWrapper>
      </Container>
    </HeaderSection>

    <LogoSection>
      <View>
        <Typography size={42} color="black" fontWeight="bold">
          Tenpo
        </Typography>
        <Typography size={42} color="#00BAA4" fontWeight="bold">
          Eats
        </Typography>
        <Typography size={12} fontWeight="bold">
          DELIVERY APP
        </Typography>
      </View>

      <ImageContainer>
        <ImageWrapper zIndex={0} left={50} top={10}>
          <Image source={MotoBoy} />
        </ImageWrapper>
        <ImageWrapper zIndex={1}>
          <Image source={Phone} />
        </ImageWrapper>
      </ImageContainer>

      <RightContainer>
        <SparkWrapper paddingTop={65} paddingLeft={20} rotate={40}>
          <SparkIcon />
        </SparkWrapper>

        <DotsIcon />
      </RightContainer>
    </LogoSection>
  </HeaderContainer>
);

export default Header;
