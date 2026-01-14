import { FaComments, FaLock, FaUsers, FaRocket } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          About ChatNest
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A modern chat platform built for fast, secure, and meaningful
          conversations.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to provide a simple, secure, and real-time chat
          experience where people can connect without barriers.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Feature
          icon={<FaComments />}
          title="Real-time Chat"
          desc="Instant messaging with real-time updates."
        />
        <Feature
          icon={<FaLock />}
          title="Secure"
          desc="Your conversations are private and protected."
        />
        <Feature
          icon={<FaUsers />}
          title="Community"
          desc="Connect with friends and groups easily."
        />
        <Feature
          icon={<FaRocket />}
          title="Fast & Modern"
          desc="Optimized performance with modern UI."
        />
      </section>

      {/* Vision */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-600">
          We envision ChatNest as a trusted digital space where conversations
          feel natural, safe, and engaging for everyone.
        </p>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="p-6 rounded-xl shadow-md bg-white text-center">
    <div className="text-4xl text-primary mb-4 mx-auto">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default AboutPage;
