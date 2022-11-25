import { MenuItem } from '@components/Controllers/MenuItem';

import {
    Container,
    List
} from './styles';

import AuctionPng from '@assets/auction.png';
import BalancePng from '@assets/balance.png';
import ConversationPng from '@assets/conversation.png';
import CourthousePng from '@assets/courthouse.png';

const MENU = [
    { id: 'ask_laywer', label: 'Ask a Lawyer', icon: AuctionPng },
    { id: 'find_laywer', label: 'Find a Lawyer', icon: CourthousePng },
    { id: 'conversations', label: 'Messages', icon: ConversationPng },
    { id: 'appointments', label: 'My Lawyer', icon: BalancePng }
]

export interface MenuProps {
    id: string;
    label: string;
    icon: number;
}

export function Menu() {
    return (
        <Container>
            <List
                data={MENU}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <MenuItem key={item.id} data={item} />
                )}
                numColumns={2}
            />
        </Container>
    );
}