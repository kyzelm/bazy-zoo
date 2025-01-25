import {JSX} from "react";
import AddForm from "@/app/pracownicy/caretaker/add/addFunction";
import {OracleDatabase} from "@/utils/oracleDatabase";

export default async function Add(): Promise<JSX.Element> {
  const wybiegiList = await OracleDatabase.query("SELECT ID_WYBIEG, NAZWA FROM WYBIEG");

  return (
    <main>
      <h2>Dodaj opiekuna</h2>
      <AddForm wybiegiList={wybiegiList}/>
    </main>
  )
}