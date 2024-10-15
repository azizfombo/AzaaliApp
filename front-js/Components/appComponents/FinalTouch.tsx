import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


export default function FinalTouch() {
    const navigation = useNavigation();
    const [codeVerif, setCodeVerif] = useState('');
    const handleSuivant = () => {
        // @ts-ignore
        navigation.navigate('Splendide');
    };
    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/imagesAzaali/colombe.png')}
                style={styles.logo}
                resizeMode="contain"
            />


            <Text style={styles.title}>La touche finale arrive !</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.simpleText}>Un e-mail de confirmation vous a été envoyé,</Text>
            <Text style={styles.simpleText}>veuillez accéder à votre boite mail et saisir </Text>
            <Text style={styles.simpleText}>pour créer un nouveau mot de passe.</Text>
            <Text></Text>

            <TextInput
                style={styles.input}
                placeholder="Code de vérification"
                placeholderTextColor="#fff"
                value={codeVerif}
                onChangeText={setCodeVerif}
                keyboardType="numeric"
            />

            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleSuivant}>
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
    title: {
        color: '#8c5d2d',
        fontSize: 34,
    },
    simpleText: {
        alignItems: "center",
        color: '#8c5d2d',
        fontSize: 17,
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