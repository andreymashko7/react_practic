import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from './components/Sections';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section />
    </div>
  );
}
