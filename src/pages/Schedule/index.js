import React, { useEffect, useState } from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { registerLicense } from "@syncfusion/ej2-base";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import ScheduleService from "../../service/schedule.service";
import ScheduleModal from "./Modal";

registerLicense(
  "Mgo+DSMBaFt+QHFqVk9rXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlliQX9XdEBiWXtacnw=;Mgo+DSMBPh8sVXJ1S0d+X1hPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpSfkRnW3pfcHBQTmg=;ORg4AjUWIQA/Gnt2VFhhQlJNfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd01iXX1bcXRRQWNU;MTc2NjU4MkAzMjMxMmUzMTJlMzMzOWNoL2lNU3llYnZLUWdrcmttbTNIZSt2dDUzN1E0NHcvVlBNNDFvaU41clE9;MTc2NjU4M0AzMjMxMmUzMTJlMzMzOVBRaFBLTWdLQWJmU3ZjNjVFSDJwQmRMTHUreVVkaWJxWUE0TzJLaFRSM2s9;NRAiBiAaIQQuGjN/V0d+XU9Hf1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckRrWHtcdXVVQ2VVWQ==;MTc2NjU4NUAzMjMxMmUzMTJlMzMzOUlmMFZwVEhISmtBZGw1bkRYUExCeklqdTNKa2hGWlR0cmpxL1ZnMnBRODQ9;MTc2NjU4NkAzMjMxMmUzMTJlMzMzOVFvWHJwRWZoZHJyOGlTUU5xbEk0MWNRQXVzeVdVZG93WUFFR2hGREJTUk09;Mgo+DSMBMAY9C3t2VFhhQlJNfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd01iXX1bcXRTQ2VU;MTc2NjU4OEAzMjMxMmUzMTJlMzMzOVBNWXByK0szS2xJUzdTL0pQRnJUWXJ5S0thOWFMTzArcXZpaXdkeHJTTTA9;MTc2NjU4OUAzMjMxMmUzMTJlMzMzOW1DZlEvcEtyWFMzOUhvQXpHTnpVUzVhak8waGpiVGpOdzVSM29oM2JWdEk9;MTc2NjU5MEAzMjMxMmUzMTJlMzMzOUlmMFZwVEhISmtBZGw1bkRYUExCeklqdTNKa2hGWlR0cmpxL1ZnMnBRODQ9"
);

export default function Schedule() {
  const [schedules, setSchedules] = useState();
  const [modalIsOPen, setModalIsOpen] = useState(false);
  const [formValues, setFormValues] = useState([]);

  const dataManager = new DataManager({
    url: "https://services.syncfusion.com/react/production/api/schedule",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  useEffect(() => {
    async function init() {
      const _scheduleService = new ScheduleService();
      const scheduleResponse = await _scheduleService.list();
      setSchedules(scheduleResponse);
    }
    init();
  }, []);

  return (
    <>
      <GenericOutletHeader
        pageTitle="Agenda"
        inputSearchConfig={{ inputExist: false }}
        addItemConfig={{
          addItemExist: false,
        }}
      />

      <ScheduleModal
        open={modalIsOPen}
        setOpen={setModalIsOpen}
        formValues={formValues}
        setFormValues={setFormValues}
        schedules={schedules}
        setSchedules={setSchedules}
      />

      <div className="schedule-wrapper">
        <ScheduleComponent
          width="100%"
          eventClick={(ev) => {
            // console.log(ev);
          }}
          height="530px"
          currentView="Week"
          cellClick={(ev) => {
            setModalIsOpen(true);
            setFormValues({ startTime: ev.startTime, endTime: ev.endTime });
          }}
          eventSettings={{ dataSource: schedules }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>

      {/* <ScheduleComponent
          eventClick={(ev) => {
            console.log(ev);
          }}
          startHour="9:00"
          endHour="18:00"
          cellClick={(ev) => {
            setModalIsOpen(true);
            setFormValues(ev);
          }}
          selectedDate={new Date(Date.now())}
          eventSettings={{
            dataSource: dataSchedule,
          }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent> */}
    </>
  );
}
