export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-shadow">
          Bienvenue sur mon site
        </h1>
        <p className="text-xl sm:text-2xl">
          Cliquez ci-dessous pour télécharger l application et découvrir nos fonctionnalités.
        </p>

        <a
          href="/app.apk"
          download
          className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg mt-6"
        >
          📥 Télécharger l APK
        </a>
      </div>
    </div>
  );
}

