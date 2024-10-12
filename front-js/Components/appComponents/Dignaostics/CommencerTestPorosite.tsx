import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

export default function CommencerTestPorosite() {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/imagesAzaali/MPO.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>VOUS AVEZ BEAU HYDRATER VAPORISER... VOS CHEVEUX VOUS SEMBLENT TOUJOURS AUSSI
                SECS?</Text>

            <Text style={styles.normalText}> VOUS AVEZ BEAU HYDRATER VAPORISER.VOUS AVEZ BEAU HYDRATER VAPORISER.VOUS
                AVEZ BEAU HYDRATER VAPORISER.VOUS AVEZ BEAU HYDRATER VAPORISER.VOUS AVEZ BEAU HYDRATER VAPORISER... VOS
                CHEVEUX VOUS SEMBLENT TOUJOURS AUSSI SECS?</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
            }}>
                <Text style={styles.loginButtonText}>Commencer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4882d', // Couleur de fond #b4882d
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: "500",
        textAlign: 'center',
        marginBottom: 30,
        color: '#000',
    },
    option: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: '#fff', // Fond blanc des options
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    selectedText: {
        fontSize: 16,
        color: '#b4882d', // Couleur du texte sélectionné (inversée)
        fontWeight: 'bold',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        width: '50%',
    },
    navButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 50,
    },
    navText: {
        fontSize: 18,
        color: '#fff',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 40,
    },
    normalText: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 40,
        color: '#000',
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

