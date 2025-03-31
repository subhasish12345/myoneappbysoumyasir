import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyNavigate() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (isLoggedin) {
      navigate("/about");
    }
  }, [isLoggedin]);

  return (
    <>
      <button onClick={() => setIsLoggedin(true)}>Login</button>
    </>
  );
}

export default MyNavigate;
