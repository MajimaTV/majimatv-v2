import React, { useState } from "react";

export default function MajimaTV() {
  const [activeMatch, setActiveMatch] = useState(null);

  const matches = [
    {
      id: 1,
      league: "lol",
      time: "04-23 01:00",
      match: "LVP 수페르리가",
      streamUrl: "https://www.youtube.com/embed/xFutjZEBTXs"
    },
    {
      id: 2,
      league: "lol",
      time: "04-23 01:00",
      match: "프라임리그",
      streamUrl: "https://www.youtube.com/embed/xFutjZEBTXs"
    },
    {
      id: 3,
      league: "CRO D1",
      time: "04-23 02:15",
      match: "NK 로코모티바 자그레브 vs HNK 시베니크",
      streamUrl: "https://www.youtube.com/embed/xFutjZEBTXs"
    },
    {
      id: 4,
      league: "TUR Cup",
      time: "04-23 02:30",
      match: "코니아스포르 vs 갈라타사라이",
      streamUrl: "https://www.youtube.com/embed/xFutjZEBTXs"
    },
    {
      id: 5,
      league: "유로리그",
      time: "04-23 02:45",
      match: "페네르바흐체 vs Paris",
      streamUrl: "https://www.youtube.com/embed/xFutjZEBTXs"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans">
      <h1 className="text-3xl text-[#FFD700] font-bold mb-6">마지마TV LIVE 경기 리스트</h1>
      <div className="space-y-4">
        {matches.map((game) => (
          <div
            key={game.id}
            className="flex items-center justify-between bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition"
          >
            <div>
              <div className="text-sm text-gray-400">{game.league} · {game.time}</div>
              <div className="text-lg font-semibold text-green-400">{game.match}</div>
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-bold"
              onClick={() => setActiveMatch(game.streamUrl)}
            >
              ▶ PLAY
            </button>
          </div>
        ))}
      </div>

      {activeMatch && (
        <div className="mt-8 aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src={activeMatch}
            title="Live Stream"
            className="w-full h-full rounded-xl border border-gray-700"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
