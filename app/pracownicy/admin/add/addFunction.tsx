"use client";

import {redirect} from "next/navigation";
import {insertRow} from "@/utils/serverActions";
import {JSX} from "react";

export function addFunction(values: FormData): void {

  let data = `seq_PRACOWNIK.nextval, '${values.get("imie")}', '${values.get("nazwisko")}', ${values.get("pesel")}, '${values.get("adres")}', ${values.get("telefon")}`;

  console.log(data);

  insertRow("PRACOWNIK", data).then(() => {
    data = `seq_ADMINISTRACJA.nextval, '${values.get("kawa")}', seq_PRACOWNIK.currval`;

    console.log(data);

    insertRow("ADMINISTRACJA", data).then(
      () => redirect("/pracownicy/admin")
    );
  });
}

export default function AddForm(): JSX.Element {
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
      Typ kawusi:
      <input type="text" name="kawa"/>
    </label>
    <button type="submit">Dodaj</button>
  </form>
}