export enum ColumnType {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  BOOLEAN = 'BOOLEAN',
}

export enum QueryType {
  SELECT = 'SELECT',
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export interface QueryStructure {
  table: string;
  columnNames: string[];
  columnTypes: ColumnType[];
  specialQueries: {
    [key in QueryType]: string;
  }
}