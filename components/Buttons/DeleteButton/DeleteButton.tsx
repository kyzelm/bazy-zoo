"use client";

import {useRouter} from "next/navigation";

import {JSX} from "react";
import {deleteRow} from "@/utils/serverActions";

export default function DeleteButton({id, tableName}: {
  id: number | string;
  tableName: string;
  refreshLink: string;
}): JSX.Element {
  const router = useRouter();

  return (
    <button onClick={() => {
      deleteRow(tableName, id).then(
        () => router.refresh()
      )
    }}>Usuń</button>
  );
}