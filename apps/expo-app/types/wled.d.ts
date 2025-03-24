// Typy pro WLED API
export interface Device {
  id: string;
  name: string;
  address: string;
  version: string;
}

export interface Info {
  ver: string;
  vid: number;
  leds: {
    count: number;
    rgbw: boolean;
    wv: boolean;
  };
  name: string;
  udpport: number;
  live: boolean;
  fxcount: number;
  palcount: number;
  effects: string[];
  palettes: string[];
}

export interface Segment {
  id: number;
  start: number;
  stop: number;
  len: number;
  grp: number;
  spc: number;
  on: boolean;
  bri: number;
  col: number[][];
  fx: number;
  sx: number;
  ix: number;
  pal: number;
  sel: boolean;
  rev: boolean;
  mi: boolean;
}

export interface State {
  on: boolean;
  bri: number;
  transition: number;
  ps: number;
  pss: number;
  pl: number;
  ccnf: {
    min: number;
    max: number;
    time: number;
  };
  nl: {
    on: boolean;
    dur: number;
    fade: boolean;
    tbri: number;
  };
  udpn: {
    send: boolean;
    recv: boolean;
  };
  lor: number;
  mainseg: number;
  seg: Segment[];
}

export type Effects = string[];
export type Palettes = string[];
