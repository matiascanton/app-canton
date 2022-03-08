import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import List from '../screen/List';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <BottomTabs.Navigator initialRouteName="Home">
            <BottomTabs.Screen
                name="Home"
                component={Home}
            />
            <BottomTabs.Screen
                name="List"
                component={List}
            />

        </BottomTabs.Navigator>

    );
}

export default TabNavigator;