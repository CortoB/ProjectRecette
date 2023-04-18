import Navbar from "@/composents/Navbar"
import Link from "next/link"

function Creation_Recette() {
    return (
        <div>
            <Navbar />
            <form>
                <div className="max-w-max mx-auto mt-12 border-2 rounded-2xl text-white bg-[#8A1A0C] p-4">
                    <div>
                         Nom de votre recette :
                        <input className="border-[#373234] border-2 rounded-md block ml-2 mt-1 p-1 text-black focus:outline-none pl-2" type="text" />
                    </div>
                    <div>
                        Description :
                        <textarea className="border-[#373234] border-2 rounded-md block mx-2 mt-1 pb-24 text-black focus:outline-none pl-2" rows="1" cols="30"></textarea>
                    </div>
                    <div>
                        Ingrédients :
                        <textarea className="border-[#373234] border-2 rounded-md block mx-2 mt-1 pb-24 text-black focus:outline-none pl-2" rows="3" cols="30"></textarea>
                    </div>  
                    <Link className="link block p-2 mt-2 text-center active:bg-slate-400" href="/publication">Publier la recette !</Link>
                </div>
            </form>
        </div>
        )
}

export default Creation_Recette