import { Link } from "react-router";

const AppHeader = () => {
  return (
    <div className="app-header">
      <Link to={"/"} className="pl-5">
        <img src="logo.png" alt="logo" height={100} />
      </Link>
      <div className="h-full flex flex-1 pr-6 pb-3 gap-5 items-end justify-end">
        <Link to={"/narucivanje"}>Naručivanje dušeka</Link>
        <Link to={"/kalkulator-cena"}>Kalkulator cena</Link>
        <Link to={"/kontakt"}>Kontakt</Link>
      </div>
    </div>
  );
};

export default AppHeader;
