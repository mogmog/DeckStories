import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {StaticMap} from "react-map-gl";

const geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.4542999267578,
              37.78699608830537
            ],
            [
              -122.48451232910155,
              37.77559951996455
            ],
            [
              -122.48313903808594,
              37.748457761603355
            ],
            [
              -122.44056701660155,
              37.748457761603355
            ],
            [
              -122.44468688964844,
              37.77071473849609
            ],
            [
              -122.4542999267578,
              37.78699608830537
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.43438720703125,
              37.78482544885859
            ],
            [
              -122.42340087890624,
              37.78482544885859
            ],
            [
              -122.42340087890624,
              37.7940502261884
            ],
            [
              -122.43438720703125,
              37.7940502261884
            ],
            [
              -122.43438720703125,
              37.78482544885859
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4151611328125,
          37.765286825037926
        ]
      }
    }
  ]
};

export default {
  title: "Basic",
  decorators: [withKnobs]
};

export const geojsonLayer = () => {

  //knobs populated by storybook
  let filled  = boolean("Filled", true);
  let wireframe  = boolean("Wireframe", false);
  let extruded = boolean("Extrude", true);
  let elevation = number('Elevation', 1000, {range: true, min: 0, max: 5000, step: 10});

  const initialViewState = {
    longitude: -122.41669,
    latitude: 37.7853,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  const layers = [
    new GeoJsonLayer({
      id: 'geojsonlayer',
      data: geojson,
      filled:  filled,
      extruded: extruded,
      wireframe : wireframe,
      getElevation : elevation,
      getLineColor: [0, 0, 0, 255],
      getFillColor: [255, 200, 0, 150],
      opacity: 0.8,
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


