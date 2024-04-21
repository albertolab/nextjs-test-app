export type Ride = {
  id: number;
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
  departureTime: string;
  arrivalTime: string;
};
