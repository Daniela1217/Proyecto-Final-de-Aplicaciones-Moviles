import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

import { RootStackParams } from '../navigator/StackNavigator'
import { BusinessContext } from '../context/BusinessContext'

type StackNavigation = StackNavigationProp<RootStackParams, 'BusinessScreen'>

const BusinessScreen = () => {

    const { addBusiness } = useContext(BusinessContext);

    const navigation = useNavigation<StackNavigation>();
    
    const [business, setBusiness] = useState({
        name: '',
        type: '',
        phone: '',
        address: '',
        latitude: '',
        longitude: '',
    })

    const [isLoading, setIsLoading] = useState(false);

    const { name, type, phone, address, latitude, longitude } = business;

    const { top } = useSafeAreaInsets();

    const handleChange = ( value: any, form: keyof typeof business) => {
        setBusiness({
            ...business,
            [form]: value
        })
    }

    const showAlert = () => {
        Alert.alert(
            'Successfull',
            'El negocio fue agregado correctamente',
            [
                {
                    text: 'Ok',
                    onPress: () => navigation.pop()
                }
            ]
        )
    }

    const handleAddBusiness = () => {
        setIsLoading(true)
        setTimeout(() => {
            const bussinesObjMapped = {
                ...business,
                latitude: Number(business.latitude),
                longitude: Number(business.longitude)
            }
            addBusiness(bussinesObjMapped)
            showAlert()
            setIsLoading(false)
        }, 1000);
    }
    return (
        <ScrollView>
             <View style={{ ...styles.container, top: top + 20}}>

                <TouchableOpacity style={{ 
                    flexDirection: 'row',
                    alignItems:'center',
                }}
                    activeOpacity={ 0.8 }
                    onPress={ () => navigation.pop() }
                >
                    <Icon name="arrow-back" size={ 40 } color="black" style={{ marginRight: 20 }} />
                    <Text style={ styles.title }>Registro de negocio</Text>
                </TouchableOpacity>

                <View style={ styles.containerInput }>
                    <TextInput 
                        placeholder="Ingrese el nombre"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ name }
                        onChangeText={ (value) => handleChange(value, 'name')}
                    />
                    <TextInput 
                        placeholder="Ingrese el tipo"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ type }
                        onChangeText={ (value) => handleChange(value, 'type')}
                    />
                    <TextInput 
                        placeholder="Ingrese el telefono"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ phone }
                        onChangeText={ (value) => handleChange(value, 'phone')}
                    />
                    <TextInput 
                        placeholder="Ingrese la direcion"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ address }
                        onChangeText={ (value) => handleChange(value, 'address')}
                    />

                    <TextInput 
                        placeholder="Ingrese la latitud"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ latitude.toString() }
                        onChangeText={ (value) => handleChange(value, 'latitude')}
                    />
                    <TextInput 
                        placeholder="Ingrese la longitud"
                        style={ styles.inputStyle }
                        autoCorrect={ false }
                        value={ longitude.toString() }
                        onChangeText={ (value) => handleChange(value, 'longitude')}
                    />

                    { isLoading ? <ActivityIndicator size={ 30 } color="black" /> : (
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ styles.buttonStyle }
                            onPress={ handleAddBusiness }
                        >
                            <Text style={ styles.textButton }>Guardar Negocio</Text>
                        </TouchableOpacity>
                    )}

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
    },
    containerInput: {
        marginTop: 50,
        marginHorizontal: 20,
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.9)',
        fontSize: 20,
        marginBottom: 60,
    },
    buttonStyle: {
        height: 55,
        backgroundColor: '#2271b3',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textButton: {
        fontSize: 20,
        color: 'white',
    }
});

export default BusinessScreen
