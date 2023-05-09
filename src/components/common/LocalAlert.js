import { useEffect, useState } from "react";

export default function LocalAlert({ msg, status }) {
  const statusProperties = ["success", "alert", "warning"];
  const [alertClassName, setAlertClassName] = useState("");

  useEffect(() => {
    const activeStatus = statusProperties.find((item) => item === status);
    setAlertClassName(activeStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="local-alert">
      <p className={alertClassName}>{msg}</p>
    </div>
  );
}
