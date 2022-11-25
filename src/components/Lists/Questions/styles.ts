import styled from "styled-components/native";
import { FlatList, FlatListProps } from 'react-native';

import { QuestionProps } from '.';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(
    FlatList as new (props: FlatListProps<QuestionProps>) => FlatList<QuestionProps>
).attrs({
    showsVerticalScrollIndicator: false
})`
    margin: ${RFValue(10)}px 0;
`;