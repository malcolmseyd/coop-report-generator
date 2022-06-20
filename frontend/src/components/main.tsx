import Content from "./content";
import Form from "./form";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [pdfURL, setPdfURL] = useState("");
  const [loading, setLoading] = useState(true);

  function updatePDF(url: any) {
    setLoading(true);
    setPdfURL("http://localhost:8080" + url);
    setLoading(false);
  }

  return (
    <main className="m-auto flex w-full flex-col-reverse items-start justify-center gap-8 py-8 md:flex-row">
      <Form updatePDF={updatePDF} />
      <>
        <Content />
        {loading ? (
          <FontAwesomeIcon className="h-4 w-4 animate-spin" icon={faRotate} />
        ) : (
          <a href={pdfURL} download="coop-report.pdf" id="report">
            Download
          </a>
        )}
      </>
    </main>
  );
};

export default Main;
