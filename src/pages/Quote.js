import FetchApi from '../components/apiUse';

export default function Quote() {
  return (
    <div className="Quote">
      <h2>Quotes</h2>
      <FetchApi />
    </div>
  );
}
