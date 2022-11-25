
import { HeaderPage } from '@components/Layouts/HeaderPage';
import { Questions } from '@components/Lists/Questions';

import {
    Container,
    CreateQuestion,
    Icon
} from './styles';

export function AskLawyer() {
    return(
        <>
            <Container>
                <HeaderPage title="Ask Lawyer" />

                <Questions />
            </Container>

            <CreateQuestion>
                <Icon />
            </CreateQuestion>
        </>
    );
}