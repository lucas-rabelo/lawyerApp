import { HeaderPage } from '@components/Layouts/HeaderPage';
import { LawyerList } from '@components/Lists/LawyerList';

import {
    Container
} from './styles';

export function FindLawyer() {
    return(
        <Container>
            <HeaderPage title="Find Lawyer" />
            <LawyerList />
        </Container>
    );
}