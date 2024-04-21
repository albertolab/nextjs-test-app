import RidesList from "@/components/RidesList";

export default function RoutesPage() {
  return (
    <>
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Rutas
            </h1>
            <RidesList />
          </div>
        </div>
      </div>
    </>
  );
}
