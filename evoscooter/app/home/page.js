import Image from 'next/image';
import logo from '../../public/evoLogo.png';

export default async function Login() {
  const todos = await getStaticProps();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
        <div className="header rounded-xl bg-black">
            <Image
                className="h-12 w-auto m-5"
                src={logo}
                alt="evosoft Logo"
            />
        </div>
        {
            todos.map((todo) => {
                return (
                        <div 
                            key={todo.id}
                            className="bg-white m-5 text-black rounded-xl h-16">
                            <p>{todo.title}</p>
                        </div>
                )
            })
        }
    </div>
  )
}

async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
}
