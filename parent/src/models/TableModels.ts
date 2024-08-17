export interface IColumnProps {
  key: string;
  header: string;
}

export interface ITableProps {
  columns: Array<IColumnProps>;
  data: Array<{ [key: string]: any }>;
}
