import {JSX} from "react";
import AddForm from "@/app/pracownicy/security/add/addFunction";

export default async function Add(): Promise<JSX.Element> {
  return (
    <main>
      <h2>Dodaj ochroniarza</h2>
      <AddForm/>
    </main>
  )
}