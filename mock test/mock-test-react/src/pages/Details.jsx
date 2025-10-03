function Details() {
  return (
    <div className="flex justify-center mt-12">
      <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h2 className="text-3xl font-bold text-stone-600 mb-3">Details Page</h2>
        <p className="text-gray-700 leading-relaxed">
          Hello, I’m <span className="font-semibold text-purple-500">Malhari Pawar</span>,
          a passionate Full Stack Developer. I have experience working with
          <span className="font-medium">
            {" "}
            React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript
          </span>
          . I enjoy building modern, user-friendly, and scalable web applications. My goal
          is to contribute to innovative projects and continue growing as a developer.
        </p>
      </div>
    </div>
  );
}

export default Details;
