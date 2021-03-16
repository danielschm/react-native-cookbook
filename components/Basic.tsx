import {Text as DefaultText} from "react-native";
import * as React from "react";
import {ThemeProps, getThemeColor} from "./Themed";

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
    const {style, ...otherProps} = props;
    const color = getThemeColor( 'text');
    return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function Title(props: TextProps) {
    const color = getThemeColor( 'text');
    return <DefaultText style={[{color}, {
        fontSize: 20,
        fontWeight: 'bold',
    }]} {...props} />;
}