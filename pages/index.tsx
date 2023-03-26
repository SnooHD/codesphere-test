import { Header } from "@/components/Header.component";
import { Modal } from "@/components/Modal/Modal.component";
import { Table } from "@/components/Table.component";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codesphere workspaces</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="w-full max-w-content space-y-xl pt-xl">
        <Header />
        <main>
          <Table items={[{ name: "test", id: "1" }]} />
        </main>
      </div>
    </>
  );
}
