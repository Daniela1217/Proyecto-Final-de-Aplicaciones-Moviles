import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { Location } from '../interfaces/businessInterface';

const useLocation = () => {
    
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        
        getCurrentPosition().then( location => {
            setInitialPosition( location );
            setHasLocation( true )
        })
    }, [])

    const getCurrentPosition = (): Promise<Location> => {
        return new Promise( (resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    })
                },
                (error) => reject(error),
                { enableHighAccuracy: true }
            )
        })
    }

    return {
        hasLocation,
        initialPosition,
        getCurrentPosition,
    }
}

export default useLocation
