interface NavigationProps {
  navItems: string[];
  menuOpen: boolean;
  activeItem: string;
  onActiveChange: (item: string) => void;
  onMenuClose: () => void;
}

export default function Navigation({
  navItems,
  menuOpen,
  activeItem,
  onActiveChange,
  onMenuClose,
}: NavigationProps) {
  return (
    <nav
      className={`
        flex items-center gap-8
        overflow-hidden
        transition-all
        duration-500
        ease-out
        ${
          menuOpen ? "ml-8 max-w-[700px] opacity-100" : "ml-0 max-w-0 opacity-0"
        }
      `}
    >
      {navItems.map((item) => {
        const isActive = activeItem === item;

        return (
          <a
            key={item}
            href="#"
            onClick={() => {
              // Set selected menu
              onActiveChange(item);

              // Close navigation
              onMenuClose();
            }}
            className={`
              relative
              shrink-0
              whitespace-nowrap
              pb-1
              text-sm
              font-light
              text-white
              transition-all
              duration-300
              ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}
            `}
          >
            {item}

            {/* Active Bottom Border */}
            <span
              className={`
                absolute
                bottom-0
                left-0
                h-[1px]
                bg-white
                transition-all
                duration-300
                ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}
