import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PorositeCheveux = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QUELLE EST LA POROSITÉ DE VOS CHEVEUX ?</Text>

            <TouchableOpacity onPress={() => setSelectedOption("Faible")} style={styles.option}>
                <Text style={selectedOption === 'Faible' ? styles.selectedText : styles.optionText}>Faible</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedOption('Moyenne')} style={styles.option}>
                <Text style={selectedOption === 'Moyenne' ? styles.selectedText : styles.optionText}>Moyenne</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedOption('Forte')} style={styles.option}>
                <Text style={selectedOption === 'Forte' ? styles.selectedText : styles.optionText}>Forte</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedOption('Je ne sais pas')} style={styles.option}>
                <Text style={selectedOption === 'Je ne sais pas' ? styles.selectedText : styles.optionText}>Je ne sais
                    pas</Text>
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

export default PorositeCheveux;
