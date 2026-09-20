import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, GraduationCap, User, MessageCircle, ArrowLeft, Star, Share2, FileText, Check, X, Clock, Trophy, RotateCcw, Home, Bot, Mic, ArrowUp, Volume2 } from 'lucide-react';
import { bonesData } from './bonesData';
import { musclesData } from './musclesData';
import { circulatoryData } from './circulatoryData';

interface AnatomicalStructure {
id: string;
latin: string;
turkish: string;
english: string;
region: string;
mnemonic: string;
nursingNote: string;
clinicalImportance: string;
articulations?: string;
landmarks?: string;
}

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

const systems = [
{ id: 'skeletal', title: 'İskelet Sistemi', emoji: '🦴', color: 'from-slate-600 to-slate-800', data: bonesData },
{ id: 'muscular', title: 'Kas Sistemi', emoji: '💪', color: 'from-red-500 to-red-700', data: musclesData },
{ id: 'circulatory', title: 'Dolaşım Sistemi', emoji: '❤️', color: 'from-rose-500 to-rose-700', data: circulatoryData },
{ id: 'nervous', title: 'Sinir Sistemi', emoji: '🧠', color: 'from-purple-500 to-purple-700', data: nervousData },
];

const quizQuestions = [
{ question: 'İnsan vücudunun en uzun kemiği hangisidir?', options: ['Humerus', 'Tibia', 'Femur', 'Radius'], correct: 2 },
{ question: 'Vücudun en büyük iç organı hangisidir?', options: ['Kalp', 'Karaciğer', 'Akciğer', 'Beyin'], correct: 1 },
{ question: 'Kalp kaç odacıklıdır?', options: ['2', '3', '4', '5'], correct: 2 },
{ question: 'Yetişkin insanda kaç kemik vardır?', options: ['186', '206', '226', '246'], correct: 1 },
{ question: 'Vücuttaki en küçük kemik hangisidir?', options: ['Stapes', 'Malleus', 'Hyoid', 'Vomer'], correct: 0 },
{ question: 'Kanı pompalayan organ hangisidir?', options: ['Akciğer', 'Böbrek', 'Kalp', 'Karaciğer'], correct: 2 },
{ question: 'Solunum organı hangisidir?', options: ['Kalp', 'Akciğer', 'Mide', 'Bağırsak'], correct: 1 },
{ question: 'Sindirim sistemi nerede başlar?', options: ['Mide', 'Ağız', 'Yemek borusu', 'Bağırsak'], correct: 1 },
{ question: 'En büyük kas hangisidir?', options: ['Biceps', 'Quadriceps', 'Gluteus Maximus', 'Deltoid'], correct: 2 },
{ question: 'Beyinin kaç ana lobu vardır?', options: ['2', '3', '4', '5'], correct: 2 },
];

