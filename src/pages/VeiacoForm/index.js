import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSave from "../../components/common/ButtonSave";
import TextInput from "../../components/common/TextInput";
import VeiacoService from "../../service/veiaco.service";
import { veiacoSchema } from "../../validations/veiaco.validation";
import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card-1.png";

export default function VeiacoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [action, setAction] = useState("create");
  const [veiacoFormInitialValues, setVeiacoFormInitialValues] = useState({});

  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function init() {
      if (id) {
        setAction("edit");
        const veiacoServiceResponse = await _veiacoService.read(id);

        setVeiacoFormInitialValues(veiacoServiceResponse);
      } else {
        setAction("create");

        setVeiacoFormInitialValues({
          name: "",
          email: "",
          phone: "",
          occupation: "",
        });
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function createVeiaco(values) {
    if (action === "create") {
      await _veiacoService
        .create(values)
        .then((response) => {
          navigate(`/veiaco/${response.id}/dashboard`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    } else {
      await _veiacoService
        .update(values, values.id)
        .then((response) => {
          setVeiacoFormInitialValues(response);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }

  return (
    <div className="veiaco-form">
      <Formik
        enableReinitialize={true}
        validationSchema={veiacoSchema}
        initialValues={veiacoFormInitialValues}
        onSubmit={(values) => {
          createVeiaco(values);
        }}
      >
        {(props) => {
          return (
            <Form className="form-veiaco">
              <div className="container-form-veiaco">
                <div className="veiaco-form-left">
                  <div>
                    <h1 className="headline-new-veiaco">Novo veiaco</h1>
                    <span>
                      <img
                        src={avatarVeiacoCard}
                        alt="Temporary Veiaco user"
                        className="veiaco-picture"
                      />
                    </span>
                  </div>
                </div>
                <div className="veiaco-form-right">
                  <h1>Informações básicas</h1>

                  <div className="veiaco-form-grid">
                    <TextInput label="Nome" name="name" />
                    <TextInput label="E-mail" name="email" />
                    <TextInput label="Telefone" name="phone" />
                    <TextInput label="Cargo" name="occupation" />
                  </div>

                  <div className="veiaco-button-row">
                    <div className="btn-div">
                      <ButtonSave label="Salvar" type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
