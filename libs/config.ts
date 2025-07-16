export const propertySquare: number[] = [
  30, 50, 70, 100, 120, 150, 170, 200, 250, 300, 350, 400, 450, 500,
];
export const propertyTypes: string[] = ["APARTMENT", "HOUSE", "VILLA"];
export const propertyLocations: string[] = ["SEOUL", "BUSAN", "DEAGU"];
export const roomOptions: string[] = ["Any", "1", "2", "3", "4", "5+"];
export const propertyOptions: string[] = ["Barter", "Rent"];
export const defaultPriceRange = {
  start: 0,
  end: 250000,
};

const config = {
  propertySquare,
  propertyTypes,
  propertyLocations,
  roomOptions,
  propertyOptions,
  defaultPriceRange,
};

export default config;
