"use client";

import {redirect} from "next/navigation";
import {updateRow} from "@/utils/serverActions";
import {JSX} from "react";

export function editFunction(values: FormData, id: string, idPrc: string | number): void {

  let data = `IMIE = '${values.get("imie")}', NAZWISKO = '${values.get("nazwisko")}', PESEL = ${values.get("pesel")}, EMAIL = '${values.get("adres")}', NUMER_TELEFONU = ${values.get("telefon")}`;

  console.log(data);

  updateRow("PRACOWNIK", idPrc, data).then(() => {
    data = `SPECJALIZACJA = '${values.get("specjalizacja")}', ID_WYBIEG = ${values.get("wybieg")}`;

    console.log(data);

    updateRow("OPIEKUN", id, data).then(() => {
      redirect("/pracownicy/caretaker");
    });
  });
}

export default function EditForm({dataList, id, wybiegiList}: { dataList: (string | number)[], id: string , wybiegiList: (string | number)[][]}): JSX.Element {
  return <form action={(formData) => editFunction(formData, id, dataList[8])}>
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
      Wybieg:
      <select name="wybieg" defaultValue={dataList[7]}>
        {wybiegiList.map(wybieg => (
          <option value={wybieg[0]} key={wybieg[0]}>{wybieg[1]}</option>
        ))}
      </select>
    </label>
    <label>
      Specjalizacja:
      <input type="text" name="specjalizacja" defaultValue={dataList[6]}/>
    </label>
    <br/>
    <button type="submit">Edytuj</button>
  </form>
}