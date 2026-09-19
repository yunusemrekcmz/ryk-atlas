export interface BoneData {
  id: string;
  latin: string;
  turkish: string;
  english: string;
  region: string;
  mnemonic: string;
  nursingNote: string;
  clinicalImportance: string;
}

export const bonesData: BoneData[] = [
  // ============================================================================
  // KAFATASI VE YÜZ KEMİKLERİ (Cranium & Facium) - 22 Kemik + 6 İşitme Kemikçiği + 1 Hyoid
  // ============================================================================
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

  {
    id: 'malleus_r',
    latin: 'Malleus Dextra',
    turkish: 'Sağ Çekiç Kemiği',
    english: 'Right Malleus',
    region: 'İşitme',
    mnemonic: 'Malleus = Mallet = Çekiç.',
    nursingNote: 'Orta kulak enfeksiyonlarında (otitis media) zar delinmesi riskine karşı takip.',
    clinicalImportance: 'Kulak zarına yapışıktır, sesi iletir.'
  },
  {
    id: 'malleus_l',
    latin: 'Malleus Sinistra',
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
    latin: 'Stapes Dextra',
    turkish: 'Sağ Üzengi Kemiği',
    english: 'Right Stapes',
    region: 'İşitme',
    mnemonic: 'Stapes = Step (Adım) atıp üzengiye basarsın.',
    nursingNote: 'Otoskleroz (kireçlenme) hastalarında ameliyat (stapedektomi) sonrası baş dönmesi takibi yapılır.',
    clinicalImportance: 'Vücuttaki en küçük kemiktir.'
  },
  {
    id: 'stapes_l',
    latin: 'Stapes Sinistra',
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

  // ============================================================================
  // OMURGA (Columna Vertebralis) - 24 Bağımsız + 1 Sakrum (5 kaynaşık) + 1 Koksiks (4 kaynaşık) = Toplam 26 yapı
  // (Klasik 33 omur sayımı üzerinden, birleşik olmayan halini listeleyeceğiz)
  // Toplam: C1-C7 (7), T1-T12 (12), L1-L5 (5) = 24.
  // Sakrum'u 1 parça, Koksiks'i 1 parça kabul ediyoruz yetişkin iskelet sayımında.
  // ============================================================================
  
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

  // ============================================================================
  // GÖĞÜS KAFESİ (Thorax) - 1 Sternum + 24 Kaburga = 25 Kemik
  // ============================================================================
  
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

  {
    id: 'rib_true_1_r', latin: 'Costa Vera I Dextra', turkish: '1. Gerçek Kaburga (Sağ)', english: '1st True Rib (Right)', region: 'Göğüs Kafesi',
    mnemonic: 'Gerçek kaburgalar (1-7) sternuma doğrudan bağlıdır.', nursingNote: 'Klavikula altındadır, boyun cerrahilerinde hasar görebilir.', clinicalImportance: 'Subklavyen damarlar ve brakiyal pleksus üzerinden geçer (Thoracic outlet sendromu).'
  },
  {
    id: 'rib_true_1_l', latin: 'Costa Vera I Sinistra', turkish: '1. Gerçek Kaburga (Sol)', english: '1st True Rib (Left)', region: 'Göğüs Kafesi',
    mnemonic: 'Gerçek (True).', nursingNote: 'En nadir kırılan kaburgadır çünkü korunmuştur.', clinicalImportance: 'Kırılması için çok yüksek enerji gerekir, kırık varsa iç organ hasarı mutlaka aranır.'
  },
  {
    id: 'rib_true_2_r', latin: 'Costa Vera II Dextra', turkish: '2. Gerçek Kaburga (Sağ)', english: '2nd True Rib (Right)', region: 'Göğüs Kafesi',
    mnemonic: 'Sternal açıya tutunur.', nursingNote: 'EKG elektrotlarını bağlamak veya kalbi dinlemek için kaburga aralıkları (interkostal aralık) 2. kaburgadan başlanarak sayılır.', clinicalImportance: 'Klinik değerlendirmede nirengi noktasıdır.'
  },
  {
    id: 'rib_true_2_l', latin: 'Costa Vera II Sinistra', turkish: '2. Gerçek Kaburga (Sol)', english: '2nd True Rib (Left)', region: 'Göğüs Kafesi',
    mnemonic: 'Sternal açıya tutunur.', nursingNote: 'Göğüs tüpü takılırken sinir/damar hasarı yapmamak için kaburganın üst kenarı menşe alınır.', clinicalImportance: 'Aort kapağı dinleme odağı hemen altındadır.'
  },
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

  { id: 'rib_floating_11_r', latin: 'Costa Fluctuantes XI Dextra', turkish: '11. Yüzen Kaburga (Sağ)', english: '11th Floating Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'Yüzen (Ön tarafa bağlanmazlar).', nursingNote: 'Sırt ağrısı yapan böbrek hastalıklarında (piyelonefrit) kostovertebral açı hassasiyeti (KVAH) muayenesinde vurulan yerdir.', clinicalImportance: 'Ön ucu serbesttir. Böbreklere arkadan koruma sağlar.' },
  { id: 'rib_floating_11_l', latin: 'Costa Fluctuantes XI Sinistra', turkish: '11. Yüzen Kaburga (Sol)', english: '11th Floating Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'Yüzen (Ön tarafa bağlanmazlar).', nursingNote: 'Böbrek taşı ağrısı bu bölgeden kasığa vurur.', clinicalImportance: 'Ön ucu serbesttir. Dalak ve böbreklere koruma sağlar.' },
  { id: 'rib_floating_12_r', latin: 'Costa Fluctuantes XII Dextra', turkish: '12. Yüzen Kaburga (Sağ)', english: '12th Floating Rib (Right)', region: 'Göğüs Kafesi', mnemonic: 'En kısa kaburga.', nursingNote: 'Bel bölgesi cerrahilerinde anatomik sınır olarak kullanılır.', clinicalImportance: 'Sadece 12. torakal vertebraya tutunur.' },
  { id: 'rib_floating_12_l', latin: 'Costa Fluctuantes XII Sinistra', turkish: '12. Yüzen Kaburga (Sol)', english: '12th Floating Rib (Left)', region: 'Göğüs Kafesi', mnemonic: 'En kısa kaburga.', nursingNote: 'Bazen kadınlarda "ince bel" estetiği (korse) amacıyla cerrahi olarak alınabilir (nadiren onaylanan tartışmalı bir prosedür).', clinicalImportance: 'Sadece 12. torakal vertebraya tutunur.' },


  // ============================================================================
  // ÜST EKSTREMİTE (Omuz Kemeri ve Kollar) - 64 Kemik (32 x 2)
  // ============================================================================
  
  {
    id: 'clavicle_r', latin: 'Clavicula Dextra', turkish: 'Sağ Köprücük Kemiği', english: 'Right Collarbone (Clavicle)', region: 'Üst Ekstremite',
    mnemonic: 'Klavikula = Küçük anahtar (S harfi gibi).', nursingNote: 'Yenidoğanda makrozomi (iri bebek) doğumu sırasında (omuz takılması) en sık kırılan kemiktir. Moro refleksi asimetrisi izlenir.', clinicalImportance: 'Gövde ile kol arasındaki tek kemiksel bağlantıdır. Ortasından kırılması çok sıktır.'
  },
  {
    id: 'clavicle_l', latin: 'Clavicula Sinistra', turkish: 'Sol Köprücük Kemiği', english: 'Left Collarbone (Clavicle)', region: 'Üst Ekstremite',
    mnemonic: 'Köprü görevi görür.', nursingNote: 'Kırıklarında 8 (sekiz) bandajı kullanılır, koltuk altı dolaşım bozukluğuna (sinir uyuşması) karşı takip edilir.', clinicalImportance: 'Altından subklavyen arter ve brakiyal pleksus geçer.'
  },
  {
    id: 'scapula_r', latin: 'Scapula Dextra', turkish: 'Sağ Kürek Kemiği', english: 'Right Shoulder Blade (Scapula)', region: 'Üst Ekstremite',
    mnemonic: 'Scapula = Scoop (Kürek).', nursingNote: 'Omuz çıkıkları en sık öne doğru olur, redüksiyon (yerine oturtma) sonrası omuz-kol askısı (velpau bandajı) uygulanır.', clinicalImportance: 'Omuz ekleminin (glenohumeral eklem) sığ çukurunu (glenoid kavite) oluşturur, bu yüzden çıkıklara meyllidir.'
  },
  {
    id: 'scapula_l', latin: 'Scapula Sinistra', turkish: 'Sol Kürek Kemiği', english: 'Left Shoulder Blade (Scapula)', region: 'Üst Ekstremite',
    mnemonic: 'Sırtın kanatları.', nursingNote: 'Kas zayıflığında "Kanatlanan Skapula" (Winging scapula) görülür, N. Thoracicus Longus zedelenmesi şüphesidir.', clinicalImportance: 'Rotator kılıf kaslarının (supraspinatus vb.) origo (başlangıç) noktasıdır.'
  },
  {
    id: 'humerus_r', latin: 'Humerus Dextra', turkish: 'Sağ Pazu (Kol) Kemiği', english: 'Right Humerus', region: 'Üst Ekstremite',
    mnemonic: 'Humerus (Funny bone / Komik kemik) dirseğe çarparsan "humorous" olmaz, acır.', nursingNote: 'Gövde kırıklarında N. Radialis zedelenebilir, hastada "Düşük El" (bileği kaldıramama) gelişip gelişmediği kontrol edilir.', clinicalImportance: 'Üst kolun tek kemiğidir. Cerrahi boyun kırıklarında N. Axillaris zedelenebilir.'
  },
  {
    id: 'humerus_l', latin: 'Humerus Sinistra', turkish: 'Sol Pazu (Kol) Kemiği', english: 'Left Humerus', region: 'Üst Ekstremite',
    mnemonic: 'Kolun en uzun kemiği.', nursingNote: 'Alçıya alınan kolda kompartman sendromu (aşırı şişme, morarma, şiddetli ağrı, nabız yokluğu) takibi çok acildir.', clinicalImportance: 'Dirsekte Ulnar sinir (N. Ulnaris) medial epikondil arkasından geçer (çarptığımızda elektrik çarpan yer).'
  },
  {
    id: 'radius_r', latin: 'Radius Dextra', turkish: 'Sağ Döner Kemik', english: 'Right Radius', region: 'Üst Ekstremite',
    mnemonic: 'RAdius = RAdayo anteni (Başparmak tarafındadır).', nursingNote: 'Nabız sayımının (A. Radialis) en sık yapıldığı yerdir.', clinicalImportance: 'Düşerken el açıldığında en sık kırılan kemiktir (Colles kırığı / Çatal sırtı deformitesi).'
  },
  {
    id: 'radius_l', latin: 'Radius Sinistra', turkish: 'Sol Döner Kemik', english: 'Left Radius', region: 'Üst Ekstremite',
    mnemonic: 'Başparmak tarafındaki kemik.', nursingNote: 'Çocuklarda "Dadı dirseği" (Radius başı yarı çıkığı) kolun aniden çekilmesiyle olur, kol pronasyonda kilitlenir.', clinicalImportance: 'Önkola pronasyon (içe dönme) ve supinasyon (dışa dönme) yaptırır.'
  },
  {
    id: 'ulna_r', latin: 'Ulna Dextra', turkish: 'Sağ Dirsek Kemiği', english: 'Right Ulna', region: 'Üst Ekstremite',
    mnemonic: 'U L N A = U (Küçük parmak tarafı).', nursingNote: 'Dirseğimizi masaya dayadığımız kemik çıkıntı (Olekranon) buradadır. Uzun süre dayanmak bursa iltihabı (öğrenci dirseği) yapar.', clinicalImportance: 'Radius ile birlikte ön kolu oluşturur, bilek eklemine doğrudan katılmaz.'
  },
  {
    id: 'ulna_l', latin: 'Ulna Sinistra', turkish: 'Sol Dirsek Kemiği', english: 'Left Ulna', region: 'Üst Ekstremite',
    mnemonic: 'Serçe parmak tarafı.', nursingNote: 'Saldırıdan korunmak için kol kaldırıldığında alınan darbeyle kırılır (Gece sopası kırığı / Nightstick fracture).', clinicalImportance: 'Monteggia ve Galeazzi kırıklı çıkıklarında radius ile koordineli hasar görür.'
  },

  // Sağ Karpaller
  { id: 'scaphoid_r', latin: 'Os Scaphoideum Dextra', turkish: 'Sağ Sandal Kemiği', english: 'Right Scaphoid', region: 'Üst Ekstremite', mnemonic: 'Some (Scaphoid) - En dış alt.', nursingNote: 'El bileği ağrısında (enfiye çukuru hassasiyeti) röntgende kırık görülmese bile alçıya alınır, avasküler nekroz riski yüksektir.', clinicalImportance: 'Karpal kemiklerin en sık kırılanıdır.' },
  { id: 'lunate_r', latin: 'Os Lunatum Dextra', turkish: 'Sağ Ay Kemiği', english: 'Right Lunate', region: 'Üst Ekstremite', mnemonic: 'Lovers (Lunate) - Ay şeklinde.', nursingNote: 'El bileği travmalarında çıkık şüphesi.', clinicalImportance: 'Karpal kemiklerin en sık çıkık görüleni (Luksasyon).' },
  { id: 'triquetrum_r', latin: 'Os Triquetrum Dextra', turkish: 'Sağ Üç Köşeli Kemik', english: 'Right Triquetrum', region: 'Üst Ekstremite', mnemonic: 'Try (Triquetrum) - Üç köşeli.', nursingNote: 'Pisiform kemiğin altındadır.', clinicalImportance: 'Düşmelerde ikinci en sık kırılan karpal.' },
  { id: 'pisiform_r', latin: 'Os Pisiforme Dextra', turkish: 'Sağ Bezelye Kemiği', english: 'Right Pisiform', region: 'Üst Ekstremite', mnemonic: 'Positions (Pisiform) - Bezelye gibi.', nursingNote: 'Bilekte ulnar sinir kılıfı Guyon kanalı üzerindedir.', clinicalImportance: 'Tendon içinde gelişen (sesamoid) bir kemiktir (M. flexor carpi ulnaris).' },
  { id: 'trapezium_r', latin: 'Os Trapezium Dextra', turkish: 'Sağ Çok Köşeli Büyük Kemik', english: 'Right Trapezium', region: 'Üst Ekstremite', mnemonic: 'That (Trapezium) - Thumb (Başparmak) altında.', nursingNote: 'Yaşlılarda başparmak kökü ağrısı (saddle joint kireçlenmesi) sıktır.', clinicalImportance: 'Başparmak metakarpali ile eyer tipi eklem yapar (Opozisyon hareketi).' },
  { id: 'trapezoid_r', latin: 'Os Trapezoideum Dextra', turkish: 'Sağ Çok Köşeli Küçük Kemik', english: 'Right Trapezoid', region: 'Üst Ekstremite', mnemonic: 'They (Trapezoid) - İşaret parmağı altında.', nursingNote: 'Bilek kırıkları sonrası fizik tedavi (ROM egzersizleri) kavrama gücü için şarttır.', clinicalImportance: 'Karpal dizilimin kilit taşlarındandır.' },
  { id: 'capitate_r', latin: 'Os Capitatum Dextra', turkish: 'Sağ Başlı Kemik', english: 'Right Capitate', region: 'Üst Ekstremite', mnemonic: 'Can\'t (Capitate) - Center (Merkezde, en büyük).', nursingNote: 'Travma sonrası elin dorsalinde (sırtında) şişlik takibi.', clinicalImportance: 'En büyük karpal kemiktir.' },
  { id: 'hamate_r', latin: 'Os Hamatum Dextra', turkish: 'Sağ Çengelli Kemik', english: 'Right Hamate', region: 'Üst Ekstremite', mnemonic: 'Handle (Hamate) - Hook (Çengeli var).', nursingNote: 'Golf veya tenis oynayanlarda veya el aletleri (çekiç) kullananlarda çengeli kırılabilir.', clinicalImportance: 'Kırıklarında ulnar sinir zedelenmesi görülebilir.' },
  
  // Sol Karpaller
  { id: 'scaphoid_l', latin: 'Os Scaphoideum Sinistra', turkish: 'Sol Sandal Kemiği', english: 'Left Scaphoid', region: 'Üst Ekstremite', mnemonic: 'Some (Scaphoid)', nursingNote: 'Enfiye çukurunda ağrıya dikkat.', clinicalImportance: 'Kanlanması tersten olduğu için kırıkta çürüyebilir (nekroz).' },
  { id: 'lunate_l', latin: 'Os Lunatum Sinistra', turkish: 'Sol Ay Kemiği', english: 'Left Lunate', region: 'Üst Ekstremite', mnemonic: 'Lovers (Lunate)', nursingNote: 'Median sinire baskı (Karpal Tünel) yapabilir çıkarsa.', clinicalImportance: 'Kienböck hastalığı (nekrozu) görülür.' },
  { id: 'triquetrum_l', latin: 'Os Triquetrum Sinistra', turkish: 'Sol Üç Köşeli Kemik', english: 'Left Triquetrum', region: 'Üst Ekstremite', mnemonic: 'Try (Triquetrum)', nursingNote: 'Bilek sırtında ağrı.', clinicalImportance: 'El bileği eklemine katılır.' },
  { id: 'pisiform_l', latin: 'Os Pisiforme Sinistra', turkish: 'Sol Bezelye Kemiği', english: 'Left Pisiform', region: 'Üst Ekstremite', mnemonic: 'Positions (Pisiform)', nursingNote: 'Dışarıdan palpe edilebilen tek karpal.', clinicalImportance: 'Kemikleşmesi en son tamamlanan karpaldir.' },
  { id: 'trapezium_l', latin: 'Os Trapezium Sinistra', turkish: 'Sol Çok Köşeli Büyük Kemik', english: 'Left Trapezium', region: 'Üst Ekstremite', mnemonic: 'That (Trapezium)', nursingNote: 'Başparmak kireçlenmesi cerrahisi.', clinicalImportance: 'İnsanın alet kullanabilmesini sağlayan eklemin tabanıdır.' },
  { id: 'trapezoid_l', latin: 'Os Trapezoideum Sinistra', turkish: 'Sol Çok Köşeli Küçük Kemik', english: 'Left Trapezoid', region: 'Üst Ekstremite', mnemonic: 'They (Trapezoid)', nursingNote: 'Elin kubbe yapısını korur.', clinicalImportance: '2. Metakarpal ile eklem yapar.' },
  { id: 'capitate_l', latin: 'Os Capitatum Sinistra', turkish: 'Sol Başlı Kemik', english: 'Left Capitate', region: 'Üst Ekstremite', mnemonic: 'Can\'t (Capitate)', nursingNote: 'Elin merkez ekseni 3. parmaktan geçer.', clinicalImportance: 'Kemik yaşı tayininde önemlidir.' },
  { id: 'hamate_l', latin: 'Os Hamatum Sinistra', turkish: 'Sol Çengelli Kemik', english: 'Left Hamate', region: 'Üst Ekstremite', mnemonic: 'Handle (Hamate)', nursingNote: 'Elde tutulan aletlerin vurduğu bölge.', clinicalImportance: 'Hamulus (çengel) kısmı Guyon kanalının dış duvarıdır.' },

  { id: 'metacarpal_1_r', latin: 'Os Metacarpi I Dextra', turkish: '1. El Tarak Kemiği (Sağ Başparmak)', english: '1st Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Metakarpaller tarak gibidir.', nursingNote: 'Kavga edenlerde 1. ve 5. metakarpal kırıkları sıktır.', clinicalImportance: 'Bennett veya Rolando kırığı (başparmak tabanı kırığı).' },
  { id: 'metacarpal_1_l', latin: 'Os Metacarpi I Sinistra', turkish: '1. El Tarak Kemiği (Sol Başparmak)', english: '1st Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Tarak.', nursingNote: 'Alçı parmağı içine alacak (Spica alçısı) şekilde yapılır.', clinicalImportance: 'En kısa ve kalın metakarpaldir.' },
  { id: 'metacarpal_2_r', latin: 'Os Metacarpi II Dextra', turkish: '2. El Tarak Kemiği (Sağ İşaret)', english: '2nd Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı.', nursingNote: 'Parmak ucuna dolaşım (kapiller dolum) bakılır.', clinicalImportance: 'En uzun metakarpaldir.' },
  { id: 'metacarpal_2_l', latin: 'Os Metacarpi II Sinistra', turkish: '2. El Tarak Kemiği (Sol İşaret)', english: '2nd Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'İşaret parmağı.', nursingNote: 'Ödem takibi.', clinicalImportance: 'Hareketi en kısıtlı olandır.' },
  { id: 'metacarpal_3_r', latin: 'Os Metacarpi III Dextra', turkish: '3. El Tarak Kemiği (Sağ Orta)', english: '3rd Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak.', nursingNote: 'Eli kalp seviyesinde tutmak (elevasyon) ödemi engeller.', clinicalImportance: 'Capitate ile güçlü bir bağ yapar.' },
  { id: 'metacarpal_3_l', latin: 'Os Metacarpi III Sinistra', turkish: '3. El Tarak Kemiği (Sol Orta)', english: '3rd Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Orta parmak.', nursingNote: 'Elevasyon önemlidir.', clinicalImportance: 'Capitate ile güçlü bağ.' },
  { id: 'metacarpal_4_r', latin: 'Os Metacarpi IV Dextra', turkish: '4. El Tarak Kemiği (Sağ Yüzük)', english: '4th Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı.', nursingNote: 'Yüzükler, olası bir ödem durumunda kanlanmayı keseceği için hastaneye yatan hastada mutlaka çıkartılmalıdır.', clinicalImportance: 'Biraz hareketlidir (elin kubbeleşmesini sağlar).' },
  { id: 'metacarpal_4_l', latin: 'Os Metacarpi IV Sinistra', turkish: '4. El Tarak Kemiği (Sol Yüzük)', english: '4th Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Yüzük parmağı.', nursingNote: 'Ödem riski, yüzük çıkartılır.', clinicalImportance: 'Kubbeleşmeye yardım eder.' },
  { id: 'metacarpal_5_r', latin: 'Os Metacarpi V Dextra', turkish: '5. El Tarak Kemiği (Sağ Serçe)', english: '5th Metacarpal (Right)', region: 'Üst Ekstremite', mnemonic: 'Boksör kırığı yeri (Serçe).', nursingNote: 'Duvara veya sert bir yere yumruk atma sonucu boynundan kırılır (Boksör kırığı). Ulnar oluk (gutter) ateli yapılır.', clinicalImportance: 'En hareketli ikinci metakarpaldir.' },
  { id: 'metacarpal_5_l', latin: 'Os Metacarpi V Sinistra', turkish: '5. El Tarak Kemiği (Sol Serçe)', english: '5th Metacarpal (Left)', region: 'Üst Ekstremite', mnemonic: 'Boksör kırığı yeri (Serçe).', nursingNote: 'Öfke nöbeti sonrası el sırtında şişlik varsa kırık aranır.', clinicalImportance: 'Boksör kırığı.' },

  // Sağ El Falanksları (Başparmakta 2, diğerlerinde 3 = Toplam 14)
  { id: 'proximal_phalanx_1_r', latin: 'Phalanx Proximalis I Dextra', turkish: '1. Yakın (Proksimal) Parmak Kemiği (Sağ Başparmak)', english: 'Proximal Phalanx 1st Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Phalanx = Roma askeri dizilimi.', nursingNote: 'Parmak ucu kırık/kopmalarında (amputasyon) kopan parça nemli/soğuk beze sarılıp buzlu torbaya KONMAZ (donma riski), su geçirmez poşete konup buzlu suya atılır.', clinicalImportance: 'Başparmakta medial phalanx (orta) YOKTUR.' },
  { id: 'distal_phalanx_1_r', latin: 'Phalanx Distalis I Dextra', turkish: '1. Uzak (Distal) Parmak Kemiği (Sağ Başparmak)', english: 'Distal Phalanx 1st Digit (Right)', region: 'Üst Ekstremite', mnemonic: 'Distal = Distance (Uzakta).', nursingNote: 'Mallet finger (çekiç parmak) tendon kopması sık olur.', clinicalImportance: 'Tırnak yatağını taşır.' },
  
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

  // Sol El Falanksları (14 adet)
  { id: 'proximal_phalanx_1_l', latin: 'Phalanx Proximalis I Sinistra', turkish: '1. Yakın (Proksimal) Parmak Kemiği (Sol Başparmak)', english: 'Proximal Phalanx 1st Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Başparmak', nursingNote: 'Amputasyon ilk yardımı.', clinicalImportance: 'Medial phalanx yok.' },
  { id: 'distal_phalanx_1_l', latin: 'Phalanx Distalis I Sinistra', turkish: '1. Uzak (Distal) Parmak Kemiği (Sol Başparmak)', english: 'Distal Phalanx 1st Digit (Left)', region: 'Üst Ekstremite', mnemonic: 'Başparmak ucu', nursingNote: 'Tırnak altı ezilmeler.', clinicalImportance: 'Tırnak yatağı.' },
  
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


  // ============================================================================
  // ALT EKSTREMİTE (Pelvis ve Bacaklar) - 62 Kemik (31 x 2)
  // Not: Pelvis (Os Coxae) erişkinde 3 kemiğin (Ilium, Ischium, Pubis) kaynaşmasıdır.
  // Geleneksel 206 sayımında Os Coxae "1 kemik" (sağ/sol toplam 2) olarak sayılır.
  // Ancak detaylı öğrenim için 3 parçası ayrıştırılarak listelenmiştir.
  // ============================================================================

  // Sağ Pelvis Parçaları
  {
    id: 'ilium_r', latin: 'Os Ilium Dextra', turkish: 'Sağ Leğen (Böğür) Kemiği', english: 'Right Ilium', region: 'Alt Ekstremite',
    mnemonic: 'İliyak kanat (Fil kulağı).', nursingNote: 'Kemik iliği biyopsisi ve aspirasyonu en sık Posterior Superior İliyak Spina (PSIS) yani kalçanın üst arka çıkıntısından yapılır.', clinicalImportance: 'Pelvisin en büyük parçasıdır, kalça eklemi yuvasının (asetabulum) büyük kısmını oluşturur.'
  },
  {
    id: 'ischium_r', latin: 'Os Ischii Dextra', turkish: 'Sağ Oturga Kemiği', english: 'Right Ischium', region: 'Alt Ekstremite',
    mnemonic: 'İşkembe üstüne oturulmaz, İskiyum üstüne oturulur.', nursingNote: 'Tekerlekli sandalyeye bağımlı hastalarda İskial tüberosit (oturma kemiği) üzerinde yatak yarası (bası ülseri) çok hızlı açılır. Havalı minder şarttır.', clinicalImportance: 'Oturduğumuzda ağırlığımızı taşıyan kemiktir (Tuber ischiadicum).'
  },
  {
    id: 'pubis_r', latin: 'Os Pubis Dextra', turkish: 'Sağ Çatı Kemiği', english: 'Right Pubis', region: 'Alt Ekstremite',
    mnemonic: 'Pubis = Kasık bölgesi (Pubik kıl).', nursingNote: 'Pelvis kırıkları mesane (idrar kesesi) veya üretra yırtılmasına yol açabilir. Sonda takılırken kan gelirse (üretral kanama) üroloji uzmanı beklenir, zorlanmaz.', clinicalImportance: 'Önde iki pubis kemiği birleşerek Symphysis Pubis eklemini yapar (doğumda esner).'
  },
  // Sol Pelvis Parçaları
  {
    id: 'ilium_l', latin: 'Os Ilium Sinistra', turkish: 'Sol Leğen (Böğür) Kemiği', english: 'Left Ilium', region: 'Alt Ekstremite',
    mnemonic: 'İliyak kanat (Fil kulağı).', nursingNote: 'İntramüsküler (İM) enjeksiyon yapılırken iliyak krista nirengi noktası alınır (Ventrogluteal bölge için güvenli alan tayini).', clinicalImportance: 'Geniş kas tutunma yüzeyidir.'
  },
  {
    id: 'ischium_l', latin: 'Os Ischii Sinistra', turkish: 'Sol Oturga Kemiği', english: 'Left Ischium', region: 'Alt Ekstremite',
    mnemonic: 'Oturduğumuz kemik.', nursingNote: 'Oturma pozisyonunda saatte bir ağırlık aktarımı (shift) eğitimi verilir.', clinicalImportance: 'Hamstring (arka bacak) kasları buradan başlar.'
  },
  {
    id: 'pubis_l', latin: 'Os Pubis Sinistra', turkish: 'Sol Çatı Kemiği', english: 'Left Pubis', region: 'Alt Ekstremite',
    mnemonic: 'Pubis.', nursingNote: 'Ağır pelvik travmalarda iç kanama hayatı tehdit eder, pelvik bağlayıcı (binder) takılır.', clinicalImportance: 'Mesanenin hemen önünde yer alır korur.'
  },

  {
    id: 'femur_r', latin: 'Os Femoris Dextra', turkish: 'Sağ Uyluk Kemiği', english: 'Right Femur', region: 'Alt Ekstremite',
    mnemonic: 'Ferrari = En uzun, en hızlı (koşmak için), en güçlü kemik.', nursingNote: 'Yaşlılarda osteoporoz nedeniyle en sık "Femur Boyun Kırığı" görülür. Hasta bacağını dışa dönük ve kısa tutar. Ameliyat sonrası bacak bacak üstüne atması (çıkık riski) yasaklanır.', clinicalImportance: 'Kırıklarında uyluk içine 1.5 - 2 litre kanayabilir (hipovolemik şok riski).'
  },
  {
    id: 'femur_l', latin: 'Os Femoris Sinistra', turkish: 'Sol Uyluk Kemiği', english: 'Left Femur', region: 'Alt Ekstremite',
    mnemonic: 'Vücudun en uzun kemiği.', nursingNote: 'Femur kırıklarında yağ embolisi riski yüksektir (hasta aniden nefes darlığı ve göğüs ağrısı çekerse akla gelmelidir).', clinicalImportance: 'Büyük trokanter (Trochanter major) dışarıdan kalçada elle hissedilen çıkıntıdır.'
  },
  {
    id: 'patella_r', latin: 'Patella Dextra', turkish: 'Sağ Diz Kapağı Kemiği', english: 'Right Patella', region: 'Alt Ekstremite',
    mnemonic: 'Nutella kapağı gibi.', nursingNote: 'Diz üstüne düşmelerde kırılabilir. Diz eklemi içinde sıvı toplanması (efüzyon) patella balotmanı (yüzdürme testi) ile muayene edilir.', clinicalImportance: 'Vücudun en büyük sesamoid (tendon içi) kemiğidir. Quadriceps kasının gücünü artırır.'
  },
  {
    id: 'patella_l', latin: 'Patella Sinistra', turkish: 'Sol Diz Kapağı Kemiği', english: 'Left Patella', region: 'Alt Ekstremite',
    mnemonic: 'Nutella kapağı.', nursingNote: 'Diz ameliyatları (artroskopi) sonrası bacak düz (ekstansiyon) tutulur ve kas güçlendirme (izometrik) başlanır.', clinicalImportance: 'Diz eklemini önden korur.'
  },
  {
    id: 'tibia_r', latin: 'Tibia Dextra', turkish: 'Sağ Kaval Kemiği', english: 'Right Tibia (Shinbone)', region: 'Alt Ekstremite',
    mnemonic: 'Kalın T (Tibia).', nursingNote: 'Ödem muayenesi (gode bırakan ödem) tibianın ön yüzündeki kemiğin üstüne parmakla bastırılarak yapılır (kalp yetmezliği vb. için).', clinicalImportance: 'Bacağın asıl ağırlık taşıyan kemiğidir. Cilt altında (korumasız) olduğu için açık kırıkları (kemiğin dışarı çıkması) çok sıktır.'
  },
  {
    id: 'tibia_l', latin: 'Tibia Sinistra', turkish: 'Sol Kaval Kemiği', english: 'Left Tibia (Shinbone)', region: 'Alt Ekstremite',
    mnemonic: 'Kalın T (Tibia).', nursingNote: 'Çocuklarda (6 yaş altı) acil damar yolu bulunamazsa, kemik içi (intraosseöz) iğne tibianın üst ucundan (tuberositas tibia) takılıp hayat kurtaran sıvılar/ilaçlar verilir.', clinicalImportance: 'İç malleolü (ayak bileği iç çıkıntısını) oluşturur.'
  },
  {
    id: 'fibula_r', latin: 'Fibula Dextra', turkish: 'Sağ Baldır Kemiği', english: 'Right Fibula (Calf bone)', region: 'Alt Ekstremite',
    mnemonic: 'Flüt (Fibula) gibi ince.', nursingNote: 'Alçı veya sargılar çok sıkı olursa, fibula başı hizasından geçen Peroneal Sinir ezilir ve hastada "Düşük Ayak" (ayağını yukarı çekememe) gelişir.', clinicalImportance: 'Ağırlık taşımaz. Kaslara tutunma yeri sağlar ve ayak bileğinin dış tırnağını (Dış Malleol) oluşturur. Kemik grefti (yaması) için buradan parça alınabilir.'
  },
  {
    id: 'fibula_l', latin: 'Fibula Sinistra', turkish: 'Sol Baldır Kemiği', english: 'Left Fibula (Calf bone)', region: 'Alt Ekstremite',
    mnemonic: 'Flüt (Fibula) gibi ince.', nursingNote: 'Düşük ayak gelişimini önlemek için yatan hastanın ayak ucuna yastık veya ayak tahtası konularak ayak 90 derecede tutulur.', clinicalImportance: 'Dış malleol (ayak bileği dış çıkıntısı) kırıkları sıktır.'
  },

  // Sağ Tarsaller
  { id: 'talus_r', latin: 'Talus Dextra', turkish: 'Sağ Aşık Kemiği', english: 'Right Talus', region: 'Alt Ekstremite', mnemonic: 'Talus = Tavan (Ayağın çatısı, tibia ona oturur).', nursingNote: 'Ayak bileği burkulmalarında en çok zorlanan eklemi oluşturur, elevasyon (yukarı kaldırma) şarttır.', clinicalImportance: 'Kanlanması zayıftır, kırığında avasküler nekroz (çürüme) sıktır. Kas tutunmayan tek ayak kemiğidir.' },
  { id: 'calcaneus_r', latin: 'Calcaneus Dextra', turkish: 'Sağ Topuk Kemiği', english: 'Right Calcaneus (Heel bone)', region: 'Alt Ekstremite', mnemonic: 'Kalk (Calcaneus) ve topuğuna bas.', nursingNote: 'Uzun süre yatan hastada topuklarda yatak yarası (dekübit) oluşur, topukların altına rulo havlu konarak yatağa teması kesilmelidir.', clinicalImportance: 'Ayaktaki en büyük kemiktir. Yüksekten topuk üstüne düşmelerde kırılır (Aşil tendonu buraya tutunur).' },
  { id: 'navicular_r', latin: 'Os Naviculare Dextra', turkish: 'Sağ Sandal Kemiği (Ayak)', english: 'Right Navicular', region: 'Alt Ekstremite', mnemonic: 'Navigasyon (Navicular) gemisi sandaldır.', nursingNote: 'Düz taban (pes planus) teşhisinde yere olan yüksekliğine bakılır.', clinicalImportance: 'Ayağın uzunlamasına kemerinin (arkının) tepe noktasıdır.' },
  { id: 'cuboid_r', latin: 'Os Cuboideum Dextra', turkish: 'Sağ Küp Kemiği', english: 'Right Cuboid', region: 'Alt Ekstremite', mnemonic: 'Küp şeklinde, ayağın dış tarafında.', nursingNote: 'Dış yan basma (inversiyon) burkulmalarında ağrır.', clinicalImportance: 'Ayağın dış kemerini (lateral ark) destekler.' },
  { id: 'medial_cuneiform_r', latin: 'Os Cuneiforme Mediale Dextra', turkish: 'Sağ İç Kama Kemiği', english: 'Right Medial Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Cuneiform) - 3 tanedir.', nursingNote: 'Diyabetik ayak ülserleri bu basınç noktalarında açılabilir, günlük ayak bakımı eğitimi verilir.', clinicalImportance: 'Başparmak metatarsali (1.) ile eklem yapar.' },
  { id: 'intermediate_cuneiform_r', latin: 'Os Cuneiforme Intermedium Dextra', turkish: 'Sağ Orta Kama Kemiği', english: 'Right Intermediate Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Ortadaki kama.', nursingNote: 'Uygun ayakkabı seçimi ortopedik olarak önemlidir.', clinicalImportance: '2. metatarsal ile eklem yapar (Lisfranc ekleminin kilit taşı).' },
  { id: 'lateral_cuneiform_r', latin: 'Os Cuneiforme Laterale Dextra', turkish: 'Sağ Dış Kama Kemiği', english: 'Right Lateral Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Dıştaki kama.', nursingNote: 'Ayak arkı çöktüğünde yürüyüş bozukluğu oluşur.', clinicalImportance: '3. metatarsal ile eklem yapar.' },
  
  // Sol Tarsaller
  { id: 'talus_l', latin: 'Talus Sinistra', turkish: 'Sol Aşık Kemiği', english: 'Left Talus', region: 'Alt Ekstremite', mnemonic: 'Tavan (Tibia buna oturur).', nursingNote: 'RICE (Rest, Ice, Compression, Elevation) burkulma ilkyardımıdır.', clinicalImportance: 'Avasküler nekroz riski.' },
  { id: 'calcaneus_l', latin: 'Calcaneus Sinistra', turkish: 'Sol Topuk Kemiği', english: 'Left Calcaneus', region: 'Alt Ekstremite', mnemonic: 'Kalk (Calcaneus).', nursingNote: 'Topuk vurma yürüyüş fazında yük taşır. Topuk dikeni (plantar fasiit) burada olur.', clinicalImportance: 'Topuk dikeni yeri.' },
  { id: 'navicular_l', latin: 'Os Naviculare Sinistra', turkish: 'Sol Sandal Kemiği (Ayak)', english: 'Left Navicular', region: 'Alt Ekstremite', mnemonic: 'Sandal.', nursingNote: 'Ark çökmesi.', clinicalImportance: 'Medial longitudinal arkın merkez taşı.' },
  { id: 'cuboid_l', latin: 'Os Cuboideum Sinistra', turkish: 'Sol Küp Kemiği', english: 'Left Cuboid', region: 'Alt Ekstremite', mnemonic: 'Küp.', nursingNote: 'Ayağın dış tarafı.', clinicalImportance: 'Lateral ark desteği.' },
  { id: 'medial_cuneiform_l', latin: 'Os Cuneiforme Mediale Sinistra', turkish: 'Sol İç Kama Kemiği', english: 'Left Medial Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (İç).', nursingNote: 'Diyabetik ayak kontrolü.', clinicalImportance: '1. parmak kökü.' },
  { id: 'intermediate_cuneiform_l', latin: 'Os Cuneiforme Intermedium Sinistra', turkish: 'Sol Orta Kama Kemiği', english: 'Left Intermediate Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Orta).', nursingNote: 'Ortopedik tabanlık (pes planus için).', clinicalImportance: 'Lisfranc eklemi nirengisi.' },
  { id: 'lateral_cuneiform_l', latin: 'Os Cuneiforme Laterale Sinistra', turkish: 'Sol Dış Kama Kemiği', english: 'Left Lateral Cuneiform', region: 'Alt Ekstremite', mnemonic: 'Kama (Dış).', nursingNote: 'Ayak anatomisini koruma.', clinicalImportance: '3. metatarsa tutunur.' },

  { id: 'metatarsal_1_r', latin: 'Os Metatarsi I Dextra', turkish: '1. Ayak Tarak Kemiği (Sağ)', english: '1st Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: 'Ayak başparmağı kökü.', nursingNote: 'Gut hastalığında en sık buradaki eklem şişer, kızarır ve çok ağrılı olur (Podagra). Çarşaf değmesi bile ağrıtır, yatak örtüsü ayak ucuna yükseltilerek serilir (bed cradle).', clinicalImportance: 'Halluks Valgus (başparmak çıkıntısı) bu kemiğin başının dışarı doğru eğilmesidir.' },
  { id: 'metatarsal_1_l', latin: 'Os Metatarsi I Sinistra', turkish: '1. Ayak Tarak Kemiği (Sol)', english: '1st Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: 'Ayak başparmağı kökü.', nursingNote: 'Gut atağında diyet (pürinden fakir) ve ağrı kontrolü.', clinicalImportance: 'Vücut ağırlığını taşımada çok aktiftir, altındaki sesamoid kemikler yürümeyi kolaylaştırır.' },
  { id: 'metatarsal_2_r', latin: 'Os Metatarsi II Dextra', turkish: '2. Ayak Tarak Kemiği (Sağ)', english: '2nd Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Askerlerde veya çok yürüyenlerde stres (yorgunluk) kırığı en sık bu kemikte görülür (March fracture / Yürüyüş kırığı).', clinicalImportance: 'Ayağın en uzun metatarsalidir.' },
  { id: 'metatarsal_2_l', latin: 'Os Metatarsi II Sinistra', turkish: '2. Ayak Tarak Kemiği (Sol)', english: '2nd Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '2. parmak.', nursingNote: 'Yeni spora başlayanlarda ayak üstünde şişlik/ağrı (stres kırığı şüphesi).', clinicalImportance: 'Uzun olduğu için kırılmaya yatkındır.' },
  { id: 'metatarsal_3_r', latin: 'Os Metatarsi III Dextra', turkish: '3. Ayak Tarak Kemiği (Sağ)', english: '3rd Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: '3. ve 4. parmak arasında Morton Nöroması (sinir sıkışması) sık olur, ayakkabı vurdukça elektrik çarpar gibi ağrı yapar.', clinicalImportance: 'Merkezi metatarsal.' },
  { id: 'metatarsal_3_l', latin: 'Os Metatarsi III Sinistra', turkish: '3. Ayak Tarak Kemiği (Sol)', english: '3rd Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '3. parmak.', nursingNote: 'Geniş burunlu ayakkabı önerilir.', clinicalImportance: 'Transvers ark parçası.' },
  { id: 'metatarsal_4_r', latin: 'Os Metatarsi IV Dextra', turkish: '4. Ayak Tarak Kemiği (Sağ)', english: '4th Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Travmalarda ezilme riski.', clinicalImportance: 'Dış ağırlık aktarımı.' },
  { id: 'metatarsal_4_l', latin: 'Os Metatarsi IV Sinistra', turkish: '4. Ayak Tarak Kemiği (Sol)', english: '4th Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: '4. parmak.', nursingNote: 'Diyabetik hastada hissizlik (nöropati) varsa ayakkabı içini eliyle kontrol etmeli (taş vs. varsa hissetmez, yara açılır).', clinicalImportance: 'Dış ağırlık aktarımı.' },
  { id: 'metatarsal_5_r', latin: 'Os Metatarsi V Dextra', turkish: '5. Ayak Tarak Kemiği (Sağ)', english: '5th Metatarsal (Right)', region: 'Alt Ekstremite', mnemonic: 'Serçe parmak kökü.', nursingNote: 'Bilek burkulmalarında bu kemiğin kökü (bazis) koparak kırılabilir (Jones kırığı). Alçı tedavisi uzundur.', clinicalImportance: 'M. Peroneus brevis tendonu buraya tutunur ve burkulmada kemiği koparabilir.' },
  { id: 'metatarsal_5_l', latin: 'Os Metatarsi V Sinistra', turkish: '5. Ayak Tarak Kemiği (Sol)', english: '5th Metatarsal (Left)', region: 'Alt Ekstremite', mnemonic: 'Serçe parmak kökü.', nursingNote: 'Ayak dış yanına basamama şikayeti (Jones kırığı şüphesi).', clinicalImportance: 'Avülsiyon (kopma) kırığı sıktır.' },

  // Sağ Ayak Falanksları (Başparmakta 2, diğerlerinde 3 = Toplam 14)
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

  // Sol Ayak Falanksları (14 adet)
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