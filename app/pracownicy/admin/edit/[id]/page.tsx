import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";
import EditForm from "@/app/pracownicy/admin/edit/[id]/editFunctions";

export default async function Add({params}: {params: Promise<{id: string}>}): Promise<JSX.Element> {
  const {id} = await params;

  const adminList = await OracleDatabase.query(`SELECT A2.ID_ADMINISTRACJA, IMIE, NAZWISKO, PESEL, EMAIL, NUMER_TELEFONU, TYP_KAWUSI, P.ID_PRACOWNIK FROM PRACOWNIK P JOIN SYSTEM.ADMINISTRACJA A2 on P.ID_PRACOWNIK = A2.ID_PRACOWNIK WHERE A2.ID_ADMINISTRACJA = ${id}`);

  return (
    <main>
      <h2>Edytuj pracownika administracji</h2>
      <EditForm dataList={adminList[0]} id={id}/>
    </main>
  )
}