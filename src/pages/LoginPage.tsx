import { Lock } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // <-- initialisation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Condition de login simple
    if (email === "admin@gmail.com" && password === "123456") {
      setError("");
      console.log("✅ Connexion réussie !");
      navigate("/dashboard"); // <-- redirection vers la page dashboard
    } else {
      setError("❌ Email ou mot de passe incorrect !");
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    
      <div className="bg-gray-800 p-10 rounded-sm shadow-lg w-full max-w-md">
    
        <h1 className="text-white text-3xl font-semibold text-center mb-8">
    
          <Lock
            className="inline-block mr-2 w-20 h-20 text-cyan-400 "
          />
    
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-gray-200 mb-2 text-sm font-medium">Email address</label>
          
            <input
              type="email"
              placeholder="Exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full px-4 py-2 rounded-sm bg-nigth text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          
          </div>

          {/* Password */}
          <div>
          
            <label className="block text-gray-200 mb-2 text-sm font-medium">Password</label>

            <input
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full px-4 py-2 rounded-sm bg-night text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="btn btn-soft btn-primary btn-block "
            
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
