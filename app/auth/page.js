"use client";

import AuthForm from "@/components/authForm/AuthForm";
import "./page.scss";
import { Container } from "react-bootstrap";

export default function Authorization() {
  return (
    <div className="wrapper">
      <Container className="auth">
        <AuthForm />
      </Container>
    </div>
  );
}
