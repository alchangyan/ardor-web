import cn from "classnames";
import "./LangSwitch.scss";
import { useCallback, useState } from "react";

function LangSwitch() {
  const [isEng, setIsEng] = useState(true);

  const handleLangChange = useCallback(
    () => setIsEng((prevState) => !prevState),
    []
  );

  return (
    <div className={cn("lang-switch", {
      [`lang-switch_${isEng ? "eng" : "ar"}`]: true,
    })} onClick={handleLangChange}>
      <div className="lang-switch__floating-icon" />
      <div className="lang-switch__text">
        <div>English</div>
        <div>عربي</div>
      </div>
    </div>
  );
}

export default LangSwitch;
