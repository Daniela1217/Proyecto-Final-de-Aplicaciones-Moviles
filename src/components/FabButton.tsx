import React from 'react'
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;

}

const FabButton = ({ iconName, style = {}, onPress }: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={ 0.8 }
            onPress={ onPress }
            style={{
                ...style as any,
                ...styles.buttonStyle,
            }}
        >
            <Icon 
                size={ 35 }
                name={ iconName }
                color="white"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 80,
        height: 80,
        backgroundColor: '#2271b3',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});

export default FabButton
