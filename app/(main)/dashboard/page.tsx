import DataGrid from "@/components/custom/table/DataGrid";
import { headers } from "@/lib/data";
import { serverApiCall } from "@/utils/serverApiCall";
import Actions from "../components/Actions";
import { formatDate, shortenText } from "@/utils/format/formatter";
import Tooltip from '@mui/material/Tooltip';

export default async function Dashboard(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  console.log("query params:", query);

  // const data = await serverApiCall("/products");

  // const modifiedData = data.map((row: any) => ({
  //   ...row,
  //   id: (
  //     <Tooltip title={row?.id}>
  //       <span>{shortenText(row?.id, 8)}</span>
  //     </Tooltip>
  //   ),
  //   description: (
  //     <Tooltip title={row?.description}>
  //       <span>{shortenText(row?.description, 20)}</span>
  //     </Tooltip>
  //   ),
  //   createdAt: formatDate(row?.createdAt),
  //   updatedAt: formatDate(row?.updatedAt),
  //   actions: <Actions />,
  // }));

  return (
    <div>
      dashboard
      {/* <DataGrid headers={headers} data={modifiedData} itemsPerPage={10} /> */}
    </div>
  );
}