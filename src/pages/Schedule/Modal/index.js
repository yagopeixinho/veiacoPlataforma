import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import VeiacoService from "../../../service/veiaco.service";
import { Row } from "reactstrap";
import ModalForm from "./Form";
import VeiacoCard from "./Card";
import ScheduleService from "../../../service/schedule.service";
import ConfirmationDialog from "../../../components/modals/ConfirmationDialog";

export default function ScheduleModal({
  open,
  setOpen,
  formValues,
  setFormValues,
  schedules,
  setSchedules,
}) {
  const [veiacoList, setVeiacoList] = useState([]);
  const [veiaco, setVeiaco] = useState({});
  const [showVeiacoList, setShowVeiacoList] = useState(false);

  const veiacoService = new VeiacoService();
  const schedulesService = new ScheduleService();

  useEffect(() => {
    if (formValues?.id) {
      setShowVeiacoList(false);
      fetchVeiacoAndSchedule();
    } else {
      setShowVeiacoList(true);
      fetchVeiacos();
    }
  }, [formValues?.id]);

  const fetchVeiacoAndSchedule = async () => {
    const getSchedule = await schedulesService.read(formValues.id);
    const getVeiaco = await veiacoService.read(getSchedule.VeiacoId);

    setVeiaco(getVeiaco);
  };

  const fetchVeiacos = async () => {
    const response = await veiacoService.list();
    setVeiacoList(response);
  };

  const handleVeiacoCardClick = (veiaco) => {
    setFormValues({ ...formValues, veiacoId: veiaco.id });
    setVeiaco(veiaco);
    setShowVeiacoList(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setShowVeiacoList(true);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <div className="modal-wrapper">
            {showVeiacoList ? (
              <Row className="cards">
                {veiacoList.map((veiaco) => (
                  <VeiacoCard
                    key={veiaco.id}
                    veiaco={veiaco}
                    onClick={handleVeiacoCardClick}
                  />
                ))}
              </Row>
            ) : (
              <ModalForm
                veiaco={veiaco}
                formValues={formValues}
                setFormValues={setFormValues}
                setShowVeiacoList={setShowVeiacoList}
                setOpen={setOpen}
                schedules={schedules}
                setSchedules={setSchedules}
              />
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
}
