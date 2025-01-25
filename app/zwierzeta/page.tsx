import {OracleDatabase} from "@/utils/oracleDatabase";
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton";
import {JSX} from "react";
import AddButton from "@/components/Buttons/AddButton/AddButton";
import EditButton from "@/components/Buttons/EditButton/EditButton";

export default async function Zwierzeta(): Promise<JSX.Element> {
  const animalList = await OracleDatabase.query("SELECT Z.ID_ZWIERZE, IMIE, GATUNEK, RODZINA, RODZAJ_POZYWIENIA, W.NAZWA FROM ZWIERZE Z JOIN WYBIEG W ON Z.ID_WYBIEG = W.ID_WYBIEG ORDER BY Z.ID_ZWIERZE");

  return (
    <main>
      <h2>Zwierzęta</h2>
      <br/>
      <AddButton/>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Gatunek</th>
          <th>Rodzina</th>
          <th>Pożywienie</th>
          <th>Wybieg</th>
          <th/>
          <th/>
        </tr>
        </thead>
        <tbody>
        {animalList.map(animal => (
          <tr key={animal[0]}>
            <td>{animal[0]}</td>
            <td>{animal[1]}</td>
            <td>{animal[2]}</td>
            <td>{animal[3]}</td>
            <td>{animal[4]}</td>
            <td>{animal[5]}</td>
            <td>
              <EditButton id={animal[0]}/>
            </td>
            <td>
              <DeleteButton id={animal[0]} tableName="ZWIERZE" refreshLink="/zwierzeta"/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}