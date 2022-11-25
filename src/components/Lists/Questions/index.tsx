import { QuestionItem } from '@components/Controllers/QuestionItem';

import {
    Container
} from './styles';

export interface QuestionProps {
    id: string;
    title: string;
    tag_id: string;
    created_by: string;
    created_in: string;
}

const QUESTIONS = [
    { id: '1', title: 'O que fazer para poder tirar meu benefício do INSS?', tag_id: 'Trabalhista', created_by: 'Lucas', created_in: '2022-11-25T10:00:00' },
    { id: '2', title: 'O que fazer caso seja testemunha de um crime?', tag_id: 'Criminalista', created_by: 'André', created_in: '2022-11-26T10:00:00' },
    { id: '3', title: 'Tenho um processo em aberto, onde ver o andamento dele?', tag_id: 'Geral', created_by: 'Cícera', created_in: '2022-11-27T10:00:00' },
    { id: '4', title: 'Fiz uma compra e não gostei, como fazer para ter o reembolso da loja?', tag_id: 'Social', created_by: 'Jorge', created_in: '2022-11-28T10:00:00' },
    { id: '5', title: 'O que fazer para poder tirar meu benefício do INSS?', tag_id: 'Trabalhista', created_by: 'Lucas', created_in: '2022-11-25T10:00:00' },
    { id: '6', title: 'O que fazer caso seja testemunha de um crime?', tag_id: 'Criminalista', created_by: 'André', created_in: '2022-11-26T10:00:00' },
    { id: '7', title: 'Tenho um processo em aberto, onde ver o andamento dele?', tag_id: 'Geral', created_by: 'Cícera', created_in: '2022-11-27T10:00:00' },
    { id: '8', title: 'Fiz uma compra e não gostei, como fazer para ter o reembolso da loja?', tag_id: 'Social', created_by: 'Jorge', created_in: '2022-11-28T10:00:00' }
];

export function Questions() {
    return(
        <Container
            data={QUESTIONS}
            keyExtractor={item => String( item.id )}
            renderItem={({ item }) => (
                <QuestionItem data={item} />
            )}
        />
    );
}