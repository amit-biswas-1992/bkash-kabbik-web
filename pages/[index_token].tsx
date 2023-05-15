import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/HeaderComponent";
import Home from "../components/Home/HomeComponent";
import { useCallback, useEffect } from "react";
// import { getUserProfile } from "../services/api.service";
import JwtTokenDecoder from "../utils/globalfunction";

export default function Index() {
  const router = useRouter();
  const { index_token }: any = router.query;
  console.log("token id", index_token);

  const isToken = useCallback(async () => {
    if (JwtTokenDecoder().user_id) {
      localStorage.setItem("user_id", JwtTokenDecoder().user_id);
    }
  }, [router]);

  // const userDetails = useCallback(async () => {
  //   if (localStorage.getItem("user_id")) {
  //     const userData = await getUserProfile();
  //     console.log("siam er data", userData);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("user_token", index_token);
    if (localStorage.getItem("user_token"))
      localStorage.setItem("user_token", index_token);
    // userDetails();
    router.push("/");
    console.log("use token id", index_token);
    isToken();
  }, [router]);

  return (
    <>
      <Header />
      <Home />;
      <Footer />
    </>
  );
}
