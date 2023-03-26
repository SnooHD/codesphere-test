import Head from "next/head";
import { Button } from "@/components/Button.component";
import { Header } from "@/components/Header.component";
import { Table } from "@/components/Table.component";
import { useApi } from "@/hooks/useAPI.hook";

import type { TableItemProps } from "@/types/table.types";

export default function Home() {
  const { data, isLoading, hasError } =
    useApi<TableItemProps[]>("/listWorkspaces");

  return (
    <>
      <Head>
        <title>Codesphere workspaces</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <div
        className={`
            w-full h-full max-w-content space-y-xl pt-xl
          `}
      >
        <Header />
        <main>
          {data && <Table items={data} />}
          {hasError && (
            <div className="text-white">
              Something went wrong fetching the workspaces...
              <Button onClick={() => location.reload()}>Try again</Button>
            </div>
          )}
          {isLoading && <div className="text-white">Loading...</div>}
        </main>
      </div>
    </>
  );
}
