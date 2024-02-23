"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import logoImg from "@/app/assets/uikit/logo.svg";

import { IBMPlexMonoFont } from "@/app/styles/fonts";
import s from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div className="wrapper">
        <div className={s.header__container}>
          <div
            className={clsx(
              s.header__container,
              s.header__container_subContainer
            )}
          >
            <div className={s.header__inner}>
              <nav className={s.nav}>
                <ul className={clsx(s.nav__list, s.nav__list_left)}>
                  <li
                    className={clsx(
                      s.nav__link,
                      pathname === "/biography" && s.nav__link_active
                    )}
                  >
                    <Link href="#">биография</Link>
                  </li>
                  <li
                    className={clsx(
                      s.nav__link,
                      pathname === "/works" && s.nav__link_active
                    )}
                  >
                    <Link href="#">работы</Link>
                  </li>
                  <li
                    className={clsx(
                      s.nav__link,
                      pathname === "/workshop" && s.nav__link_active
                    )}
                  >
                    <Link href="#">мастерская</Link>
                  </li>
                  <li
                    className={clsx(
                      s.nav__link,
                      s.nav__link_menu,
                      pathname === "/menu" && s.nav__link_active
                    )}
                  >
                    <Link href="#">меню</Link>
                  </li>
                </ul>
              </nav>
              <Link href="/" className={s.logoWrapper}>
                <Image src={logoImg} alt="Алексей Благовестнов" priority />
              </Link>
              <nav className={s.nav}>
                <ul className={clsx(s.nav__list, s.nav__list_right)}>
                  <li
                    className={clsx(
                      s.nav__link,
                      pathname === "/exhibitions" && s.nav__link_active
                    )}
                  >
                    <Link href="#">выставки</Link>
                  </li>
                  <li
                    className={clsx(
                      s.nav__link,
                      pathname === "/principles" && s.nav__link_active
                    )}
                  >
                    <Link href="#">принципы</Link>
                  </li>
                  <li
                    className={clsx(
                      s.nav__link,
                      s.nav__link_contacts,
                      pathname === "/contacts" && s.nav__link_active
                    )}
                  >
                    <Link href="#">контакты</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
