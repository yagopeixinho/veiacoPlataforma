import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSave from "../../components/common/ButtonSave";
import TextInput from "../../components/common/TextInput";
import VeiacoService from "../../service/veiaco.service";
import { veiacoSchema } from "../../validations/veiaco.validation";
import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card-1.png";
import ButtonDelete from "../../components/common/ButtonDelete";
import ConfirmationDialog from "../../components/modals/ConfirmationDialog";

export default function VeiacoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [action, setAction] = useState("create");
  const [veiacoFormInitialValues, setVeiacoFormInitialValues] = useState({});
  const [veiaco, setVeiaco] = useState();
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function init() {
      if (id) {
        const veiacoServiceResponse = await _veiacoService.read(id);
        setVeiacoFormInitialValues(veiacoServiceResponse);
        setVeiaco(veiacoServiceResponse);

        setAction("edit");
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
          setVeiaco(response);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }

  async function deleteVeiaco(id) {
    await _veiacoService
      .delete(id)
      .then(() => {
        navigate(`/veiacos`);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }

  return (
    <div className="veiaco-form">
      {confirmationDialog && (
        <ConfirmationDialog
          description="Deseja mesmo apagar esse veiaco?"
          message="Cuidado!"
          labelCancel="Cancelar"
          labelConfirm="Confirmar"
          onConfirm={() => {
            deleteVeiaco(id);
          }}
          onCancel={() => {
            setConfirmationDialog(false);
          }}
        />
      )}

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
                    <h1 className="headline-new-veiaco">
                      {action === "create" ? "Novo veiaco" : "Editando veiaco"}
                    </h1>
                    <span>
                      <img
                        src={avatarVeiacoCard}
                        alt="Temporary Veiaco user"
                        className="veiaco-picture"
                      />
                    </span>
                    <div className="veiaco-header-info">
                      <label className="veiaco-name">{veiaco?.name}</label>
                      <label className="veiaco-occupation">
                        {veiaco?.occupation}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="veiaco-form-right">
                  <div className="veiaco-form-grid">
                    <TextInput
                      label="Nome"
                      name="name"
                      fieldName="name"
                      classes="input-veiaco-form"
                      maxLength={18}
                    />

                    <TextInput
                      label="E-mail"
                      name="email"
                      fieldName="email"
                      classes="input-veiaco-form"
                    />

                    <TextInput
                      label="Telefone"
                      name="phone"
                      fieldName="email"
                      classes="input-veiaco-form"
                    />
                    
                    <TextInput
                      label="Cargo"
                      name="occupation"
                      fieldName="email"
                      classes="input-veiaco-form"
                    />
                    <div className="button-row-veiaco">
                      {action === "edit" && (
                        <div className="btn-div">
                          <ButtonDelete
                            label="Deletar"
                            type="button"
                            onClick={() => {
                              setConfirmationDialog(true);
                            }}
                            styles="button-veiaco-form-delete"
                          />
                        </div>
                      )}

                      <div className="btn-div">
                        <ButtonSave
                          label="Salvar"
                          type="submit"
                          styles="button-veiaco-form-confirm"
                        />
                      </div>
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
