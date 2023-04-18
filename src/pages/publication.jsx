import Navbar from "@/composents/Navbar"

function Publication() {
    return (
        <div>
            <Navbar />
            <div className="max-w-max mx-auto mt-48 p-24 text-5xl border-2 rounded-2xl text-white bg-[#8A1A0C]">
                Votre recette a bien été publiée !
            </div>
        </div>
        
    )
}

export default Publication