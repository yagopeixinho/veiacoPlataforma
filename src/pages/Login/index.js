import React, { useContext, useState } from "react";
import Lottie from "react-lottie";
import loginAnimation from "../../assets/lotties/login-gif.json";
import { Form, Formik } from "formik";
import TextInput from "../../components/common/TextInput";
import CheckboxInput from "../../components/common/CheckboxInput";
import ButtonSave from "../../components/common/ButtonSave";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../validations/user.validation";
import UserService from "../../service/user.service";
import { loginSchema } from "../../validations/login.validation";
import { context } from "../../context/context";
import AuthenticationService from "../../service/authentication.service";
import logoApp from "../../assets/logos/VeiacoDarkLogo.png";

export default function Login() {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState();
  const { setUser } = useContext(context);
  const [loginInitialValues] = useState({
    email: "",
    password: "",
    manterConectado: false,
  });
  const [createUserInitialValues] = useState({
    name: "",
    email: "",
    password: "",
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
      const _authenticationService = new AuthenticationService();
      const authenticationResponse = await _authenticationService.singIn(
        values.email,
        values.password
      );

      setUser(authenticationResponse);
      navigate(`/dashboard`);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCreateUser(values) {
    const _userService = new UserService();
    await _userService
      .create(values)
      .then((res) => {
        setCreateUser(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }

  return (
    <div className="login-page">
      {createUser && (
        <div className="modal-create-user">
          <div className="left-modal-create-user">
            <Lottie
              options={defaultLoginAnimationSettings}
              isClickToPauseDisabled={true}
            />
          </div>

          <div className="right-modal-create-user">
            <Formik
              enableReinitialize={true}
              validationSchema={userSchema}
              initialValues={createUserInitialValues}
              onSubmit={(values) => {
                handleCreateUser(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="form-create-user-content">
                    <div className="header-form">
                      <label className="first-call">
                        Registre-se gratuitamente
                      </label>
                      <h1 className="header-form-headline">
                        Registre-se no Veiaco.
                      </h1>
                      <label className="already-member">
                        Já possui uma conta?{" "}
                        <span
                          onClick={() => {
                            setCreateUser(false);
                          }}
                        >
                          Clique aqui
                        </span>
                      </label>
                    </div>

                    <div className="create-user-form">
                      <TextInput
                        label="Nome"
                        name="name"
                        fieldName="name"
                        classes="input-veiaco-form"
                      />

                      <TextInput
                        label="E-mail"
                        name="email"
                        fieldName="email"
                        classes="input-veiaco-form"
                      />

                      <TextInput
                        label="Senha"
                        name="password"
                        fieldName="password"
                        classes="input-veiaco-form"
                        type="password"
                      />
                    </div>

                    <div className="footer-form">
                      <ButtonSave
                        label="Criar conta"
                        styles="button-register-user"
                      />

                      <div className="important-politics">
                        <h6>
                          Veiaco é um projeto open source e não possui nenhum
                          fim lucrativo
                        </h6>

                        <h6>
                          Verifique as nossas{" "}
                          <span>Políticas de privacidade</span>
                        </h6>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      )}

      {!createUser && (
        <>
          <div className="login-page-left">
            <div className="login-container">
              <div className="login-content">
                <div className="login-headline-content">
                  <img src={logoApp} width="200px" alt="Logo do APP Veiaco" />
                  <h4 className="headline-login-box">
                    Faça questão de um tostão!
                  </h4>
                </div>

                <Formik
                  enableReinitialize={true}
                  validationSchema={loginSchema}
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
                          fieldName="email"
                          classes="input-veiaco-form"
                        />

                        <TextInput
                          label="Senha"
                          name="password"
                          fieldName="password"
                          classes="input-veiaco-form"
                          type="password"
                        />

                        <div className="form-settings">
                          <CheckboxInput
                            label="Manter conectado"
                            fieldName="manter-conectado"
                            classes="checkbox-manter-conectado"
                          />

                          <label className="recuperar-senha">
                            Recuperar senha
                          </label>
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
                    <span
                      className="register-here"
                      onClick={() => {
                        setCreateUser(true);
                      }}
                    >
                      Cadastre-se aqui
                    </span>
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
        </>
      )}
    </div>
  );
}