const AnatomyAtlasApp: React.FC = () => {
const [currentView, setCurrentView] = useState<'explore' | 'quiz' | 'assistant' | 'profile'>('explore');
const [searchQuery, setSearchQuery] = useState('');
const [selectedSystem, setSelectedSystem] = useState<typeof systems[0] | null>(null);
const [selectedItem, setSelectedItem] = useState<AnatomicalStructure | null>(null);

const [quizIndex, setQuizIndex] = useState(0);
const [quizScore, setQuizScore] = useState(0);
const [quizAnswered, setQuizAnswered] = useState<number | null>(null);
const [quizFinished, setQuizFinished] = useState(false);

const [chatInput, setChatInput] = useState('');
const [chatMessages, setChatMessages] = useState([
{ sender: 'ai', text: 'Merhaba! Ben RYK Atlas asistanıyım. Organlar, kemikler, kaslar veya hemşirelik notları hakkında soru sorabilirsiniz.' },
]);
const chatEndRef = useRef(null);

const [favorites, setFavorites] = useState<string[]>([]);

useEffect(() => {
if (currentView === 'assistant') {
chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}
}, [chatMessages, currentView]);

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
let aiText = 'Bu konuda spesifik bir bilgim yok. Bir organ, kemik, kas, enjeksiyon bölgesi veya acil durum (ör: CPR, Şok, Tansiyon) sorabilirsiniz.';
const q = chatInput.toLowerCase();

if (q.includes('kemik') || q.includes('kaç kemik')) aiText = 'Yetişkin bir insanda tam 206 kemik bulunur. Bebeklerde ise bu sayı 270 civarındadır, büyüdükçe birleşirler.';
else if (q.includes('femur') || q.includes('en uzun')) aiText = 'Femur (Uyluk Kemiği), vücudun en uzun ve en güçlü kemiğidir. Kırıklarında yüksek miktarda kanama (şok) riski vardır.';
else if (q.includes('kalp') || q.includes('kardiyak')) aiText = 'Kalp 4 odacıklıdır (2 Atriyum, 2 Ventrikül). Sol ventrikül tüm vücuda kan pompaladığı için en kalın kas tabakasına sahiptir.';
else if (q.includes('kas')) aiText = 'Vücutta 600\'den fazla kas bulunur. En büyüğü Gluteus Maximus, en küçüğü ise kulaktaki Stapedius kasıdır.';
else if (q.includes('akciğer') || q.includes('solunum')) aiText = 'Sağ akciğer 3 loblu, sol akciğer ise kalbe yer açmak için 2 lobludur. Solunumun temel kası Diyaframdır.';
else if (q.includes('beyin') || q.includes('sinir')) aiText = 'Beyin 4 ana lobdan oluşur: Frontal (kişilik), Parietal (duyu), Temporal (hafıza) ve Oksipital (görme).';
else if (q.includes('mide') || q.includes('sindirim')) aiText = 'Mide, besinleri kimyasal ve mekanik sindirir. NG sonda uygulamasında ölçüm: burun - kulak memesi - ksifoid çıkıntı.';
else if (q.includes('böbrek') || q.includes('renal')) aiText = 'Böbrekler kanı süzer. Günlük idrar çıkışı yetişkinlerde 1.5 - 2 litredir. Saatlik 30cc altı oligüridir.';
else if (q.includes('karaciğer') || q.includes('hepar')) aiText = 'Karaciğer (Hepar) en büyük iç organımızdır. Toksinleri temizler, safra üretir ve pıhtılaşma faktörlerini sentezler.';
else if (q.includes('enjeksiyon') || q.includes('im')) aiText = 'İM enjeksiyon için en güvenli bölge Ventrogluteal bölgedir. Çocuklarda ise Vastus Lateralis tercih edilir.';
else if (q.includes('vital') || q.includes('yaşam bulguları')) aiText = 'Vital bulgular: Ateş (36.5-37.5°C), Nabız (60-100/dk), Solunum (12-20/dk), Tansiyon (120/80 mmHg) ve SpO2 (%95-100).';
else if (q.includes('tansiyon') || q.includes('kan basıncı')) aiText = 'Normal tansiyon 120/80 mmHg. 140/90 üzeri Hipertansiyon, 90/60 altı Hipotansiyon kabul edilir.';
else if (q.includes('cpr') || q.includes('masaj')) aiText = 'Yetişkin KPR: 30 kalp masajı, 2 suni solunum. Bası derinliği 5 cm, hızı dakikada 100-120 olmalıdır.';

setChatMessages((prev) => [...prev, userMsg, { sender: 'ai', text: aiText }]);
setChatInput('');


};

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

if (selectedItem) {
const isFav = favorites.includes(selectedItem.id);
return (








    <main className="p-4 max-w-2xl mx-auto pb-24">
      <h1 className="text-2xl font-bold text-blue-400">{selectedItem.latin}</h1>
      <p className="text-lg text-blue-300">{selectedItem.turkish}</p>
      <p className="text-sm text-slate-400 mb-6">{selectedItem.english}</p>

      <div className="bg-slate-900/80 rounded-2xl p-5 mb-4 border border-slate-800 border-l-4 border-l-blue-500 shadow-sm">
        <p className="text-xs text-blue-400 font-bold tracking-wider mb-2 flex items-center gap-2">
          <Compass className="w-4 h-4" /> BÖLGE
        </p>
        <p className="text-sm leading-relaxed">{selectedItem.region}</p>
      </div>

      <div className="bg-slate-900/80 rounded-2xl p-5 mb-4 border border-slate-800 border-l-4 border-l-yellow-500 shadow-sm">
        <p className="text-xs text-yellow-400 font-bold tracking-wider mb-2 flex items-center gap-2">
          <Star className="w-4 h-4" /> AKILDA KALICI KOD
        </p>
        <p className="text-sm leading-relaxed">{selectedItem.mnemonic}</p>
      </div>

      <div className="bg-slate-900/80 rounded-2xl p-5 mb-4 border border-slate-800 border-l-4 border-l-green-500 shadow-sm">
        <p className="text-xs text-green-400 font-bold tracking-wider mb-2 flex items-center gap-2">
          <FileText className="w-4 h-4" /> HEMŞİRELİK NOTU
        </p>
        <p className="text-sm leading-relaxed">{selectedItem.nursingNote}</p>
      </div>

      <div className="bg-slate-900/80 rounded-2xl p-5 mb-6 border border-slate-800 border-l-4 border-l-red-500 shadow-sm">
        <p className="text-xs text-red-400 font-bold tracking-wider mb-2 flex items-center gap-2">
          <Bot className="w-4 h-4" /> KLİNİK ÖNEM
        </p>
        <p className="text-sm leading-relaxed">{selectedItem.clinicalImportance}</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => toggleFavorite(selectedItem.id)}
          className={`flex-1 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
            isFav 
              ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20' 
              : 'bg-slate-800 text-slate-100 hover:bg-slate-700'
          }`}
        >
          <Star className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} /> {isFav ? 'Favorilerimde' : 'Favoriye Ekle'}
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-500 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20">
          <Share2 className="w-5 h-5" /> Paylaş
        </button>
      </div>
    </main>
  </div>
);


}

