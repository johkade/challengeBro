import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ROUTES from './routes';

import useWrappedTheme from '../style/theme/hooks/useWrappedTheme';
import CategoryScreen from "../screens/categoryScreen/categoryScreen";

const RootStackNav = createNativeStackNavigator();
const navConfig = {headerShown: false};

const RootStack = () => {
    const wrappedTheme = useWrappedTheme();

    return (
            <NavigationContainer theme={wrappedTheme}>
                <RootStackNav.Navigator screenOptions={navConfig}>
                    <RootStackNav.Screen name={ROUTES.CATEGORY_SCREEN} component={CategoryScreen} />
                </RootStackNav.Navigator>
            </NavigationContainer>

    );
};

export default RootStack;
