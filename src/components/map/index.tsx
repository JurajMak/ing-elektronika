'use client';
import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: 6,
};

const center = {
  lat: 45.549676,
  lng: 18.678324,
};
// testna mapa treba je doraditi
export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? '',
  });

  const [map, setMap] = React.useState(null);
  console.log(map, 'map');

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER,
            },
          }}
        >
          <MarkerF position={center} />
          <InfoWindowF
            position={center}
            options={{
              pixelOffset: new google.maps.Size(0, -40),
            }}
          >
            <div className="max-w-xs bg-white shadow-md rounded-lg p-2">
              <h3 className="text-lg text-primary-foreground font-semibold mb-2">
                ING-ELEKTRONIKA
              </h3>
              <p className="text-primary-foreground text-lg ">
                Vinkovačka cesta 21
              </p>
              <p className="text-primary-foreground text-lg ">
                31000, Osijek Croatia
              </p>
            </div>
          </InfoWindowF>
        </GoogleMap>
      )}
    </>
  );
}
export default React.memo(Map);
