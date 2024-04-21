import RideDetailsCard from "@/components/RideDetailsCard";

export default function RoutesPage() {
  return (
    <>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full flex-col items-center px-4">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Detalles de la Ruta
            </h1>
            <RideDetailsCard />
          </div>
        </div>
      </div>
    </>
  );
}
