import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from "../Components/appComponents/Connexion";
import Accueil from "../Components/appComponents/Accueil";


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Connexion">
                <Stack.Screen name="Connexion" component={Connexion}/>
                <Stack.Screen name="Accueil" component={Accueil}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
