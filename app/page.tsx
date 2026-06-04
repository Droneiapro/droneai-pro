export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">
          DRONE<span className="text-blue-500">AI</span> PRO
        </h1>

        <button className="bg-blue-600 px-4 py-2 rounded-xl">
          Connexion
        </button>
      </nav>

      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-bold mb-6">
          Votre copilote intelligent
          <br />
          pour les missions drone
        </h2>

        <p className="text-slate-400 text-xl mb-8">
          Planifiez, sécurisez et développez votre activité drone grâce à l'IA.
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 rounded-2xl text-lg font-bold">
          Essai Gratuit
        </button>
      </section>

      <section className="grid md:grid-cols-4 gap-6 p-10">
        <div className="bg-slate-900 rounded-2xl p-6">
          🤖 Assistant IA
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          📋 Autorisations J-10
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          👥 CRM Télépilote
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          🚁 Gestion Flotte
        </div>
      </section>
    </main>
  );
}