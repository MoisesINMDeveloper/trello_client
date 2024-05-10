import { useState } from "react";
import Button from "../atoms/button";
import Check from "../atoms/check";
import InputForm from "../atoms/input";
import axios from "axios";
import { AUTH_REGISTER } from "../../api/api.key";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (["username", "email", "name", "password"].includes(name)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const [policyAcepted, setPolicyAcepted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://localhost:3000/api/v1${AUTH_REGISTER}`,
        formData
      );
      console.log(response.data);
      // Aquí puedes manejar la respuesta de la API como desees
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };
  return (
    <section className="">
      <form
        className="flex flex-col items-center justify-between h-[65vh]"
        onSubmit={handleSubmit}
      >
        <div className="flexcol justify-between gap-4">
          <InputForm
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            value={formData.username}
            onChange={handleChange}
          />
          <InputForm
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            value={formData.name}
            onChange={handleChange}
          />
          <InputForm
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            value={formData.email}
            onChange={handleChange}
          />
          <InputForm
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            value={formData.password}
            onChange={handleChange}
          />
          <InputForm
            type={"password"}
            name={"repeatPassword"}
            placeholder={"Repeat-password"}
            value={formData.repeatPassword}
            onChange={handleChange}
          />

          <div className="flex mb-14 px-4 w-[80vw] items-center">
            <Check
              state={policyAcepted}
              setState={setPolicyAcepted}
              required={true}
              linkText="Politicas de Privacidad"
            />
          </div>
        </div>
        <div>
          <Button text={"Ingresar"} type={"submit"} />
        </div>
      </form>
    </section>
  );
};
export default SigninForm;
