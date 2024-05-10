import TitleApp from "../components/atoms/title";
import SigninForm from "../components/molecules/signin.form";

const SigninTemplate = () => {
  return (
    <main className=" flex flex-col items-center py-14">
      <TitleApp className="text-7xl font-bold textTitle" title="¡Trello!" />
      <h2 className="my-10 text-4xl text-center font-bold">Registrate ahora</h2>
      <SigninForm />
    </main>
  );
};

export default SigninTemplate;
