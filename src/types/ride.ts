export type Ride = {
  busLicensePlate: string;
  busDriver: {
    firstName: string;
    lastName: string;
  };
  origin: string;
  destination: string;
  price: number;
  distance: number;
  status: string;
};
