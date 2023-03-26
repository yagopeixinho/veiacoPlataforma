import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSave from "../../components/common/ButtonSave";
import CheckboxInput from "../../components/common/CheckboxInput";
import NumberInput from "../../components/common/NumberInput";
import TextInput from "../../components/common/TextInput";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import CategoryService from "../../service/category.service";
import DebtService from "../../service/debt.service";
import VeiacoService from "../../service/veiaco.service";
import { veiacoSchema } from "../../validations/veiaco.validation";

export default function DebtForm() {
  const { id } = useParams();
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

      debugger;

      setDebtFormInitialValues({
        name: "",
        value: "",
        open: null,
        category: "",
        veiacoId: id,
      });
    }

    init();
  }, [id]);

  async function createDebt(values) {
    if (action === "create") {
      await _debtService
        .create(values)
        .then((response) => {
          debugger;
          navigate(`/veiaco/${response.id}/dashboard`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
      debugger;
    }
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
                <CheckboxInput label="Status" name="open" />

                <select
                  name="category"
                  onChange={(ev) => {
                    props.setFieldValue("category", ev.target.value);
                  }}
                >
                  <option selected value="">
                    Selecionar uma categoria
                  </option>
                  {categories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <ButtonSave label="Salvar" type="submit" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
