import {
    Container,
    IconButton,
    Icon,
    Title
} from './styles';

interface Props {
    title: string;
}

export function HeaderPage({ title }: Props) {
    return(
        <Container>
            <IconButton>
                <Icon />
            </IconButton>
            <Title>{title}</Title>
        </Container>
    );
}