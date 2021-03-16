import {View as DefaultView} from "react-native";
import * as React from "react";
import {getThemeColor, ThemeProps} from "./Themed";
import {Text} from "./Basic";

export type ViewProps = ThemeProps & DefaultView['props'];

export function View(props: ViewProps) {
    const {style, ...otherProps} = props;
    const backgroundColor = getThemeColor('background');
    return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function Separator(props: ViewProps) {
    const backgroundColor = getThemeColor('soft');
    return <DefaultView style={[{backgroundColor}, {
        marginVertical: 30,
        height: 1,
        width: '80%'
    }]} {...props} />;
}

export function Container(props: ViewProps) {
    const {style, ...otherProps} = props;
    const backgroundColor = getThemeColor('background');
    return <DefaultView style={[{backgroundColor}, {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }]} {...otherProps} />;
}

export type FormElementProps = {
    label: string
} & ThemeProps & DefaultView['props'];

export function FormElement(props: FormElementProps) {
    const {style, label, children, ...otherProps} = props;
    const backgroundColor = getThemeColor('background');
    return <DefaultView style={[{backgroundColor}, {
        marginVertical: 10,
        marginHorizontal: 20,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row"
    }]} {...otherProps}>
        <View style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <Text style={{
                width: 60,
                textAlign: "right",
            }}>{label}</Text>
        </View>
        {children}
    </DefaultView>;
}

