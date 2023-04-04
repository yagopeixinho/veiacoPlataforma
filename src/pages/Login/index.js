import React, { useState } from "react";
import Lottie from "react-lottie";
import loginAnimation from "../../assets/lotties/login-gif.json";
import { Form, Formik } from "formik";
import TextInput from "../../components/common/TextInput";
import CheckboxInput from "../../components/common/CheckboxInput";
import ButtonSave from "../../components/common/ButtonSave";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginInitialValues, setLoginInitialValueus] = useState({
    email: "",
    password: "",
    manterConectado: false,
  });

  const defaultLoginAnimationSettings = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function handleLogIn(values) {
    try {
      localStorage.setItem("TOKEN", "existATokenHereThisIsAMockTemporaryToken");
      navigate(`/home`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="login-page">
      <div className="login-page-left">
        <div className="login-container">
          <div className="login-content">
            <div>
              <h4 className="headline-login-box">Faça questão de um tostão!</h4>
            </div>

            <Formik
              enableReinitialize={true}
              // validationSchema={veiacoSchema}
              initialValues={loginInitialValues}
              onSubmit={(values) => {
                handleLogIn(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="form-login">
                    <TextInput
                      label="E-mail"
                      name="email"
                      // fieldName="name"
                      classes="input-veiaco-form"
                    />

                    <TextInput
                      label="Senha"
                      name="password"
                      // fieldName="name"
                      classes="input-veiaco-form"
                      type="password"
                    />

                    <div className="form-settings">
                      <CheckboxInput
                        label="Manter conectado"
                        fieldName="manter-conectado"
                        classes="checkbox-manter-conectado"
                      />

                      <label className="recuperar-senha">Recuperar senha</label>
                    </div>

                    <div>
                      <ButtonSave label="Entrar" styles="button-login" />
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <div className="footer-container">
              <label>
                Não possui conta?{" "}
                <span className="register-here">Cadastre-se aqui</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="login-page-right">
        <Lottie
          options={defaultLoginAnimationSettings}
          isClickToPauseDisabled={true}
        />
      </div>
    </div>
  );
}
