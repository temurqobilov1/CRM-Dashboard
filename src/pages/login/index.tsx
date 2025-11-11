import { useState } from "react";
import { useLoginMutation } from "../../hooks/useQueryHandler/useQueryAction";
import {Loader} from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useLoginMutation();

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-[70%] m-auto ">
      <div className="shadow-2xl p-5 rounded-2xl mt-[20%] max-w-[420px] m-auto">
        <div className="flex flex-col items-center gap-2 mb-5">
          <h1 className="text-2xl font-bold">Welcome to CRM</h1>
         
        </div>
        <form onSubmit={login} className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-1">
            
            <input
              type="text"
              id="username"
              placeholder="Enter your email..."
              value={email}
              className="outline-none border border-solid border-gray-200 rounded-[7px] px-2 py-1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            
            <input
              value={password}
              type="password"
              placeholder="********"
              id="password"
              className="outline-none border border-solid border-gray-200 rounded-[7px] px-2 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full rounded-xl bg-blue-500 hover:bg-blue-700 text-white h-[35px] mt-4"
          >
            {isPending ? <Loader size={18} className="animate-spin mx-auto" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
