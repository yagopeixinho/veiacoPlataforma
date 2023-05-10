import { Form, Formik } from "formik";
import ScheduleService from "../../../../service/schedule.service";
import { Col, Row } from "reactstrap";
import avatarVeiacoCard from "../../../../assets/images/avatar-veiaco-card-1.png";
import TextInput from "../../../../components/common/TextInput";
import ButtonSave from "../../../../components/common/ButtonSave";

export function UserInfoCard({ veiaco }) {
  return (
    <div className="user-form-info">
      <img src={avatarVeiacoCard} alt="Temporary Veiaco user" />

      <Col md="12" lg="12" xl="12">
        <span id="name">{veiaco.name}</span> <br />
        <span id="occupation">{veiaco.occupation}</span>
      </Col>
    </div>
  );
}

export default function ModalForm({
  formValues,
  setFormValues,
  veiaco,
  setShowVeiacoList,
  setOpen,
  schedules,
  setSchedules,
}) {
  async function handleSubmit(values) {
    const _scheduleService = new ScheduleService();

    _scheduleService
      .create(values)
      .then((res) => {
        setSchedules([...schedules, res]);
        setOpen(false);
      })
      .catch((res) => console.log(res));
  }

  return (
    <div className="modal-form-wrapper">
      <Row>
        <Col md="8" lg="8" xl="8">
          <Formik
            initialValues={formValues}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ values }) => (
              <Form>
                <div>
                  <h5>Criando uma anotação sobre {veiaco.name}</h5>
                </div>

                <TextInput
                  label="Anotações e lembretes..."
                  name="subject"
                  fieldName="subject"
                  classes="input-veiaco-form"
                />

                <Row className="buttons-container">
                  <Col md="3" lg="3" xl="3">
                    <ButtonSave
                      label="Salvar"
                      type="submit"
                      styles="button-veiaco-form-confirm"
                    />{" "}
                  </Col>

                  <Col md="3" lg="3" xl="3">
                    <ButtonSave
                      label="Voltar"
                      type="button"
                      onClick={() => {
                        setShowVeiacoList(true);
                      }}
                      styles="button-veiaco-form-cancel"
                    />{" "}
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>

        <Col md="4" lg="4" xl="4">
          <UserInfoCard veiaco={veiaco} />
        </Col>
      </Row>
    </div>
  );
}
