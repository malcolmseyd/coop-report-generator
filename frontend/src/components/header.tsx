import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="flex justify-between gap-2 py-4 px-6 align-middle">
      <div>
        <h1 className="text-lg">
          <a className="p-1" href="/">
            Amazing App Name
          </a>
        </h1>
      </div>
      <div>
        <a href="https://github.com/malcolmseyd/uvec-summer-2022">
          <FontAwesomeIcon className="p-1 text-2xl" icon={faGithub} />
        </a>
      </div>
    </header>
  );
};

export default Header;
