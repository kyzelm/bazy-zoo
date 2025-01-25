"use client";

import {redirect} from "next/navigation";
import {updateRow} from "@/utils/serverActions";
import {JSX} from "react";

export function editFunction(values: FormData, id: string, idPrc: string | number): void {

  let data = `IMIE = '${values.get("imie")}', NAZWISKO = '${values.get("nazwisko")}', PESEL = ${values.get("pesel")}, EMAIL = '${values.get("adres")}', NUMER_TELEFONU = ${values.get("telefon")}`;

  console.log(data);

  updateRow("PRACOWNIK", idPrc, data).then(() => {
    data = `GRUPA_INWALIDZKA = ${values.get("grupa")}`;

    console.log(data);

    updateRow("OCHRONA", id, data).then(() => {
      redirect("/pracownicy/security");
    });
  });
}

export default function EditForm({dataList, id}: { dataList: (string | number)[], id: string }): JSX.Element {
  return <form action={(formData) => editFunction(formData, id, dataList[7])}>
    <label>
      Imię:
      <input type="text" name="imie" defaultValue={dataList[1]}/>
    </label>
    <br/>
    <label>
      Nazwisko:
      <input type="text" name="nazwisko" defaultValue={dataList[2]}/>
    </label>
    <br/>
    <label>
      PESEL:
      <input type="number" name="pesel" minLength={11} maxLength={11} defaultValue={dataList[3]}/>
    </label>
    <br/>
    <label>
      Adres email:
      <input type="email" name="adres" defaultValue={dataList[4]}/>
    </label>
    <br/>
    <label>
      Numer telefonu:
      <input type="number" name="telefon" minLength={9} maxLength={9} defaultValue={dataList[5]}/>
    </label>
    <br/>
    <label>
      Grupa inwalidzka:
      <input type="number" name="grupa" defaultValue={dataList[6]}/>
    </label>
    <br/>
    <button type="submit">Edytuj</button>
  </form>
}