import Image from "next/image"
import cardImg from '../../public/images/bg-pattern-card.svg'

export default function CardImage() {
    return <Image src={cardImg} alt="card-image" />
}