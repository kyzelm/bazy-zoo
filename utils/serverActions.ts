"use server";

import {OracleDatabase} from "@/utils/oracleDatabase";

export async function deleteRow(tableName: string, id: number | string): Promise<void> {
  OracleDatabase.query(`DELETE
                        FROM ${tableName}
                        WHERE ID_${tableName} = ${id}`);
}

export async function insertRow(tableName: string, add: string): Promise<void> {
  OracleDatabase.query(`INSERT INTO ${tableName}
                        VALUES (${add})`);
}

export async function updateRow(tableName: string, id: number | string, values: string): Promise<void> {
  OracleDatabase.query(`UPDATE ${tableName}
                        SET ${values}
                        WHERE ID_${tableName} = ${id}`);
}