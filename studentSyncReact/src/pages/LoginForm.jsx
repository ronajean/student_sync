import "../styles/LoginForm.css";

function LoginForm() {
  return (
    <>
      <div className="login-page">
        <div className="left-section">
          <div className="app-title">
            <h1>StudentSync</h1>
            <p>Innovate and Create</p>
          </div>

          <form action="" className="form-group">
            <input type="email" placeholder="" onChange="" required />
            <input type="password" placeholder="" onChange="" required />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>

        <div className="right-section">
          <h2>
            Seamless
            <br />
            Collaboration,
            <br />
            Smarter Projects
          </h2>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
