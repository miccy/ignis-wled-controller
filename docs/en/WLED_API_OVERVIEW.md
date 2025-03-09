# WLED API Overview

This document provides an overview of the WLED API, which is essential for developing applications that interact with WLED-powered devices.

## Introduction to WLED

[WLED](https://github.com/wled/WLED) is an open-source firmware for ESP8266 and ESP32 microcontrollers that allows for controlling addressable LED strips (like WS2812B, SK6812, APA102) over WiFi. The project provides extensive features for controlling LED effects, colors, and animations.

## API Endpoints

WLED provides a JSON API for controlling and querying the device. The main endpoints are:

### 1. State Control

- **Endpoint**: `/json/state`
- **Method**: GET, POST
- **Description**: Get or set the current state of the device.

Example request to turn on LEDs and set to red:
```json
{
  "on": true,
  "bri": 255,
  "seg": [
    {
      "col": [[255, 0, 0]]
    }
  ]
}
```

### 2. Device Info

- **Endpoint**: `/json/info`
- **Method**: GET
- **Description**: Get information about the device.

### 3. Effects and Palettes

- **Endpoint**: `/json`
- **Method**: GET
- **Description**: Get all available effects and palettes.

### 4. Presets

- **Endpoint**: `/json/presets`
- **Method**: GET
- **Description**: Get all saved presets.

## Key Parameters

These are the main parameters that can be set in the state object:

| Parameter | Type | Description |
|-----------|------|-------------|
| `on` | Boolean | Power state (true = on, false = off) |
| `bri` | Number (0-255) | Master brightness |
| `seg` | Array | Array of segment objects |
| `seg[].col` | Array | Array of colors in RGB format |
| `seg[].fx` | Number | Effect ID |
| `seg[].sx` | Number | Effect speed |
| `seg[].ix` | Number | Effect intensity |
| `seg[].pal` | Number | Palette ID |

## Device Discovery

WLED devices can be discovered on the local network using:

1. **mDNS**: Devices advertise themselves as `[deviceName].local`
2. **SSDP**: Similar to how smart home devices are discovered

## Integration in Our Application

In the Ignis WLED Controller project, we will use these API endpoints to:

1. Discover WLED devices on the network
2. Control LED effects specifically tailored for juggling props
3. Save and load presets designed for performance
4. Provide an intuitive UI that abstracts the complexity of the API

## Resources for Further Reading

- [Official WLED Documentation](https://kno.wled.ge/)
- [WLED GitHub Repository](https://github.com/wled/WLED)
- [JSON API Documentation](https://kno.wled.ge/interfaces/json-api/)

## Next Steps

The next step in our implementation is to create a JavaScript/TypeScript wrapper around these API endpoints to make them easier to use in our Expo React Native application. 