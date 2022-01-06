import React from "react";
import "./Table.css";
import MaterialTable from "material-table";

function Table({ data }) {
  const columns = [
    {
      title: "States/UT",
      field: "state",
    },
    {
      title: "Confirmed",
      field: "confirmed",
    },
    {
      title: "Recovered",
      field: "recovered",
    },
    {
      title: "Deaths",
      field: "deaths",
    },
    {
      title: "Active",
      field: "active",
    },
    {
      title: "Last Updated On",
      field: "lastupdatedtime",
    },
  ];

  return (
    <div>
      <MaterialTable
        title="Covid-19 Dashboard"
        data={data}
        columns={columns}
        options={{
          searchAutoFocus: true,
          filtering: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 10,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}

export default Table;
