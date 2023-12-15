import cl from "../../StepsFormModule.module.css";
import StepsButtons from "../../components/StepsButtons";

interface IStepFormLayoutProps {
  fullWidth?: boolean;
  lastStep?: boolean;
  hasGoBack?: boolean;
  onGoBack?: () => void;
  onGoForward?: () => void;
}

const StepFormLayout: FCC<IStepFormLayoutProps> = ({ children, fullWidth, ...buttonProps }) => (
  <div className={cl.StepForm}>
    <div className={cl.StepFormInner} style={{ maxWidth: fullWidth ? "100%" : "300px" }}>
      {children}
    </div>
    <StepsButtons {...buttonProps} />
  </div>
);

export default StepFormLayout;
