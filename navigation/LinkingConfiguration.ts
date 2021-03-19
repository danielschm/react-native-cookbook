import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'home',
                        },
                    },
                    Meal: {
                        screens: {
                            Overview: "overview",
                            // Detail: {
                            //     screens: {
                            //         Info: 'info',
                            //         Ingredients: 'ingredients',
                            //         Steps: 'steps',
                            //     },
                            // },
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};
