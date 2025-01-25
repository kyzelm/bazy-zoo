"use client";

import {JSX} from "react";
import {redirect} from "next/navigation";
import {usePathname} from "next/navigation";

export default function EditButton({id}: {id: string | number}): JSX.Element {
  const pathname = usePathname();

  return (
    <button onClick={() => redirect(pathname + "/edit/" + id)}>Edytuj</button>
  );
}