export default async function Login() {
    const todos = await getStaticProps();
  
    console.log(todos);
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <h1>Profile</h1>
      </div>
    )
  }
  
  async function getStaticProps() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      return response.json();
  }
  