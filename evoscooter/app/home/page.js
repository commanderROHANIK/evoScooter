export default async function Login() {
  const todos = await getStaticProps();

  console.log(todos);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 background">
        {
            todos.map((todo) => {
                return (
                    <div
                        className="list">
                        <div 
                            key={todo.id}
                            className="listItem">
                            <p>{todo.title}</p>
                        </div>
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
