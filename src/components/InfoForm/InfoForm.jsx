import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

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

function InfoForm({ onSubmit }) {
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
      const cleanData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = formData[key].value;

        return acc;
      }, {});

      onSubmit(cleanData);
    }
  }, [formData, onSubmit]);

  useEffect(() => {
    const lsData = localStorage.getItem("data");

    if (lsData) {
      const data = JSON.parse(lsData);
      const { tickets, ...rest } = data;
      const formdata = Object.keys(rest).reduce((acc, key) => {
        acc[key] = {
          value: rest[key],
          err: null
        }
        return acc;
      }, {});

      setFormData(formdata);
    }
  }, []);

  const errors = useMemo(
    () =>
      Object.values(formData)
        .map(({ err }) => err)
        .filter((err) => err !== null),
    [formData]
  );

  return (
    <div className="info-form">
      <Input label="Name*" name="name" value={formData.name.value} onChange={handleChange} />
      <Input label="Surname*" name="surname" value={formData.surname.value} onChange={handleChange} />
      <Input label="Email*" name="email" value={formData.email.value} onChange={handleChange} />
      <Input
        label="Phone number*"
        name="phone"
        onChange={handleChange}
        type="number"
        value={formData.phone.value}
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
