import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { CardKontak } from '../../components';
import FIREBASE from '../../config/FIREBASE'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kontaks: {},
            kontaksKey: []

        }
    }

    componentDidMount() {
        FIREBASE.database()
            .ref("kontak")
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let kontakItem = { ...data };

                this.setState({
                    kontaks: kontakItem,
                    kontaksKey: Object.keys(kontakItem)
                })
            })
    }

    render() {
        const { kontaks, kontaksKey } = this.state;
        return (
            <View>

                <View style={styles.header}>
                    <View style={{ marginLeft: 12, marginTop: 12, marginBottom: 12 }}>
                        <Text style={{ fontSize: 16 }}>
                            Total:<Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',

                            }}>{kontaksKey.length}</Text>
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Tambah")}
                        style={styles.btnTambah}>
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            Tambah Pegawai
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.garis} />
                <View style={styles.listKontak}>
                    {kontaksKey.length > 0 ? (
                        kontaksKey.map((key) => (
                            <CardKontak id={key}
                                navigation={this.props.navigation}
                                key={key} kontakItem={kontaks[key]} />
                        ))
                    ) : (
                            <Text>Daftar Kosong</Text>
                        )}
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    btnTambah: {
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: 'salmon'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    garis: {
        borderWidth: 1,
        marginBottom: 12,
        width: "85%",
        marginLeft: 25,
        justifyContent: 'center'
    },
    listKontak: {
        marginLeft: 25,
    }
})
