import Content from "./content";
import Form from "./form";

const Main = () => {
  return (
    <main className="m-auto flex w-full flex-col items-center justify-center py-8 md:flex-row">
      <Form />
      <Content />
    </main>
  );
};

export default Main;
