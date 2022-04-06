function NavBar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p className="navbar-item has-text-weight-bold">
          GraphQL Chat
        </p>
      </div>
      <div className="navbar-end">
        {Boolean(user) && (
          <div className="navbar-item">
            <button className="button is-ghost" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
