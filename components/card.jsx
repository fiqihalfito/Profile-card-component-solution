import Bio from "./sub/bio";
import CardImage from "./sub/card-image";
import Stats from "./sub/stats";

export default function Card() {
    return (
        <div className="bg-white rounded-xl overflow-hidden font-kumbhSans filter drop-shadow-2xl">
            <CardImage />
            <Bio />
            <Stats />
        </div>
    )
}