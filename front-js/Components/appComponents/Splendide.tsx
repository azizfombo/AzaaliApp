import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function Splendide() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/imagesAzaali/Eclat.png')}
                style={styles.logo}
                resizeMode="contain"
            />


            <Text style={styles.title}>Splendide !</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.simpleText}>Votre e-mail a été confirmée avec succès.</Text>
            <Text style={styles.simpleText}>Bienvenue chez Azaali, le sanctuaire dédié à la </Text>
            <Text style={styles.simpleText}>beauté singulière de vos cheveux.</Text>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                // @ts-ignore
                navigation.navigate('Connexion')
            }}>
                <Text style={styles.loginButtonText}>Page de Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                // @ts-ignore
                navigation.navigate('Porosite')
            }}>
                <Text style={styles.loginButtonText}>Test de Porosité</Text>
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
        fontSize: 16,
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