import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonSave from "../../components/common/ButtonSave";
import TextInput from "../../components/common/TextInput";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import VeiacoService from "../../service/veiaco.service";
import { veiacoSchema } from "../../validations/veiaco.validation";

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
  }, [id]);

  async function createVeiaco(values) {
    if (action === "create") {
      await _veiacoService
        .create(values)
        .then((response) => {
          debugger;
          navigate(`/veiaco/${response.id}/dashboard`);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
      debugger;
    } else {
      debugger;
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
    <div>
      <GenericOutletHeader
        pageTitle="Criando Veiaco!"
        inputSearchConfig={{ inputExist: false }}
        buttonConfig={{ buttonExist: false }}
      />

      <div>
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
              <Form>
                {JSON.stringify(props.values)}
                <TextInput label="Nome" name="name" />
                <TextInput label="E-mail" name="email" />
                <TextInput label="Telefone" name="phone" />
                <TextInput label="Cargo" name="occupation" />

                <ButtonSave label="Salvar" type="submit" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
