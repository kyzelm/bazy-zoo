"use client";

import {JSX} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Pracownicy(): JSX.Element {
  const pathname = usePathname();

  return (
    <main>
      <h2>Pracownicy</h2>
      <br/>
      <h4><Link href={pathname + "/admin"}>Administracja</Link></h4>
      <h4><Link href={pathname + "/caretaker"}>Opiekunowie</Link></h4>
      <h4><Link href={pathname + "/security"}>Ochrona</Link></h4>
    </main>
  );
}