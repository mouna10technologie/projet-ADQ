import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Veuillez entrer un email valide.");
      return;
    }
    setMessage(`Merci, ${email}, vous êtes connecté.`);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Connexion</h2>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="exemple@domaine.com"
      />
      <button type="submit">Se connecter</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default LoginForm;
