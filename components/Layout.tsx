import {View as DefaultView} from "react-native";
import * as React from "react";
import {getThemeColor, ThemeProps} from "./Themed";

export type ViewProps = ThemeProps & DefaultView['props'];

export function View(props: ViewProps) {
    const {style, ...otherProps} = props;
    const backgroundColor = getThemeColor(props, 'background');
    return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function Separator(props: ViewProps) {
    const backgroundColor = getThemeColor(props, 'background');
    return <DefaultView style={[{backgroundColor}, {
        marginVertical: 30,
        height: 1,
        width: '80%'
    }]} {...props} />;
}

export function Container(props: ViewProps) {
    const {style, ...otherProps} = props;
    const backgroundColor = getThemeColor(props, 'background');
    return <DefaultView style={[{backgroundColor}, {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }]} {...otherProps} />;
}

