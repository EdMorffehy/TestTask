import { FC, lazy } from "react";

const HomeModule = lazy(() => import("../../modules/HomeModule"));

const HomePage: FC = () => <HomeModule />;

export default HomePage;
