import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo De Rutas De Autobuses",
  description: "Esta es una aplicación web desarrollada con Next.js.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Bienvenido a la Aplicación Demo de Rutas
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Esta es una aplicación web desarrollada con Next.js que permite
                a los usuarios ver una lista de rutas de autobuses disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
