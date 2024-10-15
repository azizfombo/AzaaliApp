import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function Patienter3minutes() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/imagesAzaali/MPO.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>PATIENTEZ 3 MINUTES</Text>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.navButton} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('BouleDansEau')
                }}>
                    <Text style={styles.navText}>◀</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => {
                    // @ts-ignore
                    navigation.navigate('ResultatTestPorosite')
                }}>
                    <Text style={styles.navText}>▶</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4882d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: "400",
        textAlign: 'center',
        marginBottom: 30,
        color: '#000',
    },
    option: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    selectedText: {
        fontSize: 16,
        color: '#b4882d',
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
        width: 250,
        height: 250,
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

