"use client";
import { DashboardHeader, SideBar } from "components";
import MyLearning from "components/MyLearning";
import { AuthHoc } from "hoc";
import { useRecoilValue } from "recoil";
import { authAtom } from "state/authAtom";

const HomePage = () => {
  const token = useRecoilValue(authAtom);

  return (
    <AuthHoc>
      <div className="flex relative">
        {token && (
          <div className="hidden lg:block">
            <SideBar />
          </div>
        )}

        <div id="main-content" className="h-full w-full">
          <div className="bg-[#E4EFFF] h-80">
            {token ? <DashboardHeader isHome={true} /> : null}
            <MyLearning />
          </div>
        </div>
      </div>
    </AuthHoc>
  );
};
export default HomePage;
