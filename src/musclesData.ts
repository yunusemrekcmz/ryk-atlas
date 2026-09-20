export interface MuscleData {
  id: string;
  latin: string;
  turkish: string;
  english: string;
  region: string;
  mnemonic: string;
  nursingNote: string;
  clinicalImportance: string;
}

export const musclesData: MuscleData[] = [
  // Yüz ve Boyun Kasları (Facial and Neck Muscles)
  {
    id: "occipitofrontalis",
    latin: "M. Occipitofrontalis",
    turkish: "Alın ve Baş Arkası Kası",
    english: "Occipitofrontalis",
    region: "Yüz/Baş",
    mnemonic: "Alnı kırıştıran, saçı hareket ettiren",
    nursingNote: "Fasiyal sinir felcinde alın kırıştırma fonksiyonu değerlendirilir.",
    clinicalImportance: "Fasiyal paralizi (Bell's Palsy) teşhisinde önemlidir."
  },
  {
    id: "orbicularis-oculi",
    latin: "M. Orbicularis Oculi",
    turkish: "Göz Çevresi Kası",
    english: "Orbicularis Oculi",
    region: "Yüz",
    mnemonic: "Oculi = Göz (Gözü kapatır)",
    nursingNote: "Kornea refleksinde ve göz kapağı kapanmasında kontrol edilir.",
    clinicalImportance: "Fasiyal felçte göz tam kapanamaz, kornea kuruluğu riski vardır."
  },
  {
    id: "orbicularis-oris",
    latin: "M. Orbicularis Oris",
    turkish: "Ağız Çevresi Kası",
    english: "Orbicularis Oris",
    region: "Yüz",
    mnemonic: "Oris = Ağız (Öpücük kası, ağzı kapatır)",
    nursingNote: "Sıvı alımında ve konuşmada dudak fonksiyonu için önemlidir.",
    clinicalImportance: "Felcinde hastanın ağzından sıvı dökülebilir."
  },
  {
    id: "buccinator",
    latin: "M. Buccinator",
    turkish: "Yanak Kası",
    english: "Buccinator",
    region: "Yüz",
    mnemonic: "Trompetçi kası (Üfleme, ıslık çalma)",
    nursingNote: "Çiğneme sırasında gıdaların yanak ile dişler arasında kalmasını önler.",
    clinicalImportance: "Çiğneme ve konuşma bozukluklarında değerlendirilir."
  },
  {
    id: "zygomaticus-major",
    latin: "M. Zygomaticus Major",
    turkish: "Büyük Elmacık Kası",
    english: "Zygomaticus Major",
    region: "Yüz",
    mnemonic: "Gülümseme kası",
    nursingNote: "Fasiyal sinir muayenesinde hastadan gülümsemesi istenir.",
    clinicalImportance: "Fasiyal paralizide ağız köşesi aşağı düşer."
  },
  {
    id: "masseter",
    latin: "M. Masseter",
    turkish: "Çiğneme Kası",
    english: "Masseter",
    region: "Yüz/Çene",
    mnemonic: "Mastication = Çiğneme (En güçlü çiğneme kası)",
    nursingNote: "Trigeminal sinir muayenesinde çene sıkıldığında palpe edilir.",
    clinicalImportance: "Tetanozda (lockjaw/trismus) kasılır ve ağız açılamaz."
  },
  {
    id: "temporalis",
    latin: "M. Temporalis",
    turkish: "Şakak Kası",
    english: "Temporalis",
    region: "Yüz/Baş",
    mnemonic: "Şakaktaki yelpaze (Çeneyi kapatır ve arkaya çeker)",
    nursingNote: "Çiğneme zorluğu olan hastalarda değerlendirilir.",
    clinicalImportance: "Gerilim tipi baş ağrılarında tetik noktalar barındırabilir."
  },
  {
    id: "sternocleidomastoideus",
    latin: "M. Sternocleidomastoideus (SCM)",
    turkish: "Boyun Eğici Kas",
    english: "Sternocleidomastoid",
    region: "Boyun",
    mnemonic: "SCM = Sternum, Clavicula, Mastoid (Başı eğer ve çevirir)",
    nursingNote: "Santral venöz kateterizasyon (internal juguler ven) için önemli anatomik nirengi noktasıdır.",
    clinicalImportance: "Tortikolis (boyun eğriliği) durumunda spazmı görülür."
  },
  {
    id: "platysma",
    latin: "M. Platysma",
    turkish: "Boyun Derisi Kası",
    english: "Platysma",
    region: "Boyun",
    mnemonic: "Boynu geren ince tabaka",
    nursingNote: "Boyun travmalarında derin doku hasarı göstergesi olabilir.",
    clinicalImportance: "Yüzeysel boyun cerrahisinde kozmetik dikiş için önemlidir."
  },

  // Göğüs ve Karın Kasları (Chest and Abdominal Muscles)
  {
    id: "pectoralis-major",
    latin: "M. Pectoralis Major",
    turkish: "Büyük Göğüs Kası",
    english: "Pectoralis Major",
    region: "Göğüs",
    mnemonic: "Pec = Göğüs (Kola fleksiyon, adduksiyon ve iç rotasyon)",
    nursingNote: "EKG elektrot yerleşiminde ve pacemaker implantasyonunda anatomik rehberdir.",
    clinicalImportance: "Mastektomi sonrası zayıflık görülebilir; Poland sendromunda eksik olabilir."
  },
  {
    id: "pectoralis-minor",
    latin: "M. Pectoralis Minor",
    turkish: "Küçük Göğüs Kası",
    english: "Pectoralis Minor",
    region: "Göğüs",
    mnemonic: "Major'un altındaki yardımcı solunum kası",
    nursingNote: "Solunum sıkıntısında yardımcı solunum kası olarak kasıldığı gözlemlenebilir.",
    clinicalImportance: "Torasik outlet sendromunda pleksus brakialisi sıkıştırabilir."
  },
  {
    id: "serratus-anterior",
    latin: "M. Serratus Anterior",
    turkish: "Ön Dişli Kas",
    english: "Serratus Anterior",
    region: "Göğüs (Lateral)",
    mnemonic: "Boksör kası (Yumruk atarken kürek kemiğini öne çeker)",
    nursingNote: "Koltuk altı lenf bezi diseksiyonu sonrası fonksiyonu değerlendirilir.",
    clinicalImportance: "N. thoracicus longus hasarında 'kanat skapula' (winged scapula) oluşur."
  },
  {
    id: "intercostales-externi",
    latin: "Mm. Intercostales Externi",
    turkish: "Dış Kaburgalar Arası Kaslar",
    english: "External Intercostals",
    region: "Göğüs",
    mnemonic: "Externi = E = Elevasyon (İnspirasyon kasları)",
    nursingNote: "Solunum derinliği ve eforunu değerlendirmede gözlemlenir.",
    clinicalImportance: "KOAH'ta solunum iş yükü artar, hipertrofi görülebilir."
  },
  {
    id: "intercostales-interni",
    latin: "Mm. Intercostales Interni",
    turkish: "İç Kaburgalar Arası Kaslar",
    english: "Internal Intercostals",
    region: "Göğüs",
    mnemonic: "Interni = I = İndirme (Zorlu ekspirasyon kasları)",
    nursingNote: "Öksürme mekanizması ve sekresyon atılımında etkilidir.",
    clinicalImportance: "Zorlu solunum durumlarında (astım atağı) aktifleşir."
  },
  {
    id: "diaphragma",
    latin: "Diaphragma",
    turkish: "Diyafram",
    english: "Diaphragm",
    region: "Göğüs/Karın Sınırı",
    mnemonic: "Temel solunum kası, C3-C4-C5 (Phrenic nerve) seni hayatta tutar",
    nursingNote: "Hıçkırık, diyaframın istemsiz kasılmasıdır; derin solunum egzersizlerinde hedeftir.",
    clinicalImportance: "Paralizisinde ciddi solunum yetmezliği gelişir; fıtıklaşma (hiatal herni) görülebilir."
  },
  {
    id: "rectus-abdominis",
    latin: "M. Rectus Abdominis",
    turkish: "Dik Karın Kası (Baklava Kası)",
    english: "Rectus Abdominis",
    region: "Karın",
    mnemonic: "Six-pack (Gövdeyi öne eğer)",
    nursingNote: "Karın muayenesinde (defans, rebound) tonusu değerlendirilir.",
    clinicalImportance: "Gebelikte veya obezitede diastazis rekti (ayrılma) oluşabilir."
  },
  {
    id: "obliquus-externus-abdominis",
    latin: "M. Obliquus Externus Abdominis",
    turkish: "Dış Çapraz Karın Kası",
    english: "External Abdominal Oblique",
    region: "Karın",
    mnemonic: "Eller cepte (Lif yönü aşağı ve içe)",
    nursingNote: "Abdominal cerrahilerde insizyon planlamasında önemlidir.",
    clinicalImportance: "İnguinal kanalın ön duvarını oluşturur, fıtık mekanizmasında rol oynar."
  },
  {
    id: "obliquus-internus-abdominis",
    latin: "M. Obliquus Internus Abdominis",
    turkish: "İç Çapraz Karın Kası",
    english: "Internal Abdominal Oblique",
    region: "Karın",
    mnemonic: "Geniş iç korse (Lif yönü yukarı ve içe)",
    nursingNote: "Karın içi basıncı artıran (öksürme, defekasyon) durumlarda çalışır.",
    clinicalImportance: "Apendektomi insizyonlarında kas lifleri yönünde ayrılır (Gridiron insizyonu)."
  },
  {
    id: "transversus-abdominis",
    latin: "M. Transversus Abdominis",
    turkish: "Enine Karın Kası",
    english: "Transverse Abdominal",
    region: "Karın",
    mnemonic: "Doğal korse (En derin karın kası)",
    nursingNote: "Core stabilitesi ve bel ağrısı yönetiminde önemlidir.",
    clinicalImportance: "Karın içi basıncını korur, zayıflığı fıtık riskini artırır."
  },

  // Sırt Kasları (Back Muscles)
  {
    id: "trapezius",
    latin: "M. Trapezius",
    turkish: "Yamuk Kas (Trapez)",
    english: "Trapezius",
    region: "Sırt/Boyun",
    mnemonic: "Omuz silken kas",
    nursingNote: "Boyun ve omuz ağrısı şikayetlerinde spazm ve tetik noktalar aranır.",
    clinicalImportance: "Aksesuar sinir (N. accessorius) hasarında omuz düşüklüğü görülür."
  },
  {
    id: "latissimus-dorsi",
    latin: "M. Latissimus Dorsi",
    turkish: "Geniş Sırt Kası",
    english: "Latissimus Dorsi",
    region: "Sırt",
    mnemonic: "Yüzücü/Barfiks kası (Kola ekstansiyon, adduksiyon, iç rotasyon)",
    nursingNote: "Koltuk altı koltuk değneği kullanımında güçlendirilen ana kastır.",
    clinicalImportance: "Meme rekonstrüksiyon cerrahisinde flep olarak kullanılabilir."
  },
  {
    id: "rhomboideus-major",
    latin: "M. Rhomboideus Major",
    turkish: "Büyük Eşkenar Dörtgen Kas",
    english: "Rhomboid Major",
    region: "Sırt",
    mnemonic: "Kürek kemiklerini birbirine yaklaştırır (Dik duruş)",
    nursingNote: "Kötü postürden (kamburluk) kaynaklanan sırt ağrılarında zayıf olabilir.",
    clinicalImportance: "Skapuler diskinezi ve duruş bozukluklarında değerlendirilir."
  },
  {
    id: "erector-spinae",
    latin: "M. Erector Spinae",
    turkish: "Omurga Dikleştirici Kaslar",
    english: "Erector Spinae",
    region: "Sırt/Bel",
    mnemonic: "Erect = Dik tutan (Postür koruyucu kas grubu)",
    nursingNote: "Hasta transferlerinde hemşirenin bu kasları koruması (ergonomi) esastır.",
    clinicalImportance: "Mekanik bel ağrılarının ve spazmlarının en sık kaynağıdır."
  },

  // Omuz ve Üst Ekstremite (Shoulder and Upper Extremity)
  {
    id: "deltoideus",
    latin: "M. Deltoideus",
    turkish: "Omuz Kası (Deltoid)",
    english: "Deltoid",
    region: "Omuz",
    mnemonic: "Delta (Üçgen) şeklinde",
    nursingNote: "İM (İntramüsküler) enjeksiyon için çok sık kullanılan bölgedir (2-3 ml max).",
    clinicalImportance: "Aksiller sinir zedelenmesinde (omuz çıkığı vb.) omuzda abdüksiyon kaybı olur."
  },
  {
    id: "supraspinatus",
    latin: "M. Supraspinatus",
    turkish: "Diken Üstü Kas",
    english: "Supraspinatus",
    region: "Omuz (Rotator Cuff)",
    mnemonic: "İlk 15 derece abdüksiyonu başlatır",
    nursingNote: "Omuz ağrısı ve hareket kısıtlılığında (özellikle kolu kaldırırken) sorgulanır.",
    clinicalImportance: "Rotator cuff yırtıklarının en sık görüldüğü kastır."
  },
  {
    id: "infraspinatus",
    latin: "M. Infraspinatus",
    turkish: "Diken Altı Kas",
    english: "Infraspinatus",
    region: "Omuz (Rotator Cuff)",
    mnemonic: "Dış rotasyonun ana kası",
    nursingNote: "Omuz stabilitesinde önemli rol oynar.",
    clinicalImportance: "Omuz sıkışma (impingement) sendromlarında etkilenir."
  },
  {
    id: "teres-minor",
    latin: "M. Teres Minor",
    turkish: "Küçük Yuvarlak Kas",
    english: "Teres Minor",
    region: "Omuz (Rotator Cuff)",
    mnemonic: "Infraspinatus'un küçük kardeşi (Dış rotasyon)",
    nursingNote: "Aksiller sinir ile inerve olur, omuz dislokasyonlarında risk altındadır.",
    clinicalImportance: "Rotator cuff yaralanmalarında kompensatuar olarak aşırı çalışabilir."
  },
  {
    id: "subscapularis",
    latin: "M. Subscapularis",
    turkish: "Kürek Altı Kas",
    english: "Subscapularis",
    region: "Omuz (Rotator Cuff)",
    mnemonic: "Sub = Alt (Skapulanın ön yüzünde, İç rotasyon)",
    nursingNote: "Hastanın kolunu arkasına götürme zorluğu varsa hasarından şüphelenilir.",
    clinicalImportance: "Lift-off testinde zayıflığı veya yırtığı değerlendirilir."
  },
  {
    id: "biceps-brachii",
    latin: "M. Biceps Brachii",
    turkish: "İki Başlı Kol Kası (Pazı)",
    english: "Biceps",
    region: "Ön Kol (Üst)",
    mnemonic: "Bi = 2 başlı, supinasyon ve fleksiyon yapar.",
    nursingNote: "Tansiyon ölçümünde steteskop brakiyal arter üzerine, bu kasın tendonu medialine yerleştirilir.",
    clinicalImportance: "Uzun başının tendon rüptürü 'Temel Reis (Popeye) belirtisi' oluşturur."
  },
  {
    id: "brachialis",
    latin: "M. Brachialis",
    turkish: "Kol Kası",
    english: "Brachialis",
    region: "Ön Kol (Üst)",
    mnemonic: "Dirsek fleksiyonunun beygiri (En güçlü fleksör)",
    nursingNote: "Biceps'in altında yer alır, her pozisyonda dirseği büker.",
    clinicalImportance: "Dirsek kırıklarında miyozitis ossifikans riski taşıyabilir."
  },
  {
    id: "triceps-brachii",
    latin: "M. Triceps Brachii",
    turkish: "Üç Başlı Kol Kası (Arka Kol)",
    english: "Triceps",
    region: "Arka Kol",
    mnemonic: "Tri = 3 başlı, dirseğin tek ekstansörü",
    nursingNote: "Koltuk değneği kullanımında ve yataktan kalkmada vücudu itmek için çok önemlidir.",
    clinicalImportance: "Radial sinir hasarında (humerus şaft kırığı) dirsek ekstansiyonu yapılamaz."
  },
  {
    id: "brachioradialis",
    latin: "M. Brachioradialis",
    turkish: "Kol-Radyus Kası",
    english: "Brachioradialis",
    region: "Ön Kol",
    mnemonic: "Çekiçleme kası (Yarı pronasyonda fleksiyon)",
    nursingNote: "Nörolojik muayenede brachioradialis refleksi (C5-C6) bakılır.",
    clinicalImportance: "Radial sinirle uyarılmasına rağmen dirsek fleksörüdür (istisna)."
  },
  {
    id: "pronator-teres",
    latin: "M. Pronator Teres",
    turkish: "Yuvarlak İçe Döndürücü Kas",
    english: "Pronator Teres",
    region: "Ön Kol",
    mnemonic: "Elin içini yere baktırır (Pronasyon)",
    nursingNote: "Damar yolu açarken pronasyon/supinasyon hareketi ile venlerin dolgunluğu ayarlanabilir.",
    clinicalImportance: "Median siniri sıkıştırarak Pronator Teres Sendromu'na yol açabilir."
  },
  {
    id: "flexor-carpi-radialis",
    latin: "M. Flexor Carpi Radialis",
    turkish: "Radyal El Bileği Bükücüsü",
    english: "Flexor Carpi Radialis",
    region: "Ön Kol",
    mnemonic: "Bileği büker ve dışa saptırır",
    nursingNote: "Radial nabız, bu kasın tendonu ile radius kemiği arasından alınır.",
    clinicalImportance: "El bileği kesilerinde tendon yaralanması açısından kontrol edilir."
  },
  {
    id: "palmaris-longus",
    latin: "M. Palmaris Longus",
    turkish: "Uzun Avuç İçi Kası",
    english: "Palmaris Longus",
    region: "Ön Kol",
    mnemonic: "Toplumun %15'inde yoktur, fonksiyonel eksiklik yaratmaz",
    nursingNote: "Bilek fleksiyonu ve başparmak-serçe parmak birleştirildiğinde tendonu belirginleşir.",
    clinicalImportance: "Tendon greftlemesi (örn. Tommy John cerrahisi) için sıkça kullanılır."
  },

  // Kalça ve Alt Ekstremite (Pelvis and Lower Extremity)
  {
    id: "gluteus-maximus",
    latin: "M. Gluteus Maximus",
    turkish: "Büyük Kalça Kası",
    english: "Gluteus Maximus",
    region: "Kalça",
    mnemonic: "En büyük kas, merdiven çıkma/çömelmeden kalkma kası",
    nursingNote: "Ventrogluteal bölge tercih edilse de, İM enjeksiyon için dorsogluteal bölge olarak bilinir (siyatik sinir riskine dikkat!).",
    clinicalImportance: "Felcinde ayağa kalkma, zıplama ve merdiven çıkma çok zorlaşır."
  },
  {
    id: "gluteus-medius",
    latin: "M. Gluteus Medius",
    turkish: "Orta Kalça Kası",
    english: "Gluteus Medius",
    region: "Kalça",
    mnemonic: "Leğen kemiğini dengede tutar, abduksiyon yapar",
    nursingNote: "İM enjeksiyon için en güvenli bölgedir (Ventrogluteal bölge).",
    clinicalImportance: "Zayıflığında veya üst gluteal sinir hasarında Trendelenburg yürüyüşü (ördek yürüyüşü) görülür."
  },
  {
    id: "gluteus-minimus",
    latin: "M. Gluteus Minimus",
    turkish: "Küçük Kalça Kası",
    english: "Gluteus Minimus",
    region: "Kalça",
    mnemonic: "Medius'un yardımcısı",
    nursingNote: "Ventrogluteal enjeksiyonda iğnenin ulaştığı derin kastır.",
    clinicalImportance: "Kalça abduksiyonu ve iç rotasyonuna yardımcı olur."
  },
  {
    id: "piriformis",
    latin: "M. Piriformis",
    turkish: "Armut Cisimli Kas",
    english: "Piriformis",
    region: "Kalça (Derin)",
    mnemonic: "Siyatik sinirin komşusu",
    nursingNote: "Kalçadan bacağa yayılan ağrılarda, fıtık dışı sebeplerden biri olarak akılda tutulmalıdır.",
    clinicalImportance: "Spazmı veya hipertrofisi siyatik siniri sıkıştırabilir (Piriformis Sendromu)."
  },
  {
    id: "iliopsoas",
    latin: "M. Iliopsoas (Psoas Major + Iliacus)",
    turkish: "Bel-Böğür Kası",
    english: "Iliopsoas",
    region: "Kalça/Bel",
    mnemonic: "En güçlü kalça fleksörü (Bacağı karına çeker)",
    nursingNote: "Uzun süre yatak istirahatinde veya oturarak çalışanlarda kısalabilir, bel ağrısı yapar.",
    clinicalImportance: "Apendisitte veya retroperitoneal apselerde gerilmesiyle ağrı oluşur (Psoas bulgusu)."
  },
  {
    id: "sartorius",
    latin: "M. Sartorius",
    turkish: "Terzi Kası",
    english: "Sartorius",
    region: "Uyluk (Ön)",
    mnemonic: "Vücudun en uzun kası, bacak bacak üstüne atma hareketi yapar",
    nursingNote: "Femoral arter palpasyonu için femoral üçgenin lateral sınırını oluşturur.",
    clinicalImportance: "Pes anserinus (kaz ayağı) bursitinde etkilenen üç kastan biridir."
  },
  {
    id: "quadriceps-femoris",
    latin: "M. Quadriceps Femoris",
    turkish: "Dört Başlı Uyluk Kası",
    english: "Quadriceps",
    region: "Uyluk (Ön)",
    mnemonic: "Quad = 4 başlı (Dizin tek ekstansörü)",
    nursingNote: "Bebeklerde ve çocuklarda İM enjeksiyon için (özellikle vastus lateralis kısmı) en güvenli yerdir.",
    clinicalImportance: "Patellar refleksin (L3-L4) eferent koludur; zayıflığında merdiven inmek zorlaşır."
  },
  {
    id: "rectus-femoris",
    latin: "M. Rectus Femoris",
    turkish: "Dik Uyluk Kası",
    english: "Rectus Femoris",
    region: "Uyluk (Ön)",
    mnemonic: "Quadriceps'in kalçayı da büken tek başı",
    nursingNote: "Topa vurma hareketi kasıdır, sporcularda kopmaları sık görülür.",
    clinicalImportance: "İki eklemi (kalça ve diz) kat eden bir kas olduğu için gerginliğe yatkındır."
  },
  {
    id: "vastus-lateralis",
    latin: "M. Vastus Lateralis",
    turkish: "Dış Geniş Kas",
    english: "Vastus Lateralis",
    region: "Uyluk (Ön-Dış)",
    mnemonic: "Dış uyluk",
    nursingNote: "Özellikle <3 yaş çocuklarda aşı ve İM enjeksiyonların birincil bölgesidir.",
    clinicalImportance: "Enjeksiyon sırasında siyatik sinir veya büyük damar riski yoktur."
  },
  {
    id: "biceps-femoris",
    latin: "M. Biceps Femoris",
    turkish: "İki Başlı Uyluk Kası",
    english: "Biceps Femoris (Hamstring)",
    region: "Uyluk (Arka)",
    mnemonic: "Arka uyluğun dış kısmı (Dizi büker, kalçayı uzatır)",
    nursingNote: "Yatağa bağımlı hastalarda kontraktür gelişmemesi için ROM egzersizleri önemlidir.",
    clinicalImportance: "Hamstring yırtıkları sprintera ve futbolcularda çok sıktır."
  },
  {
    id: "semitendinosus",
    latin: "M. Semitendinosus",
    turkish: "Yarı Kirişli Kas",
    english: "Semitendinosus (Hamstring)",
    region: "Uyluk (Arka-İç)",
    mnemonic: "Hamstringin iç grubu (Yarısı tendondur)",
    nursingNote: "Popliteal nabız alınırken medial sınırı oluşturur.",
    clinicalImportance: "Tendon kısmı ACL (Ön Çapraz Bağ) rekonstrüksiyon cerrahisinde greft olarak sıkça kullanılır."
  },
  {
    id: "semimembranosus",
    latin: "M. Semimembranosus",
    turkish: "Yarı Zarsı Kas",
    english: "Semimembranosus (Hamstring)",
    region: "Uyluk (Arka-İç)",
    mnemonic: "Hamstringin en derindeki iç kası",
    nursingNote: "Diz arkası (popliteal bölge) değerlendirmesinde Baker kisti komşuluğuna dikkat edilir.",
    clinicalImportance: "Medial menisküse tutunması nedeniyle menisküs yırtıklarında da ağrı yapabilir."
  },
  {
    id: "tibialis-anterior",
    latin: "M. Tibialis Anterior",
    turkish: "Ön Kaval Kası",
    english: "Tibialis Anterior",
    region: "Bacak (Ön)",
    mnemonic: "Ayağı yukarı kaldırır (Dorsifleksiyon)",
    nursingNote: "Yürüyüş sırasında ayağın yere takılmasını engeller, düşük ayak kontrolü yapılır.",
    clinicalImportance: "Peroneal sinir hasarında felç olur ve 'Düşük Ayak' (Foot drop) sendromu gelişir."
  },
  {
    id: "gastrocnemius",
    latin: "M. Gastrocnemius",
    turkish: "Baldır Kası (İkiz Kas)",
    english: "Gastrocnemius",
    region: "Bacak (Arka)",
    mnemonic: "Mide/Karın gibi şişkin baldır kası (Zıplama kası)",
    nursingNote: "Derin ven trombozu (DVT) şüphesinde baldır ağrısı (Homan belirtisi) kontrol edilir, masaj yapılmamalıdır.",
    clinicalImportance: "Aşil tendonu rüptürlerinde fonksiyonunu yitirir, parmak ucunda yükselme yapılamaz."
  },
  {
    id: "soleus",
    latin: "M. Soleus",
    turkish: "Dil Balığı Kası",
    english: "Soleus",
    region: "Bacak (Arka)",
    mnemonic: "Gastrocnemius'un altındaki yorulmak bilmeyen yürüyüş kası",
    nursingNote: "Baldırdaki venöz kanı kalbe pompalayan 'ikinci kalp' veya periferik kas pompasıdır.",
    clinicalImportance: "DVT profilaksisinde yatak içi bacak egzersizlerinin (plantar fleksiyon) ana hedefidir."
  },
  {
    id: "peroneus-longus",
    latin: "M. Peroneus (Fibularis) Longus",
    turkish: "Uzun Baldır Kası",
    english: "Fibularis Longus",
    region: "Bacak (Dış)",
    mnemonic: "Ayağı dışa çevirir (Eversiyon)",
    nursingNote: "Ayak bileği burkulmalarında (inversiyon travması) gerilir ve zorlanır.",
    clinicalImportance: "Düz tabanlığın önlenmesinde (arkı destekleyerek) rol oynar."
  }
];