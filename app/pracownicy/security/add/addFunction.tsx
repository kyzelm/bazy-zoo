"use client";

import {redirect} from "next/navigation";
import {insertRow} from "@/utils/serverActions";
import {JSX} from "react";

export function addFunction(values: FormData): void {

  let data = `seq_PRACOWNIK.nextval, '${values.get("imie")}', '${values.get("nazwisko")}', ${values.get("pesel")}, '${values.get("adres")}', ${values.get("telefon")}`;

  console.log(data);

  insertRow("PRACOWNIK", data).then(() => {
    data = `seq_OCHRONA.nextval, ${values.get("grupa")}, seq_PRACOWNIK.currval`;

    console.log(data);

    insertRow("OCHRONA", data).then(
      () => redirect("/pracownicy/security")
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
      Grupa inwalidzka:
      <input type="number" name="grupa"/>
    </label>
    <button type="submit">Dodaj</button>
  </form>
}