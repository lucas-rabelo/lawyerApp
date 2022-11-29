import { TouchableOpacityProps } from 'react-native';

import { useAuth } from '@hooks/useAuth';

import {
    Container,
    Label,
    IconUp,
    IconDown
} from './styles';

interface Props extends TouchableOpacityProps {
    statesModal?: boolean;
    title: string;
}

export function Picker({ statesModal = false, title, ...rest }: Props) {

    const { theme } = useAuth()

    return (
        <Container
            activeOpacity={.8}
            {...rest}
        >
            <Label>{title}</Label>
            {
                statesModal ?
                    (<IconUp color={theme.colors.gray} />) :
                    (<IconDown color={theme.colors.gray} />)
            }
        </Container>
    );
}