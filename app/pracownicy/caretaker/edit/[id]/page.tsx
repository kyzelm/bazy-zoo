import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";
import EditForm from "@/app/pracownicy/caretaker/edit/[id]/editFunctions";

export default async function Add({params}: {params: Promise<{id: string}>}): Promise<JSX.Element> {
  const {id} = await params;

  const adminList = await OracleDatabase.query(`SELECT O.ID_OPIEKUN, P.IMIE, P.NAZWISKO, P.PESEL, P.EMAIL, P.NUMER_TELEFONU, O.SPECJALIZACJA, O.ID_WYBIEG, P.ID_PRACOWNIK FROM OPIEKUN O JOIN PRACOWNIK P ON O.ID_PRACOWNIK = P.ID_PRACOWNIK WHERE O.ID_OPIEKUN = ${id}`);
  const wybiegiList = await OracleDatabase.query("SELECT ID_WYBIEG, NAZWA FROM WYBIEG");

  return (
    <main>
      <h2>Edytuj opiekuna</h2>
      <EditForm dataList={adminList[0]} id={id} wybiegiList={wybiegiList}/>
    </main>
  )
}