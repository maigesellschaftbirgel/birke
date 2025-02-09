import { XMarkIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer drawer-end">
      <input id="mgb-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="mgb-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu menu-xl bg-neutral text-neutral-content min-h-full w-80 p-4">
          <label
            htmlFor="mgb-drawer"
            aria-label="close sidebar"
            className="btn btn-square btn-ghost btn-neutral self-end"
          >
            <XMarkIcon className="h-7 w-7" />
          </label>

          <li>
            <a>
              <CalendarDaysIcon className="h-6 w-6" /> Veranstaltungen
            </a>
          </li>
          <li>
            <a>
              <CalendarDaysIcon className="h-6 w-6" /> Veranstaltungen
            </a>
          </li>
          <li>
            <a>
              <CalendarDaysIcon className="h-6 w-6" /> Veranstaltungen
            </a>
            <ul>
              <li>
                <a>
                  <CalendarDaysIcon className="h-6 w-6" /> 2000er Party
                </a>
              </li>
              <li>
                <a>
                  <CalendarDaysIcon className="h-6 w-6" /> Königsball
                </a>
              </li>
              <li>
                <a>
                  <CalendarDaysIcon className="h-6 w-6" /> Maizug
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
