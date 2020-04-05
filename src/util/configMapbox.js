import MapboxGL from '@react-native-mapbox-gl/maps';

const toolsKeys = {
  MAPBOX_ACCESS_TOKEN:
    'pk.eyJ1IjoicGlhMTMiLCJhIjoiY2pyMHFkbjd2MG42eDQycXF1ODg5em5yOCJ9.of1u8U450sFMBUsZ8TkkCQ',
};

export const configureTools = () => {
  MapboxGL.setAccessToken(toolsKeys.MAPBOX_ACCESS_TOKEN);
};
