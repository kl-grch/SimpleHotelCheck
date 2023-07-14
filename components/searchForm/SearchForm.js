"use client";

import Button from "../button/Button";
import "./searchForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { setSearchForm } from "./searchFormSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";

export default function SearchForm() {
  const { location, checkIn, countDays } = useSelector(
    (state) => state.searchForm
  );
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        location: location,
        checkIn: checkIn,
        countDays: countDays,
      }}
      validationSchema={Yup.object({
        location: Yup.string().required("Обязательное поле"),
        checkIn: Yup.date()
          .required("Обязательное поле")
          .min(
            dayjs().format("YYYY-MM-DD"),
            "Дата не может быть меньше текущей"
          ),
        countDays: Yup.number()
          .required("Обязательное поле")
          .positive()
          .integer("Введите целое количество дней")
          .moreThan(0, `Укажите не меньше 1 дня`),
      })}
      onSubmit={(values) => {
        dispatch(
          setSearchForm({
            location: values.location,
            checkIn: values.checkIn,
            countDays: values.countDays,
          })
        );
      }}
    >
      <Form action="" className="search-form">
        <div className="search-form__inputs">
          <div className="inputs__input">
            <label htmlFor="location">Локация</label>
            <Field
              type="text"
              name="location"
              id="location"
              onInput={(e) => e.location}
            />
          </div>
          <div className="inputs__input">
            <label htmlFor="checkIn">Дата заселения</label>
            <Field
              type="date"
              name="checkIn"
              id="checkIn"
              min={dayjs().format("YYYY-MM-DD")}
              onInput={(e) => e.checkIn}
            />
          </div>
          <div className="inputs__input">
            <label htmlFor="countDays">Количество дней</label>
            <Field
              type="number"
              name="countDays"
              id="countDays"
              onInput={(e) => e.countDays}
              min={1}
            />
          </div>
        </div>
        <div className="search-form__button">
          <Button>Найти</Button>
        </div>
      </Form>
    </Formik>
  );
}
