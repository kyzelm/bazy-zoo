"use client";

import {JSX} from "react";
import {redirect} from "next/navigation";
import {usePathname} from "next/navigation";

export default function AddButton(): JSX.Element {
  const pathname = usePathname();

  return (
    <button onClick={() => redirect(pathname + "/add")}>Dodaj</button>
  );
}