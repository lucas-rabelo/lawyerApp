import { HeaderPage } from '@components/Layouts/HeaderPage';
import { LawyerInformations } from '@components/Layouts/LawyerInformations';

import {
    Container
} from './styles';

export function LawyerDetails() {
    return(
        <Container>
            <HeaderPage title="Lawyer Details" />
            <LawyerInformations />
        </Container>
    );
}