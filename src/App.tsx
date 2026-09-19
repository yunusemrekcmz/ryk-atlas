import React, { useState } from 'react';
import { Search, Compass, GraduationCap, User, MessageCircle, ArrowLeft, Star, Share2, FileText, Check, X, Clock, Trophy, RotateCcw, Home, Bot, Mic, ArrowUp, Volume2 } from 'lucide-react';
import { bonesData } from './bonesData';
import { musclesData } from './musclesData';
import { circulatoryData } from './circulatoryData';

// ============================================================
// TİP TANIMLARI
// ============================================================
interface AnatomicalStructure {
  id: string;
  latin: string;
  turkish: string;
  english: string;
  region: string;
  mnemonic: string;
  nursingNote: string;
  clinicalImportance: string;
}

// ============================================================
// SİNİR SİSTEMİ (App.tsx içinde tutuyoruz)
// ============================================================
const nervousData: AnatomicalStructure[] = [
  { id: 'frontal', latin: 'Lobus Frontalis', turkish: 'Frontal Lob', english: 'Frontal Lobe', region: 'Beyin', mnemonic: 'Ön lob = Kişilik, karar verme', nursingNote: 'Frontal lob hasarında kişilik değişir', clinicalImportance: 'Travma, tümör, demans' },
  { id: 'parietal', latin: 'Lobus Parietalis', turkish: 'Parietal Lob', english: 'Parietal Lobe', region: 'Beyin', mnemonic: 'DuYu = Parietal', nursingNote: 'Dokunma, ağrı, ısı algısı', clinicalImportance: 'İnme, duyu kaybı' },
  { id: 'temporal', latin: 'Lobus Temporalis', turkish: 'Temporal Lob', english: 'Temporal Lobe', region: 'Beyin', mnemonic: 'Temporal = Hafıza, işitme', nursingNote: 'Epilepsi odağı olabilir', clinicalImportance: 'Hipokampus burada' },
  { id: 'occipital', latin: 'Lobus Occipitalis', turkish: 'Oksipital Lob', english: 'Occipital Lobe', region: 'Beyin', mnemonic: 'Ok = Göz (Görme)', nursingNote: 'Görme kaybı takibi', clinicalImportance: 'Görme merkezi' },
  { id: 'cerebellum', latin: 'Cerebellum', turkish: 'Beyincik', english: 'Cerebellum', region: 'Beyin', mnemonic: 'Denge ve koordinasyon', nursingNote: 'Ataksi, denge kaybı', clinicalImportance: 'Alkol, tümör' },
  { id: 'truncus', latin: 'Truncus Encephali', turkish: 'Beyin Sapı', english: 'Brainstem', region: 'Beyin', mnemonic: 'Hayati merkezler', nursingNote: 'Solunum, kalp atışı', clinicalImportance: 'Beyin ölümü tanısı' },
  { id: 'medulla', latin: 'Medulla Spinalis', turkish: 'Omurilik', english: 'Spinal Cord', region: 'Omurga', mnemonic: 'Sinir köprüsü', nursingNote: 'Refleksler', clinicalImportance: 'C1-C2 yaralanması ölümcül' },
  { id: 'thalamus', latin: 'Thalamus', turkish: 'Talamus', english: 'Thalamus', region: 'Beyin', mnemonic: 'Duyu istasyonu', nursingNote: 'Ağrı yolu', clinicalImportance: 'Koma' },
  { id: 'hypothalamus', latin: 'Hypothalamus', turkish: 'Hipotalamus', english: 'Hypothalamus', region: 'Beyin', mnemonic: 'Hormon ve ısı kontrolü', nursingNote: 'Ateş, susuzluk', clinicalImportance: 'Otonom kontrol' },
  { id: 'corpus-callosum', latin: 'Corpus Callosum', turkish: 'Korpus Kallozum', english: 'Corpus Callosum', region: 'Beyin', mnemonic: 'İki yarımküre bağlantısı', nursingNote: 'Epilepside kesilebilir', clinicalImportance: 'Split-brain' },
];

