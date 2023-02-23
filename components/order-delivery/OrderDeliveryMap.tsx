import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {
  PROVIDER_GOOGLE,
  Region,
  LatLng,
  Marker,
} from 'react-native-maps';
import {COLORS, GOOGLE_API_KEY, SIZES} from '../../constants';
import {DestinationMarker} from './DestinationMarker';
import {OriginMarker} from './OriginMarker';
import {logoImg} from '../../assets/assets';

type OrderDeliveryMapProps = {
  mapRegion: Region | undefined;
  destination: LatLng;
  origin: LatLng;
  updateOrigin: (loc: LatLng) => void;
  updateDuration: (duration: number) => void;
};

let _markers = [
  {
    latitude: 51.5218602,
    longitude: -0.04962302,
    name: 'Chef-Joel-Robuchon',
    address: '424 E. 2nd St., Los Angeles, (213) 229-8200',
  },
  {
    latitude: 51.54102,
    longitude: -0.04962302,
    name: 'Chef-Alain-Ducasse',
    address: '340 Pleasant Valley Road, Port Hueneme, CA 93041-2746',
  },
  {
    latitude: 51.5319702,
    longitude: -0.04962302,
    name: 'Chef-Gordon-Ramsay',
    address: '1500 S Oxnard Blvd, Oxnard, Port Hueneme, CA 93041-2746',
  },
  {
    latitude: 51.5118705,
    longitude: -0.0392509,
    name: 'Chef-Pierre-Gagnaire',
    address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
  },
  {
    latitude: 51.526978,
    longitude: -0.03962419,
    name: 'Chef-Martin-Berasategui',
    address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
  },
  {
    latitude: 51.5451,
    longitude: -0.041622,
    name: 'Chef-Yannick-Alleno',
    address: '200 S Oxnard Blvd, Oxnard, Port Hueneme, LA 93041-28471',
  },
  {
    latitude: 51.5518202,
    longitude: -0.03662302,
    name: 'Chef-Yannick-Alleno',
    address: '1500 S Bilvard Blvd, Oxnard, Port Hueneme, CA 25874-28471',
  },
  {
    latitude: 51.5482302,
    longitude: -0.04962302,
    name: 'Chef-Yannick-Alleno',
    address: '147 WA Yelboard , Port Yard, Port Hueneme, CA 93041-28471',
  },
  {
    latitude: 51.5402,
    longitude: -0.03562302,
    name: 'Chef-Yannick-Alleno',
    address:
      '147 West Irland Blvd, Main City, Port Hueneme, California 87452-28471',
  },
];

export const OrderDeliveryMap = ({
  mapRegion,
  destination,
  origin,
  updateOrigin,
  updateDuration,
}: OrderDeliveryMapProps) => {
  const mapView = useRef<MapView>(null);

  const [isReady, setIsReady] = useState<boolean>(false);
  const [angle, setAngle] = useState<number>(0);

  const calculateAngle = (coordinates: LatLng[]) => {
    const [start, end] = coordinates;
    const dx = start.latitude - end.latitude;
    const dy = start.longitude - end.longitude;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const onReady = (result: {coordinates: LatLng[]; duration: number}) => {
    const {coordinates, duration} = result;
    updateDuration(duration);

    if (!isReady) {
      // Fit route into maps
      mapView.current?.fitToCoordinates(coordinates, {
        edgePadding: {
          right: SIZES.width / 20,
          bottom: SIZES.height / 4,
          left: SIZES.width / 20,
          top: SIZES.height / 8,
        },
      });

      // Re-position the car
      const [nextLoc] = coordinates;

      if (coordinates.length >= 2) {
        const angle = calculateAngle(coordinates);
        setAngle(angle);
      }

      updateOrigin(nextLoc);
      setIsReady(true);
    }
  };

  useEffect(() => {
    mapView.current?.animateToRegion(mapRegion as Region, 200);
  }, [mapRegion]);

  return (
    <MapView
      ref={mapView}
      // provider={PROVIDER_GOOGLE}
      initialRegion={mapRegion}
      style={styles.container}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        // apikey={GOOGLE_API_KEY}
        strokeWidth={5}
        strokeColor={COLORS.primary}
        optimizeWaypoints={true}
        onReady={(result) => onReady(result)}
      />
      <DestinationMarker coordinate={destination} />
      <OriginMarker coordinate={origin} angle={angle} />

      {_markers.map((marker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
            description={marker.address}
            draggable={true}
            pinColor="black">
            <Image source={logoImg} style={styles.markerImage} />
          </Marker>
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  markerImage: {
    width: 40,
    height: 40,
  },
});
