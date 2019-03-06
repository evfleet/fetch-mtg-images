export interface Theme {
  colors: {
    background: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

const theme: Theme = {
  colors: {
    background: "#2A628F"
  },
  fonts: {
    heading: "Merriweather Sans",
    body: "Merriweather"
  }
};

export default theme;
