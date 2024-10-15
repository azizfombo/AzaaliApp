import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useState} from "react";
import {useNavigation} from '@react-navigation/native';

export default function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log("Conexion avevc ", email);
        // @ts-ignore
        navigation.navigate('Accueil');
    };
    const handleForgetPass = () => {
        // @ts-ignore
        navigation.navigate('AdresseMailVerif');
    };
    const handleCreateAccount = () => {
        // @ts-ignore
        navigation.navigate('CreateAccount');
    };
    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/imagesAzaali/logo4txt.png')}
                style={styles.logo}
                resizeMode="contain"
            />


            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={handleForgetPass}>
                    <Text style={styles.linkText}>Mot de passe oublié ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCreateAccount}>
                    <Text style={styles.linkText}>Créer un compte</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.linkText}>Politique de confidentialité & Conditions d'utilisation</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#d7b354',
        borderRadius: 15,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 15,
    },
    linkText: {
        color: '#8c5d2d',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#4a3a1d',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginVertical: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        color: '#8c5d2d',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20,
    },
});