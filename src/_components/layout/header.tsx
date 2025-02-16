import Image from "next/image";
import logoOriginal from "@/_assets/logos/mgb/logo_original.webp";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import logo_vector_background from "@/_assets/logos/mgb/logo_vector_background.svg";
import group from "@/_assets/images/group.jpg";

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="w-full">
        <Image
          src={logo_vector_background}
          alt="Wappen der Maigesellschaft Birgel e. V."
          className="w-full"
        />
      </div>
      <div className="relative w-full">
        <Image
          className="absolute bottom-0 ml-8 w-40"
          src={logoOriginal}
          alt="Wappen der Maigesellschaft Birgel e. V."
          sizes="40vw"
        />
      </div>
      <div className="flex flex-col items-start gap-2 p-8">
        <p className="font-medium">
          <span className="font-bold">Herzlich Willkommen</span> bei der
        </p>
        <h1 className="pb-3 text-5xl/tight font-bold">
          Maigesellschaft Birgel e. V.
        </h1>
        <div className="badge badge-lg badge-primary font-semibold">
          <CheckBadgeIcon className="h-5 w-5" />
          Gegründet 1946
        </div>
      </div>
      <div className="flex flex-col gap-3 px-8 pb-8 font-medium">
        <p>
          Hier findest du alle Informationen rund um unser Maifest, das
          Maibrauchtum und die Maigesellschaft.
        </p>
        <p className="font-bold">Wir sehen uns im Mai!</p>
      </div>
      <div className="mb-8 overflow-hidden shadow-sm">
        <Image
          src={group}
          alt="Die Mitglieder der Maigesellschaft vor der Mainacht."
          sizes="wv"
        />
      </div>
    </header>
  );
};

export default Header;
