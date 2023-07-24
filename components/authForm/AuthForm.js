"use client";

import Button from "../button/Button";
import "./authForm.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setAuthorizationStatus } from "./authFormSlice";
import { useRouter } from "next/navigation";

const user = {
  login: "email@domain.com",
  password: "112233",
};

export default function AuthForm() {
  const { login, password } = useSelector((state) => state.authForm);
  const dispath = useDispatch();
  const router = useRouter();

  const succesAuth = () => {
    dispath(setAuthorizationStatus(true));
    localStorage.setItem("auth", true);
    router.push("/");
  };

  return (
    <Formik
      initialValues={{
        login: login,
        password: password,
      }}
      validationSchema={Yup.object({
        login: Yup.string()
          .required("Обязательное поле")
          .email("Логин должен быть email"),
        password: Yup.string()
          .required("Обязательное поле")
          .min(6, "Минимум 6 знаков"),
      })}
      onSubmit={(values) => {
        if (values.login === user.login && values.password === user.password) {
          succesAuth();
        } else {
          console.log("неверные данные для входа");
        }
      }}
    >
      <Form className="authorization-form">
        <div className="authorization-form__label">Simple Hotel Check</div>
        <div className="authorization-form__inputs">
          <div className="inputs__input">
            <label htmlFor="email">Логин</label>
            <Field
              type="email"
              name="login"
              id="login"
              placeholder="email@domain.com"
              onInput={(e) => e.login}
            />
            <ErrorMessage name="login">
              {(msg) => <div className="input__error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="inputs__input">
            <label htmlFor="password">Пароль</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="112233"
              onInput={(e) => e.password}
            />
            <ErrorMessage name="password">
              {(msg) => <div className="input__error">{msg}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className="authorization-form__button">
          <Button>Войти</Button>
        </div>
      </Form>
    </Formik>
  );
}
