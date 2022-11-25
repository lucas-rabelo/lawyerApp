import { LawyerItem } from '@components/Controllers/LawyerItem';

import {
    Container
} from './styles'

const LAWYERS = [
    { id: '1', name: "Lucas Rabelo", avatar: 'https://github.com/lucas-rabelo.png', type: 'Criminalista' },
    { id: '2', name: "Paulo Rabelo", avatar: 'https://github.com/lucas-rabelo.png', type: 'Social' },
    { id: '3', name: "Henrique Souza", avatar: 'https://github.com/lucas-rabelo.png', type: 'Familiar' },
    { id: '4', name: "Jorge Silva", avatar: 'https://github.com/lucas-rabelo.png', type: 'Social e Criminalista' }
];

export function LawyerList() {
    return(
        <Container 
            data={LAWYERS}
            keyExtractor={item => String( item.id )}
            renderItem={({ item }) => (
                <LawyerItem data={item} />
            )}
        />
    );
}