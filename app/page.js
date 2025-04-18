export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl text-white  font-bold mb-6">Bienvenue sur mon site !</h1>
      <p className="text-lg text-white mb-4">Cliquez ci-dessous pour télécharger lapplication :</p>
      
      <a
        href="/app.apk"
        download
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        📥 Télécharger l APK
      </a>
      
    </div>
  );
}
