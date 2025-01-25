import {JSX} from "react";
import {OracleDatabase} from "@/utils/oracleDatabase";

export default async function Wybiegi(): Promise<JSX.Element> {
  const wybiegi = await OracleDatabase.query("SELECT ID_WYBIEG, NAZWA, (SELECT COUNT(*) FROM ZWIERZE Z WHERE W.ID_WYBIEG = Z.ID_WYBIEG GROUP BY Z.ID_WYBIEG) FROM WYBIEG W");

  return (
    <main>
      <h2>Wybiegi</h2>
      <br/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Liczba zwierząt</th>
          </tr>
        </thead>
        <tbody>
          {wybiegi.map((wybieg, index) => (
            <tr key={index}>
              <td>{wybieg[0]}</td>
              <td>{wybieg[1]}</td>
              <td>{wybieg[2] ? wybieg[2] : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}