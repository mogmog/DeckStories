import React from "react";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';

export default {
    title: "Basic",
    decorators: [withKnobs]
};

export const lineLayer = () => {

    const initialViewState = {
        longitude: -122.41669,
        latitude: 37.7853,
        zoom: 13,
        pitch: 0,
        bearing: 0
    };

    let width = number('Width', 30, {range: true, min: 10, max: 90, step: 1});
    let widthMinPixels = number('Width Min Pixels', 0,  {range: true,   min: 0, max: 100, step: 1});
    let widthMaxPixels = number('Width Max Pixel', 100, {range: true, min: 1, max: 100, step: 1});

    const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

    const layers = [
        new LineLayer({
            id: 'line-layer',
            data: data,
            getWidth: width,
            getColor : [0,255,255,150],
            widthMinPixels : widthMinPixels,
            widthMaxPixels : widthMaxPixels,
        })];

    return (
        <DeckGL initialViewState={initialViewState} layers={layers} controller={true}>
            <StaticMap
                mapboxApiAccessToken="pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw"
                mapStyle="mapbox://styles/mogmog/cjvmiuhmr219r1cp6k0jtp1rk"
            />
        </DeckGL>
    );
};


