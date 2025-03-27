import { useEffect } from "react";
import { useServices } from "../hooks/useServices";
import useForm from "../hooks/useForm.js";

function ServicesSelect({ selectService }) {
  const { services, fetchServices } = useServices();
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <select
        required
        name="servicios"
        id="servicios"
        className="form-control"
        onChange={(event) => selectService(event.target.value)}
      >
        <option value=""></option>
        {services.map((service, id) => (
          <option key={id} value={service.serviceId}>
            {service.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default ServicesSelect;
