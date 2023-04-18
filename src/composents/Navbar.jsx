import Link from "next/link"

function Navbar() {
    return (
        <ul className="flex text-2xl py-12">
            <li className="ml-12 active:bg-slate-400 link">
                <Link className="m-2" href="/">Acceuil</Link>
            </li>
            <li className="ml-12 active:bg-slate-400 link">
                <Link className="m-2" href="/recettes_recente">Recettes récentes</Link>
            </li>
            <li className="ml-12 active:bg-slate-400 link">
                <Link className="m-2" href="/toutes_recettes">Toutes les recettes</Link>
            </li>
            <li className="ml-auto mr-24 active:bg-slate-400 link">
                <Link className="m-2" href="/vos_recettes">Vos recettes</Link>
            </li>
        </ul>

  )
}

export default Navbar