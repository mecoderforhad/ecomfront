import DataGrid from "@/components/custom/table/DataGrid";
import { data, headers } from "@/lib/data";

export default function Dashboard() {
  return (
    <>
      <DataGrid headers={headers} data={data} itemsPerPage={10} />
    </>
  );
}
