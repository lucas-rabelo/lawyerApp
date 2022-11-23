import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { MenuProps } from '.';

export const Title = styled.Text`
    margin-top: ${RFValue(20)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.complement};
    color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`;

export const List = styled(
    FlatList as new (props: FlatListProps<MenuProps>) => FlatList<MenuProps>
).attrs({
    contentContainer: {
        flexGrow: 1,
    }
})`
    margin-top: ${RFValue(15)}px;
`;
