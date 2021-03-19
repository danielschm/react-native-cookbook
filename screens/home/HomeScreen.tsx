import * as React from 'react';

import {Separator, Container} from '../../components/Layout';
import {Text, Title} from '../../components/Basic';
import {observer} from "mobx-react";
import {useRootStore} from "../../providers/RootStoreProvider";

export const HomeScreen = observer(function HomeScreen() {
    const theme = useRootStore().theme;

    return (
        <Container theme={theme}>
            <Title theme={theme}>Home</Title>
            <Separator theme={theme}/>
        </Container>
    );
});

