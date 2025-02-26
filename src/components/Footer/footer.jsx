import { assets } from "../../lib/assets"

const Footer = () => {
    return (
        < footer className="border-t border-white/10 mt-20" >
            <div className="container mx-auto px-4 py-10 flex flex-col items-center">
                <div className="relative h-20 w-20 mb-4">

                    <img
                        src={assets.logo}
                        alt="CricPay Logo"
                        className="object-cover h-full w-full"
                    />
                </div>
                <p className="text-black/80 text-sm">
                    Copyright © 2021 CricPay. All Rights Reserved.
                </p>
            </div>
        </footer >
    )
}

export default Footer