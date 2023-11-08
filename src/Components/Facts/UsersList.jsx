import { useQuery } from "react-query";
import axios from "axios";
import "./facts.css";
const fetchUsers = async () => {
  const response = await axios.get("https://catfact.ninja/fact");
  return response.data.fact;
};

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery("users", fetchUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="facts">
      <h1 className="title">
        cat <span className="subtitle">| facts</span>
      </h1>

      <div className="facts-list">{users}</div>
    </div>
  );
};

export default UsersList;
