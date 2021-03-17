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
              Overview: 'meal',
              Detail: {
                screens: {
                  Info: 'meal/detail/info',
                  Steps: 'meal/detail/steps'
                },
              },
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
