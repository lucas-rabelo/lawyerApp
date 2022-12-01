import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { HoursProps } from '.';

export const Container = styled(
    FlatList as new (props: FlatListProps<HoursProps>) => FlatList<HoursProps>
)`
  
`;