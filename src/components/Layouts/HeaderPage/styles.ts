import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;

    justify-content: flex-start;
`;

export const IconButton = styled.TouchableOpacity`
    padding: ${RFValue(10)}px;
`;

export const Icon = styled(ArrowLeft).attrs({
    size: RFValue(22),
})``;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;