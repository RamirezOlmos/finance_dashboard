import {
  // eslint-disable-next-line
  Palette,
  // eslint-disable-next-line
  PaletteColor
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}


