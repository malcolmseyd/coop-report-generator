const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 py-4 px-6 text-center">
      <div>
        <p>
          Built using{" "}
          <a
            href="https://openai.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700"
          >
            https://openai.com
          </a>
          . Developed by UVic students.
        </p>
      </div>
      <div>
        <p>
          Please do not submit a co-op work term report using this tool. If you
          do you accept the consequences of your actions. The developers take no
          responsibility.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
