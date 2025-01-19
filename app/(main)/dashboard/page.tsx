import DataGrid from "@/components/custom/table/DataGrid";
import { headers } from "@/lib/data";
import { serverApiCall } from "@/utils/serverApiCall";

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: { query: string; entries: number; page: string };
}) {
  const query = searchParams?.query || "";
  const entries = searchParams?.entries || "";

  console.log("query===>", query);
  console.log("entries===>", entries);

  const data = await serverApiCall("/products");

  return (
    <>
      <DataGrid headers={headers} data={data} itemsPerPage={10} />
    </>
  );
}
