import StatusLabel, { Status } from './components/StatusLabel/index.ts';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-10">Home Page</h1>
      <StatusLabel status={Status.Active} />
      <StatusLabel status={Status.NotActive} />
      <StatusLabel status={Status.Pending} />
      <StatusLabel status={Status.Suspended} />
    </main>
  );
}
