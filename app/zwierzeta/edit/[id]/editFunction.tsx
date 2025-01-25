
"use client";

import {redirect} from "next/navigation";
import {updateRow} from "@/utils/serverActions";
import {JSX} from "react";

export function editFunction(tableName: string, values: FormData, id: string): void {

  const data = `IMIE = '${values.get("imie")}', GATUNEK = '${values.get("gatunek")}', RODZINA = '${values.get("rodzina")}', RODZAJ_POZYWIENIA = '${values.get("jedzenie")}', ID_WYBIEG = ${values.get("wybieg")}`;

  console.log(data);

  updateRow(tableName, id, data).then(
    () => redirect("/zwierzeta")
  );
}

export default function EditForm({dataList, wybiegiList, id}: {dataList: (string | number)[], wybiegiList: (string | number)[][], id: string}): JSX.Element {
  return <form action={(formData) => editFunction("ZWIERZE", formData, id)}>
    <label>
      Imię:
      <input type="text" name="imie" defaultValue={dataList[1]}/>
    </label>
    <br/>
    <label>
      Gatunek:
      <input type="text" name="gatunek" defaultValue={dataList[2]}/>
    </label>
    <br/>
    <label>
      Rodzina:
      <input type="text" name="rodzina" defaultValue={dataList[3]}/>
    </label>
    <br/>
    <label>
      Rodzaj pożywienia:
      <input type="text" name="jedzenie" defaultValue={dataList[4]} />
    </label>
    <br/>
    <label>
      Wybieg:
      <select name="wybieg" defaultValue={dataList[5]}>
        {wybiegiList.map(wybieg => (
          <option value={wybieg[0]} key={wybieg[0]}>{wybieg[1]}</option>
        ))}
      </select>
    </label>
    <button type="submit">Edytuj</button>
  </form>
}