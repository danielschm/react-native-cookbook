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
        backgroundColor: props.theme.getColor("background")
    }} {...props}/>
}

export function Separator(props: ViewProps) {
    return <DefaultView style={[{
        backgroundColor: props.theme.getColor("softer"),
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
            <View theme={props.theme} style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <Text theme={props.theme}>{label}</Text>
            </View> : undefined}
        {children}
    </View>;
}

export function FormContainer(props: ViewProps) {
    const {children, ...otherProps} = props;
    return <View theme={props.theme} style={{
        borderTopWidth: 1,
        paddingHorizontal: 15,
        borderColor: getThemeColor("softer")
    }}>
        {children}
    </View>;
}