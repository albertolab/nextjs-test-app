"use client";
import React from "react";
import "./styles.css";
import { Ride } from "@/types/ride";
import { RIDE_STATUS } from "@/constants/ridesStatus";
import StatusBadges from "../StatusBadges";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import CustomInput from "../CustomInput";
const data: Ride[] = [
  {
    busLicensePlate: "HSI61D",
    busDriver: {
      firstName: "John",
      lastName: "Doe",
    },
    origin: "Origin",
    destination: "Destination",
    price: 15,
    distance: 52,
    status: RIDE_STATUS.pending,
  },
  {
    busLicensePlate: "HSI61D",
    busDriver: {
      firstName: "John",
      lastName: "Doe",
    },
    origin: "Origin",
    destination: "Destination",
    price: 15,
    distance: 52,
    status: RIDE_STATUS.inProgress,
  },
  {
    busLicensePlate: "HSI61D",
    busDriver: {
      firstName: "John",
      lastName: "Doe",
    },
    origin: "Origin",
    destination: "Destination",
    price: 15,
    distance: 52,
    status: RIDE_STATUS.canceled,
  },
  {
    busLicensePlate: "HSI61D",
    busDriver: {
      firstName: "John",
      lastName: "Doe",
    },
    origin: "Origin",
    destination: "Destination",
    price: 15,
    distance: 52,
    status: RIDE_STATUS.finished,
  },
];
function RidesList() {
  const router = useRouter();
  const navigateDetailsPage = (id: string) =>
    router.push(`/rutas-autobuses/${id}`);

  return (
    <div>
      <div className="mb-5 flex w-full justify-end">
        <CustomInput type="text" name="search" placeholder="Buscar" />
      </div>

      <table className="w-full">
        <th>Placa del Bus</th>
        <th>Origen</th>
        <th>Destino</th>
        <th>Precio</th>
        <th>Estado</th>
        <th>Acciones</th>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{item.busLicensePlate}</td>
              <td>{item.origin}</td>
              <td>{item.destination}</td>
              <td>{item.price}</td>
              <td>
                <StatusBadges status={item.status} />
              </td>
              <td className=" gap-3">
                <CustomButton
                  title="Ver Detalles"
                  color=""
                  onClick={() => navigateDetailsPage(item.busLicensePlate)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default RidesList;
