import Image from "next/image";
import avatar from "../../public/images/image-victor.jpg"

export default function Bio() {
    return (
        <div className="text-center">
            {/* use relative on image to display white border properly */}
            <Image src={avatar} alt="avatar" className="border-4 border-white relative rounded-full mx-auto avatar-position mb-4 " />
            <h1 className="font-bold text-veryDarkDesaturated text-lg mb-1">Victor Crest <span className="font-normal text-darkGrayish ml-1">26</span></h1>
            <p className="text-darkGrayish text-sm">London</p>
        </div>
    )
}