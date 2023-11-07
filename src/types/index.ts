export type cityDataProps = {
  name: string;
};

export type WeatherCardProps = {
  cityData: cityDataProps[] | undefined;
};

export type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
};
