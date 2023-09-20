import { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../Input";

import "./InfoForm.scss";

const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const initialState = {
  name: {
    value: "",
    err: null,
  },
  surname: {
    value: "",
    err: null,
  },
  email: {
    value: "",
    err: null,
  },
  phone: {
    value: "",
    err: null,
  },
};

function validate(name, value) {
  let err = null;

  switch (name) {
    case "name":
      if (!value.length) {
        err = '"name" field is required';
      }

      break;
    case "surname":
      if (!value.length) {
        err = '"surname" field is required';
      }

      break;
    case "email":
      if (!value.length) {
        err = '"email" field is required';
      } else if (!emailRegExp.test(value)) {
        err = '"email" field is incorrect';
      }

      break;
    case "phone":
      if (!value.length) {
        err = '"phone" field is required';
      }

      break;

    default:
      break;
  }

  return {
    value: value,
    err,
  };
}

function InfoForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: validate(name, value),
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    let error = false;

    const updatedState = Object.entries(formData).reduce((acc, [key, data]) => {
      const newValue = validate(key, data.value);

      if (newValue.err !== null) {
        error = true;
      }

      acc[key] = newValue;

      return acc;
    }, {});

    if (error) {
      setFormData(updatedState);
    } else {
      // save to local storage
      navigate("/payment");
    }
  }, [formData, navigate]);

  const errors = useMemo(
    () =>
      Object.values(formData)
        .map(({ err }) => err)
        .filter((err) => err !== null),
    [formData]
  );

  return (
    <div className="info-form">
      <Input label="Name*" name="name" onChange={handleChange} />
      <Input label="Surname*" name="surname" onChange={handleChange} />
      <Input label="Email*" name="email" onChange={handleChange} />
      <Input
        label="Phone number*"
        name="phone"
        onChange={handleChange}
        type="number"
      />
      {errors.length > 0 && errors.map((err, i) => <pre key={i}>{err}</pre>)}
      <div
        style={{ width: "100%", marginTop: 100 }}
        className="light-button"
        data-modal-id="winners"
        onClick={handleSubmit}
      >
        Next
      </div>
      <Link to="/" className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
        >
          <path
            d="M17 31L3 17L17 3"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </Link>
    </div>
  );
}

export default InfoForm;
