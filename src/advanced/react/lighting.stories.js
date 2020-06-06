import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import {TerrainLayer} from '@deck.gl/geo-layers';
import {StaticMap} from "react-map-gl";
import {AmbientLight, PointLight, DirectionalLight, LightingEffect} from '@deck.gl/core';

// create ambient light source
const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 1.0
});

export default {
  title: "Advanced",
  decorators: [withKnobs]
};

export const lighting = () => {

    let pointLightPosition  = number('Point Position', 37.7253, {range: true, min: 37.7253, max: 37.7853, step: 0.001});
    let pointLightIntensity = number('Point Light Intensity', 3, {range: true, min: 0, max: 10, step: 0.1});

    const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

    // create point light source
    const pointLight = new PointLight({
        color: [255, 201, 34],
        intensity: pointLightIntensity,
        position:  [-122.41669, pointLightPosition, 1000]
    });

    const lightingEffect = new LightingEffect({ pointLight });

    const layers = [
   new TerrainLayer({
    elevationDecoder: {
      rScaler: 2,
      gScaler: 0,
      bScaler: 0,
      offset: 0
    },
    // Digital elevation model from https://www.usgs.gov/
    elevationData: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain.png',
    texture: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain-mask.png',
    bounds: [-122.5233, 37.6493, -122.3566, 37.8159],
  })
  ];

  return (
      <DeckGL effects={[lightingEffect]} initialViewState={initialViewState} layers={layers}  controller={true} >
        <StaticMap
            mapboxApiAccessToken="pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw"
            mapStyle="mapbox://styles/mogmog/cjvmiuhmr219r1cp6k0jtp1rk"
        />

      </DeckGL>
  );
};


