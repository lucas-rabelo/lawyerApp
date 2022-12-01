import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    isSelected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    padding: ${RFValue(6)}px ${RFValue(12)}px;

    background-color: ${({ theme, isSelected }) =>
        isSelected && theme.colors.background};

    border-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.background : theme.colors.gray};

    border-width: ${RFValue(1)}px;
    border-radius: ${RFPercentage(25)}px;

    margin-right: ${RFValue(8)}px;
`;

export const Title = styled.Text<Props>`
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary : theme.colors.gray};
`;