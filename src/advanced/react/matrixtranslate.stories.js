import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import {TerrainLayer} from '@deck.gl/geo-layers';
import {StaticMap} from "react-map-gl";
import {Matrix4} from 'math.gl';

export default {
  title: "Advanced",
  decorators: [withKnobs]
};

export const matrixTranslate = () => {

    let zOffset = number('Z Offset', 0, {range: true, min: 0, max: 15000, step: 100});

    const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  const layers = [
   new TerrainLayer({
    modelMatrix : new Matrix4().makeTranslation(0,0, zOffset ),
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
      <DeckGL initialViewState={initialViewState} layers={layers}  controller={true} >
        <StaticMap
            style={{opacity : 0.65 }}
            mapboxApiAccessToken="pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw"
            mapStyle="mapbox://styles/mogmog/cjvmiuhmr219r1cp6k0jtp1rk"
        />

      </DeckGL>
  );
};


