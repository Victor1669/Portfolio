import { Link } from "react-router-dom";

export default function HomeButton({ texto }) {
  return (
    <>
      <Link className="homeButton">{texto}</Link>
    </>
  );
}
