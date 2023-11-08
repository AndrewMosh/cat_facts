import { QueryClient, QueryClientProvider } from "react-query";
import UsersList from "./Components/Facts/UsersList";

import "./App.css";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UsersList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
