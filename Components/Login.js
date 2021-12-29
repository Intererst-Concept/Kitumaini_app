import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
        this.emailText = ""
        this.passwordText = ""
    };
    _EmailInput(text) {
        this.emailText = text;
    }

    _PwdInput(pwd) {
        this.passwordText = pwd
    }
    _Sinin() {
        if (this.emailText != '' && this.passwordText != '') {
            let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.emailText) === true) {
                console.log("les identifiants de l'utilisateur " + this.emailText, this.passwordText);
                this.props.navigation.navigate('ACCEUIL');

            }
            else {
                alert("email incorrect");
            }

        }
        else {
            return (
                alert("les champs vides")
            )
        }

    }
    render() {
        return (
            <View style={styles.container}>

                <ScrollView >
                    <View style={styles.image_view}>
                        {/*<Image style={styles.image_style} source={require('../../Images/logo.png')} />*/}
                    </View>
                    <View style={styles.form_view}>

                        <TextInput style={styles.textiputstyle}
                            placeholder="Adresse email"
                            keyboardType="email-address"
                            onChangeText={(text) => this._EmailInput(text)}

                        >
                        </TextInput>

                        <TextInput style={styles.textiputstyle}
                            placeholder="Mot de passe"
                            secureTextEntry={true}
                            onChangeText={(pwd) => this._PwdInput(pwd)}
                        >
                        </TextInput>

                        <TouchableHighlight style={styles.touchable_style} onPress={() => this._Sinin()}>
                            <Text style={styles.text_style}>Se connecter </Text>
                        </TouchableHighlight>

                        <View style={styles.View_other}>
                            <View style={styles.forgot_and_sing_up_style}>
                                <TouchableOpacity>
                                    <View style={styles.forgotpassword_style}>
                                        <Text> Mot de passe  <Text style={styles.text_other} >Oublié ? </Text> </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1
    },

    text_signin: {
        marginLeft: 20,
        paddingTop: 20,
        fontSize: 15,
        color: '#0ec774'
    },
    lineContainer: {
        flexDirection: 'row',
        height: 50,
        width: '50%',
        backgroundColor: '#173a73',
        paddingTop: 10,
        paddingLeft: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginTop: 80,
    },
    image_logofacebook: {
        height: 30,
        width: 30,
        paddingTop: 10,
    },
    image_style: {
        width: 100,
        height: 100,


    },
    image_view: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,

    },

    textiputstyle: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 20,
        elevation: 5,
        backgroundColor: '#f0f0f0',
    },

    touchable_style: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 10,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#2fcd8a'
    },

    forgotpassword_style: {
        padding: 10,
        paddingTop: 10,
        marginLeft: 20,
        marginRight: 20
    },

    form_view: {
        paddingTop: 250
    },

    Continue_with: {
        textAlign: 'center',
        fontWeight: 'bold'

    },

    text_style: {
        fontSize: 15,
        color: '#f0f0f0'
    },

    text_other: {
        marginLeft: 20,
        paddingTop: 20,
        fontSize: 15,
        color: '#0ec774',


    },


    View_other: {
        paddingTop: 10
    },

    connect_with_style: {
        borderRadius: 5,
        backgroundColor: '#2fcd8a'
    },

    continue_style: {
        paddingTop: 3
    },

    image_logogoogle: {
        marginLeft: 100,
        height: 30,
        width: 30,
    },

    forgot_and_sing_up_style: {
        flexDirection: 'row'
    }
})
export default Login