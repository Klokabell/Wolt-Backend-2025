const helsinkiTestObject = {
  userCoordinates: { longitude: 24.93087, latitude: 60.17094 },
  venueCoordinates: {
    longitude: 24.92813512,
    latitude: 60.17012143,
  },
  expectedDistance: 176.54,
};

const stockholmTestObject = {
  userCoordinates: { longitude: 18.02, latitude: 59.3371 },
  venueCoordinates: { longitude: 18.0314984, latitude: 59.3466978 },
  expectedDistance: 1252.01,
};

const tokyoTestObject = {
  userCoordinates: { longitude: 139.839478, latitude: 35.652832 },
  venueCoordinates: { longitude: 139.7115264, latitude: 35.6459122 },
  expectedDistance: 11599.86,
};

const berlinTestObject = {
  userCoordinates: { longitude: 13.404954, latitude: 52.520008 },
  venueCoordinates: { longitude: 13.4536149, latitude: 52.5003197 },
  expectedDistance: 3954.44,
};

export {
  stockholmTestObject,
  tokyoTestObject,
  berlinTestObject,
  helsinkiTestObject,
};
