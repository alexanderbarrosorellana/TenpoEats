import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PADDING_SAFE_AREA = '16px;';

export const SafeArea = styled(SafeAreaView)`
  padding-left: ${PADDING_SAFE_AREA}
  padding-top: ${PADDING_SAFE_AREA}
  padding-right: ${PADDING_SAFE_AREA}
`;
