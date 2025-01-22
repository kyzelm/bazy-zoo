import {OracleDatabase} from "@/utils/oracleDatabase";

export default async function AboutID() {

  const rows = await OracleDatabase.query('SELECT * FROM zwierze');

  return (
    <main>
      <h1>About</h1>
      <p>
        {JSON.stringify(rows)}
      </p>
    </main>
  );
}