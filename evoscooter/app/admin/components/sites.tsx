import { getSites } from "../actions";

export default async function Sites() {
    const sites = await getSites();

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h2>Sites</h2>

            {
                sites.map((site) => {
                    return (
                        <div
                            key={site.Address}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{site.Address}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}