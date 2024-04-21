import React from "react";
import StatusBadges from "../StatusBadges";
import DetailsRow from "./DetailsRow";
import Image from "next/image";

function RideDetailsCard() {
  return (
    <div className="bg-gray rounded-lg  border border-gray-400 p-20 shadow dark:border-gray-700 dark:bg-gray-800 md:flex">
      <div className="flex flex-col items-center gap-5 xs:mb-20 md:mr-20">
        <Image
          width={200}
          height={100}
          src="/images/logo/autobus.png"
          alt="autobus image"
        />
        <StatusBadges status="pending" />
      </div>
      <div className=" grid grid-cols-2 gap-10 ">
        <DetailsRow title="Placa del Bus" description="8HDJ5CS" />
        <DetailsRow title="Conductor" description="Jhon Doe" />
        <DetailsRow
          title="Origen"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <DetailsRow
          title="Destino"
          description="Lorem Ipsum is simply he printing and typesetting industry."
        />
        <DetailsRow title="Distancia" description="8km" />
        <DetailsRow title="Precio" description="8$" />
      </div>
    </div>
  );
}

export default RideDetailsCard;
