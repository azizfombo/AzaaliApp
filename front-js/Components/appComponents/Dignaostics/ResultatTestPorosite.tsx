import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

export default function ResultatTestPorosite() {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PARMI LES FIGURES SUIVANTS, LEQUEL CORRESPOND A VOTRE TES ?</Text>
            <TouchableOpacity onPress={() => setSelectedOption("Poursuivre")} style={styles.option}>
                <Text
                    style={selectedOption === 'Poursuivre' ? styles.selectedText : styles.optionText}>Poursuivre</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedOption('Plus tard')} style={styles.option}>
                <Text style={selectedOption === 'Plus tard' ? styles.selectedText : styles.optionText}>Plus tard</Text>
            </TouchableOpacity>
            <View style={styles.navigation}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>◀</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
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
        fontSize: 18,
        fontWeight: 'bold',
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
});