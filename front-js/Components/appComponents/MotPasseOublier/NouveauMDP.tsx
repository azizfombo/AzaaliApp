import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function NouveauMDP() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleMDPReussi = () => {
        // @ts-ignore
        navigation.navigate('MDPReuissi');
    };

    return (
        <View style={styles.container}>

            <Image
                source={require('../../../assets/imagesAzaali/CNMP.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.simpleText}>Entrer votre nouveau mot de passe.</Text>
            <Text></Text>
            <TextInput
                style={styles.input}
                placeholder="Nouveau mot de passe"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmation du mot de passe"
                placeholderTextColor="#fff"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Text></Text>
            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleMDPReussi}>
                <Text style={styles.loginButtonText}>Mettre à jour</Text>
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