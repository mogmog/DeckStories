import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import {StaticMap} from "react-map-gl";

export default {
  title: "Basic",
  decorators: [withKnobs]
};

export const scatterplotLayer = () => {

  //knobs populated by storybook
  let stroked = boolean("Stroked", false);
  let filled  = boolean("Filled", true);

  const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  const layers = [
    new ScatterplotLayer({
      id: 'bart-stations',
      data: [
        {name: 'Colma', passengers: 4214, coordinates: [-122.466233, 37.684638]},
        {name: 'Civic Center', passengers: 24798, coordinates: [-122.413756,37.779528]},
      ],
      stroked: stroked,
      filled:  filled,
      getPosition: d => d.coordinates,
      getRadius: d => Math.sqrt(d.passengers),
      getFillColor: [255, 200, 0, 150]
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


