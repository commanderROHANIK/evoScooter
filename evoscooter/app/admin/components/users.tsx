import { getUsers } from "../actions";

export default async function Users() {
    const users = await getUsers();

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <h2>Users</h2>

            {
                users.map((user) => {
                    return (
                        <div
                            key={user.Email}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{user.Name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}