import ActiveLabel from './components/active-label/active-label';
import DisabledLabel from './components/disabled-label/disabled-label';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <DisabledLabel>Not Active</DisabledLabel>
    </main>
  );
}
