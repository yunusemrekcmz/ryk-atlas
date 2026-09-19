export const circulatoryData = [
  // Kalp Odacıkları ve Kapakçıklar (Heart Chambers and Valves)
  {
    id: "atrium-dextrum",
    latin: "Atrium Dextrum",
    turkish: "Sağ Kulakçık",
    english: "Right Atrium",
    region: "Kalp",
    mnemonic: "Vücuttan kirli kanın ilk geldiği oda",
    nursingNote: "Santral venöz basınç (CVP) ölçümü, sağ atriyuma yakın vena cava'dan yapılır.",
    clinicalImportance: "Sinoatriyal (SA) düğüm burada bulunur, aritmilerde önemlidir."
  },
  {
    id: "ventriculus-dexter",
    latin: "Ventriculus Dexter",
    turkish: "Sağ Karıncık",
    english: "Right Ventricle",
    region: "Kalp",
    mnemonic: "Kirli kanı akciğere pompalar",
    nursingNote: "Pulmoner hipertansiyon veya KOAH hastalarında yorulup büyüyebilir (Cor Pulmonale).",
    clinicalImportance: "Pulmoner emboli durumunda ani basınç artışına bağlı sağ kalp yetmezliği gelişebilir."
  },
  {
    id: "atrium-sinistrum",
    latin: "Atrium Sinistrum",
    turkish: "Sol Kulakçık",
    english: "Left Atrium",
    region: "Kalp",
    mnemonic: "Akciğerden temiz kanın ilk geldiği oda",
    nursingNote: "Atriyal fibrilasyon durumunda burada kan göllenip pıhtı (trombüs) oluşturabilir.",
    clinicalImportance: "Burada oluşan pıhtılar beyne giderek inmeye (stroke) neden olabilir."
  },
  {
    id: "ventriculus-sinister",
    latin: "Ventriculus Sinister",
    turkish: "Sol Karıncık",
    english: "Left Ventricle",
    region: "Kalp",
    mnemonic: "En kalın duvarlı oda (Sistemi besler, tüm vücuda pompalar)",
    nursingNote: "Sistemik kan basıncını (tansiyon) oluşturan ana kasılma buradadır.",
    clinicalImportance: "Miyokard enfarktüsü (kalp krizi) ve kalp yetmezliğinde en çok etkilenen, hayati boşluktur."
  },
  {
    id: "valva-tricuspidalis",
    latin: "Valva Tricuspidalis",
    turkish: "Triküspit Kapak",
    english: "Tricuspid Valve",
    region: "Kalp (Sağ)",
    mnemonic: "Tri = 3 yaprakçıklı (Sağ atrium ile sağ ventrikül arası)",
    nursingNote: "IV ilaç bağımlılarında endokarditin en sık tuttuğu kapaktır.",
    clinicalImportance: "Triküspit yetmezliğinde boyun venlerinde dolgunluk ve karaciğerde büyüme görülür."
  },
  {
    id: "valva-mitralis",
    latin: "Valva Mitralis (Bicuspidalis)",
    turkish: "Mitral Kapak (İkili Kapak)",
    english: "Mitral Valve",
    region: "Kalp (Sol)",
    mnemonic: "Piskopos şapkasına benzer, Mİtral = Sol (Sol atrium ile sol ventrikül arası)",
    nursingNote: "Apikal nabız dinlenirken (5. interkostal aralık, midklaviküler hat) mitral odak dinlenir.",
    clinicalImportance: "Romatizmal kalp hastalıklarında en sık daralan/bozulan kapaktır (Mitral darlığı)."
  },
  {
    id: "valva-aortae",
    latin: "Valva Aortae",
    turkish: "Aort Kapağı",
    english: "Aortic Valve",
    region: "Kalp (Sol Çıkış)",
    mnemonic: "Sol ventrikülden aortaya çıkış kapısı",
    nursingNote: "Göğsün sağ üst kısmında (2. interkostal aralık) steteskopla en iyi duyulur.",
    clinicalImportance: "Aort stenozu (darlığı) yaşlılarda senkop (bayılma) ve anjinaya yol açabilir."
  },
  {
    id: "valva-trunci-pulmonalis",
    latin: "Valva Trunci Pulmonalis",
    turkish: "Pulmoner Kapak",
    english: "Pulmonary Valve",
    region: "Kalp (Sağ Çıkış)",
    mnemonic: "Sağ ventrikülden akciğere çıkış kapısı",
    nursingNote: "Göğsün sol üst kısmında (2. interkostal aralık) dinlenir.",
    clinicalImportance: "Doğumsal kalp hastalıklarında (örn. Fallot Tetralojisi) darlığı görülebilir."
  },

  // Arterler (Atardamarlar)
  {
    id: "aorta",
    latin: "Aorta",
    turkish: "Aort",
    english: "Aorta",
    region: "Sistemik",
    mnemonic: "Vücudun ana otobanı (En büyük arter)",
    nursingNote: "Karın muayenesinde zayıf hastalarda pulsasyonu (atımı) palpe edilebilir.",
    clinicalImportance: "Anevrizması (baloncuk) ve disseksiyonu (yırtılması) ölümcül acil durumlardır."
  },
  {
    id: "arteria-coronaria",
    latin: "Arteriae Coronariae (Dextra ve Sinistra)",
    turkish: "Koroner Arterler",
    english: "Coronary Arteries",
    region: "Kalp",
    mnemonic: "Kalbin tacı (Coronary=Taç), kalbi besleyen damarlar",
    nursingNote: "Anjina pektoris şikayetlerinde bu damarlardaki kan akışının yetersizliği düşünülür.",
    clinicalImportance: "Tıkanmaları Miyokard Enfarktüsüne (Kalp Krizi) neden olur; stent veya bypass (CABG) ile açılır."
  },
  {
    id: "arteria-carotis-communis",
    latin: "Arteria Carotis Communis",
    turkish: "Şah Damarı",
    english: "Common Carotid Artery",
    region: "Boyun",
    mnemonic: "Beyni besleyen ana damar",
    nursingNote: "KPR (Kalp masajı) sırasında yetişkinlerde nabız kontrolü için ilk bakılan yerdir. İki taraflı aynı anda basılmaz!",
    clinicalImportance: "Karotis darlığı (plak) felç (inme) riskini çok artırır, endarterektomi gerekebilir."
  },
  {
    id: "arteria-radialis",
    latin: "Arteria Radialis",
    turkish: "Radyal Arter",
    english: "Radial Artery",
    region: "Ön Kol / Bilek",
    mnemonic: "Başparmak hizasındaki nabız noktası",
    nursingNote: "Günlük pratikte en sık nabız sayılan ve arteriyel kan gazı (AKG) alınan damardır.",
    clinicalImportance: "Koroner anjiyografi için giriş yolu olarak sıkça kullanılmaktadır."
  },
  {
    id: "arteria-brachialis",
    latin: "Arteria Brachialis",
    turkish: "Brakiyal Arter",
    english: "Brachial Artery",
    region: "Kol",
    mnemonic: "Tansiyon arteri",
    nursingNote: "Tansiyon ölçümünde manşetin yerleştirildiği ve steteskopla Korotkoff seslerinin dinlendiği arterdir.",
    clinicalImportance: "Bebeklerde KPR sırasında nabız kontrolü buradan yapılır."
  },
  {
    id: "arteria-femoralis",
    latin: "Arteria Femoralis",
    turkish: "Femoral Arter",
    english: "Femoral Artery",
    region: "Kasık / Uyluk",
    mnemonic: "Bacağın ana arteri",
    nursingNote: "Şok veya kardiyak arrest durumlarında karotise alternatif merkezi nabız noktasıdır.",
    clinicalImportance: "Koroner anjiyografi ve kateterizasyon işlemleri için klasik giriş bölgesidir."
  },
  {
    id: "arteria-poplitea",
    latin: "Arteria Poplitea",
    turkish: "Diz Arkası Arteri",
    english: "Popliteal Artery",
    region: "Diz",
    mnemonic: "Diz arkasındaki çukurun atardamarı",
    nursingNote: "Alt ekstremite dolaşımını değerlendirirken, palpasyonu zordur, dizi hafif bükerek aranır.",
    clinicalImportance: "Diz çıkıklarında yaralanma riski çok yüksektir, bacağın kaybına yol açabilir."
  },
  {
    id: "arteria-dorsalis-pedis",
    latin: "Arteria Dorsalis Pedis",
    turkish: "Ayak Sırtı Arteri",
    english: "Dorsalis Pedis Artery",
    region: "Ayak",
    mnemonic: "Ayağın üstündeki nabız",
    nursingNote: "Diyabetik ayak, periferik arter hastalığı ve alçı/atel sonrası ekstremite dolaşım takibinde mutlak kontrol edilir.",
    clinicalImportance: "Yokluğu veya zayıflığı alt ekstremite iskemi (kanlanma azlığı) belirtisidir."
  },
  {
    id: "truncus-pulmonalis",
    latin: "Truncus Pulmonalis (Arteria Pulmonalis)",
    turkish: "Pulmoner Arter (Akciğer Atardamarı)",
    english: "Pulmonary Artery",
    region: "Göğüs/Akciğer",
    mnemonic: "Kirli kan taşıyan tek arter",
    nursingNote: "Pulmoner arter kateteri (Swan-Ganz) ile yoğun bakımda kalp basınçları ölçülür.",
    clinicalImportance: "Pulmoner embolide (akciğer pıhtısı) tıkanan damardır."
  },

  // Venler (Toplardamarlar)
  {
    id: "vena-cava-superior",
    latin: "Vena Cava Superior",
    turkish: "Üst Ana Toplardamar",
    english: "Superior Vena Cava",
    region: "Göğüs",
    mnemonic: "Baş ve kolların kirli kanını kalbe döker",
    nursingNote: "Santral venöz kateterlerin ucunun ideal olarak konumlandığı damardır.",
    clinicalImportance: "Akciğer tümörleri tarafından sıkıştırılırsa VCS (Vena Cava Superior) Sendromu gelişir (Yüzde/kolda şişlik)."
  },
  {
    id: "vena-cava-inferior",
    latin: "Vena Cava Inferior",
    turkish: "Alt Ana Toplardamar",
    english: "Inferior Vena Cava",
    region: "Karın/Göğüs",
    mnemonic: "Vücudun alt yarısının kirli kanını kalbe döker",
    nursingNote: "Gebelikte sırtüstü yatıldığında uterusun basısına uğrar, hipotansiyon yapar (Sola yatış önerilir).",
    clinicalImportance: "Tekrarlayan pulmoner embolileri önlemek için içine IVC filtresi yerleştirilebilir."
  },
  {
    id: "vena-jugularis-interna",
    latin: "Vena Jugularis Interna",
    turkish: "İç Şah Toplardamarı",
    english: "Internal Jugular Vein",
    region: "Boyun",
    mnemonic: "Beynin kirli kanını toplayan ana kanal",
    nursingNote: "Santral venöz kateter açılması için en sık tercih edilen damardır (Ultrason eşliğinde).",
    clinicalImportance: "Kalp yetmezliğinde boyun venöz dolgunluğu (JVD) olarak dışarıdan belirginleşir."
  },
  {
    id: "vena-mediana-cubiti",
    latin: "Vena Mediana Cubiti",
    turkish: "Orta Dirsek Toplardamarı",
    english: "Median Cubital Vein",
    region: "Ön Kol / Dirsek",
    mnemonic: "Kan alma veni",
    nursingNote: "Flebostomi (kan alma) ve IV (damar yolu) ilaç uygulamaları için ilk tercihtir; yüzeysel ve sabittir.",
    clinicalImportance: "Sürekli kullanıma bağlı flebit (damar iltihabı) veya tromboz gelişebilir."
  },
  {
    id: "vena-saphena-magna",
    latin: "Vena Saphena Magna",
    turkish: "Büyük Safen Ven",
    english: "Great Saphenous Vein",
    region: "Bacak",
    mnemonic: "Vücudun en uzun damarı (Ayak bileğinden kasığa)",
    nursingNote: "Acil durumlarda (şok, travma) ayak bileği medialinden cerrahi yolla (cut-down) damar yolu açılabilir.",
    clinicalImportance: "Varis hastalığında en sık genişleyen damardır; Koroner Bypass cerrahisinde greft olarak alınır."
  },
  {
    id: "venae-pulmonales",
    latin: "Venae Pulmonales",
    turkish: "Pulmoner Venler (Akciğer Toplardamarları)",
    english: "Pulmonary Veins",
    region: "Göğüs/Akciğer",
    mnemonic: "Temiz kan taşıyan tek ven grubu (4 adettir)",
    nursingNote: "Sol atriyuma temiz kanı getirirler.",
    clinicalImportance: "Atriyal fibrilasyonun anormal elektriksel odakları genellikle bu venlerin sol atriyuma açıldığı yerlerden kaynaklanır."
  },
  {
    id: "vena-portae-hepatis",
    latin: "Vena Portae Hepatis",
    turkish: "Kapı Toplardamarı (Portal Ven)",
    english: "Portal Vein",
    region: "Karın",
    mnemonic: "Sindirim sisteminin besinlerini karaciğere taşır",
    nursingNote: "Karaciğer sirozunda portal hipertansiyon geliştiğini anlamak için klinik belirtiler (assit, özofagus varisi) izlenir.",
    clinicalImportance: "Portal hipertansiyonda kan alternatif yollara (özofagus varisleri, hemoroid) yönelir ve ölümcül kanamalara yol açabilir."
  }
];