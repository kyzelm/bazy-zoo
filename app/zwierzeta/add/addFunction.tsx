"use client";

import {redirect} from "next/navigation";
import {insertRow} from "@/utils/serverActions";
import {JSX} from "react";

export function addFunction(tableName: string, values: FormData): void {

  const data = `seq_${tableName}.nextval, '${values.get("imie")}', '${values.get("gatunek")}', '${values.get("rodzina")}', '${values.get("jedzenie")}', ${values.get("wybieg")}`;

  console.log(data);

  insertRow(tableName, data).then(
    () => redirect("/zwierzeta")
  );
}

export default function AddForm({wybiegiList}: {wybiegiList: (string | number)[][]}): JSX.Element {
  return <form action={(formData) => addFunction("ZWIERZE", formData)}>
    <label>
      Imię:
      <input type="text" name="imie"/>
    </label>
    <br/>
    <label>
      Gatunek:
      <input type="text" name="gatunek"/>
    </label>
    <br/>
    <label>
      Rodzina:
      <input type="text" name="rodzina"/>
    </label>
    <br/>
    <label>
      Rodzaj pożywienia:
      <input type="text" name="jedzenie"/>
    </label>
    <br/>
    <label>
      Wybieg:
      <select name="wybieg">
        {wybiegiList.map(wybieg => (
          <option value={wybieg[0]} key={wybieg[0]}>{wybieg[1]}</option>
        ))}
      </select>
    </label>
    <button type="submit">Dodaj</button>
  </form>
}