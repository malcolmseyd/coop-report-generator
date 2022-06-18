import Content from "./content";
import Form from "./form";

const Main = () => {
  return (
    <main className="m-auto flex w-full flex-col-reverse items-start justify-center gap-8 py-8 md:flex-row">
      <Form />
      <Content />
    </main>
  );
};

export default Main;
