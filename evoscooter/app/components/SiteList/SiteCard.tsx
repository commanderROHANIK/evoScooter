import { SiteData } from "@/types";
import { useState } from "react";
import ShowSite from "./ShowSite";
import { removeSite } from "../../admin/actions";

export default function SiteCard(Site: SiteData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={Site.Address}
            className="bg-white bg-opacity-80 my-6 text-black rounded-xl h-16 flex items-center justify-between px-4 cursor-pointer hover:bg-gray-100"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowSite isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} site={Site} />
            <p>{Site.Address}</p>
            <button
                className="bg-red-600 text-white text-sm rounded-md px-2 py-1"
                onClick={() =>
                    removeSite(Site.Address).then(() => console.log("done")).catch((error) => console.log(error))
                }
            >Remove</button>
        </div>
    );
}