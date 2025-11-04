function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-gray-800">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">Let’s connect for collaborations or opportunities!</p>
      <a href="mailto:anishanimeshsahu@gmail.com" className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition">
        Email Me
      </a>
    </section>
  );
}

export default Contact;
