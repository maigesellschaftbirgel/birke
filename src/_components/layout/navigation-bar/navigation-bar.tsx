import Image from "next/image";
import logoVector from "@/_assets/logos/mgb/logo_vector.svg";
import logoInstagram from "@/_assets/logos/socials/logo_instagram.svg";
import logoWhatsapp from "@/_assets/logos/socials/logo_whatsapp.svg";
import logoFacebook from "@/_assets/logos/socials/logo_facebook.svg";

import { Bars3Icon } from "@heroicons/react/24/outline";

import NavigationBarMenu from "./navigation-bar-menu";

import { NavigationElement } from "@/_types/index";

const localNavigationElements: Array<NavigationElement> = [
  { name: "Veranstaltungen", subMenu: ["2000er Party", "Koenigsball"] },
  { name: "Über uns" },
  { name: "Mitglied werden" },
];

const NavigationBar = () => {
  const renderSocials = () => {
    return (
      <>
        <a className="btn btn-square btn-ghost btn-neutral btn-md">
          <Image src={logoInstagram} className="h-5 w-5" alt="Instagram" />
        </a>
        <a className="btn btn-square btn-ghost btn-neutral btn-md">
          <Image src={logoFacebook} className="h-5 w-5" alt="Facebook" />
        </a>
        <a className="btn btn-square btn-ghost btn-neutral btn-md">
          <Image src={logoWhatsapp} className="h-5 w-5" alt="Whatsapp" />
        </a>
      </>
    );
  };

  return (
    <nav className="fixed top-0 z-20 w-full">
      <div className="navbar bg-neutral relative justify-between px-8">
        <div className="">
          <Image
            src={logoVector}
            className="mx-2 w-8"
            alt="Wappen der Maigesellschaft Birgel e. V."
          />
          <p className="text-primary-content ml-2 hidden text-sm lg:flex">
            Maigesellschaft <br></br> Birgel e. V.
          </p>
        </div>

        <div className="">
          {/* <div className="lg:hidden">{renderSocials()}</div> */}
          <NavigationBarMenu navigationElements={localNavigationElements} />
        </div>
        <div className="">
          <div className="flex-none lg:hidden">
            {renderSocials()}
            <label
              htmlFor="mgb-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3Icon className="text-primary-content h-7 w-7" />
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
