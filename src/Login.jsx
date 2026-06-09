import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    const name = email.split('@')[0]
    onLogin({ name })
  }

  return (
    <div className="login-wrap">
      <form className="login" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-actions">
          <button type="submit" className="btn-primary">Entrar</button>
        </div>
      </form>
    </div>
  )
}
