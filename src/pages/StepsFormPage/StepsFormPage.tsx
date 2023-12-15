import { FC, lazy } from "react";

const StepsFormModule = lazy(() => import("../../modules/StepsFormModule"));

const StepsFormPage: FC = () => <StepsFormModule />;

export default StepsFormPage;
