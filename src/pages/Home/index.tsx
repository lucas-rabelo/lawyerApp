import React from 'react';
import { Header } from '@components/Layouts/Header';
import { Menu } from '@components/Lists/Menu';

import {
    Container,
    Title
} from './styles';

export function Home() {
    return (
        <Container>
            <Header type='lawyer' />
            <Menu />
        </Container>
    );
}