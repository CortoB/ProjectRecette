import Navbar from "@/composents/Navbar"
import Table from "@/composents/Table"

function Toutes_Recettes() {
    return (
        <div>
            <Navbar />
            <Table/>
            <div className="text-white">Toute recette</div>
        </div>
    )
}

export default Toutes_Recettes