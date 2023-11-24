import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import olms from "ol-mapbox-style";
import { useGeographic } from "ol/proj";

const apiKey = import.meta.env.VITE_MAPTILER_KEY;
const styleJson = `https://api.maptiler.com/maps/basic-v2/style.json?key=${apiKey}`;
useGeographic();

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [7.560701656473608, 51.61534116380287],
    zoom: 9,
    extent: [6, 50, 10, 52.3],
  }),
});

olms(map, styleJson);

map.on("click", (e) => console.log(e.coordinate));
