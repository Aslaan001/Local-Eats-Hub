import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../config/appwriteconfig';
import { NavLink ,Link} from 'react-router-dom';

function Login() {

    const navigate=useNavigate();

    const[x,setx]=useState(true);

    const [userData, setUserData] = useState({
      email: "",
      password:""
    });


   const login = async ()=>{

    console.log(userData);

    try{
      
      const a=await account.createEmailPasswordSession(userData.email, userData.password);
      setx(false);
      navigate("/test");
    }

    catch(error){
      alert(error);
    }



   }



   if(x==false){
    return (
      <h1>loading....</h1>
    )
   }


   else{


  return (
    <>

    
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign in
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Don&#x27;t have an account?{" "}
          <Link
            to="/signin"
            title=""
            class="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Create a free account
          </Link>
        </p>
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Password{" "}
                </label>
                <a
                  href="#"
                  title=""
                  class="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </a>
              </div>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
              </div>
            </div>
            <div>
              <button

                onClick={login}
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Get started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div class="mt-3 space-y-3">
          <button
            type="button"
            class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </span>
            Sign in with Google
          </button>
          <button
            type="button"
            class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span class="mr-2 inline-block">
              <svg
                class="h-6 w-6 text-[#2563EB]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </span>
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
    <div class="h-full w-full">
      <img
        class="  rounded-md object-cover  mt-44 ml-10"
        src="https://images.pexels.com/photos/7855273/pexels-photo-7855273.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  </div>

</>

  )

}
}

export default Login