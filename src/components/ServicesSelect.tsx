import { useEffect } from "react";
import { useServices } from "../hooks/useServices";
import { useDispatch } from 'react-redux';
import { setSelectedServiceId } from '../store/serviceSlice';

interface Service {
  serviceId: number;
  name: string;
}

function ServicesSelect() {
  const { services, fetchServices } = useServices();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices();
  }, []);

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const serviceId = Number(event.target.value);
    dispatch(setSelectedServiceId(serviceId));
  };

  return (
    <>
      <select
        required
        name="servicios"
        id="servicios"
        className="form-control"
        onChange={handleServiceChange}
      >
        <option value=""></option>
        {services.map((service: Service, id: number) => (
          <option key={id} value={service.serviceId}>
            {service.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default ServicesSelect;
