import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar title="E-Commerce Application" />
      <div className="page">
        <div className="card" style={{ textAlign: "center" }}>
          <h2>Welcome</h2>
          <button onClick={() => window.location.href = "/vendor"}>
            Vendor Login
          </button>
          <br /><br />
          <button onClick={() => window.location.href = "/user"}>
            User Login
          </button>
        </div>
      </div>
    </>
  );
}
