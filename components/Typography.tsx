import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface TypographyProps extends TextProps {
  size?: number;
  color?: string;
  fontWeight?: string;
  paddingLeft?: string;
  alignSelf?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const Typography = styled.Text<TypographyProps>`
  ${({fontWeight}) => fontWeight && `font-weight: ${fontWeight}`};
  ${({size}) => size && `font-size: ${size}px`};
  ${({color}) => color && `color: ${color}`};
  ${({paddingLeft}) => paddingLeft && `padding-left: ${paddingLeft}px`};
  ${({paddingTop}) => paddingTop && `padding-top: ${paddingTop}px`};
  ${({paddingBottom}) => paddingBottom && `padding-bottom: ${paddingBottom}px`};
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf}`};
`;

export default Typography;
