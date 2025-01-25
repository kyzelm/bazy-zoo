import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";
import EditForm from "@/app/pracownicy/security/edit/[id]/editFunctions";

export default async function Add({params}: {params: Promise<{id: string}>}): Promise<JSX.Element> {
  const {id} = await params;

  const securityList = await OracleDatabase.query(`SELECT O.ID_OCHRONA, IMIE, NAZWISKO, PESEL, EMAIL, NUMER_TELEFONU, GRUPA_INWALIDZKA, P.ID_PRACOWNIK FROM OCHRONA O JOIN PRACOWNIK P on O.ID_PRACOWNIK = P.ID_PRACOWNIK WHERE O.ID_OCHRONA = ${id}`);

  return (
    <main>
      <h2>Edytuj ochroniarza</h2>
      <EditForm dataList={securityList[0]} id={id}/>
    </main>
  )
}