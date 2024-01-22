import React, { useState } from 'react';
function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // Perform authentication logic here
    setIsLoggedIn(true);
    const history = useHistory();
    history.push('/dashboard'); // Redirect to the dashboard after login
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
export default LoginForm;