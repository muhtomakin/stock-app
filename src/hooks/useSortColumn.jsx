import { useEffect, useState } from "react";

const useSortColumn = (data, columnObj) => {
  const [sortedData, setSortedData] = useState(data);
  const [columns, setColumns] = useState(columnObj);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (arg, type) => {
    setColumns({ ...columns, [arg]: columns[arg] * -1 });
    setSortedData(
      sortedData
        ?.map((item) => item)
        .sort((a, b) => {
          if (type === "date") {
            return columns[arg] * (new Date(a[arg]) - new Date(b[arg]));
          } else if (type === "number") {
            return columns[arg] * (a[arg] - b[arg]);
          } else {
            if (columns[arg] === 1) {
              return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
            } else {
              return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
            }
          }
        })
    );
  };

  return { sortedData, handleSort, columns };
};

export default useSortColumn;
