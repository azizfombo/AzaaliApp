import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from "../Components/appComponents/Connexion";
import Accueil from "../Components/appComponents/Accueil";
import AdresseMailVerif from "../Components/appComponents/MotPasseOublier/AdresseMailVerif";
import NouveauMDP from "../Components/appComponents/MotPasseOublier/NouveauMDP";
import MDPReuissi from "../Components/appComponents/MotPasseOublier/MDPReuissi";
import CreateAccount from "../Components/appComponents/CreateAccount";
import FinalTouch from "../Components/appComponents/FinalTouch";
import Splendide from "../Components/appComponents/Splendide";
import BouleDansEau from "../Components/appComponents/Dignaostics/BouleDansEau";
import CommencerTestPorosite from "../Components/appComponents/Dignaostics/CommencerTestPorosite";
import Porosite from "../Components/appComponents/Dignaostics/Porosite";
import PoursuivreDignostic from "../Components/appComponents/Dignaostics/PoursuivreDignostic";
import ResultatTestPorosite from "../Components/appComponents/Dignaostics/ResultatTestPorosite";
import Patienter3minutes from "../Components/appComponents/Dignaostics/Patienter3minutes";
import CodeAdresseMailVerif from "../Components/appComponents/MotPasseOublier/CodeAdresseMailVerif";


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Connexion">
                <Stack.Screen name="Connexion" component={Connexion}/>
                <Stack.Screen name="Accueil" component={Accueil}/>
                <Stack.Screen name="AdresseMailVerif" component={AdresseMailVerif}/>
                <Stack.Screen name="NouveauMDP" component={NouveauMDP}/>
                <Stack.Screen name="MDPReuissi" component={MDPReuissi}/>
                <Stack.Screen name="CreateAccount" component={CreateAccount}/>
                <Stack.Screen name="FinalTouch" component={FinalTouch}/>
                <Stack.Screen name="Splendide" component={Splendide}/>
                <Stack.Screen name="BouleDansEau" component={BouleDansEau}/>
                <Stack.Screen name="CommencerTestPorosite" component={CommencerTestPorosite}/>
                <Stack.Screen name="Porosite" component={Porosite}/>
                <Stack.Screen name="PoursuivreDignostic" component={PoursuivreDignostic}/>
                <Stack.Screen name="ResultatTestPorosite" component={ResultatTestPorosite}/>
                <Stack.Screen name="Patienter3minutes" component={Patienter3minutes}/>
                <Stack.Screen name="CodeAdresseMailVerif" component={CodeAdresseMailVerif}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
