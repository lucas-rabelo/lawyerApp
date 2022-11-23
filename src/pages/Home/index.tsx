import React from 'react';
import { Header } from '@components/Layouts/Header';

import {
    Container,
    Title
} from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            {/* <Menu /> */}
        </Container>
    );
}