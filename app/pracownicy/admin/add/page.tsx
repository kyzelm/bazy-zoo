import {JSX} from "react";
import AddForm from "@/app/pracownicy/admin/add/addFunction";

export default async function Add(): Promise<JSX.Element> {
  return (
    <main>
      <h2>Dodaj pracownika administracji</h2>
      <AddForm/>
    </main>
  )
}