import {OracleDatabase} from "@/utils/oracleDatabase";
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton";
import {JSX} from "react";
import AddButton from "@/components/Buttons/AddButton/AddButton";
import EditButton from "@/components/Buttons/EditButton/EditButton";

export default async function Ochrona(): Promise<JSX.Element> {
  const securityList = await OracleDatabase.query("SELECT O.ID_OCHRONA, P.IMIE, P.NAZWISKO, P.EMAIL, O.GRUPA_INWALIDZKA FROM OCHRONA O JOIN PRACOWNIK P on P.ID_PRACOWNIK = O.ID_PRACOWNIK ORDER BY O.ID_OCHRONA");

  return (
    <main>
      <h2>Ochrona</h2>
      <br/>
      <AddButton/>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Grupa inwalidzka</th>
          <th/>
          <th/>
        </tr>
        </thead>
        <tbody>
        {securityList.map(security => (
          <tr key={security[0]}>
            <td>{security[0]}</td>
            <td>{security[1]}</td>
            <td>{security[2]}</td>
            <td>{security[3]}</td>
            <td>{security[4]}</td>
            <td>
              <EditButton id={security[0]}/>
            </td>
            <td>
              <DeleteButton id={security[0]} tableName="OCHRONA" refreshLink="/pracownicy/security"/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}