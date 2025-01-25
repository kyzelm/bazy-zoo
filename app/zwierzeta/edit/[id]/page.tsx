import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";
import EditForm from "@/app/zwierzeta/edit/[id]/editFunction";

export default async function Add({params}: {params: Promise<{id: string}>}): Promise<JSX.Element> {
  const {id} = await params;

  const wybiegiList = await OracleDatabase.query("SELECT ID_WYBIEG, NAZWA FROM WYBIEG");
  const animalList = await OracleDatabase.query(`SELECT Z.ID_ZWIERZE, IMIE, GATUNEK, RODZINA, RODZAJ_POZYWIENIA, Z.ID_WYBIEG FROM ZWIERZE Z WHERE Z.ID_ZWIERZE = ${id}`);

  return (
    <main>
      <h2>Edytuj zwierzę</h2>
      <EditForm dataList={animalList[0]} wybiegiList={wybiegiList} id={id}/>
    </main>
  )
}