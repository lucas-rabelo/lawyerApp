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

export const ContainerAvatar = styled.View`
    align-items: center;
    justify-content: center;

    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${RFPercentage(50)}px;
    
    margin-right: ${RFValue(8)}px;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    border-radius: ${RFPercentage(50)}px;
`;

export const GreetingArea = styled.View``;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TypeUser = styled.Text`
    font-family: ${({ theme }) => theme.fonts.complement};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const SignOutButton = styled.TouchableOpacity`
    width: ${RFValue(30)}px;
    height: ${RFValue(50)}px;

    align-items: center;
    justify-content: center;
`;

export const Icon = styled(SignOut).attrs({
    size: RFValue(24)
})``;
