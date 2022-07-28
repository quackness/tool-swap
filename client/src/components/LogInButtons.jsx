import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../App";

const LogInButtons = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div>{`Logged In: ${user.loggedIn}`}</div>
      <div>
        <button className="button-login"
          onClick={() => {
            if (user.loggedIn) return;
            setUser({ loggedIn: true });

            if (location.state?.from) {
              navigate(location.state.from);
            }
          }}
        >
          Log In As User
        </button>
        <button className="button-login"
          onClick={() => {
            if (!user.loggedIn) return;
            setUser({ loggedIn: false });
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogInButtons;