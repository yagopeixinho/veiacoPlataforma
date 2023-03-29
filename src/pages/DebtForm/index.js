import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonDelete from "../../components/common/ButtonDelete";
import ButtonSave from "../../components/common/ButtonSave";
import CheckboxInput from "../../components/common/CheckboxInput";
import NumberInput from "../../components/common/NumberInput";
import TextInput from "../../components/common/TextInput";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import CategoryService from "../../service/category.service";
import DebtService from "../../service/debt.service";
import { veiacoSchema } from "../../validations/veiaco.validation";

export default function DebtForm() {
  const { idVeiaco, idDivida } = useParams();
  const navigate = useNavigate();
  const [action, setAction] = useState("create");
  const [debtFormInitialValues, setDebtFormInitialValues] = useState({});
  const [categories, setCategories] = useState([]);

  const _categoryService = new CategoryService();
  const _debtService = new DebtService();

  useEffect(() => {
    async function init() {
      const categoriesResponse = await _categoryService.list();
      setCategories(categoriesResponse);

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
    <div>
      <GenericOutletHeader
        pageTitle="Criando Dívida!"
        inputSearchConfig={{ inputExist: false }}
        buttonConfig={{ buttonExist: false }}
      />

      <div>
        <Formik
          enableReinitialize={true}
          validationSchema={veiacoSchema}
          initialValues={debtFormInitialValues}
          onSubmit={(values) => {
            createDebt(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                {JSON.stringify(props.values)}
                <TextInput label="Nome" name="name" />
                <NumberInput label="Valor" name="value" />
                <CheckboxInput label="Status" name="status" />
                <select
                  name="category"
                  onChange={(ev) => {
                    props.setFieldValue("categoryId", ev.target.value);
                  }}
                >
                  {categories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <ButtonSave label="Salvar" type="submit" />
                <ButtonDelete
                  label="Deletar"
                  type="buton"
                  onClick={() => {
                    deleteDebt(idDivida);
                  }}
                />
                <input
                  type="date"
                  name="date"
                  onChange={(ev) => {
                    props.setFieldValue("date", ev.target.value);
                  }}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
