import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonDelete from "../../components/common/ButtonDelete";
import ButtonSave from "../../components/common/ButtonSave";
import CheckboxInput from "../../components/common/CheckboxInput";
import NumberInput from "../../components/common/NumberInput";
import TextInput from "../../components/common/TextInput";
import CategoryService from "../../service/category.service";
import DebtService from "../../service/debt.service";
import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card-1.png";
import VeiacoService from "../../service/veiaco.service";
import { debtSchema } from "../../validations/debt.validation";
import DropdownInput from "../../components/common/DropdownInput";
import DateInput from "../../components/common/InputDate";
import ConfirmationDialog from "../../components/modals/ConfirmationDialog";
import { localErrorStatus } from "../../utils/localErrorStatus";
import LocalAlert from "../../components/common/LocalAlert";

export default function DebtForm() {
  const { idVeiaco, idDivida } = useParams();
  const navigate = useNavigate();
  const [veiaco, setVeiaco] = useState({});
  const [action, setAction] = useState("create");
  const [debtFormInitialValues, setDebtFormInitialValues] = useState({});
  const [categories, setCategories] = useState([]);
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const _categoryService = new CategoryService();
  const _debtService = new DebtService();
  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function init() {
      const categoriesResponse = await _categoryService.list();
      setCategories(categoriesResponse);

      const responseService = await _veiacoService.read(idVeiaco);
      setVeiaco(responseService);

      if (idDivida) {
        setAction("edit");
        const debtResponse = await _debtService.read(idDivida);
        setDebtFormInitialValues(debtResponse);
      } else {
        setAction("create");
        setDebtFormInitialValues({
          name: "",
          value: "",
          status: true,
          categoryId: "",
          veiacoId: idVeiaco,
          date: "",
        });
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idVeiaco]);

  async function createDebt(values) {
    if (action === "create") {
      await _debtService
        .create(values)
        .then(() => {
          navigate(`/veiaco/${idVeiaco}/dashboard`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    } else {
      await _debtService
        .update(values, idDivida)
        .then((response) => {
          navigate(`/veiaco/${idVeiaco}/dashboard`);
          setAlertMessage({
            exist: true,
            msg: "Dívida atualizada com sucesso!",
            status: localErrorStatus.success,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }

  async function deleteDebt(id) {
    await _debtService
      .delete(id)
      .then(() => {
        navigate(`/veiaco/${idVeiaco}/dashboard`);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }

  return (
    <div className="debt-form">
      {confirmationDialog && (
        <ConfirmationDialog
          description="Deseja mesmo apagar essa dívida?"
          message="Cuidado!"
          labelCancel="Cancelar"
          labelConfirm="Confirmar"
          onConfirm={() => {
            deleteDebt(idDivida);
          }}
          onCancel={() => {
            setConfirmationDialog(false);
          }}
        />
      )}

      <Formik
        enableReinitialize={true}
        validationSchema={debtSchema}
        initialValues={debtFormInitialValues}
        onSubmit={(values) => {
          createDebt(values);
        }}
      >
        {(props) => {
          return (
            <Form className="form-debt">
              <div className="container-form-debt">
                <div className="debt-form-left">
                  <div>
                    <h1 className="headline-new-debt">
                      {action === "create" ? "Nova dívida" : "Editando dívida"}
                    </h1>
                    <span>
                      <img
                        src={avatarVeiacoCard}
                        alt="Temporary Veiaco user"
                        className="debt-picture"
                      />
                    </span>
                    <div className="veiaco-header-info">
                      <label className="veiaco-name">{veiaco.name}</label>
                      <label className="veiaco-occupation">
                        {veiaco.occupation}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="debt-form-right">
                  <div className="debt-form-grid">
                    <TextInput
                      label="Nome"
                      name="name"
                      fieldName="name"
                      classes="input-debt-form"
                    />

                    <NumberInput
                      label="R$ Valor"
                      name="value"
                      fieldName="value"
                      classes="input-debt-form"
                    />

                    <DateInput
                      name="date"
                      fieldName="date"
                      classes="input-debt-form"
                      value={props.values.date}
                    />

                    <DropdownInput
                      form={props}
                      options={categories}
                      name="categoryId"
                      fieldName="categoryId"
                      onChange={(ev) => {
                        props.setFieldValue("categoryId", ev.target.value);
                      }}
                      classes="input-debt-form"
                    />

                    <CheckboxInput
                      label="Devendo?"
                      name="status"
                      fieldName="status"
                      classes="input-debt-form"
                      onChange={(ev) => {
                        props.setFieldValue("status", ev.target.checked);
                      }}
                      checked={props.values.status}
                    />

                    <div className="button-row-debt">
                      {action === "edit" && (
                        <div className="btn-div">
                          <ButtonDelete
                            label="Deletar"
                            type="button"
                            onClick={() => {
                              setConfirmationDialog(true);
                            }}
                            styles="button-debt-form-delete"
                          />
                        </div>
                      )}

                      <div className="btn-div">
                        <ButtonSave
                          label="Salvar"
                          type="submit"
                          styles="button-debt-form-confirm "
                        />
                      </div>
                    </div>

                    {alertMessage.exist && (
                      <div className="alert-message">
                        <LocalAlert
                          msg={alertMessage.msg}
                          status={alertMessage.status}
                        />
                      </div>
                    )}
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
