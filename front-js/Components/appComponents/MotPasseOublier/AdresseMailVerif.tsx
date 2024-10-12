import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useState} from "react";

export default function AdresseMailVerif() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log("Conexion avevc ", email);
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('@/assets/imagesAzaali/MPO.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.simpleText}>Vous avez oublié votre mot de passe ?</Text>
            <Text style={styles.simpleText}>Pas de soucis, crées en un autre !</Text>
            <Text></Text>
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Créer un nouveau mot de passe</Text>
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
        borderRadius: 30,
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
    simpleText: {
        color: '#8c5d2d',
        fontSize: 18,
    },
});