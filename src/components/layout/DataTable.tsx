import { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { DataGrid, ColDef } from "@material-ui/data-grid";

import { useAppContext } from "../../context/Context";

const useStyles = makeStyles(() => ({
  root: {
    height: 400,
    margin: "15px auto",
  },
}));

const columns = [
  { field: "id", flex: 2 },
  { field: "name", flex: 6 },
  { field: "count", flex: 3 },
  { field: "delivery", flex: 3 },
] as ColDef[];

interface RowItem {
  name: string;
  id: number;
  count: string;
}

const DataGridDemo: FC = () => {
  const { text } = useAppContext();
  const [rows, setRows] = useState<RowItem[] | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const rowArr = text.map(({ name, count, delivery }, index) => ({
      id: ++index,
      name,
      count,
      delivery,
    }));
    setRows(rowArr);
  }, [text]);

  return (
    <Container className={classes.root}>
      {rows !== null && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableColumnMenu
        />
      )}
    </Container>
  );
};

export default DataGridDemo;
