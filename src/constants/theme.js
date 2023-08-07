const COLORS = {
  font: "#302f2f",

  primary: "#6A5AE0",
  secondary: "#1352ff",
  tertiary: "#FF7754",
  yellowCollor: "#ffc107",

  merah: "#dc3545",
  btnBiru: "#0d46e0",
  btnHijau: "#1ee592",
  btnUngu: "#4535d4",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  colorShadow: rgba(0, 0, 0, 0.1),
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
};

const SAFEAREAVIEW = {
  style: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
};

export { COLORS, FONT, SIZES, SHADOWS, SAFEAREAVIEW };
