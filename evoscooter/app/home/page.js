import Header from "../commonComponents/header";

export default async function Login() {
  const todos = await getStaticProps();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
        <Header />        
        {
            todos.map((todo) => {
                return (
                        <div 
                            key={todo.id}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{todo.Type}</p>
                        </div>
                )
            })
        }
    </div>
  )
}

async function getStaticProps() {
    // const response = await fetch("/api/vehicles");
    const response = await fetch('http://localhost:3000/api/vehicles', {
        method: 'GET',
      });
    return response.json();
}
