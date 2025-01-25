import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";
import AddForm from "@/app/zwierzeta/add/addFunction";

export default async function Add(): Promise<JSX.Element> {
  const wybiegiList = await OracleDatabase.query("SELECT ID_WYBIEG, NAZWA FROM WYBIEG");

  return (
    <main>
      <h2>Dodaj zwierzę</h2>
      <AddForm wybiegiList={wybiegiList}/>
    </main>
  )
}