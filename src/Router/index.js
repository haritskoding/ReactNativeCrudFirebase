import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, TambahKontak, EditKontak } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen} />
            <Stack.Screen name="Tambah"
                options={{ headerShown: false }}
                component={TambahKontak} />
            <Stack.Screen name="Edit"
                options={{ headerShown: false }}
                component={EditKontak} />
        </Stack.Navigator>
    )
}

export default Router