if (selectedSystem) {
const groupedItems = filteredItems.reduce((acc, item) => {
if (!acc[item.region]) acc[item.region] = [];
acc[item.region].push(item);
return acc;
}, {} as Record<string, AnatomicalStructure[]>);

const totalCount = selectedSystem.id === 'skeletal' && searchQuery === '' ? 206 : filteredItems.length;

return (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
      <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-800 transition-colors">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-lg font-bold flex items-center gap-2">
        <span>{selectedSystem.emoji}</span>
        <span>{selectedSystem.title}</span>
      </h1>
    </header>

    <div className="p-4 max-w-2xl mx-auto pb-24">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Yapı ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
        />
      </div>

      <p className="text-sm font-medium text-slate-400 mb-6 px-1">{totalCount} yapı bulundu</p>

      <div className="space-y-8">
        {Object.entries(groupedItems).map(([region, items]) => (
          <div key={region}>
            <h3 className="text-blue-400 font-bold mb-3 px-1 text-sm tracking-widest uppercase opacity-80 flex items-center gap-2">
               <div className="h-px bg-slate-800 flex-1"></div>
               {region}
               <div className="h-px bg-slate-800 flex-1"></div>
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 text-left transition-all active:scale-[0.98]"
                >
                  <p className="font-semibold text-slate-100 text-lg mb-0.5">{item.latin}</p>
                  <p className="text-sm text-slate-400">{item.turkish}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
        
        {filteredItems.length === 0 && (
           <div className="text-center py-12">
             <p className="text-slate-500 text-lg">Arama sonucu bulunamadı.</p>
           </div>
        )}
      </div>
    </div>
  </div>
);


}

return (


RYK ATLAS
Hemşirelik Anatomisi
"Anatomi artık cebinde"


  {currentView === 'explore' && (
    <main className="px-4 max-w-2xl mx-auto">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
        <input
          type="text"
          placeholder="Organ, kemik veya sistem ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm transition-all"
        />
      </div>

      <h2 className="text-lg font-bold mb-4 px-1 text-slate-200">Sistemleri Keşfet</h2>

      <div className="grid grid-cols-2 gap-4">
        {filteredSystems.map((system) => (
          <button
            key={system.id}
            onClick={() => {
              setSelectedSystem(system);
              setSearchQuery('');
            }}
            className={`bg-gradient-to-br ${system.color} rounded-3xl p-6 flex flex-col items-center justify-center aspect-square shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all active:scale-95`}
          >
            <span className="text-5xl mb-3 drop-shadow-md">{system.emoji}</span>
            <span className="font-bold text-center text-sm text-white drop-shadow-sm">{system.title}</span>
          </button>
        ))}
      </div>
    </main>
  )}

  {currentView === 'quiz' && (
    <main className="px-4 max-w-xl mx-auto">
      {!quizFinished ? (
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-xl">
          <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
            <span className="text-sm font-semibold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">Soru {quizIndex + 1} / {quizQuestions.length}</span>
            <span className="text-sm font-bold text-blue-400 flex items-center gap-1">
               <Trophy className="w-4 h-4" /> Skor: {quizScore}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-8 leading-snug">{quizQuestions[quizIndex].question}</h2>
          <div className="space-y-3">
            {quizQuestions[quizIndex].options.map((opt, i) => {
              const isCorrect = i === quizQuestions[quizIndex].correct;
              const isSelected = quizAnswered === i;
              let cls = 'bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-slate-600';
              
              if (quizAnswered !== null) {
                if (isCorrect) cls = 'bg-green-600/20 border-green-500/50 text-green-400';
                else if (isSelected) cls = 'bg-red-600/20 border-red-500/50 text-red-400';
                else cls = 'bg-slate-800/50 border-slate-800 opacity-50';
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
                    }, 1200);
                  }}
                  className={`w-full p-4 rounded-2xl border text-left font-medium transition-all duration-200 active:scale-[0.98] ${cls}`}
                >
                  <span className="inline-block w-8 font-bold opacity-70">{String.fromCharCode(65 + i)})</span> {opt}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center mt-12 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
          <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-extrabold mb-2 text-white">Test Tamamlandı!</h2>
          <p className="text-lg mb-8 text-slate-300">
            Skorun: <span className="font-bold text-blue-400">{quizScore}</span> / {quizQuestions.length}
          </p>
          
          <div className="w-full bg-slate-800 rounded-full h-2 mb-8 overflow-hidden">
             <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${(quizScore / quizQuestions.length) * 100}%` }}></div>
          </div>

          <button
            onClick={() => {
              setQuizIndex(0);
              setQuizScore(0);
              setQuizAnswered(null);
              setQuizFinished(false);
            }}
            className="bg-blue-600 hover:bg-blue-500 w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <RotateCcw className="w-5 h-5" /> Tekrar Dene
          </button>
        </div>
      )}
    </main>
  )}

  {currentView === 'assistant' && (
    <main className="px-4 max-w-2xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      <div className="flex-1 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative">
         <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
               <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
               <h2 className="font-bold text-slate-100">Anatomy AI</h2>
               <p className="text-xs text-blue-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  Çevrimiçi
               </p>
            </div>
         </div>

        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {chatMessages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3.5 px-5 text-[15px] leading-relaxed shadow-sm max-w-[85%] ${
                  m.sender === 'user' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-slate-800 border border-slate-700/50 text-slate-100 rounded-2xl rounded-tl-sm'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="px-5 pb-2 pt-2 overflow-x-auto flex gap-2">
          {['En uzun kemik?', 'Tansiyon nedir?', 'Kalbi anlat'].map((q) => (
            <button
              key={q}
              onClick={() => setChatInput(q)}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        <div className="p-4 bg-slate-900/80 border-t border-slate-800">
          <div className="flex gap-2 relative">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChat()}
              placeholder="Bir soru sor..."
              className="flex-1 py-3.5 pl-5 pr-12 bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-full text-slate-100 focus:outline-none transition-all placeholder:text-slate-500"
            />
            <button 
              onClick={sendChat} 
              disabled={!chatInput.trim()}
              className="absolute right-2 top-2 bottom-2 aspect-square bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-full flex items-center justify-center transition-all"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )}

  {currentView === 'profile' && (
    <main className="px-4 max-w-xl mx-auto">
      <div className="text-center mb-8 pt-4">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg border-4 border-slate-900">
          <User className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Yunus Emre Kaçmaz</h2>
        <p className="text-sm font-medium text-blue-400 mt-1">Hemşirelik Öğrencisi</p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-blue-400 mb-1">{favorites.length}</p>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Favori</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-green-400 mb-1">{quizScore}</p>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Doğru</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center">
          <p className="text-3xl font-extrabold text-orange-400 mb-1">3</p>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Günlük</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: Star, label: `Favorilerim (${favorites.length})`, color: 'text-yellow-400` },
          { icon: FileText, label: 'Notlarım', color: 'text-blue-400' },
          { icon: Trophy, label: 'İlerleme İstatistikleri', color: 'text-green-400' },
        ].map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-2xl p-4 flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800">
                  <Icon className={`w-5 h-5 ${color}`} />
               </div>
               <span className="font-semibold text-slate-200">{label}</span>
            </div>
            <ArrowLeft className="w-5 h-5 text-slate-600 rotate-180 group-hover:text-slate-400 transition-colors" />
          </button>
        ))}
      </div>
    </main>
  )}

  <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 flex justify-around p-2 z-50">
    {[
      { id: 'explore', icon: Compass, label: 'Keşfet' },
      { id: 'quiz', icon: GraduationCap, label: 'Sınav' },
      { id: 'assistant', icon: Bot, label: 'Asistan' },
      { id: 'profile', icon: User, label: 'Profil' },
    ].map(({ id, icon: Icon, label }) => {
      const isActive = currentView === id;
      return (
        <button
          key={id}
          onClick={() => {
            setCurrentView(id as any);
            setSelectedSystem(null);
            setSelectedItem(null);
            setSearchQuery('');
          }}
          className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl w-16 transition-all duration-300 ${
            isActive ? 'text-blue-400 -translate-y-1' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900'
          }`}
        >
          <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-400/20' : ''}`} />
          <span className={`text-[10px] font-semibold tracking-wide ${isActive ? 'opacity-100' : 'opacity-70'}`}>
            {label}
          </span>
        </button>
      );
    })}
  </nav>
</div>


);
};

export default AnatomyAtlasApp;