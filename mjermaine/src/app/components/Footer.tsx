import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'; // Correct import
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { href: 'mailto:configgle@gmail.com', icon: <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-gray-400 hover:text-gray-500" /> },
  { href: 'https://www.linkedin.com/in/michael-anderson-389a0523a/', icon: <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-400 hover:text-gray-500" /> },
  { href: 'https://github.com/Configgle8', icon: <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-400 hover:text-gray-500" /> },
];

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 flex space-x-4">
      {socialLinks.map(({ href, icon }) => (
        <a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={`Link to ${href}`}>
          {icon}
        </a>
      ))}
    </footer>
  );
}
