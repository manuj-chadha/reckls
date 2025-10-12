import type { Pillar } from "../../types/Pillar";

interface PillarCardProps {
  pillar: Pillar;
}

const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => (
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
    <div className="text-3xl mb-3">{pillar.icon}</div>
    <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
    <p className="text-gray-600 text-sm">{pillar.description}</p>
  </div>
);

export default PillarCard;
