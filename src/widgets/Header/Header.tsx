import s from "./Header.module.css";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.navbar}>
          <ul className={s.menu}>
            <li>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? `${s.active}` : `${s.link}`
                }
              >
                Все котики
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={(navData) =>
                  navData.isActive ? `${s.active}` : `${s.link}`
                }
              >
                Любимые котики
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
