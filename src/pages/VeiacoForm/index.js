import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import TextInput from "../../components/common/TextInput";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import { veiacoSchema } from "../../validations/veiaco.validation";

export default function VeiacoForm() {
  const [veiacoFormInitialValues, setVeiacoFormInitialValues] = useState({
    name: "",
  });

  useEffect(() => {}, []);

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
            // createProduct(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                {JSON.stringify(props.values)}
                <TextInput label="Nome" name="name" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
