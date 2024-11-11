import { presidents } from "Dataset";
import Link from "next/link";

export default function Example() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mexicoGreen via-white to-mexicoRed">
                Presidentes de México
              </span>
            </h2>
            <p className="text-xl text-stone-400">
              México ha tenido muchas personalidades que representan al poder
              ejecutivo, ¿alguno ha hecho algo bueno por el país?
            </p>
            <p className="text-xl text-stone-400">
              👆 Haz click en tu favorito para saber sus grandes hazañas como
              mandatario.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
          >
            {presidents
              .slice(0)
              .reverse()
              .map((person, index) => (
                <li key={index} className=" cursor-pointer">
                  <Link href={`/presidente/${person.name}`}>
                    <div className="space-y-4">
                      <div className=" relative aspect-w-2 rounded-lg aspect-h-3">
                        {person.isPresident && (
                          <div className="absolute   -inset-0.5 bg-gradient-to-r from-mexicoGreen via-white to-mexicoRed  opacity-100 duration-1000  rounded-lg blur "></div>
                          // <div className=" absolute rounded-lg bg-gradient-to-r from-mexicoGreen via-white to-mexicoRed" />
                        )}
                        <div className="   p-2  rounded-lg w-full h-full  ">
                          <img
                            className="rounded-lg  object-cover w-full h-full shadow-lg"
                            src={person.img}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="space-y-1 text-sm font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className=" ">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mexicoGreen via-white to-mexicoRed">
                              {person.tiempo}
                            </span>
                          </p>
                          <p className="text-white">
                            Partido: {person.partido}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
