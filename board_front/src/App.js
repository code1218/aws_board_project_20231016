import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import { useQuery } from "react-query";
import { instance } from "./api/config/instance";
import AuthRoute from "./components/Routes/AuthRoute";
import AccountRoute from "./components/Routes/AccountRoute";
import BoardWrite from "./pages/BoardWrite/BoardWrite";

function App() {
  const getPrincipal = useQuery(["getPrincipal"], async () => {
    try{
      const option = {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        }
      }
      return await instance.get("/account/principal", option);

    }catch(error) {
      // throw new Error(error);
    }
  }, {
    retry: 0,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

  if(getPrincipal.isLoading){
    return <></>
  }

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth/*" element={ <AuthRoute /> } />
        <Route path="/account/*" element={ <AccountRoute /> } />
        <Route path="/board/write" element={ <BoardWrite />} />
        <Route path="/board/:category" element={<></>} />
        <Route path="/board/:category/register" element={<></>} />
        <Route path="/board/:category/edit" element={<></>} />
      </Routes>
    </RootLayout>
  );
}

export default App;
