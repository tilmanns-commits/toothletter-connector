import React, { useState } from 'react';
import { Search, UserPlus, Check, Filter } from 'lucide-react';
import './App.css';

const initialParticipants = [
  {
    id: 1,
    name: "Adike Yilmaz",
    needs: ["Eine Anstellung / ein Job 🥼"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/adikeyilmaz.jpeg"
  },
  {
    id: 2,
    name: "Anna Hoestermann",
    needs: ["Eine Anstellung / ein Job 🥼"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/annahoestermann.jpeg"
  },
  {
    id: 3,
    name: "Aylin Celik",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/aylincelik.jpeg",
    other: "Selbstständige, Freelance Zahnärzte in start ups"
  },
  {
    id: 4,
    name: "Daniel Weber",
    needs: ["Eine Anstellung / ein Job 🥼"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/danielweber.jpeg"
  },
  {
    id: 5,
    name: "Eduardo Emim",
    needs: ["Neue Überweiser für mich (OCH / MKG) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/eduardoemim.jpeg"
  },
  {
    id: 6,
    name: "Georg Benjamin",
    needs: ["Neue Überweiser für mich (Endo) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/georgbenjamin.jpeg"
  },
  {
    id: 7,
    name: "Georgi Bogdanov",
    needs: [
      "Eine Anstellung / ein Job 🥼",
      "OCH / MKG zum Überweisen meiner Patienten ➡️"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/georgibogdanov.jpeg"
  },
  {
    id: 8,
    name: "Joubin Derakhshani",
    needs: ["Gutes Zahntechnik-Labor 🛠"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/joubinderakhshani.jpeg"
  },
  {
    id: 9,
    name: "Julia Neyer",
    needs: ["Neue Überweiser für mich (OCH / MKG) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/julianeyer.jpeg"
  },
  {
    id: 10,
    name: "Julia Schwärzler",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/juliaschwärzler.jpeg",
    other: "Menschen, für die Zahnmedizin mehr als bohren ist"
  },
  {
    id: 11,
    name: "Karim Elhennawy",
    needs: ["Neue Überweiser für mich (KFO) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/karimelhennawy.jpeg"
  },
  {
    id: 12,
    name: "Lukas Wiedmaier",
    needs: ["Eine Anstellung / ein Job 🥼"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/lukaswiedmaier.jpeg"
  },
  {
    id: 13,
    name: "Magda Doumit",
    needs: [
      "KFO zum Überweisen meiner Patienten ➡️",
      "OCH / MKG zum Überweisen meiner Patienten ➡️",
      "Gutes Zahntechnik-Labor 🛠"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/magdadoumit.jpeg"
  },
  {
    id: 14,
    name: "Maria Mang de la Rosa",
    needs: ["Neue Überweiser für mich (KFO) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/mariamangdelarosa.jpeg"
  },
  {
    id: 15,
    name: "Marie Cordier",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/mariecordier.jpeg",
    other: "Hospitation KFO/Chirurgie"
  },
  {
    id: 16,
    name: "Melanie Wiedenberg",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/melaniewiedenberg.jpeg",
    other: "Kursteilnehmer"
  },
  {
    id: 17,
    name: "Michael Scholz",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/michaelscholz.jpeg",
    other: "Klinisches Jahr für Weiterbildung Oralchirurgie"
  },
  {
    id: 18,
    name: "Nujin Wapenhans",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/nujinwapenhans.jpeg",
    other: "Austausch"
  },
  {
    id: 19,
    name: "Rafik Akhmad",
    needs: [
      "KFO zum Überweisen meiner Patienten ➡️",
      "OCH / MKG zum Überweisen meiner Patienten ➡️",
      "Endo-Spezialist:in zum Überweisen meiner Patienten ➡️",
      "Gutes Zahntechnik-Labor 🛠"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/rafikakhmad.jpeg"
  },
  {
    id: 20,
    name: "Sebastian Glowacki",
    needs: ["Eine Anstellung / ein Job 🥼"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/sebastianglowacki.jpeg"
  },
  {
    id: 21,
    name: "Sven Schober",
    needs: ["Zahnärzt:innen zur Zusammenarbeit (Labor)"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/svenschober.jpeg"
  },
  {
    id: 22,
    name: "Tetiana Shtapura",
    needs: [],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/tetianashtapura.jpeg",
    other: "Neue Kontakte mit Expertise im Bereich der Finanzen und Jurisprudenz"
  },
  {
    id: 23,
    name: "Tobias Bölk",
    needs: ["Neue Überweiser für mich (OCH / MKG) ⬅️"],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/tobiasbölk.jpeg"
  },
  {
    id: 24,
    name: "Tobias Schuffner",
    needs: [
      "Eine:n angestellte:n ZA/ZÄ für meine Praxis 👨🏽‍⚕️👩🏼‍⚕️",
      "KFO zum Überweisen meiner Patienten ➡️",
      "Gutes Zahntechnik-Labor 🛠"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/tobiasschuffner.jpeg"
  },
  {
    id: 25,
    name: "Ulrike Ariane Lechler",
    needs: [
      "OCH / MKG zum Überweisen meiner Patienten ➡️",
      "Endo-Spezialist:in zum Überweisen meiner Patienten ➡️",
      "Gutes Zahntechnik-Labor 🛠"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/ulrikearianelechler.jpeg"
  },
  {
    id: 26,
    name: "Valérie Sabet",
    needs: [
      "KFO zum Überweisen meiner Patienten ➡️",
      "OCH / MKG zum Überweisen meiner Patienten ➡️"
    ],
    connected: [],
    photo: "https://toothletter.de/static/guest_photos/valeriesabet.jpeg"
  }
];

function App() {
  const [participants, setParticipants] = useState(initialParticipants);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const findMatches = (participant) => {
    return participants.filter(p => 
      p.id !== participant.id && (
        // Job-Matching
        (participant.needs.some(need => need.includes("Eine Anstellung")) &&
         p.needs.some(need => need.includes("angestellte:n ZA/ZÄ"))) ||
        (participant.needs.some(need => need.includes("angestellte:n ZA/ZÄ")) &&
         p.needs.some(need => need.includes("Eine Anstellung"))) ||
          
        // KFO-Matching
        (participant.needs.some(need => need.includes("Überweiser für mich (KFO)")) &&
         p.needs.some(need => need.includes("KFO zum Überweisen"))) ||
        (participant.needs.some(need => need.includes("KFO zum Überweisen")) &&
         p.needs.some(need => need.includes("Überweiser für mich (KFO)"))) ||
          
        // OCH/MKG-Matching
        (participant.needs.some(need => need.includes("Überweiser für mich (OCH / MKG)")) &&
         p.needs.some(need => need.includes("OCH / MKG zum Überweisen"))) ||
        (participant.needs.some(need => need.includes("OCH / MKG zum Überweisen")) &&
         p.needs.some(need => need.includes("Überweiser für mich (OCH / MKG)"))) ||
          
        // Endo-Matching
        (participant.needs.some(need => need.includes("Überweiser für mich (Endo)")) &&
         p.needs.some(need => need.includes("Endo-Spezialist:in zum Überweisen"))) ||
        (participant.needs.some(need => need.includes("Endo-Spezialist:in zum Überweisen")) &&
         p.needs.some(need => need.includes("Überweiser für mich (Endo)"))) ||

        // Labor-Matching
        (participant.needs.some(need => need.includes("Gutes Zahntechnik-Labor")) &&
        p.needs.some(need => need.includes("Zahnärzt:innen zur Zusammenarbeit (Labor)"))) ||
        (participant.needs.some(need => need.includes("Zahnärzt:innen zur Zusammenarbeit (Labor)")) &&
        p.needs.some(need => need.includes("Gutes Zahntechnik-Labor")))
      )
    );
  };

  const markAsConnected = (participant1Id, participant2Id) => {
    setParticipants(prev => {
      const newParticipants = prev.map(p => {
        if (p.id === participant1Id) {
          return {...p, connected: [...p.connected, participant2Id]};
        }
        if (p.id === participant2Id) {
          return {...p, connected: [...p.connected, participant1Id]};
        }
        return p;
      });
      const updatedSelectedParticipant = newParticipants.find(p => p.id === participant1Id);
      setSelectedParticipant(updatedSelectedParticipant);
      return newParticipants;
    });
  };

  const removeConnection = (participant1Id, participant2Id) => {
    setParticipants(prev => {
      const newParticipants = prev.map(p => {
        if (p.id === participant1Id) {
          return {...p, connected: p.connected.filter(id => id !== participant2Id)};
        }
        if (p.id === participant2Id) {
          return {...p, connected: p.connected.filter(id => id !== participant1Id)};
        }
        return p;
      });
      const updatedSelectedParticipant = newParticipants.find(p => p.id === participant1Id);
      setSelectedParticipant(updatedSelectedParticipant);
      return newParticipants;
    });
  };

  const filteredParticipants = participants.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'unmatched') return matchesSearch && p.connected.length === 0;
    return matchesSearch;
  });

  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Toothletter Connector</h1>
        
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Suche nach Namen..."
              className="w-full p-2 pl-8 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 border rounded-lg bg-white"
          >
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {showFilters && (
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Alle
            </button>
            <button 
              onClick={() => setActiveFilter('unmatched')}
              className={`px-3 py-1 rounded-full ${activeFilter === 'unmatched' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Noch nicht vernetzt
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {filteredParticipants.map(participant => (
          <div 
            key={participant.id}
            className="bg-white p-4 rounded-lg shadow"
            onClick={() => setSelectedParticipant(participant)}
          >
            <div className="flex items-center gap-3">
              <img 
                src={participant.photo} 
                alt={participant.name} 
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{participant.name}</h3>
                {participant.other && (
                  <p className="text-xs text-gray-500 mt-1">{participant.other}</p>
                )}
              </div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                {participant.connected.length} Connections
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedParticipant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">
                Matches für {selectedParticipant.name}
              </h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Gesuche:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedParticipant.needs.map(need => (
                    <span key={need} className="bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded">
                      {need}
                    </span>
                  ))}
                </div>
              </div>

              {selectedParticipant.other && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Sonstiges:</h3>
                  <p className="text-sm text-gray-600">{selectedParticipant.other}</p>
                </div>
              )}

              <h3 className="font-semibold mb-2">Potenzielle Matches:</h3>
              <div className="space-y-3">
                {findMatches(selectedParticipant).map(match => (
                  <div key={match.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <div className="space-y-1">
                      <p className="font-medium">{match.name}</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-sm text-gray-600 mr-1">Gesuche:</span>
                        {match.needs.map(need => {
                          const isMatching = selectedParticipant.needs.some(pNeed => 
                            (need.includes("Eine Anstellung") && pNeed.includes("angestellte:n ZA/ZÄ")) ||
                            (need.includes("angestellte:n ZA/ZÄ") && pNeed.includes("Eine Anstellung")) ||
                            (need.includes("Überweiser für mich") && pNeed.includes("zum Überweisen")) ||
                            (need.includes("zum Überweisen") && pNeed.includes("Überweiser für mich"))
                          );
                          return (
                            <span 
                              key={need} 
                              className={`text-xs px-2 py-0.5 rounded ${
                                isMatching
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-sky-100 text-sky-800'
                              }`}
                            >
                              {need}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    {selectedParticipant.connected.includes(match.id) ? (
                      <button
                        onClick={() => removeConnection(selectedParticipant.id, match.id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded flex items-center"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Verbindung aufheben
                      </button>
                    ) : (
                      <button
                        onClick={() => markAsConnected(selectedParticipant.id, match.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded flex items-center"
                      >
                        <UserPlus className="h-4 w-4 mr-1" />
                        Verbinden
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedParticipant(null)}
                className="mt-6 w-full bg-gray-200 py-2 rounded"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;