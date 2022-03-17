import { useForm } from "react-hook-form";
import FormStyled from "./Form.styled";

const INITIAL_STATE = {
  name: "",
  description: "",
  price: 0,
  active: true,
  SKU: "",
  _id: "",
};

export const Form = ({ product = INITIAL_STATE, onSubmitModel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { _id, SKU } = product;
  const { name, description, price, active } = product;

  const onSubmit = (data) => {
    let { name, description, price, active } = data;
    name = name.trim();
    description = description.trim();
    price = parseFloat(price);
    active = String(active);

    onSubmitModel && onSubmitModel({ _id, name, description, price, SKU, active });
  };

  return (
    <FormStyled className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="form__box">
        <label>
          Nombre:
          <input
            type="text"
            {...register("name")}
            placeholder="Nombre de producto"
            className="form__input"
            defaultValue={name}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            {...register("description")}
            placeholder="Descripción"
            className="form__input"
            defaultValue={description}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            {...register("price")}
            placeholder="Precio"
            className="form__input"
            defaultValue={price}
            step="any"
          />
        </label>
        <label>
          Estado: {active ? "Activo" : "Inactivo"}
          <input
            name="active"
            {...register("active")}
            type="checkbox"
            className="form__input"
            defaultChecked={active}
          />
        </label>
        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>
    </FormStyled>
  );
};
