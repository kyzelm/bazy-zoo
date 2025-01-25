import {JSX} from "react";
import styles from "./NavBar.module.css";
import NavLink from "@/components/NavBar/NavLink";

interface LinkProps {
  href: string;
  children: string;
}

const links: LinkProps[] = [
  {href: "/", children: "Start"},
  {href: "/zwierzeta", children: "Zwierzęta"},
  {href: "/pracownicy", children: "Pracownicy"},
  {href: "/wybiegi", children: "Wybiegi"},
];

export default function NavBar(): JSX.Element {
  return <nav className={styles.navbar}>
    {links.map((link) => <NavLink key={link.href} href={link.href}>{link.children}</NavLink>)}
  </nav>
}