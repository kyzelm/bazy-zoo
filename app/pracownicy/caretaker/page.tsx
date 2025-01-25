import {OracleDatabase} from "@/utils/oracleDatabase";
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton";
import {JSX} from "react";
import AddButton from "@/components/Buttons/AddButton/AddButton";
import EditButton from "@/components/Buttons/EditButton/EditButton";

export default async function Opiekunowie(): Promise<JSX.Element> {
  const caretakerList = await OracleDatabase.query("SELECT O.ID_OPIEKUN, P.IMIE, P.NAZWISKO, P.EMAIL, W.NAZWA, O.SPECJALIZACJA  FROM OPIEKUN O JOIN PRACOWNIK P on P.ID_PRACOWNIK = O.ID_PRACOWNIK JOIN WYBIEG W ON W.ID_WYBIEG = O.ID_WYBIEG ORDER BY O.ID_OPIEKUN");

  return (
    <main>
      <h2>Opiekunowie</h2>
      <br/>
      <AddButton/>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Wybieg</th>
          <th>Specjalizacja</th>
          <th/>
          <th/>
        </tr>
        </thead>
        <tbody>
        {caretakerList.map(caretaker => (
          <tr key={caretaker[0]}>
            <td>{caretaker[0]}</td>
            <td>{caretaker[1]}</td>
            <td>{caretaker[2]}</td>
            <td>{caretaker[3]}</td>
            <td>{caretaker[4]}</td>
            <td>{caretaker[5]}</td>
            <td>
              <EditButton id={caretaker[0]}/>
            </td>
            <td>
              <DeleteButton id={caretaker[0]} tableName="OPIEKUN" refreshLink="/pracownicy/caretaker"/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}