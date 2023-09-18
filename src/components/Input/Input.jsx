import { useCallback, useState } from "react";
import cn from "classnames";

import "./Input.scss";

function Input({ label, name, onChange, type = 'text' }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value.trim();
    setValue(newValue);
    onChange(name, newValue);
  }, [name, onChange]);

  const handleKeyDown = useCallback((e) => {
    if (['e', '-'].includes(e.key)) {
      e.preventDefault();
    }
  }, [])

  return (
    <div
      className={cn("input", {
        input_focused: value || focused,
      })}
    >
      <div className="input__label">{label}</div>
      <input
        type={type}
        data-name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
