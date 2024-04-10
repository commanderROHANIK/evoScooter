import Header from "../components/common/header";

export default async function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Header />
        <div className="bg-white flex-1 mt-6 rounded-xl">
          <span className="bg-black w-1/5 flex-1 inline-flex rounded-tl-xl">
            tmp
          </span>
          <span className="bg-black w-4/5 flex-1 inline-flex rounded-tr-xl">
            tmp2
          </span>
        </div>
      </div>
    </div>
  )
}
