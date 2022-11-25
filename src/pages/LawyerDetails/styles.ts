import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(10)}px ${RFValue(15)}px; 
    margin-top: ${getStatusBarHeight()}px;

    background-color: ${({ theme }) => theme.colors.background_page};
`;