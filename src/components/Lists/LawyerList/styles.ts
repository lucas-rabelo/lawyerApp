import styled from "styled-components/native";
import { FlatList, FlatListProps } from 'react-native';
import { LawyerProps } from "@components/Controllers/LawyerItem";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(
    FlatList as new (props: FlatListProps<LawyerProps>) => FlatList<LawyerProps>
).attrs({
    contentContainer: {
        flexGrow: 1,
    }
})`
    margin-top: ${RFValue(10)}px;
`;