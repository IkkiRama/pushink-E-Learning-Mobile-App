import { useState } from "react";

let isDarkMode = false;

const setIsDarkMode = (condition) => (isDarkMode = condition);

// setIsDarkMode(true);
const COLORS = {
  font: isDarkMode ? "#F3F4F8" : "#302f2f",

  primary: "#6A5AE0",
  secondary: "#1352ff",
  tertiary: "#FF7754",
  yellowCollor: "#ffc107",
  kategoriCOlor: "#2eb5c0",
  kostWanita: "#FF1F00",
  diskon: "#DA4549",

  merah: "#dc3545",
  btnBiru: "#0d46e0",
  btnHijau: "#1ee592",
  btnUngu: "#4535d4",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: isDarkMode ? "#15202B" : "#F3F4F8",
  lightWhite: "#FAFAFC",
  colorShadow: "rgba(0, 0, 0, 0.1)",

  borderColor: "#e4e4e7",

  APP_BG: "#fff",
  FONT: "#303d49",
  FONT_MEDIUM: "#636363",
  FONT_LIGHT: "#b6b8b9",
  MODAL_BG: "rgba(0, 0, 0, 0.2)",
  ACTIVE_BG: "#5252ad",
  ACTIVE_FONT: "#fff",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: COLORS.colorShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.colorShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  hard: {
    shadowColor: COLORS.colorShadow,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

const SAFEAREAVIEW = {
  style: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
};

export { isDarkMode, COLORS, FONT, SIZES, SHADOWS, SAFEAREAVIEW };
