import Link from "next/link"
function Inser_recette() {
    return (
        <li className="flex place-content-center mt-48">
            <Link className="text-4xl p-12 border-2 hover:bg-[#7c1d12] active:bg-[#5e120a] hover:font-bold border-white text-white rounded-2xl bg-[#8A1A0C]" href="/creation_recette" >Créer votre recette !</Link>
        </li>
    )
}

export default Inser_recette