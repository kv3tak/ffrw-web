// Step 1: Import React
import * as React from "react";
import FurryTramvajMap from "../components/FurryTramvaj2024/FurryTramvajMap";

// Step 2: Define your component
const TramvajPage = () => {
  return (
    <main className="mx-auto w-full max-w-6xl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        FFRW
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Furry Tramvaj 2024
        </h2>
        <p>Kdy: 7.12.2024</p>

        <p>
          Nástupní bod a konečný bod: zastávka Planetárium - Kousek od zastávky
          Výstaviště v Pražských Holešovicích
        </p>
        <p>
          V okolí Výstaviště jsou parkoviště, takže by jste měli dobře
          zaparkovat.
        </p>
        <p>Přistavení tramvaje: cca 9:30 příjezd tramvaje na nástup.</p>
        <p>Odjezd: 10:00</p>
        <p>Trasa: viz níže</p>
        <p>
          Mezi 12:00 až 13:00 bude přestávka na jídlo v obratišti Divoká Šárka,
          kde je restaurace a McDonald's hned vedle obratiště.
        </p>
        <p>
          Při nástupu do tramvaje dostanete upomínkovou jízdenku, kterou si
          budete moci označit.
        </p>
        <p>Cena je 200 Kč, prosíme mějte spíše 200 Kč bankovky.</p>
        <p>
          Po pauze můžete být dotázáni zda máte jízdenku, tak ji prosím mějte u
          sebe, nechceme aby se do tramvaje připletl, kdo není účastníkem.
        </p>
        <p>Konec akce: cca 15:00</p>
        <p>❗️Časy pauzy a konce se můžou změnit ❗️</p>
        <p>
          V obratištích kde budeme dělat fotky je možnost si dojít na záchod,
          musíte si říct řidiči (Georgy) aby vám půjčil klíč.
        </p>
        <div className="w-full h-[36rem] max-h-screen rounded-md overflow-hidden">
          <FurryTramvajMap />
        </div>
      </div>
    </main>
  );
};

export const Head = () => (
  <>
    <title>Furry Tramvaj 2024</title>
    <meta name="description" content="Furry tramvaj v Praze, 7. 12. 2024" />
  </>
);

// Step 3: Export your component
export default TramvajPage;
