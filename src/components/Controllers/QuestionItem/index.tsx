import { useState } from 'react';

import { QuestionProps } from '@components/Lists/Questions';

import {
    Container,
    Header,
    Title,
    TagId,
    Divider,
    Footer,
    CreatedBy,
    CreatedByArea,
    IconUser,
    CreatedIn,
    CreatedInArea,
    IconDate
} from './styles';

interface Props {
    data: QuestionProps;
}

export function QuestionItem({ data }: Props) {

    const { id, title, tag_id, created_by, created_in } = data;
    const [selected, setSelected] = useState<boolean>(false);

    function handleOnFocus() {
        setSelected(!selected)
    }

    return(
        <Container
            selected={selected}
            onPressIn={handleOnFocus}
            onPressOut={handleOnFocus}
        >
            <Title>{title}</Title>
            <Header>
                <TagId>{tag_id}</TagId>
            </Header>
            <Divider />
            <Footer>
                <CreatedByArea>
                    <IconUser />
                    <CreatedBy>{created_by}</CreatedBy>
                </CreatedByArea>
                <CreatedInArea>
                    <IconDate />
                    <CreatedIn>{created_in}</CreatedIn>
                </CreatedInArea>
            </Footer>
        </Container>
    );
}