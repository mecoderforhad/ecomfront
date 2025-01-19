import DataGrid from "@/components/custom/table/DataGrid";
import { headers } from "@/lib/data";
import { serverApiCall } from "@/utils/serverApiCall";
import Actions from "../components/Actions";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: { query: string; entries: number; page: string };
}) {
  const query = searchParams?.query || "";

  console.log("query===>", query);

  const data = await serverApiCall("/products");

  const modifiedData = data.map((row: any) => ({
    ...row,
    actions: <Actions />,
  }));
  
  return (
    <>
      <DataGrid headers={headers} data={modifiedData} itemsPerPage={10} />
    </>
  );
}
