import { NavigationElement } from "@/_types/index";

interface NavigationBarMenuProps {
  navigationElements: Array<NavigationElement>;
}

const NavigationBarMenu: React.FC<NavigationBarMenuProps> = ({
  navigationElements,
}) => {
  const renderLink = (name: string) => {
    return (
      <li key={name}>
        <a>{name}</a>
      </li>
    );
  };

  const renderSubMenu = (navigationElement: NavigationElement) => {
    return (
      <li key={navigationElement.name}>
        <details>
          <summary>{navigationElement.name}</summary>
          {navigationElement.subMenu && (
            <ul className="bg-neutral p-2">
              {navigationElement.subMenu.map((subElement) =>
                renderLink(subElement),
              )}
            </ul>
          )}
        </details>
      </li>
    );
  };

  return (
    <ul className="menu menu-horizontal text-neutral-content hidden px-1 lg:flex">
      {navigationElements.map((navigationElement) =>
        navigationElement.subMenu
          ? renderSubMenu(navigationElement)
          : renderLink(navigationElement.name),
      )}
    </ul>
  );
};

export default NavigationBarMenu;
