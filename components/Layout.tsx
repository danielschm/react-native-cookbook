import {View as DefaultView} from "react-native";
import * as React from "react";
import {getThemeColor, ThemeProps} from "./Themed";
import {Text} from "./Basic";

export type ViewProps = ThemeProps & DefaultView['props'];

export function View(props: ViewProps) {
    const {style, ...otherProps} = props;
    return <DefaultView style={[style]} {...otherProps} />;
}

export function Screen(props: ViewProps) {
    return <View style={{
        height: "100%",
        backgroundColor: getThemeColor("background")
    }} {...props}/>
}

export function Separator(props: ViewProps) {
    return <DefaultView style={[{
        backgroundColor: getThemeColor("softer"),
        height: 1,
    }, props.style]}/>;
}

export function Container(props: ViewProps) {
    const {style, ...otherProps} = props;
    return <View style={[style, {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }]} {...otherProps} />;
}

export type FormElementProps = {
    label?: string
} & ViewProps;

export function FormElement(props: FormElementProps) {
    const {label, children, ...otherProps} = props;
    return <View style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    }} {...otherProps}>
        {label ?
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <Text>{label}</Text>
            </View> : undefined}
        {children}
    </View>;
}

export function FormContainer(props: ViewProps) {
    const {children, ...otherProps} = props;
    return <View style={{
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingHorizontal: 15,
        borderColor: getThemeColor("softer")
    }}>
        {children}
    </View>;
}