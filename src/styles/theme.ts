export interface Theme {
  colors: {
    white: string;
    background: string;
  };
  fonts: {
    heading: {
      family: string;
      boldWeight: number;
      normalWeight: number;
    };
    body: {
      family: string;
    };
  };
  sizing: {
    header: number;
    footer: number;
  };
}

const theme: Theme = {
  colors: {
    white: "#FEFFFE",
    background: "#570000"
  },
  fonts: {
    heading: {
      family: "Merriweather Sans",
      boldWeight: 700,
      normalWeight: 400
    },
    body: {
      family: "Merriweather"
    }
  },
  sizing: {
    header: 4,
    footer: 3
  }
};

export default theme;
