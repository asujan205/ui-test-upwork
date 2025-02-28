export const TraderJurnel = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
      <h3 className="font-bold mb-4">Traders Journal</h3>

      {/* Journal Entries */}
      <div className="space-y-4">
        {[
          "Market's showing signs of instability. Could be an opportunity—just need the right entry. Watching closely.",
          "Market whispers uncertainty. No rush—let's wait for clarity before the next strike.",
          "Time to review the strategy. It worked, but I'll tweak it slightly for next time. Maybe a more aggressive wing positioning if the market's looking a bit more volatile. We'll see what the next trade brings. Onward, as always!",
          "Good trade. Small tweak needed—maybe a tighter stop next time. Onward!",
        ].map((entry, i) => (
          <div key={i} className="pb-4 border-b border-gray-700 last:border-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-medium">Sharpe Navigator</span>
              <span className="text-gray-400 text-xs">12.00</span>
            </div>
            <p className="text-gray-300 text-sm">{entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TraderJurnel;
