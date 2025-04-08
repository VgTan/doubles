import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        console.error("User data not found");
        alert("User data not found in database.");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="relative grid grid-cols-2 font-poppins overflow-hidden">
      <div className="absolute inset-0 right-2.5 flex justify-center items-center z-10">
        <p
          className="text-[8.5rem] text-white font-semibold transform rotate-90 whitespace-nowrap relative half-color2"
          data-content="LOGIN"
        >
          LOGIN
        </p>
      </div>
      <div className="flex-col justify-center items-center py-16 px-40 gap-y-2 z-20">
        <div className="pt-20 pb-10">
          <p className="text-center text-4xl font-semibold text-[#e68d79] drop-shadow-2xl">
            Login
          </p>
        </div>
        <div className="max-h-screen overflow-hidden flex flex-col justify-center">
          <form onSubmit={handleLogin}>
            <div className="border border-[#e68d79] p-2 px-5 rounded-md shadow-md shadow-[#e68d79]/20 mb-7">
              <label for="email_input" class="block mb-2 text-xs text-gray-500">
                Email Address
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-[#e68d79]"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email_input"
                  class="text-gray-900 text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="border border-[#e68d79] p-2 px-5 rounded-md shadow-md shadow-[#e68d79]/20 mb-7">
              <label
                for="password_input"
                class="block mb-2 text-xs text-gray-500"
              >
                Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-[#e68d79]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password_input"
                  class="text-gray-900 text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                  placeholder=" *mininum 6 characters"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <button
                className="bg-[#e68d79] text-sm text-white font-medium p-3 w-1/2 rounded-sm hover:bg-[#e68d79]/90"
                type="submit"
              >
                Login
              </button>
            </div>
            <p className="text-gray-700 pt-10 text-center text-sm">
              Don't Have An Account?{" "}
              <span class="text-[#e68d79] font-semibold cursor-pointer decoration-2 hover:underline underline-offset-4 underline-[#e68d79]">
                <a href="/signup">Signup</a>
              </span>
            </p>
          </form>
        </div>
      </div>
      <div className="flex h-screen">
        <img
          className="object-center object-cover"
          src="../images/homepage_2.webp"
        />
      </div>
    </div>
  );
}

export default Login;
