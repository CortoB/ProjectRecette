import Link from "next/link"

function Navbar() {
    return (
        <ul className="flex text-2xl py-12">
            <li className="ml-12">
                <Link  href="/">Acceuil</Link>
            </li>
            <li className="ml-12">
                <Link  href="/inserer-recette">Insérer une recette</Link>
            </li>
            <li className="ml-12">
                <Link href="/recettes-recente">Recettes récentes</Link>
            </li>
            <li className="ml-12">
                <Link href="/toutes-recettes">Toutes les recettes</Link>
            </li>
            <li className="ml-auto mr-24">
                <Link href="/vos-recettes">Vos recettes</Link>
            </li>
        </ul>

  )
}

export default Navbar