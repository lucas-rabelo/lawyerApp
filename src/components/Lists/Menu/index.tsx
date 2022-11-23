import { MenuItem } from '@components/Controllers/MenuItem';

import {
    Container,
    List,
    Title
} from './styles';

const MENU = [
    { id: 'ask_laywer', label: 'Pergunte a um Advogado' },
    { id: 'find_laywer', label: 'Encontre um Advogado' },
    { id: 'conversations', label: 'Minhas conversas' },
    { id: 'appointments', label: 'Meus agendamentos' }
]

export interface MenuProps {
    id: string;
    label: string;
}

export function Menu() {
    return (
        <>
            <Title>O que você procura hoje?</Title>
            <Container>
                <List
                    data={MENU}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <MenuItem />
                    )}
                    numColumns={2}
                />
            </Container>
        </>
    );
}