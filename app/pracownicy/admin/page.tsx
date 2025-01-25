import {OracleDatabase} from "@/utils/oracleDatabase";
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton";
import {JSX} from "react";
import AddButton from "@/components/Buttons/AddButton/AddButton";
import EditButton from "@/components/Buttons/EditButton/EditButton";

export default async function Admin(): Promise<JSX.Element> {
  const adminList = await OracleDatabase.query("SELECT A.ID_ADMINISTRACJA, P.IMIE, P.NAZWISKO, P.EMAIL, A.TYP_KAWUSI  FROM ADMINISTRACJA A JOIN PRACOWNIK P on P.ID_PRACOWNIK = A.ID_PRACOWNIK ORDER BY A.ID_ADMINISTRACJA");

  return (
    <main>
      <h2>Administracja</h2>
      <br/>
      <AddButton/>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Typ kawusi</th>
          <th/>
          <th/>
        </tr>
        </thead>
        <tbody>
        {adminList.map(admin => (
          <tr key={admin[0]}>
            <td>{admin[0]}</td>
            <td>{admin[1]}</td>
            <td>{admin[2]}</td>
            <td>{admin[3]}</td>
            <td>{admin[4]}</td>
            <td>
              <EditButton id={admin[0]}/>
            </td>
            <td>
              <DeleteButton id={admin[0]} tableName="ADMINISTRACJA" refreshLink="/pracownicy/admin"/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}