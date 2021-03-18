import {color} from "react-native-elements/dist/helpers";

const colors = {
    light: {
        blue: "rgb(0,122,255)",
        green: "rgb(52,199,89)",
        orange: "rgb(255,149,0)",
        red: "rgb(255,59,48)",
        gray: "rgb(142,142,147)",
        semisoftGray: "rgb(174,174,178)",
        softGray: "rgb(199,199,204)",
        softerGray: "rgb(229,229,234)",
        softestGray: "rgb(242,242,247)"
    },
    dark: {
        blue: "rgb(10,132,255)",
        green: "rgb(48,209,88)",
        orange: "rgb(255,159,10)",
        red: "rgb(255,69,58)",
        gray: "rgb(142,142,147)",
        semisoftGray: "rgb(99,99,102)",
        softGray: "rgb(72,72,74)",
        softerGray: "rgb(44,44,46)",
        softestGray: "rgb(28,28,30)"
    }
}

export default {
    light: {
        text: '#000',
        background: '#fff',
        secondaryText: colors.light.gray,
        semisoft: colors.light.semisoftGray,
        soft: colors.light.softGray,
        softer: colors.light.softerGray,
        softest: colors.light.softestGray,
        tint: colors.light.blue,
        tabIconDefault: colors.light.gray,
        tabIconSelected: colors.light.blue,
        buttonGroupBorder: colors.light.softGray,
    },
    dark: {
        text: '#fff',
        background: '#0a0a0a',
        secondaryText: colors.dark.gray,
        semisoft: colors.dark.semisoftGray,
        soft: colors.dark.softGray,
        softer: colors.dark.softerGray,
        softest: colors.dark.softestGray,
        tint: colors.dark.blue,
        tabIconDefault: colors.dark.gray,
        tabIconSelected: colors.dark.blue,
        buttonGroupBorder: '#fff',
    },
};
