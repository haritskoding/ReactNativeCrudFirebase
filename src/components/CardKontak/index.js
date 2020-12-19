import React from 'react';
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const CardKontak = ({ id, kontakItem, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}>
            <View>
                <Text style={styles.nama}>Nama: {kontakItem.nama}</Text>
                <Text style={styles.noHP}>No HP: {kontakItem.nomorHP}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'#65d6ce'} size={25}
                    onPress={() => navigation.navigate('Edit', { id: id })}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'salmon',
        borderRadius: 5,
        marginBottom: 10,
        width: "91%",
        shadowColor: 'salmon',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    icon: {
        marginLeft: 20
    },
    nama: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 15
    },
    noHP: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 15
    }

})
