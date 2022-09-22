import styled from 'styled-components/native';
import {ViewProps, FlexAlignType} from 'react-native';

const HEADER_PADDING = '16px';
export const HeaderContainer = styled.View`
  padding-left: ${HEADER_PADDING};
  padding-right: ${HEADER_PADDING};
`;

export const HeaderSection = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  height: 80px;
  width: 100%;
`;

interface ContainerProps extends ViewProps {
  marginRight?: number;
  marginLeft?: number;
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  width?: string;
}

export const Container = styled.View<ContainerProps>`
  ${({marginRight}) => marginRight && `margin-right: ${marginRight}px;`}
  ${({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
  ${({marginLeft}) => marginLeft && `margin-left: ${marginLeft}px;`}
  width: 30%;
`;

interface SparkWrapperProps extends ViewProps {
  paddingTop?: number;
  paddingLeft?: number;
  rotate?: number;
}

export const SparkWrapper = styled.View<SparkWrapperProps>`
  ${({paddingTop}) => paddingTop && `padding-top: ${paddingTop}%`};
  ${({paddingLeft}) => paddingLeft && `padding-left: ${paddingLeft}%`};
  ${({rotate}) => rotate && `transform: rotate(${rotate}deg)`};
`;

export const SearchIconWrapper = styled.Pressable`
  width: 24px;
  height: 24px;
`;

export const LogoSection = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  right: 50px;
`;

interface ImageWrapperProps extends ViewProps {
  zIndex: number;
  left?: number;
  top?: number;
}

export const ImageWrapper = styled.View<ImageWrapperProps>`
  ${({zIndex}) => `z-index: ${zIndex}`};
  ${({left}) => left && `left: ${left}px`};
  ${({top}) => top && `top: ${top}px`};
`;

export const RightContainer = styled.View`
  justify-content: space-between;
  right: 15px;
  padding-bottom: 8px;
`;
