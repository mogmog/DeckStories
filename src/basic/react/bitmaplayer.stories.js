import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import {StaticMap} from "react-map-gl";

export default {
  title: "Basic",
  decorators: [withKnobs]
};

export const bitmapLayer = () => {

  //knobs populated by storybook
  let billboard = boolean("Billboard", false);

  const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  const left = -122.5190, bottom = 37.7045, right = -122.355, top = 37.829;

  const bounds = [left, bottom, right, top];
  const boundsbillboard = [[left, bottom, 0], [left, bottom, 10000], [right, bottom, 10000], [right, bottom, 0]];

  const layers = [
    new BitmapLayer({
      id: 'bitmap-layer',
      bounds: billboard ? boundsbillboard : bounds,
      image: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'
    })
  ];

  return (
      <DeckGL initialViewState={initialViewState} layers={layers}  controller={true} >
        <StaticMap
            mapboxApiAccessToken="pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw"
            mapStyle="mapbox://styles/mogmog/cjvmiuhmr219r1cp6k0jtp1rk"
        />

      </DeckGL>
  );
};


