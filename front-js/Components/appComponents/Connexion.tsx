import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from "@expo/vector-icons";
import * as Network from 'expo-network';

export default function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();

    // Vérifier si l'utilisateur est déjà connecté
    useEffect(() => {
        const checkSession = async () => {
            const userSession = await AsyncStorage.getItem('userSession');
            if (userSession) {
                console.log("Utilisateur déjà connecté");
                // @ts-ignore
                navigation.navigate('Accueil');
                console.log(userSession);
            }
        };
        checkSession();
    }, []);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erreur de saisie", "Veuillez remplir tous les champs.");
            return;
        }

        try {
            // Obtenez l'adresse IP
            const ipAddress = await Network.getIpAddressAsync();
            console.log("Adresse IP locale : ", ipAddress);

            const response = await fetch(`http://192.168.0.102:8080/utilisateur/connecterUtilisateur`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    const {motDePasse, ...dataNoPassword} = data;
                    await AsyncStorage.setItem('userSession', JSON.stringify(dataNoPassword));
                    // @ts-ignore
                    navigation.navigate('Accueil');
                } else {
                    Alert.alert("Erreur d'authentification", "Email ou mot de passe incorrect.");
                }
            } else {
                Alert.alert("Erreur de connexion", "Une erreur est survenue lors de la connexion.");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion : ", error.stack);
            Alert.alert("Erreur serveur", "Impossible de se connecter au serveur.");
        }
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

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="           Mot de passe"
                    placeholderTextColor="#fff"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    style={styles.eyeIcon}
                >
                    <Ionicons
                        name={isPasswordVisible ? 'eye-off' : 'eye'} // Icône selon l'état
                        size={24}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#d7b354',
        borderRadius: 15,
        marginVertical: 10,
    },
    inputPassword: {
        flex: 1,
        padding: 15,
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    eyeIcon: {
        padding: 10,
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
});