export interface Theme {
  colors: {
    white: string;
    background: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  sizing: {
    header: number;
    footer: number;
  };
}

const theme: Theme = {
  colors: {
    white: "#FEFFFE",
    background: "#2A628F"
  },
  fonts: {
    heading: "Merriweather Sans",
    body: "Merriweather"
  },
  sizing: {
    header: 3,
    footer: 3
  }
};

export default theme;
