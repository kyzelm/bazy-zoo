"use client";

import {redirect} from "next/navigation";
import {insertRow} from "@/utils/serverActions";
import {JSX} from "react";

export function addFunction(values: FormData): void {

  let data = `seq_PRACOWNIK.nextval, '${values.get("imie")}', '${values.get("nazwisko")}', ${values.get("pesel")}, '${values.get("adres")}', ${values.get("telefon")}`;

  console.log(data);

  insertRow("PRACOWNIK", data).then(() => {
    data = `seq_OPIEKUN.nextval, '${values.get("specjalizacja")}', seq_PRACOWNIK.currval, ${values.get("wybieg")}`;

    console.log(data);

    insertRow("OPIEKUN", data).then(
      () => redirect("/pracownicy/caretaker")
    );
  });
}

export default function AddForm({wybiegiList}: {wybiegiList: (string | number)[][]}): JSX.Element {
  return <form action={(formData) => addFunction(formData)}>
    <label>
      Imię:
      <input type="text" name="imie"/>
    </label>
    <br/>
    <label>
      Nazwisko:
      <input type="text" name="nazwisko"/>
    </label>
    <br/>
    <label>
      PESEL:
      <input type="number" name="pesel" minLength={11} maxLength={11}/>
    </label>
    <br/>
    <label>
      Adres email:
      <input type="email" name="adres"/>
    </label>
    <br/>
    <label>
      Numer telefonu:
      <input type="number" name="telefon" minLength={9} maxLength={9}/>
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
    <label>
      Specjalizacja:
      <input type="text" name="specjalizacja"/>
    </label>
    <button type="submit">Dodaj</button>
  </form>
}