
export default function RevenueTable() {
  const revenueData = [
    { source: "Broadcasting Rights", estimate: "$3.9 billion", share: "44%" },
    { source: "Ticket Sales & Hospitality", estimate: "$3.0 billion", share: "34%" },
    { source: "Sponsorship & Marketing", estimate: "$1.8 billion", share: "20%" },
    { source: "Licensing & Other Revenue", estimate: "Remaining revenue", share: "2%" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 overflow-x-auto shadow-lg rounded-xl border border-white/10">
      <table className="w-full text-left border-collapse text-white bg-sba-dark-red/60 backdrop-blur-sm">
        <thead>
          <tr className="border-b border-white/20 bg-sba-dark-red">
            <th className="py-3.5 px-4 md:px-6 font-semibold text-sm md:text-base">Revenue Source</th>
            <th className="py-3.5 px-4 md:px-6 font-semibold text-sm md:text-base">Estimated Revenue</th>
            <th className="py-3.5 px-4 md:px-6 font-semibold text-sm md:text-base">Share of World Cup Revenue</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 font-sans">
          {revenueData.map((row, index) => (
            <tr key={index} className="hover:bg-white/5 transition-colors">
              <td className="py-3.5 px-4 md:px-6 text-sm md:text-base text-white/90">{row.source}</td>
              <td className="py-3.5 px-4 md:px-6 text-sm md:text-base text-white/90">{row.estimate}</td>
              <td className="py-3.5 px-4 md:px-6 text-sm md:text-base text-white/90 font-medium">{row.share}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}