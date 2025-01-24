export default async function Subpage({params}: { params: { submenu: string } }) {
  return (
    <main>
      <h2>{params.submenu.charAt(0).toUpperCase() + params.submenu.substring(1)}</h2>
      <h3>

      </h3>
    </main>
  );
}
