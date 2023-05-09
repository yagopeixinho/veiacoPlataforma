import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import VeiacoService from "../../../service/veiaco.service";
import { Col, Row } from "reactstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

export default function ScheduleModal({ open, setOpen }) {
  const [veiacoList, setVeiacoList] = useState([]);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    async function init() {
      const _veiacoService = new VeiacoService();
      const veiacoResponse = await _veiacoService.list();

      setVeiacoList(veiacoResponse);
    }

    init();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-option-wrapper">
            <Row>
              <Col md="6" lg="6" xl="6">
                <div className="card-option-container">Lembretes Gerais</div>
              </Col>
              <Col md="6" lg="6" xl="6">
                <div className="card-option-container">Ações drásticas :/</div>
              </Col>
            </Row>

            {/* {veiacoList.map((veiaco) => (
              <Col md="6" lg="6" xl="6">
                <div className="veiaco-modal-card">
                  <img src={avatarVeiacoCard} alt="Temporary Veiaco user" />

                  <div className="card-info">
                    <span>{veiaco.name}</span>
                    <span>{veiaco.phone}</span>
                  </div>
                </div>
              </Col>
            ))} */}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
