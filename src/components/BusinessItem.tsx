import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BusinessData } from '../interfaces/businessInterface'

interface Props {
    business: BusinessData;
}

const BusinessItem = ({ business }: Props) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{`${business.name} - ${business.type}`}</Text>
            <Text style={ styles.subTitle }>{ business.phone }</Text>
            <Text style={ styles.subTitle }>{ business.address }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        fontSize:16,
        color: '#000',
        opacity: 0.6,
    }
});

export default BusinessItem
