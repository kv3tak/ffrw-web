import React from "react";
import Map, {Layer, type MapStyle, Marker, Source,} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import geoJsonData from "./path.json";
import * as turf from '@turf/turf';
import type {FeatureCollection} from "geojson";


const style: MapStyle = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap Contributors",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm", // This must match the source key above
    },
  ],
};

// TODO: Move this to a .env file
const MAPY_API_KEY = "gcosFjsH5oHMuizL8V3ulmXolZu8aHV87LvOn4gyWoE";

const mapyStyle: MapStyle = {
  version: 8,
  sources: {
    "basic-tiles": {
      type: "raster",
      url: `https://api.mapy.cz/v1/maptiles/basic/tiles.json?apikey=${MAPY_API_KEY}`,
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "tiles",
      type: "raster",
      source: "basic-tiles",
    },
  ],
};

const markers = [
  {
    id: "start",
    longitude: 14.427793,
    latitude: 50.104776,
    label: "Z",
    color: "#009FFF",
  },
  {
    id: "photo",
    longitude: 14.3510336,
    latitude: 50.0235172,
    label: "F",
    color: "#3751f5",
  },
  {
    id: "food",
    longitude: 14.325185,
    latitude: 50.0930153,
    label: "P",
    color: "#6215ed",
  },
  {
    id: "end",
    longitude: 14.430805,
    latitude: 50.104167,
    label: "K",
    color: "#ec2F4B",
  },
];

const CustomMarker: React.FC<{
  text?: string;
  color?: string;
  size?: number;
}> = ({ text, color = "#FF5733", size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "translate(0%, -50%)", // Align the marker properly on the map
    }}
  >
    {/* Pin Background */}
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      fill={color}
    />
    {/* Pin Border */}
    <path
      d="M12 0C7.03 0 3 4.03 3 9c0 6.08 8.05 14.7 8.37 15.07.21.26.53.43.88.43.35 0 .67-.17.88-.43.32-.37 8.37-8.99 8.37-15.07 0-4.97-4.03-9-9-9zm0 20.88C10.7 18.88 5 12.39 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.39-5.7 9.88-7 11.88z"
      fill="#000"
      fillOpacity="0.2"
    />
    {/* Inner Circle */}
    <circle cx="12" cy="9" r="5" fill="#fff" />
    {/* Text/Icon */}
    <text
      x="12"
      y="11"
      textAnchor="middle"
      fontSize="6"
      fontWeight="bold"
      fill="#000"
    >
      {text}
    </text>
  </svg>
);

const FurryTramvajMap = () => {
  console.log("geoJsonData", geoJsonData);
  const line = turf.featureCollection((geoJsonData as FeatureCollection).features);

  // Calculate the total length of the line(s)
  const length = turf.length(line, { units: "kilometers" }); // Default is kilometers, can change to 'miles', etc.

  console.log("Length of the line(s):", length);

  return (
    <Map
      initialViewState={{
        longitude: 14.41,
        latitude: 50.07,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={style}
      maxZoom={16}
      minZoom={11}
      maxBounds={[
        [14.15, 49.89], // Southwest corner
        [14.75, 50.24], // Northeast corner
      ]}
    >
      {/* GeoJSON Source */}
      <Source id="route" type="geojson" data={geoJsonData} lineMetrics={true}>
        <Layer
          id="route-line"
          type="line"
          paint={{
            "line-width": 4, // Adjust width of the line
            "line-gradient": [
              "interpolate",
              ["linear"],
              ["line-progress"], // Line progress from 0 (start) to 1 (end)
              // 0,
              // "#5433FF",
              // 0.33,
              // "#20BDFF",
              // 0.66,
              // "#20BDFF",
              // 1,
              // "#A5FECB",
              0,
              "#009FFF",
              0.8,
              "#7200eb",
              1,
              "#ec2F4B",
            ],
          }}
        />
      </Source>

      {/* Add Custom Markers */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          longitude={marker.longitude}
          latitude={marker.latitude}
        >
          <CustomMarker color={marker.color} text={marker.label} size={46} />
        </Marker>
      ))}
    </Map>
  );
};

export default FurryTramvajMap;
