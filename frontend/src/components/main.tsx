import Content from "./content";
import Form from "./form";
import { useState } from "react";

const Main = () => {
  const [pdfURL, setPdfURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [reportGenerated, setReportGenerated] = useState(false);

  function updateLoading(loading: boolean) {
    setLoading(loading);
  }

  function updateReportGenerated(reportGenerated: boolean) {
    setReportGenerated(reportGenerated);
  }

  function updatePDF(url: any) {
    setPdfURL("http://localhost:8080" + url);
  }

  return (
    <main className="m-auto flex w-full flex-col-reverse items-start justify-center gap-8 px-6 py-8 md:flex-row">
      <Form
        updatePDF={updatePDF}
        updateLoading={updateLoading}
        updateReportGenerated={updateReportGenerated}
      />
      <Content
        pdfURL={pdfURL}
        loading={loading}
        reportGenerated={reportGenerated}
      />
    </main>
  );
};

export default Main;
