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

export default function DebtForm() {
  const { idVeiaco, idDivida } = useParams();
  const navigate = useNavigate();
  const [veiaco, setVeiaco] = useState({});
  const [action, setAction] = useState("create");
  const [debtFormInitialValues, setDebtFormInitialValues] = useState({});
  const [categories, setCategories] = useState([]);

  const _categoryService = new CategoryService();
  const _debtService = new DebtService();
  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function init() {
      const categoriesResponse = await _categoryService.list();
      setCategories(categoriesResponse);

      const responseService = await _veiacoService.read(idVeiaco);
      setVeiaco(responseService);
      debugger;

      if (idDivida) {
        setAction("edit");
        const debtResponse = await _debtService.read(idDivida);
        setDebtFormInitialValues(debtResponse);
      } else {
        setAction("create");
        setDebtFormInitialValues({
          name: "",
          value: "",
          status: false,
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
        .then((response) => {
          navigate(`/veiaco/${response.id}/dashboard`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    } else {
      await _debtService
        .update(values, idDivida)
        .then((response) => {
          navigate(`/veiacos`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }

  async function deleteDebt(id) {
    await _debtService
      .delete(id)
      .then(() => {
        navigate(`/veiacos`);
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }

  return (
    <div className="debt-form">
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
                    <TextInput label="Nome" name="name" fieldName="name" />

                    <NumberInput
                      label="R$ Valor"
                      name="value"
                      fieldName="value"
                    />

                    <CheckboxInput
                      label="Status"
                      name="status"
                      fieldName="status"
                    />
                    {JSON.stringify(props.values)}

                    <DropdownInput
                      form={props}
                      options={categories}
                      name="categoryId"
                      fieldName="categoryId"
                      onChange={(ev) => {
                        props.setFieldValue("categoryId", ev.target.value);
                      }}
                    />
                    {JSON.stringify(props.errors)}

                    <input
                      type="date"
                      name="date"
                      onChange={(ev) => {
                        props.setFieldValue("date", ev.target.value);
                      }}
                    />

                    <div className="button-row-debt">
                      {action === "edit" && (
                        <div className="btn-div">
                          <ButtonDelete
                            label="Deletar"
                            type="buton"
                            onClick={() => {
                              deleteDebt(idDivida);
                            }}
                            styles="button-delete-debt"
                          />
                        </div>
                      )}

                      <div className="btn-div">
                        <ButtonSave
                          label="Salvar"
                          type="submit"
                          styles="button-save-debt"
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
