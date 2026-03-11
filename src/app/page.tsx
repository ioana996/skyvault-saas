import CreateJumpLoggingForm from "./components/CreateJumpLoggingForm/CreateJumpLoggingForm";
import HeroStats from "./components/HeroStats/HeroStats";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Skydive Logbook</h1>
        <HeroStats />
        <CreateJumpLoggingForm />
      </main>
    </div>
  );
}
