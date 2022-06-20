import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const Content = (Props: any) => {
  return (
    <section className="w-full max-w-sm">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <h1 className="text-center text-2xl font-bold">
            Generate Co-Op Work Term Reports
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
            Input your information in the form and GPT-3 will generate a co-op
            work term report.
          </p>
          <p>
            The completed report will be available as a PDF to download in the
            link below.
          </p>
          <p>
            No information is retained on our servers. However, GPT-3 will read
            the form input in order to generate a co-op work term report.
          </p>
          {Props.reportGenerated ? (
            <div className="text-center">
              {Props.loading ? (
                <button
                  className="rounded-md bg-blue-700 p-2 text-white disabled:opacity-75"
                  disabled
                >
                  <FontAwesomeIcon
                    className="h-4 w-4 animate-spin"
                    icon={faRotate}
                  />{" "}
                  Download
                </button>
              ) : (
                <a
                  href={Props.pdfURL}
                  aria-label="Download Co-Op Work Term Report PDF"
                  className="rounded-md bg-blue-700 p-2 text-white outline-none ring-blue-900 ring-offset-2 hover:bg-blue-900 hover:ring-2 focus:bg-blue-900 focus:ring-2"
                >
                  Download
                </a>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Content;
