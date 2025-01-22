// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import oracledb from 'oracledb';

let connection: null | oracledb.Connection;

try {
  connection = await oracledb.getConnection({
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECTION_STRING,
  });
} catch (error) {
  console.error('Error connecting to Oracle database', error);
}

export const OracleDatabase =
  {
    async query(sql: string): Promise<unknown[][]> {
      if (!connection) {
        throw new Error('Not connected to Oracle database');
      }

      const result = await connection.execute(sql);
      return result.rows;
    }
  }