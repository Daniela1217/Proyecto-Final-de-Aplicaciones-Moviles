import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BusinessItem from '../components/BusinessItem';
import FabButton from '../components/FabButton';
import { BusinessContext } from '../context/BusinessContext';
import { RootStackParams } from '../navigator/StackNavigator';

type StackNavigation = StackNavigationProp<RootStackParams, 'HomeScreen'>

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { businessState } = useContext(BusinessContext);
    const { business } = businessState;

    const navigation = useNavigation<StackNavigation>();

    return (
        <>
            <View style={{ ...styles.container, top: top }}>
                <Image 
                    source={{ uri: 'https://assets.materialup.com/uploads/01d7570f-01ca-4e3a-8dc1-b8a16864f916/preview.jpg' }}
                    style={ styles.imgStyle }
                />

                <View style={{ alignItems: 'center'}}>
                    <FlatList 
                        data={ business }
                        renderItem={ ({ item }) => <BusinessItem business={ item } />}
                        keyExtractor={ (item) => item.name + item.latitude }
                        ItemSeparatorComponent={ () => <View style={ styles.itemSeparator }></View>}
                        showsVerticalScrollIndicator={ false }
                    />

                    <Text style={{ marginBottom: Platform.OS === 'ios' ? 200 : 100  }}></Text>
                </View>
                

            </View>
            <FabButton 
                iconName="add-outline"
                onPress={ () => navigation.navigate('BusinessScreen')  }
                style={{ 
                    ...styles.buttonRight, 
                    bottom: Platform.OS === 'ios' ? 50 : 20
                }}
            />

            <FabButton 
                iconName="map-outline"
                onPress={ () => navigation.navigate('MapScreen') }
                style={{ 
                    ...styles.buttonLeft, 
                    bottom: Platform.OS === 'ios' ? 50 : 20
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle: {
        width: '100%',
        height: 250,
    },
    buttonRight: {
        position: 'absolute',
        right: 20,
    },
    buttonLeft: {
        position: 'absolute',
        left: 20,
    },
    itemSeparator: {
        borderBottomWidth: 1,
        opacity: 0.4,
        marginHorizontal: 20,
        marginBottom: 15,
    }
});

export default HomeScreen
