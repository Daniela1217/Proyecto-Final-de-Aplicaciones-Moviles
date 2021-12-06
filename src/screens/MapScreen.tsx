import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useRef } from 'react'
import { ActivityIndicator, View, LogBox, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
LogBox.ignoreLogs(['new NativeEventEmitter']);

import FabButton from '../components/FabButton';
import { BusinessContext } from '../context/BusinessContext'
import useLocation from '../hooks/useLocation';
import { RootStackParams } from '../navigator/StackNavigator';

type StackNavigation = StackNavigationProp<RootStackParams, 'MapScreen'>

const MapScreen = () => {

    const { businessState } = useContext(BusinessContext);
    
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation<StackNavigation>();
    const { hasLocation, initialPosition, getCurrentPosition } = useLocation();

    const mapViewRef = useRef<MapView>();

    const centerPosition = async () => {
        const location = await getCurrentPosition();
        
        mapViewRef.current?.animateCamera({
            center: location
        })
    }
    
    if( !hasLocation ) {
        return ( 
            <View style={{ 
                flex: 1 ,
                justifyContent:'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size={ 50 } color="black" />
            </View>
        )
    }

    return (
        <>
            <MapView
                ref={ (el) => mapViewRef.current = el! }
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.8922,
                    longitudeDelta: 0.8421,
                }}
            >
                { businessState.business.map( (marker, i) => (
                    <Marker 
                        key={ i }
                        coordinate={ marker }
                        title={ marker.name }
                        description={ marker.type }
                    />
                ))}
            </MapView>

            <TouchableOpacity
                activeOpacity={ 0.9 }
                style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    top: top + 5 ,
                }}
                onPress={ () => navigation.pop() }
            >
                <Icon 
                    name='arrow-back'
                    size={ 50 }
                    color="black"
                />
            </TouchableOpacity>
            
            <FabButton 
                iconName="compass-outline"
                onPress={ centerPosition }
                style={{
                    position: 'absolute',
                    right: 20,
                    bottom: 20,
                }}
            />
        </>
    )
}

export default MapScreen
