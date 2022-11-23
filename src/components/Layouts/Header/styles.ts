import styled from 'styled-components/native';
import { SignOut } from 'phosphor-react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const LeftArea = styled.View`
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(45)}px;
    height: ${RFValue(45)}px;

    border-radius: ${RFPercentage(50)}px;
    margin-right: ${RFValue(8)}px;
`;

export const GreetingArea = styled.View``;

export const Name = styled.Text``;

export const TypeUser = styled.Text``;

export const SignOutButton = styled.TouchableOpacity``;

export const Icon = styled(SignOut)``;
