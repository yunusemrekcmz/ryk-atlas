import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Compass, Star, FileText, Bot, Share2, 
  Search, Trophy, RotateCcw, ArrowUp, User, GraduationCap 
} from 'lucide-react';

// ============================================================
// KEMİKLER (İSKELET SİSTEMİ) - 206 Kemik
// ============================================================
const bonesData = [
  // Kafatası ve Yüz (Cranium & Facium)
  {
    id: 'frontal',
    latin: 'Os Frontale',
    turkish: 'Alın Kemiği',
    english: 'Frontal Bone',
    region: 'Kafatası',
    mnemonic: 'Frene basınca öne (Alın) vurursun.',
    nursingNote: 'Bebeklerde ön fontanelin (bıngıldak) kapanmasını takip ederiz (12-18 ay). Çökükse dehidratasyon, bombeyse KİBAS bulgusudur.',
    clinicalImportance: 'Travmalarda frontal lob hasarı, orbita üst duvarı kırıkları.'
  },
  {
    id: 'parietal_r',
    latin: 'Os Parietale Dextrum',
    turkish: 'Sağ Yan Kafa Kemiği',
    english: 'Right Parietal Bone',
    region: 'Kafatası',
    mnemonic: 'Parietal = Duvar (Kafanın yan duvarları).',
    nursingNote: 'Yenidoğanda sefal hematom genelde parietal kemik üzerindedir ve sütür hatlarını geçmez.',
    clinicalImportance: 'Kafatası kırıklarının en sık görüldüğü bölge. Epidural kanama riski.'
  },
  {
    id: 'parietal_l',
    latin: 'Os Parietale Sinistrum',
    turkish: 'Sol Yan Kafa Kemiği',
    english: 'Left Parietal Bone',
    region: 'Kafatası',
    mnemonic: 'Parietal = Duvar (Kafanın yan duvarları).',
    nursingNote: 'Travma sonrası bilinç takibi çok önemlidir.',
    clinicalImportance: 'Lineer veya çökme kırıkları, menenjiyal arter yırtıkları.'
  },
  {
    id: 'temporal_r',
    latin: 'Os Temporale Dextrum',
    turkish: 'Sağ Şakak Kemiği',
    english: 'Right Temporal Bone',
    region: 'Kafatası',
    mnemonic: 'Tempo tutarken kulağının yanını dinlersin.',
    nursingNote: 'Mastoidit gelişimi açısından kulak arkası şişlik ve kızarıklık gözlemlenmelidir.',
    clinicalImportance: 'İşitme ve denge organlarını barındırır. Kırıklarında BOS otoresi (kulaktan BOS gelmesi) görülebilir.'
  },
  {
    id: 'temporal_l',
    latin: 'Os Temporale Sinistrum',
    turkish: 'Sol Şakak Kemiği',
    english: 'Left Temporal Bone',
    region: 'Kafatası',
    mnemonic: 'Tempo tutarken kulağının yanını dinlersin.',
    nursingNote: 'Travmalarda Battle bulgusu (mastoid çıkıntı üzerinde ekimoz) açısından değerlendirilmelidir.',
    clinicalImportance: 'Fasiyal sinir felci (Bell paralizisi) geçiş yolu.'
  },
  {
    id: 'occipital',
    latin: 'Os Occipitale',
    turkish: 'Art Kafa Kemiği',
    english: 'Occipital Bone',
    region: 'Kafatası',
    mnemonic: 'Ok (Occ) arkadan saplandı.',
    nursingNote: 'Arka fontanel (bıngıldak) erken kapanır (2-3 ay). Foramen magnum fıtıklaşması acil durumdur.',
    clinicalImportance: 'Foramen magnum (omuriliğin çıktığı delik) buradadır. Kafa tabanı kırıklarında hayati tehlike yüksektir.'
  },
  {
    id: 'sphenoid',
    latin: 'Os Sphenoidale',
    turkish: 'Temel (Kama) Kemiği',
    english: 'Sphenoid Bone',
    region: 'Kafatası',
    mnemonic: 'Sfenks gibi kafatasının tam ortasında oturur, yarasaya benzer.',
    nursingNote: 'Sella turcica (Türk eyeri) buradadır, hipofiz ameliyatları burun içinden (transsfenoidal) yapılır.',
    clinicalImportance: 'Hipofiz bezi tümörleri görme sinirine baskı yapabilir (bitemporal hemianopsi).'
  },
  {
    id: 'ethmoid',
    latin: 'Os Ethmoidale',
    turkish: 'Kalbur Kemiği',
    english: 'Ethmoid Bone',
    region: 'Kafatası',
    mnemonic: 'Eti süzmek için kalbur kullanırsın.',
    nursingNote: 'Kırıklarında burundan BOS (BOS rinoresi) gelebilir, hastanın sümkürmesi engellenmelidir.',
    clinicalImportance: 'Koku sinirinin (N. olfactorius) geçiş yeridir. Travmalarda anozmi (koku kaybı) gelişebilir.'
  },
  {
    id: 'maxilla_r',
    latin: 'Maxilla Dextra',
    turkish: 'Sağ Üst Çene Kemiği',
    english: 'Right Maxilla',
    region: 'Yüz',
    mnemonic: 'Maksimum diş, üst çenede.',
    nursingNote: 'Le Fort kırıklarında (yüz kırıkları) hava yolu açıklığı birincil önceliktir.',
    clinicalImportance: 'Maksiller sinüzit sıktır, diş ağrısıyla karışabilir.'
  },
  {
    id: 'maxilla_l',
    latin: 'Maxilla Sinistra',
    turkish: 'Sol Üst Çene Kemiği',
    english: 'Left Maxilla',
    region: 'Yüz',
    mnemonic: 'Maksimum diş, üst çenede.',
    nursingNote: 'Trafik kazaları sonrası aspirasyon riskine karşı pozisyon (dik/yan) verilir.',
    clinicalImportance: 'Yarık damak/dudak deformitelerinin temel yapısıdır.'
  },
  {
    id: 'zygomatic_r',
    latin: 'Os Zygomaticum Dextrum',
    turkish: 'Sağ Elmacık Kemiği',
    english: 'Right Zygomatic Bone',
    region: 'Yüz',
    mnemonic: 'Zengin elması gibi parlak durur.',
    nursingNote: 'Yüz travmalarında şişlik (ödem) hızla gelişir, soğuk uygulama (buz) önemlidir.',
    clinicalImportance: 'Tripod kırıkları (zigoma kırıkları) estetik bozukluk ve çiğneme zorluğu yaratır.'
  },
  {
    id: 'zygomatic_l',
    latin: 'Os Zygomaticum Sinistrum',
    turkish: 'Sol Elmacık Kemiği',
    english: 'Left Zygomatic Bone',
    region: 'Yüz',
    mnemonic: 'Zengin elması gibi parlak durur.',
    nursingNote: 'Görme kontrolü yapılmalıdır, göz kasları sıkışabilir.',
    clinicalImportance: 'Göz çukurunun (orbita) alt-dış duvarını oluşturur.'
  },
  {
    id: 'nasal_r',
    latin: 'Os Nasale Dextrum',
    turkish: 'Sağ Burun Kemiği',
    english: 'Right Nasal Bone',
    region: 'Yüz',
    mnemonic: 'Nasal = Burun (Nasal spreyden akılda kalsın).',
    nursingNote: 'Burun kırıklarında epistaksis (burun kanaması) durdurulmalı, septum hematomu kontrol edilmelidir.',
    clinicalImportance: 'Yüzde en sık kırılan kemiktir.'
  },
  {
    id: 'nasal_l',
    latin: 'Os Nasale Sinistrum',
    turkish: 'Sol Burun Kemiği',
    english: 'Left Nasal Bone',
    region: 'Yüz',
    mnemonic: 'Nasal = Burun.',
    nursingNote: 'Buz uygulaması ve başın dik tutulması ödemi azaltır.',
    clinicalImportance: 'Septum deviasyonu nefes almayı güçleştirebilir.'
  },
  {
    id: 'lacrimal_r',
    latin: 'Os Lacrimale Dextrum',
    turkish: 'Sağ Gözyaşı Kemiği',
    english: 'Right Lacrimal Bone',
    region: 'Yüz',
    mnemonic: 'Lacrymal (Ağlayan) -> Gözyaşı kanalı burada.',
    nursingNote: 'Yenidoğanlarda gözyaşı kanalı tıkanıklığında masaj eğitimi verilir.',
    clinicalImportance: 'Kafatasının en küçük kemiğidir. Dakriyosistit (gözyaşı kesesi iltihabı) görülebilir.'
  },
  {
    id: 'lacrimal_l',
    latin: 'Os Lacrimale Sinistrum',
    turkish: 'Sol Gözyaşı Kemiği',
    english: 'Left Lacrimal Bone',
    region: 'Yüz',
    mnemonic: 'Lacrymal (Ağlayan).',
    nursingNote: 'Orbita enfeksiyonları beyne yayılabileceğinden tehlikelidir.',
    clinicalImportance: 'Gözyaşının burun boşluğuna akmasını sağlayan kanalı barındırır.'
  },
  {
    id: 'palatine_r',
    latin: 'Os Palatinum Dextrum',
    turkish: 'Sağ Damak Kemiği',
    english: 'Right Palatine Bone',
    region: 'Yüz',
    mnemonic: 'Palas pandıras yutarken damağa çarpar.',
    nursingNote: 'Yarık damak bebeklerinde beslenme özel biberonlarla (Haberman) yapılır.',
    clinicalImportance: 'Sert damağın arka kısmını oluşturur.'
  },
  {
    id: 'palatine_l',
    latin: 'Os Palatinum Sinistrum',
    turkish: 'Sol Damak Kemiği',
    english: 'Left Palatine Bone',
    region: 'Yüz',
    mnemonic: 'Palas pandıras yutarken damağa çarpar.',
    nursingNote: 'Aspirasyon pnömonisi riski açısından beslenme sonrası takip önemlidir.',
    clinicalImportance: 'Burun boşluğu ve ağız boşluğunu ayırır.'
  },
  {
    id: 'vomer',
    latin: 'Vomer',
    turkish: 'Sapan Kemiği',
    english: 'Vomer',
    region: 'Yüz',
    mnemonic: 'Vomer -> Volvo sabanı (Burnun ortasını yarar).',
    nursingNote: 'Septoplasti ameliyatı sonrası tampon bakımı ve kanama takibi yapılır.',
    clinicalImportance: 'Burun septumunun alt-arka kısmını oluşturur.'
  },
  {
    id: 'inferior_nasal_concha_r',
    latin: 'Concha Nasalis Inferior Dextra',
    turkish: 'Sağ Alt Burun Boynuzu (Konka)',
    english: 'Right Inferior Nasal Concha',
    region: 'Yüz',
    mnemonic: 'Konkalar havayı klima gibi ısıtır/nemlendirir.',
    nursingNote: 'Alerjik durumlarda hipertrofiye (şişmeye) uğrar, solunumu tıkar.',
    clinicalImportance: 'Rinitlerde en çok etkilenen yapıdır, konka radyofrekans ablasyonu uygulanabilir.'
  },
  {
    id: 'inferior_nasal_concha_l',
    latin: 'Concha Nasalis Inferior Sinistra',
    turkish: 'Sol Alt Burun Boynuzu (Konka)',
    english: 'Left Inferior Nasal Concha',
    region: 'Yüz',
    mnemonic: 'Konkalar havayı klima gibi ısıtır.',
    nursingNote: 'Oksijen tedavisi verilirken nazal kanül kullanımında kurumayı önlemek için oksijen nemlendirilmelidir.',
    clinicalImportance: 'Kendi başına bağımsız bir kemiktir (diğer konkalar ethmoid kemiğin parçasıdır).'
  },
  {
    id: 'mandible',
    latin: 'Mandibula',
    turkish: 'Alt Çene Kemiği',
    english: 'Mandible',
    region: 'Yüz',
    mnemonic: 'Man (Adam) çenesini sıkar.',
    nursingNote: 'Mandibula kırıklarında çene tellenirse (fiksasyon), yanında her zaman tel kesici makas bulundurulmalıdır (kusma/boğulma riski).',
    clinicalImportance: 'Kafatasındaki tek hareketli kemiktir (işitme kemikçikleri hariç). Temporomandibular eklem (TME) disfonksiyonu sıktır.'
  },
  // İşitme
  {
    id: 'malleus_r',
    latin: 'Malleus Dexter',
    turkish: 'Sağ Çekiç Kemiği',
    english: 'Right Malleus',
    region: 'İşitme',
    mnemonic: 'Malleus = Mallet = Çekiç.',
    nursingNote: 'Orta kulak enfeksiyonlarında (otitis media) zar delinmesi riskine karşı takip.',
    clinicalImportance: 'Kulak zarına yapışıktır, sesi iletir.'
  },
  {
    id: 'malleus_l',
    latin: 'Malleus Sinister',
    turkish: 'Sol Çekiç Kemiği',
    english: 'Left Malleus',
    region: 'İşitme',
    mnemonic: 'Malleus = Mallet = Çekiç.',
    nursingNote: 'Damla uygulamalarında timpanik zarın bütünlüğü önemlidir.',
    clinicalImportance: 'Orta kulaktaki en büyük kemikçiktir.'
  },
  {
    id: 'incus_r',
    latin: 'Incus Dextra',
    turkish: 'Sağ Örs Kemiği',
    english: 'Right Incus',
    region: 'İşitme',
    mnemonic: 'Incus = Ink (Mürekkep) örsün üstüne döküldü.',
    nursingNote: 'Travmalarda işitme kemikçik zinciri kopabilir (iletim tipi işitme kaybı).',
    clinicalImportance: 'Malleus ile stapes arasındadır.'
  },
  {
    id: 'incus_l',
    latin: 'Incus Sinistra',
    turkish: 'Sol Örs Kemiği',
    english: 'Left Incus',
    region: 'İşitme',
    mnemonic: 'Örs = Çekicin vurduğu yer.',
    nursingNote: 'Yüksek ses maruziyetinden korunma eğitimi verilir.',
    clinicalImportance: 'Ses titreşimlerini stapes\'e aktarır.'
  },
  {
    id: 'stapes_r',
    latin: 'Stapes Dexter',
    turkish: 'Sağ Üzengi Kemiği',
    english: 'Right Stapes',
    region: 'İşitme',
    mnemonic: 'Stapes = Step (Adım) atıp üzengiye basarsın.',
    nursingNote: 'Otoskleroz (kireçlenme) hastalarında ameliyat (stapedektomi) sonrası baş dönmesi takibi yapılır.',
    clinicalImportance: 'Vücuttaki en küçük kemiktir.'
  },
  {
    id: 'stapes_l',
    latin: 'Stapes Sinister',
    turkish: 'Sol Üzengi Kemiği',
    english: 'Left Stapes',
    region: 'İşitme',
    mnemonic: 'At üzengisi şeklinde.',
    nursingNote: 'Ameliyat sonrası ıkınma, hapşırma yasaklanır (basınç artışını önlemek için).',
    clinicalImportance: 'Oval pencereye titreşimi ileterek iç kulağa sesi ulaştırır.'
  },
  {
    id: 'hyoid',
    latin: 'Os Hyoideum',
    turkish: 'Dil Kemiği',
    english: 'Hyoid Bone',
    region: 'Boyun',
    mnemonic: 'Havada (Hyoid) asılı duran tek kemik.',
    nursingNote: 'Boğulma (asılma) vakalarında kırık olup olmadığı adli tıp açısından önemlidir.',
    clinicalImportance: 'Başka hiçbir kemikle eklem yapmayan tek kemiktir. Yutkunma ve dil kaslarına tutunur.'
  },
  // Omurga (Cervical)
  {
    id: 'cervical_1',
    latin: 'Atlas (C1)',
    turkish: '1. Boyun Omuru (Atlas)',
    english: 'First Cervical Vertebra (Atlas)',
    region: 'Omurga (Cervical)',
    mnemonic: 'Atlas dünyayı (kafayı) omuzlarında taşır.',
    nursingNote: 'Travmalarda boyunluk (servikal yaka) takılmadan hasta hareket ettirilmez.',
    clinicalImportance: 'Gövdesi (corpus) yoktur. Başın "Evet" (fleksiyon-ekstansiyon) hareketini sağlar. Jefferson kırığı burada olur.'
  },
  {
    id: 'cervical_2',
    latin: 'Axis (C2)',
    turkish: '2. Boyun Omuru (Aksis)',
    english: 'Second Cervical Vertebra (Axis)',
    region: 'Omurga (Cervical)',
    mnemonic: 'Aks etrafında dönen tekerlek ("Hayır" hareketi).',
    nursingNote: 'Asılma (Hangman) kırığı burada olur, solunum merkezi etkilenebileceği için anında entübasyon hazırlığı yapılmalı.',
    clinicalImportance: 'Dens axis (diş şeklindeki çıkıntı) sayesinde başın sağa-sola dönmesini ("Hayır" hareketi) sağlar.'
  },
  {
    id: 'cervical_3',
    latin: 'Vertebra Cervicalis III (C3)',
    turkish: '3. Boyun Omuru',
    english: 'Third Cervical Vertebra',
    region: 'Omurga (Cervical)',
    mnemonic: 'C3, 4, 5 keeps the diaphragm alive (Diyaframı canlı tutar).',
    nursingNote: 'C3-C5 zedelenmelerinde diyafram felci olacağından solunum desteği (ventilatör) şarttır.',
    clinicalImportance: 'N. Phrenicus (diyafram siniri) köklerini verir.'
  },
  {
    id: 'cervical_4',
    latin: 'Vertebra Cervicalis IV (C4)',
    turkish: '4. Boyun Omuru',
    english: 'Fourth Cervical Vertebra',
    region: 'Omurga (Cervical)',
    mnemonic: 'C3, 4, 5 keeps the diaphragm alive.',
    nursingNote: 'Boyun travmalı hastada solunum hızı ve derinliği sık izlenir.',
    clinicalImportance: 'Tetrapleji (dört ekstremite felci) seviyesidir.'
  },
  {
    id: 'cervical_5',
    latin: 'Vertebra Cervicalis V (C5)',
    turkish: '5. Boyun Omuru',
    english: 'Fifth Cervical Vertebra',
    region: 'Omurga (Cervical)',
    mnemonic: 'Beş parmağınla boynunu tut.',
    nursingNote: 'Omuz hareketlerinin korunup korunmadığı (Deltoid kası) motor muayenede bakılır.',
    clinicalImportance: 'Brakial pleksus üst kökleri buradan çıkar.'
  },
  {
    id: 'cervical_6',
    latin: 'Vertebra Cervicalis VI (C6)',
    turkish: '6. Boyun Omuru',
    english: 'Sixth Cervical Vertebra',
    region: 'Omurga (Cervical)',
    mnemonic: 'Altı (6) = Altın bilezik (El bileği ekstansiyonu bu seviyeden beslenir).',
    nursingNote: 'Boyun fıtıklarında (servikal disk hernisi) başparmak ve işaret parmağında uyuşma (C6 dermatomu) sorgulanır.',
    clinicalImportance: 'Karotis nabzı alınırken bası yapılan tuberculum caroticum (Chassaignac tüberkülü) bu omurdadır.'
  },
  {
    id: 'cervical_7',
    latin: 'Vertebra Prominens (C7)',
    turkish: '7. Boyun Omuru (Çıkıntılı Omur)',
    english: 'Seventh Cervical Vertebra',
    region: 'Omurga (Cervical)',
    mnemonic: 'Boynunu eğince en çok "prominen" (belirgin) olan kemik.',
    nursingNote: 'Fizik muayenede sırtın nirengi noktasıdır. Diğer omurları saymaya buradan başlanır.',
    clinicalImportance: 'Processus spinosus\'u en uzun olan ve dışarıdan elle hissedilebilen servikal omurdur.'
  },
  // Omurga (Thoracic)
  {
    id: 'thoracic_1',
    latin: 'Vertebra Thoracica I (T1)',
    turkish: '1. Sırt Omuru',
    english: 'First Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'T1 = Thorax başlar.',
    nursingNote: 'El kaslarında güçsüzlük ve Horner Sendromu (göz kapağı düşüklüğü vb.) açısından değerlendirilir.',
    clinicalImportance: '1. Kaburganın tam tutunduğu fasete sahiptir.'
  },
  {
    id: 'thoracic_2',
    latin: 'Vertebra Thoracica II (T2)',
    turkish: '2. Sırt Omuru',
    english: 'Second Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Göğüs kafesinin kilit taşlarından.',
    nursingNote: 'Skolyoz veya kifoz duruş bozukluğu takiplerinde sırta bakılır.',
    clinicalImportance: 'Sternal açı (Angulus sterni) seviyesine (T4-T5 yakınına) giden yol üzerindedir.'
  },
  {
    id: 'thoracic_3',
    latin: 'Vertebra Thoracica III (T3)',
    turkish: '3. Sırt Omuru',
    english: 'Third Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Skapula dikeni hizası.',
    nursingNote: 'Pulmoner değerlendirmede sırt oskültasyonu yapılırken anatomik rehberdir.',
    clinicalImportance: 'Spina scapulae (kürek kemiği dikeni) seviyesindedir.'
  },
  {
    id: 'thoracic_4',
    latin: 'Vertebra Thoracica IV (T4)',
    turkish: '4. Sırt Omuru',
    english: 'Fourth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Trakea dörde (T4) bölünür (Bifurkasyon).',
    nursingNote: 'Meme başı hizasındaki dermatomdur (T4). Spinal anestezide duyusal blok seviyesi ölçülürken önemlidir.',
    clinicalImportance: 'Angulus sterni (Louis açısı) arkadaki karşılığıdır. Trakea burada iki ana bronşa ayrılır (Carina).'
  },
  {
    id: 'thoracic_5',
    latin: 'Vertebra Thoracica V (T5)',
    turkish: '5. Sırt Omuru',
    english: 'Fifth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Göğsün tam ortası.',
    nursingNote: 'Torasentez, epidural anestezi uygulamalarında pozisyonlandırma (kedi kamburu) önemlidir.',
    clinicalImportance: 'Aorta descendens başlar.'
  },
  {
    id: 'thoracic_6',
    latin: 'Vertebra Thoracica VI (T6)',
    turkish: '6. Sırt Omuru',
    english: 'Sixth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Xiphoid çıkıntı (T9) yolunda.',
    nursingNote: 'Otonom disrefleksi acili (T6 ve üstü lezyonlarda tansiyon fırlaması, terleme, baş ağrısı) hastalarında mesane/barsak doluluğu kontrol edilir.',
    clinicalImportance: 'T6 seviyesi otonomik sinir sistemi krizleri için kritik bir sınırdır.'
  },
  {
    id: 'thoracic_7',
    latin: 'Vertebra Thoracica VII (T7)',
    turkish: '7. Sırt Omuru',
    english: 'Seventh Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Skapulanın alt ucu hizası (Angulus inferior).',
    nursingNote: 'Plevral sıvı boşaltılırken (torasentez) iğne T7-T9 aralığından girilir.',
    clinicalImportance: 'Kürek kemiği alt ucu hizasına denk gelir, klinik lokalizasyonda sık kullanılır.'
  },
  {
    id: 'thoracic_8',
    latin: 'Vertebra Thoracica VIII (T8)',
    turkish: '8. Sırt Omuru',
    english: 'Eighth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Vena cava inferior diyaframı T8\'de geçer.',
    nursingNote: 'Cerrahi sonrası atelektaziyi önlemek için derin nefes egzersizi (tri-flow) yaptırılır.',
    clinicalImportance: 'Vena Cava Inferior hiatusu (diyafram deliği) T8 seviyesindedir.'
  },
  {
    id: 'thoracic_9',
    latin: 'Vertebra Thoracica IX (T9)',
    turkish: '9. Sırt Omuru',
    english: 'Ninth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: '9 (Dokuz) = Processus Xiphoideus.',
    nursingNote: 'CPR (kalp masajı) yaparken xiphoid çıkıntıya (T9 hizası) basılmamasına dikkat edilir.',
    clinicalImportance: 'Sternumun en alt ucundaki çıkıntının (ksifoid) hizasıdır.'
  },
  {
    id: 'thoracic_10',
    latin: 'Vertebra Thoracica X (T10)',
    turkish: '10. Sırt Omuru',
    english: 'Tenth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: '10 (Ten) = Belly Button (Göbek deliği dermatomu).',
    nursingNote: 'Göbek deliği hizasında ağrı hissediliyorsa apandisit başlangıcı (visseral ağrı) olabilir.',
    clinicalImportance: 'Özofagus (yemek borusu) diyaframı T10 seviyesinde deler.'
  },
  {
    id: 'thoracic_11',
    latin: 'Vertebra Thoracica XI (T11)',
    turkish: '11. Sırt Omuru',
    english: 'Eleventh Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Yüzen kaburganın (11. kaburga) taşıyıcısı.',
    nursingNote: 'Alt torakal travmalarda böbrek hasarı açısından hematüri (idrarda kan) takibi yapılır.',
    clinicalImportance: 'Yüzen kaburga (costa fluctuantes) bağlandığı için travmalarda böbreklere veya dalağa zarar verebilir.'
  },
  {
    id: 'thoracic_12',
    latin: 'Vertebra Thoracica XII (T12)',
    turkish: '12. Sırt Omuru',
    english: 'Twelfth Thoracic Vertebra',
    region: 'Omurga (Thoracic)',
    mnemonic: 'Aort, diyaframı T12\'de deler geçer (AoRT: 12 harf).',
    nursingNote: 'Torakolomber bileske kırıkları sık görülür (özellikle yüksekten düşme). Nörolojik muayene şarttır.',
    clinicalImportance: 'Aorta, diyaframdan T12 seviyesinde geçer. Kırıklara (kompresyon/çökme) çok yatkındır.'
  },
  // Omurga (Lumbar & Sacral & Coccygeal)
  {
    id: 'lumbar_1',
    latin: 'Vertebra Lumbalis I (L1)',
    turkish: '1. Bel Omuru',
    english: 'First Lumbar Vertebra',
    region: 'Omurga (Lumbar)',
    mnemonic: 'Omuriliğin (Spinal kord) bittiği yer.',
    nursingNote: 'L1 seviyesi altında omurilik sonlanıp at kuyruğu (cauda equina) başlar, bacaklarda ani güç/his kaybı acildir.',
    clinicalImportance: 'Conus medullaris (omuriliğin son ucu) L1-L2 seviyesinde sonlanır.'
  },
  {
    id: 'lumbar_2',
    latin: 'Vertebra Lumbalis II (L2)',
    turkish: '2. Bel Omuru',
    english: 'Second Lumbar Vertebra',
    region: 'Omurga (Lumbar)',
    mnemonic: 'İğneyi batırma sınırın.',
    nursingNote: 'Bebeklerde omurilik L3\'e kadar uzanabilir, lomber ponksiyon (LP) erişkinden daha aşağıdan yapılmalıdır.',
    clinicalImportance: 'Spinal kord biter.'
  },
  {
    id: 'lumbar_3',
    latin: 'Vertebra Lumbalis III (L3)',
    turkish: '3. Bel Omuru',
    english: 'Third Lumbar Vertebra',
    region: 'Omurga (Lumbar)',
    mnemonic: 'LP (Lomber Ponksiyon) için güvenli bölge girişi.',
    nursingNote: 'LP sonrası BOS kaçağını ve baş ağrısını önlemek için hasta en az 4-6 saat düz yatırılır.',
    clinicalImportance: 'Subaraknoid mesafe buradan iğne girmek için güvenlidir.'
  },
  {
    id: 'lumbar_4',
    latin: 'Vertebra Lumbalis IV (L4)',
    turkish: '4. Bel Omuru',
    english: 'Fourth Lumbar Vertebra',
    region: 'Omurga (Lumbar)',
    mnemonic: 'İliyak kanatların en üst seviyesi (Krista iliaca).',
    nursingNote: 'Bel fıtığında en sık etkilenen aralıklardan biridir (L4-L5). Hastanın topukları üstünde yürümesi (düşük ayak) kontrol edilir.',
    clinicalImportance: 'Lomber ponksiyon iğne giriş yerini bulmak için kılavuz noktadır (Tuffier çizgisi).'
  },
  {
    id: 'lumbar_5',
    latin: 'Vertebra Lumbalis V (L5)',
    turkish: '5. Bel Omuru',
    english: 'Fifth Lumbar Vertebra',
    region: 'Omurga (Lumbar)',
    mnemonic: 'Belin en çok yük taşıyan babayiğidi.',
    nursingNote: 'Ağır kaldırma sonucu bel fıtığı (herniasyon) en sık bu seviyede olur. Ağrının bacağa vurması (Siyatik) sorgulanır.',
    clinicalImportance: 'En kalın ve büyük gövdeli omurdur. L5-S1 arası bel fıtığının en sık görüldüğü yerdir.'
  },
  {
    id: 'sacrum',
    latin: 'Os Sacrum',
    turkish: 'Kuyruk Sokumu Üstü Kemiği (Sakrum)',
    english: 'Sacrum',
    region: 'Omurga (Sacral)',
    mnemonic: 'Kutsal (Sacred) kemik (Geç çürüdüğüne inanılırdı).',
    nursingNote: 'Yatağa bağımlı hastalarda dekübitüs (yatak) yarasının en sık açıldığı yerdir. 2 saatte bir pozisyon şarttır.',
    clinicalImportance: '5 sakral omurun birleşmesinden oluşur. Pelvisin (leğen kemiği) arka duvarını oluşturur.'
  },
  {
    id: 'coccyx',
    latin: 'Os Coccygis',
    turkish: 'Kuyruk Sokumu Kemiği (Koksiks)',
    english: 'Coccyx',
    region: 'Omurga (Coccygeal)',
    mnemonic: 'Guguk kuşunun (Cuckoo) gagasına benzer.',
    nursingNote: 'Sert zemine düşme sonucu kırılırsa çok ağrılıdır, simit minder oturma minderi tavsiye edilir.',
    clinicalImportance: 'Evrimsel olarak kuyruk kalıntısıdır. Düşmelerde lüksasyon (çıkık) veya kırık sıktır (koksigodini).'
  },
  // Göğüs Kafesi
  {
    id: 'sternum',
    latin: 'Sternum',
    turkish: 'İman Tahtası (Göğüs Kemiği)',
    english: 'Sternum (Breastbone)',
    region: 'Göğüs Kafesi',
    mnemonic: 'Kravat şeklindeki kemik (Manubrium, corpus, xiphoid).',
    nursingNote: 'Açık kalp ameliyatlarında kesilir (sternotomi). Ameliyat sonrası göğüs korsesi kullandırılır ve öksürürken sternum yastıkla desteklenir.',
    clinicalImportance: 'Kalbi korur. Kemik iliği biyopsisi için en kolay erişilen yerlerden biridir.'
  },
  { id: 'rib_true_1_r', latin: 'Costa Vera I Dextra', turkish: '1. Gerçek Kaburga (Sağ)', english: '1st True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburgalar (1-7) sternuma doğrudan bağlıdır.', nursingNote: 'Klavikula altındadır, boyun cerrahilerinde hasar görebilir.', clinicalImportance: 'Subklavyen damarlar ve brakiyal pleksus üzerinden geçer (Thoracic outlet sendromu).' },
  { id: 'rib_true_1_l', latin: 'Costa Vera I Sinistra', turkish: '1. Gerçek Kaburga (Sol)', english: '1st True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek (True).', nursingNote: 'En nadir kırılan kaburgadır çünkü korunmuştur.', clinicalImportance: 'Kırılması için çok yüksek enerji gerekir, kırık varsa iç organ hasarı mutlaka aranır.' },
  { id: 'rib_true_2_r', latin: 'Costa Vera II Dextra', turkish: '2. Gerçek Kaburga (Sağ)', english: '2nd True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Sternal açıya tutunur.', nursingNote: 'EKG elektrotlarını bağlamak veya kalbi dinlemek için kaburga aralıkları (interkostal aralık) 2. kaburgadan başlanarak sayılır.', clinicalImportance: 'Klinik değerlendirmede nirengi noktasıdır.' },
  { id: 'rib_true_2_l', latin: 'Costa Vera II Sinistra', turkish: '2. Gerçek Kaburga (Sol)', english: '2nd True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Sternal açıya tutunur.', nursingNote: 'Göğüs tüpü takılırken sinir/damar hasarı yapmamak için kaburganın üst kenarı menşe alınır.', clinicalImportance: 'Aort kapağı dinleme odağı hemen altındadır.' },
  { id: 'rib_true_3_r', latin: 'Costa Vera III Dextra', turkish: '3. Gerçek Kaburga (Sağ)', english: '3rd True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Kaburga kırıkları çok ağrılıdır, hasta yüzeysel nefes alır (hipoventilasyon), pnömoni riski artar.', clinicalImportance: 'Tipik kaburga anatomisi başlar.' },
  { id: 'rib_true_3_l', latin: 'Costa Vera III Sinistra', turkish: '3. Gerçek Kaburga (Sol)', english: '3rd True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Ağrı kesici (analjezi) verilmesi solunumu rahatlatmak için kritiktir.', clinicalImportance: 'Kalp koruması.' },
  { id: 'rib_true_4_r', latin: 'Costa Vera IV Dextra', turkish: '4. Gerçek Kaburga (Sağ)', english: '4th True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Erkeklerde meme ucu hizasından geçer (T4).', clinicalImportance: 'Kırıklarında hemotoraks/pnömotoraks aranır.' },
  { id: 'rib_true_4_l', latin: 'Costa Vera IV Sinistra', turkish: '4. Gerçek Kaburga (Sol)', english: '4th True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Erkeklerde meme ucu hizasından geçer (T4).', clinicalImportance: 'Kırıklarında hemotoraks/pnömotoraks aranır.' },
  { id: 'rib_true_5_r', latin: 'Costa Vera V Dextra', turkish: '5. Gerçek Kaburga (Sağ)', english: '5th True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Göğüs tüpü genelde 5. interkostal aralık (midaksiller hat) takılır.', clinicalImportance: 'Güvenli üçgen (triangle of safety) bölgesini oluşturur.' },
  { id: 'rib_true_5_l', latin: 'Costa Vera V Sinistra', turkish: '5. Gerçek Kaburga (Sol)', english: '5th True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Kalbin tepe atımının (apeks) hissedildiği aralığın üst sınırıdır.', clinicalImportance: 'Mitral kapak dinleme odağı.' },
  { id: 'rib_true_6_r', latin: 'Costa Vera VI Dextra', turkish: '6. Gerçek Kaburga (Sağ)', english: '6th True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Yelken göğüs (flail chest) 3 veya daha fazla kaburganın 2 yerden kırılmasıdır, asimetrik göğüs hareketi gözlenir.', clinicalImportance: 'Çoklu kırıklar hayati tehlike oluşturur.' },
  { id: 'rib_true_6_l', latin: 'Costa Vera VI Sinistra', turkish: '6. Gerçek Kaburga (Sol)', english: '6th True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Gerçek kaburga.', nursingNote: 'Paradoksal solunum takibi yapılmalıdır.', clinicalImportance: 'Diyafram ve akciğer alt lob hizası.' },
  { id: 'rib_true_7_r', latin: 'Costa Vera VII Dextra', turkish: '7. Gerçek Kaburga (Sağ)', english: '7th True Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Son gerçek kaburga.', nursingNote: 'Batın (karın) içi organları da kısmen korumaya başlar.', clinicalImportance: 'Sternuma doğrudan bağlanan son kıkırdaktır.' },
  { id: 'rib_true_7_l', latin: 'Costa Vera VII Sinistra', turkish: '7. Gerçek Kaburga (Sol)', english: '7th True Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Son gerçek kaburga.', nursingNote: 'Karaciğer (sağ) ve Mide/Dalak (sol) yaralanmaları kaburga kırıklarına eşlik edebilir.', clinicalImportance: 'Sternuma doğrudan bağlanan son kıkırdaktır.' },
  { id: 'rib_false_8_r', latin: 'Costa Spuria VIII Dextra', turkish: '8. Yalancı Kaburga (Sağ)', english: '8th False Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Yalancı (False) = Sternuma değil, 7. kıkırdağa tutunur.', nursingNote: 'Alt kaburga kırıklarında abdominal kanama şüphesiyle karın sertliği (defans) muayenesi önemlidir.', clinicalImportance: 'Kostofrenik sinüs hizasıdır.' },
  { id: 'rib_false_8_l', latin: 'Costa Spuria VIII Sinistra', turkish: '8. Yalancı Kaburga (Sol)', english: '8th False Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Yalancı (False).', nursingNote: 'Dalak rüptürü açısından hasta gözlenir.', clinicalImportance: 'Kostofrenik sinüs hizasıdır.' },
  { id: 'rib_false_9_r', latin: 'Costa Spuria IX Dextra', turkish: '9. Yalancı Kaburga (Sağ)', english: '9th False Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Yalancı (False).', nursingNote: 'Karaciğer yırtılması (sağda) açısından yakından takip.', clinicalImportance: 'Alt kaburga arkının parçasıdır.' },
  { id: 'rib_false_9_l', latin: 'Costa Spuria IX Sinistra', turkish: '9. Yalancı Kaburga (Sol)', english: '9th False Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Yalancı (False).', nursingNote: 'Dalak hasarı açısından takip.', clinicalImportance: 'Alt kaburga arkının parçasıdır.' },
  { id: 'rib_false_10_r', latin: 'Costa Spuria X Dextra', turkish: '10. Yalancı Kaburga (Sağ)', english: '10th False Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Son kıkırdak yaylı kaburga.', nursingNote: 'Böbrek travması açısından idrar çıkışı ve rengi izlenir.', clinicalImportance: 'En düşük kostal marjı (Arcus costarum) oluşturur.' },
  { id: 'rib_false_10_l', latin: 'Costa Spuria X Sinistra', turkish: '10. Yalancı Kaburga (Sol)', english: '10th False Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Son kıkırdak yaylı kaburga.', nursingNote: 'Böbrek travması.', clinicalImportance: 'En düşük kostal marjı oluşturur.' },
  { id: 'rib_floating_11_r', latin: 'Costa Fluctuans XI Dextra', turkish: '11. Yüzen Kaburga (Sağ)', english: '11th Floating Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Yüzen (Ön tarafa bağlanmazlar).', nursingNote: 'Sırt ağrısı yapan böbrek hastalıklarında (piyelonefrit) kostovertebral açı hassasiyeti (KVAH) muayenesinde vurulan yerdir.', clinicalImportance: 'Ön ucu serbesttir. Böbreklere arkadan koruma sağlar.' },
  { id: 'rib_floating_11_l', latin: 'Costa Fluctuans XI Sinistra', turkish: '11. Yüzen Kaburga (Sol)', english: '11th Floating Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Yüzen (Ön tarafa bağlanmazlar).', nursingNote: 'Böbrek taşı ağrısı bu bölgeden kasığa vurur.', clinicalImportance: 'Ön ucu serbesttir. Dalak ve böbreklere koruma sağlar.' },
  { id: 'rib_floating_12_r', latin: 'Costa Fluctuans XII Dextra', turkish: '12. Yüzen Kaburga (Sağ)', english: '12th Floating Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'En kısa kaburga.', nursingNote: 'Bel bölgesi cerrahilerinde anatomik sınır olarak kullanılır.', clinicalImportance: 'Sadece 12. torakal vertebraya tutunur.' },
  { id: 'rib_floating_12_l', latin: 'Costa Fluctuans XII Sinistra', turkish: '12. Yüzen Kaburga (Sol)', english: '12th Floating Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'En kısa kaburga.', nursingNote: 'Bazen kadınlarda "ince bel" estetiği (korse) amacıyla cerrahi olarak alınabilir (nadiren onaylanan tartışmalı bir prosedür).', clinicalImportance: 'Sadece 12. torakal vertebraya tutunur.' },
  // Üst Ekstremite
  { id: 'clavicle_r', latin: 'Clavicula Dextra', turkish: 'Sağ Köprücük Kemiği', english: 'Right Collarbone (Clavicle)', region: 'Üst Ekstremite', mnemonic: 'Klavikula = Küçük anahtar (S harfi gibi).', nursingNote: 'Yenidoğanda makrozomi (iri bebek) doğumu sırasında (omuz takılması) en sık kırılan kemiktir. Moro refleksi asimetrisi izlenir.', clinicalImportance: 'Gövde ile kol arasındaki tek kemiksel bağlantıdır. Ortasından kırılması çok sıktır.' },
  { id: 'clavicle_l', latin: 'Clavicula Sinistra', turkish: 'Sol Köprücük Kemiği', english: 'Left Collarbone (Clavicle)', region: 'Üst Ekstremite', mnemonic: 'Köprü görevi görür.', nursingNote: 'Kırıklarında 8 (sekiz) bandajı kullanılır, koltuk altı dolaşım bozukluğuna (sinir uyuşması) karşı takip edilir.', clinicalImportance: 'Altından subklavyen arter ve brakiyal pleksus geçer.' },
  { id: 'scapula_r', latin: 'Scapula Dextra', turkish: 'Sağ Kürek Kemiği', english: 'Right Shoulder Blade (Scapula)', region: 'Üst Ekstremite', mnemonic: 'Scapula = Scoop (Kürek).', nursingNote: 'Omuz çıkıkları en sık öne doğru olur, redüksiyon (yerine oturtma) sonrası omuz-kol askısı (velpau bandajı) uygulanır.', clinicalImportance: 'Omuz ekleminin (glenohumeral eklem) sığ çukurunu (glenoid kavite) oluşturur, bu yüzden çıkıklara meyllidir.' },
  { id: 'scapula_l', latin: 'Scapula Sinistra', turkish: 'Sol Kürek Kemiği', english: 'Left Shoulder Blade (Scapula)', region: 'Üst Ekstremite', mnemonic: 'Sırtın kanatları.', nursingNote: 'Kas zayıflığında "Kanatlanan Skapula" (Winging scapula) görülür, N. Thoracicus Longus zedelenmesi şüphesidir.', clinicalImportance: 'Rotator kılıf kaslarının (supraspinatus vb.) origo (başlangıç) noktasıdır.' },
  { id: 'humerus_r', latin: 'Humerus Dexter', turkish: 'Sağ Pazu (Kol) Kemiği', english: 'Right Humerus', region: 'Üst Ekstremite', mnemonic: 'Humerus (Funny bone / Komik kemik) dirseğe çarparsan "humorous" olmaz, acır.', nursingNote: 'Gövde kırıklarında N. Radialis zedelenebilir, hastada "Düşük El" (bileği kaldıramama) gelişip gelişmediği kontrol edilir.', clinicalImportance: 'Üst kolun tek kemiğidir. Cerrahi boyun kırıklarında N. Axillaris zedelenebilir.' },
  { id: 'humerus_l', latin: 'Humerus Sinister', turkish: 'Sol Pazu (Kol) Kemiği', english: 'Left Humerus', region: 'Üst Ekstremite', mnemonic: 'Kolun en uzun kemiği.', nursingNote: 'Alçıya alınan kolda kompartman sendromu (aşırı şişme, morarma, şiddetli ağrı, nabız yokluğu) takibi çok acildir.', clinicalImportance: 'Dirsekte Ulnar sinir (N. Ulnaris) medial epikondil arkasından geçer (çarptığımızda elektrik çarpan yer).' },
  { id: 'radius_r', latin: 'Radius Dexter', turkish: 'Sağ Döner Kemik', english: 'Right Radius', region: 'Üst Ekstremite', mnemonic: 'RAdius = RAdayo anteni (Başparmak tarafındadır).', nursingNote: 'Nabız sayımının (A. Radialis) en sık yapıldığı yerdir.', clinicalImportance: 'Düşerken el açıldığında en sık kırılan kemiktir (Colles kırığı / Çatal sırtı deformitesi).' },
  { id: 'radius_l', latin: 'Radius Sinister', turkish: 'Sol Döner Kemik', english: 'Left Radius', region: 'Üst Ekstremite', mnemonic: 'Başparmak tarafındaki kemik.', nursingNote: 'Çocuklarda "Dadı dirseği" (Radius başı yarı çıkığı) kolun aniden çekilmesiyle olur, kol pronasyonda kilitlenir.', clinicalImportance: 'Önkola pronasyon (içe dönme) ve supinasyon (dışa dönme) yaptırır.' },
  { id: 'ulna_r', latin: 'Ulna Dextra', turkish: 'Sağ Dirsek Kemiği', english: 'Right Ulna', region: 'Üst Ekstremite', mnemonic: 'U L N A = U (Küçük parmak tarafı).', nursingNote: 'Dirseğimizi masaya dayadığımız kemik çıkıntı (Olekranon) buradadır. Uzun süre dayanmak bursa iltihabı (öğrenci dirseği) yapar.', clinicalImportance: 'Radius ile birlikte ön kolu oluşturur, bilek eklemine doğrudan katılmaz.' },
  { id: 'ulna_l', latin: 'Ulna Sinistra', turkish: 'Sol Dirsek Kemiği', english: 'Left Ulna', region: 'Üst Ekstremite', mnemonic: 'Serçe parmak tarafı.', nursingNote: 'Saldırıdan korunmak için kol kaldırıldığında alınan darbeyle kırılır (Gece sopası kırığı / Nightstick fracture).', clinicalImportance: 'Monteggia ve Galeazzi kırıklı çıkıklarında radius ile koordineli hasar görür.' },
  { id: 'scaphoid_r', latin: 'Os Scaphoideum Dextrum', turkish: 'Sağ Sandal Kemiği', english: 'Right Scaphoid', region: 'Üst Ekstremite', mnemonic: 'Some (Scaphoid) - En dış alt.', nursingNote: 'El bileği ağrısında (enfiye çukuru hassasiyeti) röntgende kırık görülmese bile alçıya alınır, avasküler nekroz riski yüksektir.', clinicalImportance: 'Karpal kemiklerin en sık kırılanıdır.' },
  { id: 'lunate_r', latin: 'Os Lunatum Dextrum', turkish: 'Sağ Ay Kemiği', english: 'Right Lunate', region: 'Üst Ekstremite', mnemonic: 'Lovers (Lunate) - Ay şeklinde.', nursingNote: 'El bileği travmalarında çıkık şüphesi.', clinicalImportance: 'Karpal kemiklerin en sık çıkık görüleni (Luksasyon).' },
  { id: 'triquetrum_r', latin: 'Os Triquetrum Dextrum', turkish: 'Sağ Üç Köşeli Kemik', english: 'Right Triquetrum', region: 'Üst Ekstremite', mnemonic: 'Try (Triquetrum) - Üç köşeli.', nursingNote: 'Pisiform kemiğin altındadır.', clinicalImportance: 'Düşmelerde ikinci en sık kırılan karpal.' },
  { id: 'pisiform_r', latin: 'Os Pisiforme Dextrum', turkish: 'Sağ Bezelye Kemiği', english: 'Right Pisiform', region: 'Üst Ekstremite', mnemonic: 'Positions (Pisiform) - Bezelye gibi.', nursingNote: 'Bilekte ulnar sinir kılıfı Guyon kanalı üzerindedir.', clinicalImportance: 'Tendon içinde gelişen (sesamoid) bir kemiktir (M. flexor carpi ulnaris).' },
  { id: 'trapezium_r', latin: 'Os Trapezium Dextrum', turkish: 'Sağ Çok Köşeli Büyük Kemik', english: 'Right Trapezium', region: 'Üst Ekstremite', mnemonic: 'That (Trapezium) - Thumb (Başparmak) altında.', nursingNote: 'Yaşlılarda başparmak kökü ağrısı (saddle joint kireçlenmesi) sıktır.', clinicalImportance: 'Başparmak metakarpali ile eyer tipi eklem yapar (Opozisyon hareketi).' },
  { id: 'trapezoid_r', latin: 'Os Trapezoideum Dextrum', turkish: 'Sağ Çok Köşeli Küçük Kemik', english: 'Right Trapezoid', region: 'Üst Ekstremite', mnemonic: 'They (Trapezoid) - İşaret parmağı altında.', nursingNote: 'Bilek kırıkları sonrası fizik tedavi (ROM egzersizleri) kavrama gücü için şarttır.', clinicalImportance: 'Karpal dizilimin kilit taşlarındandır.' },
  { id: 'capitate_r', latin: 'Os Capitatum Dextrum', turkish: 'Sağ Başlı Kemik', english: 'Right Capitate', region: 'Üst Ekstremite', mnemonic: 'Can\'t (Capitate) - Center (Merkezde, en büyük).', nursingNote: 'Travma sonrası elin dorsalinde (sırtında) şişlik takibi.', clinicalImportance: 'En büyük karpal kemiktir.' },
  { id: 'hamate_r', latin: 'Os Hamatum Dextrum', turkish: 'Sağ Çengelli Kemik', english: 'Right Hamate', region: 'Üst Ekstremite', mnemonic: 'Handle (Hamate) - Hook (Çengeli var).', nursingNote: 'Golf veya tenis oynayanlarda veya el aletleri (çekiç) kullananlarda çengeli kırılabilir.', clinicalImportance: 'Kırıklarında ulnar sinir zedelenmesi görülebilir.' },
  { id: 'scaphoid_l', latin: 'Os Scaphoideum Sinistrum', turkish: 'Sol Sandal Kemiği', english: 'Left Scaphoid', region: 'Üst Ekstremite', mnemonic: 'Some (Scaphoid)', nursingNote: 'Enfiye çukurunda ağrıya dikkat.', clinicalImportance: 'Kanlanması tersten olduğu için kırıkta çürüyebilir (nekroz).' },
  { id: 'lunate_l', latin: 'Os Lunatum Sinistrum', turkish: 'Sol Ay Kemiği', english: 'Left Lunate', region: 'Üst Ekstremite', mnemonic: 'Lovers (Lunate)', nursingNote: 'Median sinire baskı (Karpal Tünel) yapabilir çıkarsa.', clinicalImportance: 'Kienböck hastalığı (nekrozu) görülür.' },
  { id: 'triquetrum_l', latin: 'Os Triquetrum Sinistrum', turkish: 'Sol Üç Köşeli Kemik', english: 'Left Triquetrum', region: 'Üst Ekstremite', mnemonic: 'Try (Triquetrum)', nursingNote: 'Bilek sırtında ağrı.', clinicalImportance: 'El bileği eklemine katılır.' },
  { id: 'pisiform_l', latin: 'Os Pisiforme Sinistrum', turkish: 'Sol Bezelye Kemiği', english: 'Left Pisiform', region: 'Üst Ekstremite', mnemonic: 'Positions (Pisiform)', nursingNote: 'Dışarıdan palpe edilebilen tek karpal.', clinicalImportance: 'Kemikleşmesi en son tamamlanan karpaldir.' },
  { id: 'trapezium_l', latin: 'Os Trapezium Sinistrum', turkish: 'Sol Çok Köşeli Büyük Kemik', english: 'Left Trapezium', region: 'Üst Ekstremite', mnemonic: 'That (Trapezium)', nursingNote: 'Başparmak kireçlenmesi cerrahisi.', clinicalImportance: 'İnsanın alet kullanabilmesini sağlayan eklemin tabanıdır.' },
  { id: 'trapezoid_l', latin: 'Os Trapezoideum Sinistrum', turkish: 'Sol Çok Köşeli Küçük Kemik', english: 'Left Trapezoid', region: 'Üst Ekstremite', mnemonic: 'They (Trapezoid)', nursingNote: 'Elin kubbe yapısını korur.', clinicalImportance: '2. Metakarpal ile eklem yapar.' },
  { id: 'capitate_l', latin: 'Os Capitatum Sinistrum', turkish: 'Sol Başlı Kemik', english: 'Left Capitate', region: 'Üst Ekstremite', mnemonic: 'Can\'t (Capitate)', nursingNote: 'Elin merkez ekseni 3. parmaktan geçer.', clinicalImportance: 'Kemik yaşı tayininde önemlidir.' },
  { id: 'hamate_l', latin: 'Os Hamatum Sinistrum', turkish: 'Sol Çengelli Kemik', english: 'Left Hamate', region: 'Üst Ekstremite', mnemonic: 'Handle (Hamate)', nursingNote: 'Elde tutulan aletlerin vurduğu bölge.', clinicalImportance: 'Hamulus (çengel) kısmı Guyon kanalının dış duvarıdır.' },
  { id: 'metacarpal_1_r', latin: 'Os Metacarpi I Dextrum', turkish: '1. El Tarak Kemiği (Sağ Başparmak)', english: '1st Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Metakarpaller tarak gibidir.', nursingNote: 'Kavga edenlerde 1. ve 5. metakarpal kırıkları sıktır.', clinicalImportance: 'Bennett veya Rolando kırığı (başparmak tabanı kırığı).' },
  { id: 'metacarpal_1_l', latin: 'Os Metacarpi I Sinistrum', turkish: '1. El Tarak Kemiği (Sol Başparmak)', english: '1st Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Tarak.', nursingNote: 'Alçı parmağı içine alacak (Spica alçısı) şekilde yapılır.', clinicalImportance: 'En kısa ve kalın metakarpaldir.' },
  { id: 'metacarpal_2_r', latin: 'Os Metacarpi II Dextrum', turkish: '2. El Tarak Kemiği (Sağ İşaret)', english: '2nd Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı.', nursingNote: 'Parmak ucuna dolaşım (kapiller dolum) bakılır.', clinicalImportance: 'En uzun metakarpaldir.' },
  { id: 'metacarpal_2_l', latin: 'Os Metacarpi II Sinistrum', turkish: '2. El Tarak Kemiği (Sol İşaret)', english: '2nd Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı.', nursingNote: 'Ödem takibi.', clinicalImportance: 'Hareketi en kısıtlı olandır.' },
  { id: 'metacarpal_3_r', latin: 'Os Metacarpi III Dextrum', turkish: '3. El Tarak Kemiği (Sağ Orta)', english: '3rd Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak.', nursingNote: 'Eli kalp seviyesinde tutmak (elevasyon) ödemi engeller.', clinicalImportance: 'Capitate ile güçlü bir bağ yapar.' },
  { id: 'metacarpal_3_l', latin: 'Os Metacarpi III Sinistrum', turkish: '3. El Tarak Kemiği (Sol Orta)', english: '3rd Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak.', nursingNote: 'Elevasyon önemlidir.', clinicalImportance: 'Capitate ile güçlü bağ.' },
  { id: 'metacarpal_4_r', latin: 'Os Metacarpi IV Dextrum', turkish: '4. El Tarak Kemiği (Sağ Yüzük)', english: '4th Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı.', nursingNote: 'Yüzükler, olası bir ödem durumunda kanlanmayı keseceği için hastaneye yatan hastada mutlaka çıkartılmalıdır.', clinicalImportance: 'Biraz hareketlidir (elin kubbeleşmesini sağlar).' },
  { id: 'metacarpal_4_l', latin: 'Os Metacarpi IV Sinistrum', turkish: '4. El Tarak Kemiği (Sol Yüzük)', english: '4th Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı.', nursingNote: 'Ödem riski, yüzük çıkartılır.', clinicalImportance: 'Kubbeleşmeye yardım eder.' },
  { id: 'metacarpal_5_r', latin: 'Os Metacarpi V Dextrum', turkish: '5. El Tarak Kemiği (Sağ Serçe)', english: '5th Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Boksör kırığı yeri (Serçe).', nursingNote: 'Duvara veya sert bir yere yumruk atma sonucu boynundan kırılır (Boksör kırığı). Ulnar oluk (gutter) ateli yapılır.', clinicalImportance: 'En hareketli ikinci metakarpaldir.' },
  { id: 'metacarpal_5_l', latin: 'Os Metacarpi V Sinistrum', turkish: '5. El Tarak Kemiği (Sol Serçe)', english: '5th Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Boksör kırığı yeri (Serçe).', nursingNote: 'Öfke nöbeti sonrası el sırtında şişlik varsa kırık aranır.', clinicalImportance: 'Boksör kırığı.' },
  { id: 'proximal_phalanx_1_r', latin: 'Phalanx Proximalis I Dextra', turkish: '1. Yakın Parmak Kemiği (Sağ Başparmak)', english: 'Proximal Phalanx 1st Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Phalanx = Roma askeri dizilimi.', nursingNote: 'Parmak ucu kırık/kopmalarında (amputasyon) kopan parça nemli/soğuk beze sarılıp buzlu torbaya KONMAZ (donma riski), su geçirmez poşete konup buzlu suya atılır.', clinicalImportance: 'Başparmakta medial phalanx (orta) YOKTUR.' },
  { id: 'distal_phalanx_1_r', latin: 'Phalanx Distalis I Dextra', turkish: '1. Uzak Parmak Kemiği (Sağ Başparmak)', english: 'Distal Phalanx 1st Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Distal = Distance (Uzakta).', nursingNote: 'Mallet finger (çekiç parmak) tendon kopması sık olur.', clinicalImportance: 'Tırnak yatağını taşır.' },
  { id: 'proximal_phalanx_2_r', latin: 'Phalanx Proximalis II Dextra', turkish: '2. Yakın Parmak Kemiği (Sağ İşaret)', english: 'Proximal Phalanx 2nd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Yakın.', nursingNote: 'Atele alınırken komşu parmakla birlikte (buddy taping) bantlanır.', clinicalImportance: 'El eklemlerinde (MCP) romatoid artrit deformiteleri sıktır.' },
  { id: 'middle_phalanx_2_r', latin: 'Phalanx Media II Dextra', turkish: '2. Orta Parmak Kemiği (Sağ İşaret)', english: 'Middle Phalanx 2nd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Parmak kesilerinde tendon muayenesi (fleksörler) yapılır.', clinicalImportance: 'PIP (Proximal interphalangeal) eklem romatizmalarda şişer (Bouchard nodülü).' },
  { id: 'distal_phalanx_2_r', latin: 'Phalanx Distalis II Dextra', turkish: '2. Uzak Parmak Kemiği (Sağ İşaret)', english: 'Distal Phalanx 2nd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Uzakta.', nursingNote: 'Pulse oksimetre parmak ucuna (distal falanks üstüne) takılır, oje varsa silinir.', clinicalImportance: 'DIP (Distal interphalangeal) eklem osteoartritte şişer (Heberden nodülü).' },
  { id: 'proximal_phalanx_3_r', latin: 'Phalanx Proximalis III Dextra', turkish: '3. Yakın Parmak Kemiği (Sağ Orta)', english: 'Proximal Phalanx 3rd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Yakın.', nursingNote: 'Buddy taping (Kardeş bantlama).', clinicalImportance: 'Ekseni oluşturur.' },
  { id: 'middle_phalanx_3_r', latin: 'Phalanx Media III Dextra', turkish: '3. Orta Parmak Kemiği (Sağ Orta)', english: 'Middle Phalanx 3rd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Tendon onarımı sonrası fizik tedavi.', clinicalImportance: 'PIP eklem.' },
  { id: 'distal_phalanx_3_r', latin: 'Phalanx Distalis III Dextra', turkish: '3. Uzak Parmak Kemiği (Sağ Orta)', english: 'Distal Phalanx 3rd Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Uzakta.', nursingNote: 'Tırnak altı hematom (kan toplanması) iğne ucuyla delinip boşaltılır (trepanasyon) ağrıyı keser.', clinicalImportance: 'Ezilme yaralanmaları sıktır.' },
  { id: 'proximal_phalanx_4_r', latin: 'Phalanx Proximalis IV Dextra', turkish: '4. Yakın Parmak Kemiği (Sağ Yüzük)', english: 'Proximal Phalanx 4th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Yakın.', nursingNote: 'Yüzük parmağında sinir uyuşması (Ulnar sinir) takibi.', clinicalImportance: 'Dupuytren kontraktürü bu parmakları içeri çeker.' },
  { id: 'middle_phalanx_4_r', latin: 'Phalanx Media IV Dextra', turkish: '4. Orta Parmak Kemiği (Sağ Yüzük)', english: 'Middle Phalanx 4th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Yüzük.', clinicalImportance: 'Tendon hasarları.' },
  { id: 'distal_phalanx_4_r', latin: 'Phalanx Distalis IV Dextra', turkish: '4. Uzak Parmak Kemiği (Sağ Yüzük)', english: 'Distal Phalanx 4th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Uzakta.', nursingNote: 'Kan şekeri ölçümü genelde 3. ve 4. parmakların yan (etine dolgun) kısımlarından iğnelenerek alınır.', clinicalImportance: 'DIP eklemi.' },
  { id: 'proximal_phalanx_5_r', latin: 'Phalanx Proximalis V Dextra', turkish: '5. Yakın Parmak Kemiği (Sağ Serçe)', english: 'Proximal Phalanx 5th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Yakın.', nursingNote: 'Boksör kırığına eşlik edebilir.', clinicalImportance: 'Ulnar sinir lezyonunda deforme olur (Pençe el).' },
  { id: 'middle_phalanx_5_r', latin: 'Phalanx Media V Dextra', turkish: '5. Orta Parmak Kemiği (Sağ Serçe)', english: 'Middle Phalanx 5th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Parmak ateli.', clinicalImportance: 'Küçük parmak PIP.' },
  { id: 'distal_phalanx_5_r', latin: 'Phalanx Distalis V Dextra', turkish: '5. Uzak Parmak Kemiği (Sağ Serçe)', english: 'Distal Phalanx 5th Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Uzakta.', nursingNote: 'Serçe parmak ucunda his yoksa ulnar sinir felci.', clinicalImportance: 'Küçük parmak ucu.' },
  { id: 'proximal_phalanx_1_l', latin: 'Phalanx Proximalis I Sinistra', turkish: '1. Yakın Parmak Kemiği (Sol Başparmak)', english: 'Proximal Phalanx 1st Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Başparmak', nursingNote: 'Amputasyon ilk yardımı.', clinicalImportance: 'Medial phalanx yok.' },
  { id: 'distal_phalanx_1_l', latin: 'Phalanx Distalis I Sinistra', turkish: '1. Uzak Parmak Kemiği (Sol Başparmak)', english: 'Distal Phalanx 1st Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Başparmak ucu', nursingNote: 'Tırnak altı ezilmeler.', clinicalImportance: 'Tırnak yatağı.' },
  { id: 'proximal_phalanx_2_l', latin: 'Phalanx Proximalis II Sinistra', turkish: '2. Yakın Parmak Kemiği (Sol İşaret)', english: 'Proximal Phalanx 2nd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı.', nursingNote: 'Buddy taping.', clinicalImportance: 'Romatoid artrit şişliği.' },
  { id: 'middle_phalanx_2_l', latin: 'Phalanx Media II Sinistra', turkish: '2. Orta Parmak Kemiği (Sol İşaret)', english: 'Middle Phalanx 2nd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı ortası.', nursingNote: 'Tendon muayenesi.', clinicalImportance: 'Bouchard nodülü.' },
  { id: 'distal_phalanx_2_l', latin: 'Phalanx Distalis II Sinistra', turkish: '2. Uzak Parmak Kemiği (Sol İşaret)', english: 'Distal Phalanx 2nd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı ucu.', nursingNote: 'Pulse oksimetre takma yeri.', clinicalImportance: 'Heberden nodülü.' },
  { id: 'proximal_phalanx_3_l', latin: 'Phalanx Proximalis III Sinistra', turkish: '3. Yakın Parmak Kemiği (Sol Orta)', english: 'Proximal Phalanx 3rd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak.', nursingNote: 'Atelleme.', clinicalImportance: 'Eksen parmağı.' },
  { id: 'middle_phalanx_3_l', latin: 'Phalanx Media III Sinistra', turkish: '3. Orta Parmak Kemiği (Sol Orta)', english: 'Middle Phalanx 3rd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak ortası.', nursingNote: 'ROM egzersizi.', clinicalImportance: 'PIP eklem.' },
  { id: 'distal_phalanx_3_l', latin: 'Phalanx Distalis III Sinistra', turkish: '3. Uzak Parmak Kemiği (Sol Orta)', english: 'Distal Phalanx 3rd Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak ucu.', nursingNote: 'Tırnak altı trepanasyon.', clinicalImportance: 'Elin en uç noktası.' },
  { id: 'proximal_phalanx_4_l', latin: 'Phalanx Proximalis IV Sinistra', turkish: '4. Yakın Parmak Kemiği (Sol Yüzük)', english: 'Proximal Phalanx 4th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı.', nursingNote: 'Ödem riski.', clinicalImportance: 'Dupuytren kontraktürü.' },
  { id: 'middle_phalanx_4_l', latin: 'Phalanx Media IV Sinistra', turkish: '4. Orta Parmak Kemiği (Sol Yüzük)', english: 'Middle Phalanx 4th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı ortası.', nursingNote: 'Kan dolaşımı.', clinicalImportance: 'PIP eklem.' },
  { id: 'distal_phalanx_4_l', latin: 'Phalanx Distalis IV Sinistra', turkish: '4. Uzak Parmak Kemiği (Sol Yüzük)', english: 'Distal Phalanx 4th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı ucu.', nursingNote: 'Kan şekeri ölçüm (Stix) yeri.', clinicalImportance: 'DIP eklem.' },
  { id: 'proximal_phalanx_5_l', latin: 'Phalanx Proximalis V Sinistra', turkish: '5. Yakın Parmak Kemiği (Sol Serçe)', english: 'Proximal Phalanx 5th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Serçe parmak.', nursingNote: 'Sinir muayenesi.', clinicalImportance: 'Pençe el görünümü.' },
  { id: 'middle_phalanx_5_l', latin: 'Phalanx Media V Sinistra', turkish: '5. Orta Parmak Kemiği (Sol Serçe)', english: 'Middle Phalanx 5th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Serçe parmak ortası.', nursingNote: 'Atelleme.', clinicalImportance: 'Küçük parmak PIP.' },
  { id: 'distal_phalanx_5_l', latin: 'Phalanx Distalis V Sinistra', turkish: '5. Uzak Parmak Kemiği (Sol Serçe)', english: 'Distal Phalanx 5th Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Serçe parmak ucu.', nursingNote: 'Kanlanma.', clinicalImportance: 'Küçük parmak ucu.' },
  // Alt Ekstremite
  { id: 'ilium_r', latin: 'Os Ilium Dextrum', turkish: 'Sağ Leğen (Böğür) Kemiği', english: 'Right Ilium', region: 'Alt Ekstremite', mnemonic: 'İliyak kanat (Fil kulağı).', nursingNote: 'Kemik iliği biyopsisi ve aspirasyonu en sık Posterior Superior İliyak Spina (PSIS) yani kalçanın üst arka çıkıntısından yapılır.', clinicalImportance: 'Pelvisin en büyük parçasıdır, kalça eklemi yuvasının (asetabulum) büyük kısmını oluşturur.' },
  { id: 'ischium_r', latin: 'Os Ischii Dextrum', turkish: 'Sağ Oturga Kemiği', english: 'Right Ischium', region: 'Alt Ekstremite', mnemonic: 'İşkembe üstüne oturulmaz, İskiyum üstüne oturulur.', nursingNote: 'Tekerlekli sandalyeye bağımlı hastalarda İskial tüberosit (oturma kemiği) üzerinde yatak yarası (bası ülseri) çok hızlı açılır. Havalı minder şarttır.', clinicalImportance: 'Oturduğumuzda ağırlığımızı taşıyan kemiktir (Tuber ischiadicum).' },
  { id: 'pubis_r', latin: 'Os Pubis Dextrum', turkish: 'Sağ Çatı Kemiği', english: 'Right Pubis', region: 'Alt Ekstremite', mnemonic: 'Pubis = Kasık bölgesi (Pubik kıl).', nursingNote: 'Pelvis kırıkları mesane (idrar kesesi) veya üretra yırtılmasına yol açabilir. Sonda takılırken kan gelirse (üretral kanama) üroloji uzmanı beklenir, zorlanmaz.', clinicalImportance: 'Önde iki pubis kemiği birleşerek Symphysis Pubis eklemini yapar (doğumda esner).' },
  { id: 'ilium_l', latin: 'Os Ilium Sinistrum', turkish: 'Sol Leğen (Böğür) Kemiği', english: 'Left Ilium', region: 'Alt Ekstremite', mnemonic: 'İliyak kanat (Fil kulağı).', nursingNote: 'İntramüsküler (İM) enjeksiyon yapılırken iliyak krista nirengi noktası alınır (Ventrogluteal bölge için güvenli alan tayini).', clinicalImportance: 'Geniş kas tutunma yüzeyidir.' },
  { id: 'ischium_l', latin: 'Os Ischii Sinistrum', turkish: 'Sol Oturga Kemiği', english: 'Left Ischium', region: 'Alt Ekstremite', mnemonic: 'Oturduğumuz kemik.', nursingNote: 'Oturma pozisyonunda saatte bir ağırlık aktarımı (shift) eğitimi verilir.', clinicalImportance: 'Hamstring (arka bacak) kasları buradan başlar.' },
  { id: 'pubis_l', latin: 'Os Pubis Sinistrum', turkish: 'Sol Çatı Kemiği', english: 'Left Pubis', region: 'Alt Ekstremite', mnemonic: 'Pubis.', nursingNote: 'Ağır pelvik travmalarda iç kanama hayatı tehdit eder, pelvik bağlayıcı (binder) takılır.', clinicalImportance: 'Mesanenin hemen önünde yer alır korur.' },
  { id: 'femur_r', latin: 'Os Femoris Dextrum', turkish: 'Sağ Uyluk Kemiği', english: 'Right Femur', region: 'Alt Ekstremite', mnemonic: 'Ferrari = En uzun, en hızlı (koşmak için), en güçlü kemik.', nursingNote: 'Yaşlılarda osteoporoz nedeniyle en sık "Femur Boyun Kırığı" görülür. Hasta bacağını dışa dönük ve kısa tutar. Ameliyat sonrası bacak bacak üstüne atması (çıkık riski) yasaklanır.', clinicalImportance: 'Kırıklarında uyluk içine 1.5 - 2 litre kanayabilir (hipovolemik şok riski).' },
  { id: 'femur_l', latin: 'Os Femoris Sinistrum', turkish: 'Sol Uyluk Kemiği', english: 'Left Femur', region: 'Alt Ekstremite', mnemonic: 'Vücudun en uzun kemiği.', nursingNote: 'Femur kırıklarında yağ embolisi riski yüksektir (hasta aniden nefes darlığı ve göğüs ağrısı çekerse akla gelmelidir).', clinicalImportance: 'Büyük trokanter (Trochanter major) dışarıdan kalçada elle hissedilen çıkıntıdır.' },
  { id: 'patella_r', latin: 'Patella Dextra', turkish: 'Sağ Diz Kapağı Kemiği', english: 'Right Patella', region: 'Alt Ekstremite', mnemonic: 'Nutella kapağı gibi.', nursingNote: 'Diz üstüne düşmelerde kırılabilir. Diz eklemi içinde sıvı toplanması (efüzyon) patella balotmanı (yüzdürme testi) ile muayene edilir.', clinicalImportance: 'Vücudun en büyük sesamoid (tendon içi) kemiğidir. Quadriceps kasının gücünü artırır.' },
  { id: 'patella_l', latin: 'Patella Sinistra', turkish: 'Sol Diz Kapağı Kemiği', english: 'Left Patella', region: 'Alt Ekstremite', mnemonic: 'Nutella kapağı.', nursingNote: 'Diz ameliyatları (artroskopi) sonrası bacak düz (ekstansiyon) tutulur ve kas güçlendirme (izometrik) başlanır.', clinicalImportance: 'Diz eklemini önden korur.' },
  { id: 'tibia_r', latin: 'Tibia Dextra', turkish: 'Sağ Kaval Kemiği', english: 'Right Tibia (Shinbone)', region: 'Alt Ekstremite', mnemonic: 'Kalın T (Tibia).', nursingNote: 'Ödem muayenesi (gode bırakan ödem) tibianın ön yüzündeki kemiğin üstüne parmakla bastırılarak yapılır (kalp yetmezliği vb. için).', clinicalImportance: 'Bacağın asıl ağırlık taşıyan kemiğidir. Cilt altında (korumasız) olduğu için açık kırıkları (kemiğin dışarı çıkması) çok sıktır.' },
  { id: 'tibia_l', latin: 'Tibia Sinistra', turkish: 'Sol Kaval Kemiği', english: 'Left Tibia (Shinbone)', region: 'Alt Ekstremite', mnemonic: 'Kalın T (Tibia).', nursingNote: 'Çocuklarda (6 yaş altı) acil damar yolu bulunamazsa, kemik içi (intraosseöz) iğne tibianın üst ucundan (tuberositas tibia) takılıp hayat kurtaran sıvılar/ilaçlar verilir.', clinicalImportance: 'İç malleolü (ayak bileği iç çıkıntısını) oluşturur.' },
  { id: 'fibula_r', latin: 'Fibula Dextra', turkish: 'Sağ Baldır Kemiği', english: 'Right Fibula (Calf bone)', region: 'Alt Ekstremite', mnemonic: 'Flüt (Fibula) gibi ince.', nursingNote: 'Alçı veya sargılar çok sıkı olursa, fibula başı hizasından geçen Peroneal Sinir ezilir ve hastada "Düşük Ayak" (ayağını yukarı çekememe) gelişir.', clinicalImportance: 'Ağırlık taşımaz. Kaslara tutunma yeri sağlar ve ayak bileğinin dış tırnağını (Dış Malleol) oluşturur. Kemik grefti (yaması) için buradan parça alınabilir.' },
  { id: 'fibula_l', latin: 'Fibula Sinistra', turkish: 'Sol Baldır Kemiği', english: 'Left Fibula (Calf bone)', region: 'Alt Ekstremite', mnemonic: 'Flüt (Fibula) gibi ince.', nursingNote: 'Düşük ayak gelişimini önlemek için yatan hastanın ayak ucuna yastık veya ayak tahtası konularak ayak 90 derecede tutulur.', clinicalImportance: 'Dış malleol (ayak bileği dış çıkıntısı) kırıkları sıktır.' },
  { id: 'talus_r', latin: 'Talus Dexter', turkish: 'Sağ Aşık Kemiği', english: 'Right Talus', region: 'Alt Ekstremite', mnemonic: 'Talus = Tavan (Ayağın çatısı, tibia ona oturur).', nursingNote: 'Ayak bileği burkulmalarında en çok zorlanan eklemi oluşturur, elevasyon (yukarı kaldırma) şarttır.', clinicalImportance: 'Kanlanması zayıftır, kırığında avasküler nekroz (çürüme) sıktır. Kas tutunmayan tek ayak kemiğidir.' },
  { id: 'calcaneus_r', latin: 'Calcaneus Dexter', turkish: 'Sağ Topuk Kemiği', english: 'Right Calcaneus (Heel bone)', region: 'Alt Ekstremite', mnemonic: 'Kalk (Calcaneus) ve topuğuna bas.', nursingNote: 'Uzun süre yatan hastada topuklarda yatak yarası (dekübit) oluşur, topukların altına rulo havlu konarak yatağa teması kesilmelidir.', clinicalImportance: 'Ayaktaki en büyük kemiktir. Yüksekten topuk üstüne düşmelerde kırılır (Aşil tendonu buraya tutunur).' },
  { id: 'navicular_r', latin: 'Os Naviculare Dextrum', turkish: 'Sağ Sandal Kemiği (Ayak)', english: 'Right Navicular', region: 'Alt Ekstremite', mnemonic: 'Navigasyon (Navicular) gemisi sandaldır.', nursingNote: 'Düz taban (pes planus) teşhisinde yere olan yüksekliğine bakılır.', clinicalImportance: 'Ayağın uzunlamasına kemerinin (arkının) tepe noktasıdır.' },
  { id: 'cuboid_r', latin: 'Os Cuboideum Dextrum', turkish: 'Sağ Küp Kemiği', english: 'Right Cuboid', region: 'Alt Ekstremite', mnemonic: 'Küp şeklinde, ayağın dış tarafında.', nursingNote: 'Dış yan basma (inversiyon) burkulmalarında ağrır.', clinicalImportance: 'Ayağın dış kemerini (lateral ark) destekler.' },
  { id: 'medial_cuneiform_r', latin: 'Os Cuneiforme Mediale Dextrum', turkish: 'Sağ İç Kama Kemiği', english: 'Right Medial Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Cuneiform) - 3 tanedir.', nursingNote: 'Diyabetik ayak ülserleri bu basınç noktalarında açılabilir, günlük ayak bakımı eğitimi verilir.', clinicalImportance: 'Başparmak metatarsali (1.) ile eklem yapar.' },
  { id: 'intermediate_cuneiform_r', latin: 'Os Cuneiforme Intermedium Dextrum', turkish: 'Sağ Orta Kama Kemiği', english: 'Right Intermediate Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Ortadaki kama.', nursingNote: 'Uygun ayakkabı seçimi ortopedik olarak önemlidir.', clinicalImportance: '2. metatarsal ile eklem yapar (Lisfranc ekleminin kilit taşı).' },
  { id: 'lateral_cuneiform_r', latin: 'Os Cuneiforme Laterale Dextrum', turkish: 'Sağ Dış Kama Kemiği', english: 'Right Lateral Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Dıştaki kama.', nursingNote: 'Ayak arkı çöktüğünde yürüyüş bozukluğu oluşur.', clinicalImportance: '3. metatarsal ile eklem yapar.' },
  { id: 'talus_l', latin: 'Talus Sinister', turkish: 'Sol Aşık Kemiği', english: 'Left Talus', region: 'Alt Ekstremite', mnemonic: 'Tavan (Tibia buna oturur).', nursingNote: 'RICE (Rest, Ice, Compression, Elevation) burkulma ilkyardımıdır.', clinicalImportance: 'Avasküler nekroz riski.' },
  { id: 'calcaneus_l', latin: 'Calcaneus Sinister', turkish: 'Sol Topuk Kemiği', english: 'Left Calcaneus', region: 'Alt Ekstremite', mnemonic: 'Kalk (Calcaneus).', nursingNote: 'Topuk vurma yürüyüş fazında yük taşır. Topuk dikeni (plantar fasiit) burada olur.', clinicalImportance: 'Topuk dikeni yeri.' },
  { id: 'navicular_l', latin: 'Os Naviculare Sinistrum', turkish: 'Sol Sandal Kemiği (Ayak)', english: 'Left Navicular', region: 'Alt Ekstremite', mnemonic: 'Sandal.', nursingNote: 'Ark çökmesi.', clinicalImportance: 'Medial longitudinal arkın merkez taşı.' },
  { id: 'cuboid_l', latin: 'Os Cuboideum Sinistrum', turkish: 'Sol Küp Kemiği', english: 'Left Cuboid', region: 'Alt Ekstremite', mnemonic: 'Küp.', nursingNote: 'Ayağın dış tarafı.', clinicalImportance: 'Lateral ark desteği.' },
  { id: 'medial_cuneiform_l', latin: 'Os Cuneiforme Mediale Sinistrum', turkish: 'Sol İç Kama Kemiği', english: 'Left Medial Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (İç).', nursingNote: 'Diyabetik ayak kontrolü.', clinicalImportance: '1. parmak kökü.' },
  { id: 'intermediate_cuneiform_l', latin: 'Os Cuneiforme Intermedium Sinistrum', turkish: 'Sol Orta Kama Kemiği', english: 'Left Intermediate Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Orta).', nursingNote: 'Ortopedik tabanlık (pes planus için).', clinicalImportance: 'Lisfranc eklemi nirengisi.' },
  { id: 'lateral_cuneiform_l', latin: 'Os Cuneiforme Laterale Sinistrum', turkish: 'Sol Dış Kama Kemiği', english: 'Left Lateral Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Dış).', nursingNote: 'Ayak anatomisini koruma.', clinicalImportance: '3. metatarsa tutunur.' },
  { id: 'metatarsal_1_r', latin: 'Os Metatarsi I Dextrum', turkish: '1. Ayak Tarak Kemiği (Sağ)', english: '1st Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: 'Ayak başparmağı kökü.', nursingNote: 'Gut hastalığında en sık buradaki eklem şişer, kızarır ve çok ağrılı olur (Podagra). Çarşaf değmesi bile ağrıtır, yatak örtüsü ayak ucuna yükseltilerek serilir (bed cradle).', clinicalImportance: 'Halluks Valgus (başparmak çıkıntısı) bu kemiğin başının dışarı doğru eğilmesidir.' },
  { id: 'metatarsal_1_l', latin: 'Os Metatarsi I Sinistrum', turkish: '1. Ayak Tarak Kemiği (Sol)', english: '1st Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: 'Ayak başparmağı kökü.', nursingNote: 'Gut atağında diyet (pürinden fakir) ve ağrı kontrolü.', clinicalImportance: 'Vücut ağırlığını taşımada çok aktiftir, altındaki sesamoid kemikler yürümeyi kolaylaştırır.' },
  { id: 'metatarsal_2_r', latin: 'Os Metatarsi II Dextrum', turkish: '2. Ayak Tarak Kemiği (Sağ)', english: '2nd Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Askerlerde veya çok yürüyenlerde stres (yorgunluk) kırığı en sık bu kemikte görülür (March fracture / Yürüyüş kırığı).', clinicalImportance: 'Ayağın en uzun metatarsalidir.' },
  { id: 'metatarsal_2_l', latin: 'Os Metatarsi II Sinistrum', turkish: '2. Ayak Tarak Kemiği (Sol)', english: '2nd Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Yeni spora başlayanlarda ayak üstünde şişlik/ağrı (stres kırığı şüphesi).', clinicalImportance: 'Uzun olduğu için kırılmaya yatkındır.' },
  { id: 'metatarsal_3_r', latin: 'Os Metatarsi III Dextrum', turkish: '3. Ayak Tarak Kemiği (Sağ)', english: '3rd Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: '3. ve 4. parmak arasında Morton Nöroması (sinir sıkışması) sık olur, ayakkabı vurdukça elektrik çarpar gibi ağrı yapar.', clinicalImportance: 'Merkezi metatarsal.' },
  { id: 'metatarsal_3_l', latin: 'Os Metatarsi III Sinistrum', turkish: '3. Ayak Tarak Kemiği (Sol)', english: '3rd Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: 'Geniş burunlu ayakkabı önerilir.', clinicalImportance: 'Transvers ark parçası.' },
  { id: 'metatarsal_4_r', latin: 'Os Metatarsi IV Dextrum', turkish: '4. Ayak Tarak Kemiği (Sağ)', english: '4th Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Travmalarda ezilme riski.', clinicalImportance: 'Dış ağırlık aktarımı.' },
  { id: 'metatarsal_4_l', latin: 'Os Metatarsi IV Sinistrum', turkish: '4. Ayak Tarak Kemiği (Sol)', english: '4th Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Diyabetik hastada hissizlik (nöropati) varsa ayakkabı içini eliyle kontrol etmeli (taş vs. varsa hissetmez, yara açılır).', clinicalImportance: 'Dış ağırlık aktarımı.' },
  { id: 'metatarsal_5_r', latin: 'Os Metatarsi V Dextrum', turkish: '5. Ayak Tarak Kemiği (Sağ)', english: '5th Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: 'Serçe parmak kökü.', nursingNote: 'Bilek burkulmalarında bu kemiğin kökü (bazis) koparak kırılabilir (Jones kırığı). Alçı tedavisi uzundur.', clinicalImportance: 'M. Peroneus brevis tendonu buraya tutunur ve burkulmada kemiği koparabilir.' },
  { id: 'metatarsal_5_l', latin: 'Os Metatarsi V Sinistrum', turkish: '5. Ayak Tarak Kemiği (Sol)', english: '5th Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: 'Serçe parmak kökü.', nursingNote: 'Ayak dış yanına basamama şikayeti (Jones kırığı şüphesi).', clinicalImportance: 'Avülsiyon (kopma) kırığı sıktır.' },
  { id: 'pedal_proximal_phalanx_1_r', latin: 'Phalanx Proximalis I Dextra (Pedis)', turkish: '1. Yakın Parmak Kemiği (Sağ Ayak Başparmağı)', english: 'Proximal Phalanx 1st Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Büyük parmak (Hallux).', nursingNote: 'Diyabetik ayak ampütasyonları en sık başparmaktan başlar. Parmak aralarının nemli kalmaması, kurulanması (mantar olmaması için) öğretilir.', clinicalImportance: 'Halluks rigidus (kireçlenmesi) yürümeyi engeller.' },
  { id: 'pedal_distal_phalanx_1_r', latin: 'Phalanx Distalis I Dextra (Pedis)', turkish: '1. Uzak Parmak Kemiği (Sağ Ayak Başparmağı)', english: 'Distal Phalanx 1st Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Başparmak ucu.', nursingNote: 'Tırnak batması en sık burada olur (Onychocryptosis). Tırnakların düz (kavisli değil) kesilmesi eğitimidir.', clinicalImportance: 'Tırnak yatağı enfeksiyonu (dolama / paronişi) sıktır.' },
  { id: 'pedal_proximal_phalanx_2_r', latin: 'Phalanx Proximalis II Dextra (Pedis)', turkish: '2. Yakın Parmak Kemiği (Sağ Ayak 2. Parmak)', english: 'Proximal Phalanx 2nd Toe (Right)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Çekiç parmak (hammer toe) deformitesinde parmak atelleri kullanılır.', clinicalImportance: 'Bazen başparmaktan daha uzun olabilir (Yunan ayağı / Morton toe).' },
  { id: 'pedal_middle_phalanx_2_r', latin: 'Phalanx Media II Dextra (Pedis)', turkish: '2. Orta Parmak Kemiği (Sağ Ayak 2. Parmak)', english: 'Middle Phalanx 2nd Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Nasır oluşum yerleri.', clinicalImportance: 'PIP eklem bükülmesi (çekiç parmak).' },
  { id: 'pedal_distal_phalanx_2_r', latin: 'Phalanx Distalis II Dextra (Pedis)', turkish: '2. Uzak Parmak Kemiği (Sağ Ayak 2. Parmak)', english: 'Distal Phalanx 2nd Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Uygun ayakkabı, parmak uçlarının vurmasını önler.', clinicalImportance: 'Tırnak yatağı.' },
  { id: 'pedal_proximal_phalanx_3_r', latin: 'Phalanx Proximalis III Dextra (Pedis)', turkish: '3. Yakın Parmak Kemiği (Sağ Ayak 3. Parmak)', english: 'Proximal Phalanx 3rd Toe (Right)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: 'Diyabetik nöropatide his kaybı başlar.', clinicalImportance: 'Klavus (Nasır) sırtta oluşabilir.' },
  { id: 'pedal_middle_phalanx_3_r', latin: 'Phalanx Media III Dextra (Pedis)', turkish: '3. Orta Parmak Kemiği (Sağ Ayak 3. Parmak)', english: 'Middle Phalanx 3rd Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Temizlik ve kurutma (Tinea pedis/mantar önlemi).', clinicalImportance: 'Deformiteler.' },
  { id: 'pedal_distal_phalanx_3_r', latin: 'Phalanx Distalis III Dextra (Pedis)', turkish: '3. Uzak Parmak Kemiği (Sağ Ayak 3. Parmak)', english: 'Distal Phalanx 3rd Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Ayak muayenesi.', clinicalImportance: 'Tırnak yapısı.' },
  { id: 'pedal_proximal_phalanx_4_r', latin: 'Phalanx Proximalis IV Dextra (Pedis)', turkish: '4. Yakın Parmak Kemiği (Sağ Ayak 4. Parmak)', english: 'Proximal Phalanx 4th Toe (Right)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Dar ayakkabılar üst üste binmesine (overlapping) neden olur.', clinicalImportance: 'Üst üste binme deformitesi.' },
  { id: 'pedal_middle_phalanx_4_r', latin: 'Phalanx Media IV Dextra (Pedis)', turkish: '4. Orta Parmak Kemiği (Sağ Ayak 4. Parmak)', english: 'Middle Phalanx 4th Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Silikon parmak arası makarası kullanımı.', clinicalImportance: 'Küçük parmak yapısı.' },
  { id: 'pedal_distal_phalanx_4_r', latin: 'Phalanx Distalis IV Dextra (Pedis)', turkish: '4. Uzak Parmak Kemiği (Sağ Ayak 4. Parmak)', english: 'Distal Phalanx 4th Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Mantar enfeksiyonları (tırnak).', clinicalImportance: 'Tırnak distrofileri.' },
  { id: 'pedal_proximal_phalanx_5_r', latin: 'Phalanx Proximalis V Dextra (Pedis)', turkish: '5. Yakın Parmak Kemiği (Sağ Ayak Serçe Parmak)', english: 'Proximal Phalanx 5th Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Serçe (Kapıya en çok çarpan).', nursingNote: 'Geceleri mobilyalara çarpılarak kırılması (Bedroom fracture) çok meşhurdur. Buddy taping (komşu parmağa bantlama) ile iyileşir, alçı gerekmez.', clinicalImportance: 'Sık kırılır (yataktan/kapıdan çıkarken çarpma).' },
  { id: 'pedal_middle_phalanx_5_r', latin: 'Phalanx Media V Dextra (Pedis)', turkish: '5. Orta Parmak Kemiği (Sağ Ayak Serçe Parmak)', english: 'Middle Phalanx 5th Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Ortada (Serçe).', nursingNote: 'Ayakkabı basısı kist/nasır yapar.', clinicalImportance: 'Bazen orta ve distal falanks kaynaşık (tek kemik) olabilir (normal varyasyon).' },
  { id: 'pedal_distal_phalanx_5_r', latin: 'Phalanx Distalis V Dextra (Pedis)', turkish: '5. Uzak Parmak Kemiği (Sağ Ayak Serçe Parmak)', english: 'Distal Phalanx 5th Toe (Right)', region: 'Alt Ekstremite', mnemonic: 'Serçe uç.', nursingNote: 'Tırnak genelde kaybolmaya yüz tutar.', clinicalImportance: 'Klavus (Nasır) en sık dış yanına oturur (Tailor\'s bunion / Terzi nasırı).' },
  { id: 'pedal_proximal_phalanx_1_l', latin: 'Phalanx Proximalis I Sinistra (Pedis)', turkish: '1. Yakın Parmak Kemiği (Sol Ayak Başparmağı)', english: 'Proximal Phalanx 1st Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Büyük parmak (Hallux).', nursingNote: 'Diyabetik ayak eğitiminde tırnak kesimi (düz) öğretilir.', clinicalImportance: 'Gut hastalığında şişme.' },
  { id: 'pedal_distal_phalanx_1_l', latin: 'Phalanx Distalis I Sinistra (Pedis)', turkish: '1. Uzak Parmak Kemiği (Sol Ayak Başparmağı)', english: 'Distal Phalanx 1st Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Başparmak ucu.', nursingNote: 'Tırnak batması cerrahisi (fenol ile koterizasyon).', clinicalImportance: 'Paronişi.' },
  { id: 'pedal_proximal_phalanx_2_l', latin: 'Phalanx Proximalis II Sinistra (Pedis)', turkish: '2. Yakın Parmak Kemiği (Sol Ayak 2. Parmak)', english: 'Proximal Phalanx 2nd Toe (Left)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Yunan ayağı varsa büyük ayakkabı alınmalı.', clinicalImportance: 'Morton nöroması (2-3 arası da olur).' },
  { id: 'pedal_middle_phalanx_2_l', latin: 'Phalanx Media II Sinistra (Pedis)', turkish: '2. Orta Parmak Kemiği (Sol Ayak 2. Parmak)', english: 'Middle Phalanx 2nd Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Çekiç parmak pedleri.', clinicalImportance: 'Fleksör tendon çekmesi.' },
  { id: 'pedal_distal_phalanx_2_l', latin: 'Phalanx Distalis II Sinistra (Pedis)', turkish: '2. Uzak Parmak Kemiği (Sol Ayak 2. Parmak)', english: 'Distal Phalanx 2nd Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Ayak hijyeni.', clinicalImportance: 'Nasır oluşumu.' },
  { id: 'pedal_proximal_phalanx_3_l', latin: 'Phalanx Proximalis III Sinistra (Pedis)', turkish: '3. Yakın Parmak Kemiği (Sol Ayak 3. Parmak)', english: 'Proximal Phalanx 3rd Toe (Left)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: 'Diyabetik nöropati muayenesi (monofilament testi) yapılır.', clinicalImportance: 'Pençe parmak deformitesi.' },
  { id: 'pedal_middle_phalanx_3_l', latin: 'Phalanx Media III Sinistra (Pedis)', turkish: '3. Orta Parmak Kemiği (Sol Ayak 3. Parmak)', english: 'Middle Phalanx 3rd Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Günlük yıkama ve kurulama.', clinicalImportance: 'Deformite.' },
  { id: 'pedal_distal_phalanx_3_l', latin: 'Phalanx Distalis III Sinistra (Pedis)', turkish: '3. Uzak Parmak Kemiği (Sol Ayak 3. Parmak)', english: 'Distal Phalanx 3rd Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Tırnak mantarı (Onikomikoz) takibi.', clinicalImportance: 'Enfeksiyon riski.' },
  { id: 'pedal_proximal_phalanx_4_l', latin: 'Phalanx Proximalis IV Sinistra (Pedis)', turkish: '4. Yakın Parmak Kemiği (Sol Ayak 4. Parmak)', english: 'Proximal Phalanx 4th Toe (Left)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Parmak arası makarası (Silikon) tavsiyesi.', clinicalImportance: 'Overlapping (Üst üste binme).' },
  { id: 'pedal_middle_phalanx_4_l', latin: 'Phalanx Media IV Sinistra (Pedis)', turkish: '4. Orta Parmak Kemiği (Sol Ayak 4. Parmak)', english: 'Middle Phalanx 4th Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Sürtünme önleyici krem/pudra.', clinicalImportance: 'Sürtünme nasırları (Heloma molle).' },
  { id: 'pedal_distal_phalanx_4_l', latin: 'Phalanx Distalis IV Sinistra (Pedis)', turkish: '4. Uzak Parmak Kemiği (Sol Ayak 4. Parmak)', english: 'Distal Phalanx 4th Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Uçta.', nursingNote: 'Düzenli ayak tabanı kontrolü (ayna ile).', clinicalImportance: 'Tırnak.' },
  { id: 'pedal_proximal_phalanx_5_l', latin: 'Phalanx Proximalis V Sinistra (Pedis)', turkish: '5. Yakın Parmak Kemiği (Sol Ayak Serçe Parmak)', english: 'Proximal Phalanx 5th Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Serçe parmak.', nursingNote: 'Yatak odası (Bedroom) kırığı, buddy taping (komşuya flasterleme).', clinicalImportance: 'En sık çarpılarak kırılan parmak.' },
  { id: 'pedal_middle_phalanx_5_l', latin: 'Phalanx Media V Sinistra (Pedis)', turkish: '5. Orta Parmak Kemiği (Sol Ayak Serçe Parmak)', english: 'Middle Phalanx 5th Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Ortada.', nursingNote: 'Flasterleme süresi ortalama 3-4 haftadır.', clinicalImportance: 'Kaynaşık olabilen falanks.' },
  { id: 'pedal_distal_phalanx_5_l', latin: 'Phalanx Distalis V Sinistra (Pedis)', turkish: '5. Uzak Parmak Kemiği (Sol Ayak Serçe Parmak)', english: 'Distal Phalanx 5th Toe (Left)', region: 'Alt Ekstremite', mnemonic: 'Serçe uç.', nursingNote: 'Küçük burunlu ayakkabılardan kaçınılmalı.', clinicalImportance: 'Terzi nasırı (Bunionette).' }
];

// ============================================================
// KAS SİSTEMİ
// ============================================================
const musclesData = [
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

const circulatoryData = [
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

// ============================================================
// SİNİR SİSTEMİ (App.tsx içinde kalıyor)
// ============================================================
const nervousData = [
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

// ============================================================
// ANA UYGULAMA
// ============================================================
const AnatomyAtlasApp = () => {
  const [currentView, setCurrentView] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Merhaba! Ben RYK Atlas asistanıyım. Organlar, kemikler, kaslar veya hemşirelik notları hakkında soru sorabilirsiniz.' },
  ]);
  const chatEndRef = useRef(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (currentView === 'assistant') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, currentView]);

  const goBack = () => {
    if (selectedItem) setSelectedItem(null);
    else if (selectedSystem) setSelectedSystem(null);
  };

  const toggleFavorite = (id) => {
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
    ? selectedSystem.data.filter((item) => {
        if (!searchQuery) return true;
        return (
          item.latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.turkish.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : [];

  // ============================================================
  // DETAY GÖRÜNÜMÜ
  // ============================================================
  if (selectedItem) {
    const isFav = favorites.includes(selectedItem.id);
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
        <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-4 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
          <button onClick={goBack} className="p-2 rounded-full hover:bg-slate-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span>{selectedSystem?.emoji}</span>
            <span>{selectedSystem?.title}</span>
          </h1>
        </header>

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

  // ============================================================
  // SİSTEM LİSTE GÖRÜNÜMÜ
  // ============================================================
  if (selectedSystem) {
    const groupedItems = filteredItems.reduce((acc, item) => {
      if (!acc[item.region]) acc[item.region] = [];
      acc[item.region].push(item);
      return acc;
    }, {});

    const totalCount = selectedSystem.id === 'skeletal' && searchQuery === '' ? 206 : filteredItems.length;

    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
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

  // ============================================================
  // ANA GÖRÜNÜMLER (Keşfet, Quiz, Asistan, Profil)
  // ============================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-5 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div>
          <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-tight">RYK ATLAS</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Hemşirelik Anatomisi</p>
        </div>
        <div className="text-xs font-medium text-blue-400/80 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
          "Anatomi artık cebinde"
        </div>
      </header>

      {currentView === 'explore' && (
        <main className="px-4 max-w-2xl mx-auto py-6 pb-24">
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
        <main className="px-4 max-w-xl mx-auto py-6 pb-24">
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
        <main className="px-4 py-4 max-w-2xl mx-auto h-[calc(100vh-140px)] flex flex-col pb-24">
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

            <div className="flex-1 p-5 overflow-y-auto space-y-4 mb-4">
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
        <main className="px-4 max-w-xl mx-auto py-6 pb-24">
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
              { icon: Star, label: `Favorilerim (${favorites.length})`, color: 'text-yellow-400' },
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

      {/* ============================================================ */}
      {/* ALT NAVİGASYON BARI (EKLENEN KISIM) */}
      {/* ============================================================ */}
      {!selectedSystem && !selectedItem && (
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 z-50">
          <div className="flex justify-around items-center p-3 max-w-2xl mx-auto">
            <button 
              onClick={() => setCurrentView('explore')} 
              className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'explore' ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Compass className={`w-6 h-6 ${currentView === 'explore' ? 'fill-blue-500/20' : ''}`} />
              <span className="text-[10px] font-bold tracking-wider">Keşfet</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('quiz')} 
              className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'quiz' ? 'text-green-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <GraduationCap className={`w-6 h-6 ${currentView === 'quiz' ? 'fill-green-500/20' : ''}`} />
              <span className="text-[10px] font-bold tracking-wider">Quiz</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('assistant')} 
              className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'assistant' ? 'text-purple-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Bot className={`w-6 h-6 ${currentView === 'assistant' ? 'fill-purple-500/20' : ''}`} />
              <span className="text-[10px] font-bold tracking-wider">Asistan</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('profile')} 
              className={`flex flex-col items-center gap-1.5 transition-colors ${currentView === 'profile' ? 'text-orange-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <User className={`w-6 h-6 ${currentView === 'profile' ? 'fill-orange-500/20' : ''}`} />
              <span className="text-[10px] font-bold tracking-wider">Profil</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default AnatomyAtlasApp;