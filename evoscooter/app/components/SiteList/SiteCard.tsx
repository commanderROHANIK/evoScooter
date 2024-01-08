import { SiteData } from "@/types";
import { useState } from "react";
import ShowSite from "./ShowSite";
import { removeSite } from "../../admin/actions";

export default function SiteCard(Site: SiteData) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div
            key={Site.Address}
            className="bg-white m-5 text-black rounded-xl h-16"
            onClick={() => setIsEditOpen(true)}
        >
            <ShowSite isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)} site={Site} />
            <p>{Site.Address}</p>
            <button
                className="bg-red-600 text-lg text-black rounded-md"
                onClick={() =>
                    removeSite(Site.Address).then(() => console.log("done")).catch((error) => console.log(error))
                }
            >Remove</button>
        </div>
    );
}