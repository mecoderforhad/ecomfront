import DataGrid from "@/components/custom/table/DataGrid";
import { headers } from "@/lib/data";
import { serverApiCall } from "@/utils/serverApiCall";

export default async function Dashboard() {
  const data = await serverApiCall("/products");
  
  return (
    <>
      <DataGrid headers={headers} data={data} itemsPerPage={10} />
    </>
  );
}
