"use client";

import Link from 'next/link';
import {JSX} from "react";
import {usePathname} from "next/navigation";
import styles from "./NavLink.module.css";

export default function NavLink({href, children}: { href: string, children: string }): JSX.Element {
  const path = usePathname();

  return <Link href={href} className={`${styles.navlink} ${path === href || (path.startsWith(href) && path === "/") ? styles.active : ""}`}>
    <h4>{children}</h4>
  </Link>;
}
