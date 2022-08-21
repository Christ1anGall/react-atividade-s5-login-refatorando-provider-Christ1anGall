import { useContext } from "react";
import { AuthContext, IuseAuth } from "../provider/auth";

const Dashboard = () => {
  const { Logout } = useContext<IuseAuth>(AuthContext);
  return (
    <>
      <img
        src="https://i.pinimg.com/564x/97/58/ce/9758ce0989b5244cc4500d662c0aed24.jpg"
        alt="Mario"
      />
      <button onClick={Logout}>Sair</button>
    </>
  );
};

export default Dashboard;
