import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 py-4 px-6 align-middle">
      <div>
        <h1 className="text-lg">
          <a href="/">Co-Op Report Generator</a>
        </h1>
      </div>
      <div>
        <a
          href="https://github.com/malcolmseyd/coop-report-generator"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the source code on GitHub."
          className="p-1 text-2xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </header>
  );
};

export default Header;