// ============================================================
// SİSTEMLER LİSTESİ
// ============================================================
const systems = [
  { id: 'skeletal', title: 'İskelet Sistemi', emoji: '🦴', color: 'from-slate-600 to-slate-800', data: bonesData },
  { id: 'muscular', title: 'Kas Sistemi', emoji: '💪', color: 'from-red-500 to-red-700', data: musclesData },
  { id: 'circulatory', title: 'Dolaşım Sistemi', emoji: '❤️', color: 'from-rose-500 to-rose-700', data: circulatoryData },
  { id: 'nervous', title: 'Sinir Sistemi', emoji: '🧠', color: 'from-purple-500 to-purple-700', data: nervousData },
];

// ============================================================
// QUIZ SORULARI
// ============================================================
const quizQuestions = [
  { question: 'İnsan vücudunun en uzun kemiği hangisidir?', options: ['Humerus', 'Tibia', 'Femur', 'Radius'], correct: 2 },
  { question: 'Vücudun en büyük organı hangisidir?', options: ['Kalp', 'Karaciğer', 'Akciğer', 'Beyin'], correct: 1 },
  { question: 'Kalp kaç odacıklıdır?', options: ['2', '3', '4', '5'], correct: 2 },
  { question: 'Yetişkin insanda kaç kemik vardır?', options: ['186', '206', '226', '246'], correct: 1 },
  { question: 'Vücuttaki en küçük kemik hangisidir?', options: ['Stapes', 'Malleus', 'Hyoid', 'Vomer'], correct: 0 },
  { question: 'Kanı pompalayan organ hangisidir?', options: ['Akciğer', 'Böbrek', 'Kalp', 'Karaciğer'], correct: 2 },
  { question: 'Solunum organı hangisidir?', options: ['Kalp', 'Akciğer', 'Mide', 'Bağırsak'], correct: 1 },
  { question: 'Sindirim sistemi nerede başlar?', options: ['Mide', 'Ağız', 'Yemek borusu', 'Bağırsak'], correct: 1 },
  { question: 'En büyük kas hangisidir?', options: ['Biceps', 'Quadriceps', 'Gluteus Maximus', 'Deltoid'], correct: 2 },
  { question: 'Beyin kaç ana lobu vardır?', options: ['2', '3', '4', '5'], correct: 2 },
];

