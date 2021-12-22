import * as React from "react";
import {ScrollView} from "react-native";
import {Separator} from "../../../components/Layout";
import {Screen} from "../../../components/Layout";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../../../providers/RootStoreProvider";

export const Steps = observer(function Steps() {
    const theme = useRootStore().theme;

    return (
        <Screen theme={theme}>
            <ScrollView>
                <Separator theme={theme}/>
            </ScrollView>
        </Screen>
    );
});