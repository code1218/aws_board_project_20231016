import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import { useQuery } from "react-query";
import { instance } from "./api/config/instance";
import AuthRoute from "./components/Routes/AuthRoute";
import AccountRoute from "./components/Routes/AccountRoute";
import BoardWrite from "./pages/BoardWrite/BoardWrite";
import BoardList from "./pages/BoardList/BoardList";
import BoardDetails from "./pages/BoardDetails/BoardDetails";
import Store from "./pages/Store/PointStore";
import BoardEdit from "./pages/BoardEdit/BoardEdit";

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
        <Route path="/board/:category/:page" element={ <BoardList /> } />
        <Route path="/board/:boardId" element={ <BoardDetails /> } />
        <Route path="/board/edit/:boardId" element={ <BoardEdit /> } />
        <Route path="/store/products" element={ <Store /> } />

      </Routes>
    </RootLayout>
  );
}

export default App;
