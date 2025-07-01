import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
    {
        name: "Twitter",
        icon: <FaTwitter size={22} />,
        href: "https://x.com/saizbuilds",
    },
    {
        name: "Email Me",
        icon: <FaEnvelope size={22} />,
        href: "mailto:cvsainath9866@gmail.com",
    },
    {
        name: "GitHub",
        icon: <FaGithub size={22} />,
        href: "https://github.com/Sainath9866",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={22} />,
        href: "https://www.linkedin.com/in/sainath-reddy-705089253/",
    },
];

export default function ContactMe() {
    return (
        <section className="w-full max-w-lg mx-auto py-16 px-4 text-center">
            <h2 className="text-5xl font-bold text-white mb-2">
                Get in touch<span className="text-sky-400"> with Me</span>
            </h2>
            <div className="h-1 w-48 bg-sky-400 mx-auto rounded mb-6" />
            <p className="text-gray-200 text-lg mb-2">
                Have a project in mind? I&apos;d love to hear from you!
            </p>
            <p className="text-gray-200 text-lg mb-8">
                Reach out to me, and let&apos;s turn your ideas into reality.
            </p>

            <div className="flex flex-col gap-4">
                {contacts.map((contact) => (
                    <a
                        key={contact.name}
                        href={contact.href}
                        {...(contact.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-3 bg-[#22242a] hover:bg-[#23272f] text-white text-lg font-medium rounded-md px-6 py-4 transition-colors duration-200"
                    >
                        {contact.icon}
                        {contact.name}
                    </a>
                ))}
            </div>
        </section>
    );
} 