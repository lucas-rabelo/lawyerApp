import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};

    padding: ${RFValue(16)}px ${RFValue(16)}px;

    border-radius: ${RFPercentage(25)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    text-align: center;
`;