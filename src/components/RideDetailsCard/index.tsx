"use client";
import React from "react";
import StatusBadges from "../StatusBadges";
import DetailsRow from "./DetailsRow";
import Image from "next/image";
import useFetchMockId from "@/hooks/useFetchMockId";
import Loading from "../Loading";
import { useParams } from "next/navigation";

function RideDetailsCard() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useFetchMockId(parseInt(id));

  return (
    <>
      {loading ? (
        <Loading />
      ) : data ? (
        <div className="bg-gray rounded-lg  border border-gray-400 p-20 shadow dark:border-gray-700 dark:bg-gray-800 md:flex">
          <div className="flex flex-col items-center gap-5 xs:mb-20 md:mr-20">
            <Image
              width={200}
              height={100}
              src="/images/logo/autobus.png"
              alt="autobus image"
            />
            <StatusBadges status={data?.status} />
          </div>
          <div className=" grid grid-cols-2 gap-10 ">
            <DetailsRow
              title="Placa del Bus"
              description={data?.busLicensePlate}
            />
            <DetailsRow
              title="Conductor"
              description={`${data?.busDriver?.firstName} ${data?.busDriver?.lastName}`}
            />
            <DetailsRow title="Origen" description={`${data?.origin}`} />
            <DetailsRow
              title="Hora de salida:"
              description={`${data?.departureTime}`}
            />
            <DetailsRow title="Destino" description={`${data?.destination}`} />
            <DetailsRow
              title="Hora de llegada:"
              description={`${data?.arrivalTime}`}
            />
            <DetailsRow title="Distancia" description={`${data?.distance}km`} />
            <DetailsRow title="Precio" description={`${data?.price}$`} />
          </div>
        </div>
      ) : (
        <div className="text-red mt-40 flex justify-center">
          {error?.message}
        </div>
      )}
    </>
  );
}

export default RideDetailsCard;
