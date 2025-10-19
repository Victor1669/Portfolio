export default function Header({ children }) {
  return (
    <header id="Header">
      <h1>Victor</h1>
      <nav>
        <a
          className="button"
          target="_blank"
          href="https://github.com/Victor1669"
        >
          GitHub
        </a>
        <a
          className="button"
          target="_blank"
          href="https://www.linkedin.com/in/victorfernandes1669/"
        >
          LinkedIn
        </a>
        {children}
      </nav>
    </header>
  );
}
