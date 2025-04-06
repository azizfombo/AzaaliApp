import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function MDPReuissi() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleRetourConnexion = () => {
        // @ts-ignore
        navigation.navigate('Connexion');
    };
    const handlePorosite = () => {
        // @ts-ignore
        navigation.navigate('Connexion');
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../../../assets/imagesAzaali/SCNMP.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text></Text>
            <Text style={styles.simpleText}>Félicitations, votre mot de passe a été</Text>
            <Text style={styles.simpleText}>mis à jour avec succès !</Text>
            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleRetourConnexion}>
                <Text style={styles.loginButtonText}>Page de Connexion</Text>
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
        width: 230,
        height: 230,
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