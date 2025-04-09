import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, set, push } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

function ContactUs() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/signup");
      } else {
        setUser(currentUser);
        const userRef = ref(db, `users/${currentUser.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          setName(userData.name || "");
          setEmail(userData.email || "");
          setPhone(userData.phone_number || "");
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Message cannot be empty.");
      return;
    }

    try {
      const messagesRef = ref(db, "messages");
      const newMessageRef = push(messagesRef);

      await set(newMessageRef, {
        userId: user.uid,
        name,
        email,
        phone_number,
        message,
        timestamp: new Date().toISOString(),
      });

      alert("Message sent successfully!");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-poppins">
      <div className="flex-col">
        <div
          className="flex items-center justify-center h-72 bg-fixed bg-left bg-cover font-poppins"
          style={{ backgroundImage: `url("../images/header.webp")` }}
        >
          <div className="p-5 font-bold text-center drop-shadow-3xl">
            <h1 className="tracking-widest text-4xl sm:text-6xl lg:text-8xl text-white">
              CONTACT US
            </h1>
            <p className="text-white text-sm sm:text-xl">
              <Link to="/">
                <span className="text-white/70">Home </span>
              </Link>
              {">"} Contact Us
            </p>
          </div>
        </div>

        <div className="flex-col md:flex justify-between md:space-x-16 p-8 md:p-32">
          <div className="flex-col w-full pb-8 md:pb-0">
            <p className="text-2xl md:text-5xl text-[#0A4251] font-bold pb-2 md:pb-10">
              Ask Us Anything!
            </p>
            <p className="text-[#0A4251] text-md md:text-xl line-clamp-2">
              Got any questions or suggestions? Just fill out the form!
            </p>
          </div>

          <div className="bg-[#FCE6B9]/50 w-full p-5 md:p-10 rounded-3xl">
            <p className="text-center text-xl md:text-4xl text-[#0A4251] font-semibold pb-5 md:pb-10">
              Message Us
            </p>

            <form className="flex-col" onSubmit={handleSubmit}>
              <div className="flex justify-between space-x-2 md:space-x-5">
                {/* Name Input */}
                <div className="bg-white border w-full border-[#0A4251] p-2 px-2 md:px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-4 md:mb-7">
                  <label className="block mb-1 md:mb-2 text-[0.6rem] md:text-xs text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    className="text-gray-900 text-xs md:text-sm block w-full appearance-none focus:outline-none focus:ring-0"
                    value={name}
                    readOnly
                  />
                </div>

                {/* Email Input */}
                <div className="bg-white border w-full border-[#0A4251] p-2 px-2 md:px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-4 md:mb-7">
                  <label className="block mb-1 md:mb-2 text-[0.6rem] md:text-xs text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="text-gray-900 text-xs md:text-sm block w-full appearance-none focus:outline-none focus:ring-0"
                    value={email}
                    readOnly
                  />
                </div>
              </div>

              {/* Phone Number Input */}
              <div className="bg-white w-full border border-[#0A4251] p-2 px-2 md:px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-4 md:mb-7">
                <label className="block mb-1 md:mb-2 text-[0.6rem] md:text-xs text-gray-500">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="text-gray-900 text-xs md:text-sm block w-full ps-6 appearance-none focus:outline-none focus:ring-0"
                  value={phone_number}
                  readOnly
                />
              </div>

              {/* Message Input */}
              <div className="bg-white w-full border border-[#0A4251] p-2 px-2 md:px-5 rounded-md shadow-md shadow-[#0A4251]/20 mb-4 md:mb-7">
                <label className="block mb-1 md:mb-2 text-[0.6rem] md:text-xs text-gray-500">
                  Message
                </label>
                <textarea
                  className="text-gray-900 text-xs md:text-sm block w-full appearance-none focus:outline-none focus:ring-0"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-center pt-5">
                <button
                  className="bg-[#0A4251] text-sm text-white font-medium p-1.5 md:p-3 w-1/2 rounded-md hover:bg-[#0A4251]/90"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
