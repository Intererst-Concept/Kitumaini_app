import React, { Component } from 'react';
import { useState } from 'react'
import { View, Image, Text, StyleSheet, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class Register extends Component {
    state = {
        sexe: "F"
    }
    openCamera() {
        let options = {
            storageOptions: {
                path: 'image',
                media_type: 'photo'
            },
            includeBase64: true
        };
        launchCamera(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log("QUITTER");
            }
            else if (response.error) {
                console.log("ERREUR");
            }
            else {
                console.log("Bien");
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <TouchableOpacity>
                        <Text style={styles.style_text} > Ajouter un nouveau béneficiare </Text>
                    </TouchableOpacity>
                    <View style={styles.image_view} >
                        {/*<Image style={styles.image_style} source={require('../../Images/logo.png')} />*/}
                    </View>
                    <View style={styles.style_formView} >
                        <View style={styles.inputView}>
                            <TextInput
                                placeholder="Nom"
                                style={styles.textiputstyle}
                                onChangeText={(name) => this._Firstnameinput(name)}
                            ></TextInput>
                            <TextInput
                                placeholder="Post nom"
                                style={styles.textiputstyle}
                                onChangeText={(Pname) => this._postname(Pname)}
                            ></TextInput>
                            <TextInput
                                placeholder="Prenom"
                                style={styles.textiputstyle}
                                onChangeText={(Lname) => this._Lastnameinput(Lname)}
                            ></TextInput>
                            <Picker style={styles.textiputstyle}
                                mode="dropdown"
                                selectedValue={this.state.sexe}
                                onValueChange={(value) => this.setState({ sexe: value })}>
                                <Picker.Item label="Feminin" value="F" />
                                <Picker.Item label="Masculin" value="M" />

                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            placeholder="Lieu de naissance"
                            onChangeText={(lieu_n) => this._Passwordinput(lieu_n)}
                            style={styles.othertextiputstyle}></TextInput>
                        <TextInput
                            placeholder="Numéro téléphone"
                            onChangeText={(phone) => this._Confirinput(phone)}
                            style={styles.othertextiputstyle}></TextInput>
                        <TextInput
                            placeholder="Adresse"
                            onChangeText={(adresse) => this._Email(adresse)}
                            style={styles.othertextiputstyle}></TextInput>
                    </View>
                    <TouchableHighlight style={styles.touchable_style} onPress={() => this.openCamera()}>
                        <View style={styles.styleImagePicker}>
                            <Text style={styles.text_style}>Caméra</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.styleviewTouchable}>
                        <TouchableHighlight style={styles.touchable_style} onPress={() => this.inscription()}>
                            <Text style={styles.text_style}>Ajouter</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image_view: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        backgroundColor: '#f0f0f0',
    },
    image_style: {
        width: 130,
        height: 160,
    },
    style_text: {
        paddingTop: 10,
        marginLeft: 10
    },
    style_imageview: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 20
    },
    style_photo: {
        textAlign: 'center',
        paddingTop: 25
    },
    textiputstyle: {
        borderRadius: 5,
        height: 40,
        paddingLeft: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },
    style_formView: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    inputView: {
        paddingTop: 15,
        flex: 4
    },
    othertextiputstyle: {
        borderRadius: 5,
        height: 37,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 0.5,
        marginBottom: 10
    },
    touchable_style: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 10,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#2fcd8a',
    },
    styleviewTouchable: {
        paddingTop: 7
    },
    styleImagePicker: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        width: 5000,
        height: 100
    }
})

export default Register