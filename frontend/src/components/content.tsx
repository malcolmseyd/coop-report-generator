const Content = () => {
  return (
    <section className="w-full max-w-sm">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <h1 className="text-center text-2xl font-bold">
            Generate Work Term Reports
          </h1>
          <h2 className="text-center text-lg">
            A tool built with{" "}
            <a
              href="https://beta.openai.com"
              className="text-blue-700 hover:text-blue-900 focus:text-blue-900"
              target="_blank"
              rel="noreferrer"
            >
              GPT-3
            </a>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Input your information in the form and GPT-3 will generate a work
            term report.
          </p>
          <p>
            The completed report will be generated and available to download in
            the link below.
          </p>
          <p>
            No information is retained on our servers at any time. However,
            GPT-3 will read the form input in order to generate a work term
            report.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
