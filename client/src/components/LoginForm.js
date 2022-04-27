import { useState } from 'react';
import { login } from '../auth';

function LoginForm({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    const user = await login(userId, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">
              User ID
            </label>
            <div className="control">
              <input className="input" type="text" required
                value={userId} onChange={(event) => setUserId(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">
              Password
            </label>
            <div className="control">
              <input className="input" type="password" required
                value={password} onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="message is-danger">
              <p className="message-body">
                Login failed
              </p>
            </div>
          )}
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
