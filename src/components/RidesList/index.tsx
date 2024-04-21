"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Ride } from "@/types/ride";
import StatusBadges from "../StatusBadges";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import CustomInput from "../CustomInput";
import useFetch from "@/hooks/useFetch";
import Loading from "../Loading";
import CustomSelect from "../CustomSelect";
import { RIDE_STATUS, RIDE_STATUS_LIST } from "@/constants/ridesStatus";

function RidesList() {
  const router = useRouter();
  const [filteredList, setFilteredList] = useState([]);
  const { data, loading, error } = useFetch();
  const [statusSearch, setStatusSearch] = useState("inProgress");
  const [keyTerm, setKeyTerm] = useState("");
  const navigateDetailsPage = (id: number) =>
    router.push(`/rutas-autobuses/${id}`);

  const onChangeInput = (event) => {
    const { value } = event.target;
    setKeyTerm(value);
    setFilteredList(
      data.filter(
        (ride: Ride) =>
          ride.origin.toLowerCase().includes(value.toLowerCase()) === true ||
          ride.destination.toLowerCase().includes(value.toLowerCase()) === true,
      ),
    );
  };

  const onChangeSelect = (event) => {
    const { value } = event.target;
    value === "all"
      ? setFilteredList(data)
      : setFilteredList(data.filter((ride: Ride) => ride.status === value));
  };

  useEffect(() => {
    setFilteredList(
      data?.filter((ride: Ride) => ride.status === RIDE_STATUS.inProgress),
    ); // Initial data only available
  }, [data]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : data ? (
        <div>
          <div className="mb-5 flex w-full justify-end gap-5 xs:flex-col md:flex-row">
            <CustomSelect
              value={statusSearch}
              list={RIDE_STATUS_LIST}
              onChange={onChangeSelect}
            />
            <CustomInput
              type="text"
              name="search"
              placeholder="Buscar por origen/destino"
              onChange={onChangeInput}
            />
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full ">
              <th>Placa del Bus</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
              {(keyTerm || statusSearch ? filteredList : data)?.map(
                (item: Ride, index: number) => {
                  return (
                    <tr key={index}>
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
                          onClick={() => navigateDetailsPage(item.id)}
                        />
                      </td>
                    </tr>
                  );
                },
              )}
            </table>
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

export default RidesList;