// ============================================================
// ANA UYGULAMA
// ============================================================
const AnatomyAtlasApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<'explore' | 'quiz' | 'assistant' | 'profile'>('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<typeof systems[0] | null>(null);
  const [selectedItem, setSelectedItem] = useState<AnatomicalStructure | null>(null);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Assistant state
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Merhaba! Ben RYK Atlas asistanıyım. Anatomi hakkında soru sorabilirsiniz.' },
  ]);

  // Favoriler
  const [favorites, setFavorites] = useState<string[]>([]);

  // ============================================================
  // YARDIMCI FONKSİYONLAR
  // ============================================================
  const goBack = () => {
    if (selectedItem) setSelectedItem(null);
    else if (selectedSystem) setSelectedSystem(null);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const userMsg = { sender: 'user', text: chatInput };
    let aiText = 'Bu konuda bilgim yok. Lütfen başka bir soru sorun.';
    const q = chatInput.toLowerCase();
    if (q.includes('kemik') || q.includes('kaç kemik')) aiText = 'Yetişkin insanda 206 kemik bulunur.';
    else if (q.includes('femur') || q.includes('en uzun')) aiText = 'En uzun kemik FEMUR (uyluk kemiği), yaklaşık 50 cm.';
    else if (q.includes('kalp')) aiText = 'Kalp 4 odacıklıdır: 2 atriyum, 2 ventrikül.';
    else if (q.includes('kas')) aiText = 'Vücutta 600+ kas vardır. En büyüğü Gluteus Maximus.';
    else if (q.includes('kan') || q.includes('damar')) aiText = 'Kanı kalpten arterler taşır, venler geri getirir.';
    setChatMessages((prev) => [...prev, userMsg, { sender: 'ai', text: aiText }]);
    setChatInput('');
  };

  // ============================================================
  // FİLTRELEME
  // ============================================================
  const filteredSystems = systems.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItems = selectedSystem
    ? selectedSystem.data.filter(
        (item) =>
          item.latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.turkish.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // ============================================================
  // RENDER: DETAY
  // ============================================================
  if (selectedItem) {
    const isFav = favorites.includes(selectedItem.id);
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <header className="bg-slate-800 border-b border-slate-700 p-4 flex items-center justify-between">
          <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <Volume2 className="w-5 h-5 text-slate-400" />
        </header>

        <main className="p-4 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-400">{selectedItem.latin}</h1>
          <p className="text-lg text-blue-300">{selectedItem.turkish}</p>
          <p className="text-sm text-slate-400 mb-4">{selectedItem.english}</p>

          <div className="bg-slate-800 rounded-xl p-4 mb-3 border-l-4 border-blue-500">
            <p className="text-xs text-blue-400 font-semibold mb-1">📍 BÖLGE</p>
            <p className="text-sm">{selectedItem.region}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 mb-3 border-l-4 border-yellow-500">
            <p className="text-xs text-yellow-400 font-semibold mb-1">💡 AKILDA KALICI KOD</p>
            <p className="text-sm">{selectedItem.mnemonic}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 mb-3 border-l-4 border-green-500">
            <p className="text-xs text-green-400 font-semibold mb-1">🩺 HEMŞİRELİK NOTU</p>
            <p className="text-sm">{selectedItem.nursingNote}</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 mb-3 border-l-4 border-red-500">
            <p className="text-xs text-red-400 font-semibold mb-1">🏥 KLİNİK ÖNEM</p>
            <p className="text-sm">{selectedItem.clinicalImportance}</p>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => toggleFavorite(selectedItem.id)}
              className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                isFav ? 'bg-yellow-500 text-slate-900' : 'bg-slate-700 text-slate-100'
              }`}
            >
              <Star className="w-5 h-5" /> {isFav ? 'Favoride' : 'Favori'}
            </button>
            <button className="flex-1 bg-blue-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" /> Paylaş
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ============================================================
  // RENDER: SİSTEM LİSTESİ
  // ============================================================
  if (selectedSystem) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <header className="bg-slate-800 border-b border-slate-700 p-4 flex items-center gap-3 sticky top-0 z-10">
          <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">{selectedSystem.emoji} {selectedSystem.title}</h1>
        </header>

        <div className="p-4">
          <input
            type="text"
            placeholder="Ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 mb-4"
          />

          <p className="text-sm text-slate-400 mb-3">{filteredItems.length} yapı bulundu</p>

          <div className="space-y-2">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl p-4 text-left transition"
              >
                <p className="font-semibold text-blue-300">{item.latin}</p>
                <p className="text-sm text-slate-400">{item.turkish}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // RENDER: ANA EKRAN
  // ============================================================
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20">
      <header className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-400">RYK ATLAS</h1>
        <p className="text-slate-400 mt-1">Hemşirelik Anatomisi</p>
        <p className="text-xs text-slate-500 mt-1">"Anatomi artık cebinde"</p>
      </header>

      {currentView === 'explore' && (
        <main className="px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Organ, kemik veya sistem ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 p-3 bg-slate-800 border border-slate-700 rounded-xl"
            />
          </div>

          <h2 className="text-lg font-bold mb-4">Sistemleri Keşfet</h2>

          <div className="grid grid-cols-2 gap-4">
            {filteredSystems.map((system) => (
              <button
                key={system.id}
                onClick={() => {
                  setSelectedSystem(system);
                  setSearchQuery('');
                }}
                className={`bg-gradient-to-br ${system.color} rounded-2xl p-6 flex flex-col items-center justify-center aspect-square hover:scale-105 transition`}
              >
                <span className="text-4xl mb-2">{system.emoji}</span>
                <span className="font-semibold text-center text-sm">{system.title}</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {currentView === 'quiz' && (
        <main className="px-4 max-w-xl mx-auto">
          {!quizFinished ? (
            <>
              <div className="flex justify-between mb-4">
                <span className="text-sm">Soru {quizIndex + 1} / {quizQuestions.length}</span>
                <span className="text-sm">Skor: {quizScore}</span>
              </div>
              <h2 className="text-xl font-bold mb-6">{quizQuestions[quizIndex].question}</h2>
              <div className="space-y-3">
                {quizQuestions[quizIndex].options.map((opt, i) => {
                  const isCorrect = i === quizQuestions[quizIndex].correct;
                  const isSelected = quizAnswered === i;
                  let cls = 'bg-slate-800 border-slate-700';
                  if (quizAnswered !== null) {
                    if (isCorrect) cls = 'bg-green-700 border-green-500';
                    else if (isSelected) cls = 'bg-red-700 border-red-500';
                  }
                  return (
                    <button
                      key={i}
                      disabled={quizAnswered !== null}
                      onClick={() => {
                        setQuizAnswered(i);
                        if (isCorrect) setQuizScore((s) => s + 1);
                        setTimeout(() => {
                          if (quizIndex + 1 < quizQuestions.length) {
                            setQuizIndex((q) => q + 1);
                            setQuizAnswered(null);
                          } else {
                            setQuizFinished(true);
                          }
                        }, 1000);
                      }}
                      className={`w-full p-4 rounded-xl border text-left ${cls}`}
                    >
                      {String.fromCharCode(65 + i)}) {opt}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center mt-12">
              <Trophy className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Test Tamamlandı!</h2>
              <p className="text-lg mb-6">Skor: {quizScore} / {quizQuestions.length}</p>
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setQuizScore(0);
                  setQuizAnswered(null);
                  setQuizFinished(false);
                }}
                className="bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-5 h-5" /> Tekrar Dene
              </button>
            </div>
          )}
        </main>
      )}

      {currentView === 'assistant' && (
        <main className="px-4 max-w-xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">🤖 Anatomy AI</h2>
          <div className="bg-slate-800 rounded-xl p-4 h-96 overflow-y-auto mb-3 space-y-3">
            {chatMessages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl max-w-[80%] ${
                  m.sender === 'user' ? 'bg-blue-600 ml-auto' : 'bg-slate-700'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
              placeholder="Mesajınızı yazın..."
              className="flex-1 p-3 bg-slate-800 border border-slate-700 rounded-xl"
            />
            <button onClick={sendChat} className="bg-blue-600 p-3 rounded-xl">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {['En uzun kemik?', 'Kalbi anlat', 'Kaç kemik var?'].map((q) => (
              <button
                key={q}
                onClick={() => setChatInput(q)}
                className="bg-slate-800 border border-slate-700 rounded-full px-3 py-1 text-sm whitespace-nowrap"
              >
                {q}
              </button>
            ))}
          </div>
        </main>
      )}

      {currentView === 'profile' && (
        <main className="px-4 max-w-xl mx-auto">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-2">
              <User className="w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold">Misafir Kullanıcı</h2>
            <p className="text-sm text-slate-400">Anatomi Öğrencisi</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-blue-400">{favorites.length}</p>
              <p className="text-xs text-slate-400">Favori</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-green-400">{quizScore}</p>
              <p className="text-xs text-slate-400">Quiz Doğru</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-orange-400">3</p>
              <p className="text-xs text-slate-400">Günlük Seri</p>
            </div>
          </div>

          <h3 className="text-sm font-bold text-slate-400 mb-3">ROZETLER</h3>
          <div className="grid grid-cols-4 gap-3 mb-6">
            {['🏅', '🎯', '🦴', '🔥'].map((emoji, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-3 text-center">
                <span className="text-2xl">{emoji}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[
              { icon: Star, label: `Favorilerim (${favorites.length})` },
              { icon: FileText, label: 'Notlarım' },
              { icon: Trophy, label: 'İlerleme' },
              { icon: Check, label: 'Ayarlar' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-blue-400" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {/* ALT MENÜ */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 flex justify-around p-3">
        {[
          { id: 'explore', icon: Compass, label: 'Keşfet' },
          { id: 'quiz', icon: GraduationCap, label: 'Sınav' },
          { id: 'assistant', icon: MessageCircle, label: 'Asistan' },
          { id: 'profile', icon: User, label: 'Profil' },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => {
              setCurrentView(id as any);
              setSelectedSystem(null);
              setSelectedItem(null);
              setSearchQuery('');
            }}
            className={`flex flex-col items-center gap-1 ${
              currentView === id ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AnatomyAtlasApp;