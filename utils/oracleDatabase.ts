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
      connection.commit();
      return result.rows;
    },

    async getData(tabelename: string, data: string = "*", where: string): Promise<unknown[][]> {
      let query: string = `SELECT ${data}
                           FROM ${tabelename}`;

      if (where) {
        query += ` WHERE ${where}`;
      }

      return this.query(query);
    },

    async insertData(tabelename: string, names: string, values: string): Promise<unknown[][]> {
      return this.query(`INSERT INTO ${tabelename}
                             (${names})
                         VALUES (${values})`);
    },

    async updateData(tabelename: string, set: string, where: string): Promise<unknown[][]> {
      let query: string = `UPDATE ${tabelename}
                           SET ${set}`;

      if (where) {
        query += ` WHERE ${where}`;
      }

      return this.query(query);
    },

    async deleteData(tabelename: string, where: string): Promise<unknown[][]> {
      return this.query(`DELETE
                         FROM ${tabelename}
                         WHERE ${where}`);
    },
  }