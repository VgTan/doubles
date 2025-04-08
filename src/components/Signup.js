import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebaseConfig";
import "../App.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase(app);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await set(ref(db, `users/${user.uid}`), {
        name,
        username,
        email,
        phone_number,
        role: "user",
      });

      navigate("/login");
    } catch (error) {
      alert("Sign-up failed: " + error.message);
    }
  };

  return (
    <div className="relative grid grid-cols-2 font-poppins overflow-hidden">
      <div className="absolute inset-0 right-2.5 flex justify-center items-center z-10">
        <p
          className="text-[8.5rem] text-white font-semibold transform rotate-90 whitespace-nowrap relative half-color"
          data-content="SIGN UP"
        >
          SIGN UP
        </p>
      </div>
      <div className="flex h-screen">
        <img
          className="object-center object-cover"
          src="../images/homepage.png"
        />
      </div>
      <div className="flex-col justify-center items-center py-16 px-28 gap-y-2 z-20">
        <div className="pb-10">
          <p className="text-center text-4xl font-semibold text-[#0A4251] drop-shadow-2xl">
            Sign Up
          </p>
        </div>
        <div className="max-h-screen overflow-hidden flex justify-center">
          <form onSubmit={handleSignup}>
            <div className="grid md:grid-cols-2 md:gap-4 mb-7">
              {/* Full Name Input */}
              <div className="border border-[#0A4251] p-2 px-5 rounded-md shadow-md shadow-[#0A4251]/20">
                <label
                  for="fullname_input"
                  class="block mb-2 text-xs text-gray-500"
                >
                  Full Name
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-[#0A4251]"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullname_input"
                    class="text-gray-900 text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                    placeholder="Jhon Doe"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Username Input */}
              <div className="border border-[#0A4251] p-2 px-5 rounded-md shadow-md shadow-[#0A4251]/20">
                <label
                  for="username_input"
                  class="block mb-2 text-xs text-gray-500"
                >
                  Username
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 text-[#0A4251]"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="username_input"
                    class="text-gray-900 text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                    placeholder="Jhon12"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="border border-[#0A4251] p-2 px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-7">
              <label for="email_input" class="block mb-2 text-xs text-gray-500">
                Email Address
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-[#0A4251]"
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

            {/* Phone Input */}
            <div className="border border-[#0A4251] p-2 px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-7">
              <label for="phone_input" class="block mb-2 text-xs text-gray-500">
                Phone Number
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-[#0A4251]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  id="phone_input"
                  class="text-gray-900 text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                  placeholder="08123456789"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="border border-[#0A4251] p-2 px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-7">
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
                    class="w-4 h-4 text-[#0A4251]"
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
                className="bg-[#0A4251] text-sm text-white font-medium p-3 w-1/2 rounded-sm hover:bg-[#0A4251]/90"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <p className="text-gray-700 pt-10 text-center text-sm">
              Already A Member?{" "}
              <span class="text-[#0A4251] font-semibold cursor-pointer decoration-2 hover:underline underline-offset-4 underline-[#0A4251]">
                <a href="/login">Login</a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
