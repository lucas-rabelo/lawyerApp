import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(15)}px ${RFValue(18)}px;
    background-color: ${({ theme }) => theme.colors.white};

    border-radius: ${RFValue(8)}px;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;