var db;
var activeIndex;

var contacts = [
    { id: 1, data_umowy: '23/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dariusz Osiński', adres: 'Mińskiej 15B, 05-300 Stojadła', pesel: '78112516531', nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '03 1020 1013 0000 0002 0110 1377', uwagi: 'zawartość dokumentów została powielona(są 2 skany)' },
    { id: 2, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Edyta Górska', adres: 'Brodzińskiego 103/11, 71-146 Szczecin', pesel: '77050615229', nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '84 1030 0019 0109 8513 6313 0013', uwagi: '' },
    { id: 3, data_umowy: '23/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Rusłanowicz', adres: 'Wąwozowej 23/15, 02-796 Warszawa', pesel: '49050703617', nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '84 1030 0019 0109 8513 6313 0013', uwagi: '' },
    { id: 4, data_umowy: '28/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest:	'Michał Rusłanowicz', adres: 'Wąwozowej 23/15, 02-796 Warszawa', pesel:	'49050703617', nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '02 1050 1025 1000 0023 1433 7409', uwagi: ''},	
    { id: 5, data_umowy: '29/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Optimal Invest', adres: '30-382 Kraków, ul. Bieniarzówny 1', pesel: '',  nip: 6762450845, regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 1_000_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '17 1020 2892 0000 5102 0558 3226', uwagi: ''},
    { id: 6, data_umowy: '26/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Pawł Smela', adres: 'Gen. Boruty- Spiechowicza 16/7, 43-300 Bielsko -Biała', pesel: 75042319751,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '84 1050 1070 1000 0001 0369 5383', uwagi: ''},
    { id: 7, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Jarczyński', adres: 'Nadbornej 2a, 86-050 Solec Kujawski', pesel: 80091501655,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '39 1140 2017 0000 4102 0653 7700', uwagi: ''},
    { id: 8, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Gryka', adres: 'Gołkowskiej 59a, 05-502 Gołków', pesel: 75020604631,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '50 1020 5558 1111 1625 0160 0079', uwagi: ''},
    { id: 9, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Osiał', adres: 'Zagłoby 14/32, 92-430 Łódź', pesel: 74041008194,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '64 1540 1245 3001 4802 6459 0001', uwagi: ''},
    { id: 10, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Opaliński', adres: 'Kąteckiej 21, 55-081 Miętków', pesel: 59041007237,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '22 9584 1119 3012 1205 2079 0001', uwagi: ''},
    { id: 11, data_umowy: '23/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Renata Dłuska', adres: 'Hlonda 10/119, 02-972 Warszawa', pesel: 65090212069,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '05 1050 1038 1000 0090 9411 5368', uwagi: ''},
    { id: 12, data_umowy: '23/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Renata Dłuska', adres: 'Hlonda 10/119, 02-972 Warszawa', pesel: 65090212069,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 75_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '05 1050 1038 1000 0090 9411 5368', uwagi: ''},
    { id: 13, data_umowy: '20/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '',  nip: '648-19-97-718', regon: 2733295877.0, przedmiot: 'PitBull3', kwota: 700_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: 'Brak nr konta', uwagi: 'dwa scany umowy'},
    { id: 14, data_umowy: '19/12/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '',  nip: '648-19-97-718', regon: 2733295877.0, przedmiot: 'PitBull Śmierć Frajerom', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '81 1050 1588 1000 0002 0317 2614', uwagi: 'aneks'},
    { id: 15, data_umowy: '15/03/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Podesek', adres: '-100 Busko-Zdrój, Las Winiarski 26E', pesel: '',  nip: '', regon: '', przedmiot: 'GROM', kwota: 250_000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109??', nr_rach_inwest: '44 1500 1458 1014 5003 8626 0000', uwagi: ''},
    { id: 16, data_umowy: '27/05/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Krystjańczuk', adres: 'Wolności 22/33, 22-100 Chełm, korespondencyjny: ul. I Armii WP 25/31 ', pesel: 72092603795,  nip: '', regon: '', przedmiot: 'PitBull - pałacowi vs.zorganizowani', kwota: 10_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: 'brak skanu ', uwagi: ''},
    { id: 17, data_umowy: '25/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Krystjańczuk', adres: 'Wolności 22/33, 22-100 Chełm, korespondencyjny: ul. I Armii WP 25/31 ', pesel: 72092603795,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '91 1950 0001 2006 0593 7183 0002', uwagi: ', Poprzez potrącenie przez SPÓŁKĘ należności przysługującej INWESTOROWI. '}, //z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 27 Maja 2015 r. ze zobowiązaniem INWESTORA z tytułu C; wpłaty kwoty współfinansowania. b) poprzez wpłatę na rachunek bankowy prowadzony dla SPÓŁKI .
    { id: 18, data_umowy: '16/06/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Fizek', adres: 'Stęszewskiej 62, 64-320 Buk', pesel: 74102103910,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 0, nr_rach_spol: '', nr_rach_inwest: '08 1090 1346 0000 0001 0226 4056', uwagi: 'Brak skanu str nr 2 (2913)'},
    { id: 19, data_umowy: '08/05/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'SZYMON JĘDRASEK', adres: 'ul. Wiosenna 5 m. 56, 25-534 KIELCE', pesel: 73062409210,  nip: '', regon: '', przedmiot: 'PitBull pałacowi vs. zorganizowani', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '94 1950 0001 2006 0135 9747 0002', uwagi: ' '},
    { id: 20, data_umowy: '11/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'SZYMON JĘDRASEK', adres: 'Wiosennej 5 m 56, 25-534 Kielce', pesel: 73062409210,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostraď', kwota: 35_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '94 1950 0001 2006 0135 9747 0002', uwagi: ', Poprzez potrącenie przez SPÓŁKĘ należności przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych. '}, // z dnia 08 Maja 2015 r. w kwocie 25 000 zł ( dwadzieścia pięć  tysięcy złotych) ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania\nb) poprzez wpłatę na rachunek bankowy prowadzony dla SPÓŁKI w banku ING Bank śląski Spółka Akcyjna, 0 numerze: 73 1050 1025 1000 0090 3018 1086, kwoty 10 000 zł
    { id: 21, data_umowy: '25/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ryszard Woźny', adres: 'Wiliów 48/14 , 08-530 Dęblin', pesel: '',  nip: 7160017651, regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '', nr_rach_inwest: '19 1140 2004 0000 3602 3302 4670', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, //1.\xa0\xa0\xa0\xa0\xa0 -->  przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 16.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 22, data_umowy: '14/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Bytner', adres: 'Wojska Polskiego 5/21, 87-500 Rypin', pesel: 69123007938,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 180_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '', uwagi: 'Aneks do umowy z dnia 24.11.2017'},
    { id: 23, data_umowy: '14/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Bytner', adres: 'Wojska Polskiego 5/21, 87-500 Rypin', pesel: 69123007938,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '33 1140 2004 0000 3102 0607 3407', uwagi: ''},
    { id: 24, data_umowy: '24/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Rafał Górski', adres: 'Szeligowskiej IE, 05-850 Macierzysz', pesel: 72012700333,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 201_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '07 1050 1041 1000 0092 0113 7768', uwagi: ''},
    { id: 25, data_umowy: '08/06/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Nowak', adres: 'Wawelskiej 2/25, 41-700 Ruda śląska ', pesel: 75022101310,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '04 1050 1331 1000 0010 0289 3145', uwagi: ''},
    { id: 26, data_umowy: '26/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Nowak', adres: 'Wawelskiej 2/25, 41-700 Ruda śląska ', pesel: 75022101310,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '04 1050 1331 1000 0010 0289 3145', uwagi: ''},
    { id: 27, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Nowak', adres: 'Wawelskiej 2/25, 41-700 Ruda śląska ', pesel: 75022101310,  nip: '', regon: '', przedmiot: '', kwota: 0, nr_rach_spol: '', nr_rach_inwest: '', uwagi: 'INWESTOR przekaże tytułem zobowiązania do współfinansowania Przedsięwzięcia kwotę 80000 zł. '}, //Kwota w wysokości 60 000 zł (sześćdziesiąt tysięcy złotych) zostanie przekazana na rachunek bankowy prowadzony dla SPÓŁKI w banku ING Bank Śląski Spółka Akcyjna, o numerze: 73 1050 1025 1000 0090 3018 1086, w terminie 7 dni od daty zawarcia niniejszej umowy,   kwota w wysokości 20_000 zł (dwadzieścia tysięcy złotych) zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 08.06.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad" ze zobowiązaniem INWESTORA z tytułu wpłaty części kwoty, aneks współfinansowania.”
    { id: 28, data_umowy: '02/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Kałuski', adres: 'Wał Miedzeszyński 66, 04-987 Warszawa', pesel: 72062400856,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '80 1020 1097 0000 7802 0050 1007', uwagi: ''},
    { id: 29, data_umowy: '09/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Dubarek', adres: 'Żeromskiego 32/2, 58-372 Boguszów-Gorce', pesel: 70021705473,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '05 1 090 2835 0000 0001 3160 41 14', uwagi: ''},
    { id: 30, data_umowy: '02/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Nikodem Dziadek', adres: 'Pniewskiego 4, 60-692 Poznań', pesel: 'AXK802001 nr dowodu',  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 250_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '02 1140 2004 0000 3302 0411 4176', uwagi: 'aneks umowy'},
    { id: 31, data_umowy: '22/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mirosław Madejski', adres: 'Lucimii 85, 26-704 Przyłęk', pesel: 67030514619,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '29 1240 5875 1111 0010 6515 9069', uwagi: ''},
    { id: 32, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mirosław Madejski', adres: 'Lucimii 85, 26-704 Przyłęk', pesel: 67030514619,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '', nr_rach_inwest: '29 1240 5875 1111 0010 6515 9069', uwagi: '(tytuły robocze „Pitbull. Król ulicy”'}, // ,Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania. Brak podpisu
    { id: 33, data_umowy: '25/06/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mateusz Sosna', adres: 'Opolskiej 79, 46-024 Łubniany', pesel: 82110512512,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '94 1560 0013 2849 1000 4207 0002', uwagi: ''},
    { id: 34, data_umowy: '05/06/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mariusz Szewczyk', adres: 'Jana Nowaka Jeziorańskiego 52/24, 03-982 Warszawa', pesel: 71062302151,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '47 1140 2017 0000 4102 0308 7848', uwagi: ''},
    { id: 35, data_umowy: '15/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mariusz Szewczyk', adres: 'Jana Nowaka Jeziorańskiego 52/24, 03-982 Warszawa', pesel: 71062302151,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '47 1140 2017 0000 4102 0308 7848', uwagi: ''},
    { id: 36, data_umowy: '29/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Suchenek', adres: 'Poprzecznej 10, 05-200 Duczki', pesel: 63112306974,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '35 1020 1156 0000 7202 0118 9869', uwagi: ''},
    { id: 37, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Lech Labudda', adres: 'Niedźwiednik 20, 80292 Gdańsk', pesel: 61022407396,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '21 1140 2017 000 4902 1242 4950', uwagi: ''},
    { id: 38, data_umowy: '30/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Krywko', adres: '1 Maja 11, 46-022 Kępa', pesel: 68061502910,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '49 1050 1025 1000 0022 9789 6033', uwagi: ''},
    { id: 39, data_umowy: '29/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Kielek', adres: 'Władysława Reymonta 44 , 98-200 Sieradz', pesel: 73052604874,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '53 1240 3275 1111 0010 2740 9230', uwagi: ''},
    { id: 40, data_umowy: '25/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grażyna Kubicka', adres: 'Piłsudskiego 7/88, ,90-368 Łódź', pesel: 52051808182,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '87 1050 1461 1000 0090 6118 8273', uwagi: ''},
    { id: 41, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grażyna Kubicka', adres: 'Piłsudskiego 7/88, ,90-368 Łódź', pesel: 52051808182,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '', nr_rach_inwest: '87 1050 1461 1000 0090 6118 8273', uwagi: ', Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.'},
    { id: 42, data_umowy: '22/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Danuta Gacek', adres: 'Wyzwolenia 540, 43-340 Kozy', pesel: 49101003585,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086', nr_rach_inwest: '81 1050 1070 1000 0023 1070 1129', uwagi: ''},
    { id: 43, data_umowy: '07/02/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Stańczyk', adres: 'Kajki 18, 05-501 Piaseczno ', pesel: '',  nip: '', regon: '', przedmiot: 'Dywizjon 303', kwota: 150_000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: '19 1020 1169 0000 8702 0130 6471', uwagi: ''},
    { id: 44, data_umowy: '07/02/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Stańczyk', adres: 'Kajki 18, 05-501 Piaseczno ', pesel: '',  nip: '', regon: '', przedmiot: 'GROM', kwota: 150_000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: '19 1020 1169 0000 8702 0130 6471', uwagi: ''},
    { id: 45, data_umowy: '07/02/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Stańczyk', adres: 'Kajki 18, 05-501 Piaseczno ', pesel: '',  nip: '', regon: '', przedmiot: 'Pitbull3', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '19 1020 1169 0000 8702 0130 6471', uwagi: ''},
    { id: 46, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Miziołek', adres: 'Zamojskiego 34, 09-300 Żuromin', pesel: 60091201007,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '31 1870 1045 2078 1169 7107 0001', uwagi: ''},
    { id: 47, data_umowy: '14/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Miziołek', adres: 'Zamojskiego 34, 09-300 Żuromin', pesel: 60091201007,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '31 1870 1045 2078 1169 7107 0001', uwagi: ''},
    { id: 48, data_umowy: '05/03/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bronisław Świątkowski', adres: 'Krechowieckiej 7 m 4, 01-635 Warszawa', pesel: 52033101519,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1050 1025 1000 0090 7945 0061', uwagi: ''},
    { id: 49, data_umowy: '29/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Kromka', adres: 'Bema 25/8, 32-600 Oświęcim', pesel: 69120901259,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '96 1140 2004 0000 3902 3359 4370', uwagi: ''},
    { id: 50, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Sławomir Bogdan', adres: 'Browar Kolonia 33 A, 34-300 Żywiec', pesel: 59101401238,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '60 1470 0002 2360 0544 8000 0001', uwagi: ''},
    { id: 51, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Sławomir Bogdan', adres: 'Browar Kolonia 33 A, 34-300 Żywiec', pesel: 59101401238,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '60 1470 0002 2360 0544 8000 0001', uwagi: 'Brak podpisy (taka sama umowa)'},
    { id: 52, data_umowy: '10/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Bełdowski', adres: 'Podleśnej 18, 05807 Podkowa Leśna', pesel: 63020302550,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '63 1050 1025 1000 0090 6057 0299', uwagi: ''},
    { id: 53, data_umowy: '04/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wojciech Kulasa', adres: 'Tulipanowej 2/3, 35-604 Rzeszów', pesel: 75021509133,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '27 2490 1044 0000 4200 7443 1039', uwagi: ''},
    { id: 54, data_umowy: '20/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Urszula Podłucka', adres: '02-830 Warszawa, Gawota 6/22', pesel: 59020102566,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '10 1140 2004 0000 3002 3787 1440', uwagi: ''},
    { id: 55, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Urszula Podłucka', adres: '02-830 Warszawa, Gawota 6/22', pesel: 59020102566,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '10 1140 2004 0000 3002 3787 1440', uwagi: ''},
    { id: 56, data_umowy: '22/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agata Krzyżanek', adres: 'Tulipanowej 6, 20-827 Lublin', pesel: 86032502248,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '83 1140 2004 0000 3002 5901 6223', uwagi: ''},
    { id: 57, data_umowy: '10/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Ulacha', adres: 'Legnickiej 2/11, 70-134 Szczecin', pesel: 75081506259,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1140 2004 0000 3002 3365 8584', uwagi: ''},
    { id: 58, data_umowy: '02/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Szymon Salachna', adres: 'Skośnej 56A, 43-360 Bystra ', pesel: 91041908552,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 40_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '49 1050 1070 1000 0091 4039 1195', uwagi: ''},
    { id: 59, data_umowy: '22/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Szymon Salachna', adres: 'Skośnej 56A, 43-360 Bystra ', pesel: 91041908552,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 40_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '49 1050 1070 1000 0091 4039 1195', uwagi: ''},
    { id: 60, data_umowy: '02/03/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Musiał', adres: 'Oś. Zwycięstwa 5/56, 61-644 Poznań', pesel: 72121203671,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '64 1140 2017 0000 4102 0311 1986', uwagi: ''},
    { id: 61, data_umowy: '02/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Schindler', adres: 'Ułańskiej 9/67, 40-887 Katowice', pesel: 86110810892,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '73 1050 1214 1000 0090 7672 9368', uwagi: 'Brak podpisu'},
    { id: 62, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Schindler', adres: 'Ułańskiej 9/67, 40-887 Katowice', pesel: 86110810892,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '', nr_rach_inwest: '73 1050 1214 1000 0090 7672 9368', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, //przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 02.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PIT BULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 63, data_umowy: '21/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Bijok', adres: 'Podkępie 2, 43-430 Skoczów', pesel: 71072405954,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '94 1050 1605 1000 0004 0382 2810', uwagi: ''},
    { id: 64, data_umowy: '24/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Lasiota', adres: 'Ogińskiego 16/36, 80-134 Gdańsk', pesel: 75030602364,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1140 2004 0000 3212 0494 7034', uwagi: 'Brak podpisu. Do umowy dołączony RAPORT Z CZYNNOŚCI DETEKTYWISTYCZNYCH oraz potwierdzenie wykonania przelewu'},
    { id: 65, data_umowy: '03/10/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mirosław Ferski', adres: 'Warszawskiej 9a, 09-100 Płońsk', pesel: 49070400196,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '04 1160 2202 0000 0001 3951 4862', uwagi: ''},
    { id: 66, data_umowy: '13/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Sworzeniowski', adres: '32-600 Oświęcim, Wyspiańskiego 5/7', pesel: 68020207751,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '93 2490 0005 0000 4000 1323 9546', uwagi: 'Aneks do umowy. Zmiana terminu:  50.000 zł w terminie do dnia 11 stycznia 2019 r. ,50.000 zł w terminie do dnia 31 maja 2019 r.'},
    { id: 67, data_umowy: '12/05/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Sworzeniowski ', adres: 'Wyspiańskiego 5/7, 32-600 Oświęcim', pesel: '',  nip: '', regon: '', przedmiot: 'PitBull pałacowi vs. zorganizowani', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '93 2490 0005 0000 4000 1323 9546 ', uwagi: ''},
    { id: 68, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Sworzeniowski ', adres: 'Wyspiańskiego 5/7, 32-600 Oświęcim', pesel: 68020207751,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '', nr_rach_inwest: '93 2490 0005 0000 4000 1323 9546', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, //przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 24.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PIT BULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 69, data_umowy: '24/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Sworzeniowski ', adres: 'Wyspiańskiego 5/7, 32-600 Oświęcim', pesel: 68020207751,  nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '93 2490 0005 0000 4000 1323 9546', uwagi: ''},
    { id: 70, data_umowy: '11/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Sworzeniowski ', adres: 'Wyspiańskiego 5/7, 32-600 Oświęcim', pesel: 68020207751,  nip: '', regon: '', przedmiot: 'GROM', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '93 2490 0005 0000 4000 1323 9546', uwagi: ''},
    { id: 71, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Mrówczyński', adres: 'Skotarskiej 16, 61-625 Poznań', pesel: 58101304992,  nip: '9720271513', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '70 1142 0040 0003 8020 1665 300', uwagi: 'Inwestor - Brak podpisu'},
    { id: 72, data_umowy: '29/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Mrówczyński', adres: 'Skotarskiej 16, 61-625 Poznań', pesel: 58101304992,  nip: '9720271513', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '70 1142 0040 0003 8020 1665 300', uwagi: ''},
    { id: 73, data_umowy: '02/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Mrówczyński', adres: 'Skotarskiej 16, 61-625 Poznań', pesel: 58101304992,  nip: '9720271513', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 35_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '70 1142 0040 0003 8020 1665 300', uwagi: 'Aneks do umowy: INWESTOR przekaże tytułem zobcwiązania do współfinansavvanił kwotę 40 000 zł'}, //(słownie: czterdzieści tysięcy złotych) na  rachunek dla SPÓŁKI w następujących częściach i terminach:\n- kwota 35 000 zł w terminie do dnia 16 lutego 2016 roku - kwota 5 000 zł w terminie do dnia 1 marca 2017 roku\n
    { id: 74, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tadeusz Śliwa', adres: 'Kaniowskiej 78, 01-529 Warszawa', pesel: 81110513752,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 250_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '52 1910 1048 2209 0456 8777 0001', uwagi: ''},
    { id: 75, data_umowy: '21/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grzegorczyk', adres: 'Przasnyskiej 2/172, 01-756 Warszawa', pesel: 78012311997,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '28 2490 0005 0000 4000 1393 8825', uwagi: ''},
    { id: 76, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grzegorczyk', adres: 'Przasnyskiej 2/172, 01-756 Warszawa', pesel: 78012311997,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 90_000, nr_rach_spol: '', nr_rach_inwest: '28 2490 0005 0000 4000 1393 8825', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu części wkładu inwestycyjnego. '}, //przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 25.05.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PIT BULL, OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 77, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grzegorczyk', adres: 'Przasnyskiej 2/172, 01-756 Warszawa', pesel: 78012311997,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 75_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '28 2490 0005 0000 4000 1393 8825', uwagi: ''},
    { id: 78, data_umowy: '18/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wojciech Piątek', adres: 'Wspólnej 23/4, 61479 Poznań', pesel: 83101101751,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  86 1090 1854 0000 00001 0177 9427', uwagi: 'drugi scan tej samej umowy'},
    { id: 79, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Stępniewicz', adres: 'Literackiej 15/5, 01-864 Warszawa', pesel: 77050800072,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 26_000, nr_rach_spol: '', nr_rach_inwest: '76 2030 0045 1130 0000 1163 1820', uwagi: ' Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, //przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 03.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 80, data_umowy: '11/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Pluta', adres: 'Bursztynowej 16/25, 20576 Lublin', pesel: 70010803270,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '65 1020 3176 0000 5502 0015 6711', uwagi: ''},
    { id: 81, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Remigiusz Krzyżanowski', adres: 'Azaliowej 8, 43-436 Górki Wielkie', pesel: 74022100473,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '64 1160 2202 0000 0001 5989 5616', uwagi: ''},
    { id: 82, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Stanisław Oleksiuk', adres: 'Orzeszkowej 25, 05-300 Mińsk Mazowiecki', pesel: 67092003331,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '03 1240 6221 1111 0000 4597 3150', uwagi: ''},
    { id: 83, data_umowy: '11/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Mazurek', adres: 'Ściegiennego 11a, 97-200 Tomaszów Mazowiecki', pesel: 66121011356,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '17 1560 0013 2598 1084 0225 0001', uwagi: ''},
    { id: 84, data_umowy: '29/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Litwin „Litwin Junior Advertising Agencja Reklamowa Piotr Litwin”', adres: 'Ściegennego 2, 25-033 Kielce', pesel: '',  nip: 9590955034, regon: 29010423.0, przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '37 2490 0005 0000 4100 5535 6838', uwagi: ''},
    { id: 85, data_umowy: '05/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zdzisław Jamka', adres: 'Opaczewskiej 69a/6 , 02-201 Warszawa', pesel: 52120605971,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '71 1030 0019 0109 8510 0011 8417', uwagi: ''},
    { id: 86, data_umowy: '07/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Silverdot Sp z o.o.', adres: 'Domaniewskiej 37/2.43, 02-672 Warszawa', pesel: '',  nip: 5213722582, regon: 363716987.0, przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  48 1140 2004 0000 3202 7606 0528', uwagi: ''},
    { id: 87, data_umowy: '07/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Izbiński', adres: ' Leona Petrażyckiego 77E /5, 30-399 Kraków', pesel: 59122903472,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  41 1910 1043 2103 1913 0295 0001', uwagi: 'dwa scany tej samej umowy'},
    { id: 88, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wojciech Karczewski', adres: 'Pasłęckiej 12d/65, 03-137 Warszawa', pesel: 54111900016,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '', nr_rach_inwest: '64 1460 1181 2012 1064 1806 0006', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI. '}, //z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 29.05.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy", „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 89, data_umowy: '07/02/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Skorupski', adres: 'Janowskiej 71a, 20 -509 Lublin', pesel: 76100103510,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1060 0630 0001', uwagi: 'trzy scany tej samej umowy'},
    { id: 90, data_umowy: '13/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'VECTRA S.A. z siedzibą w Gdyni', adres: 'Al. Zwycięstwa 253, 81-525 Gdynia', pesel: '',  nip: '586-20-40-690', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 400_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '92 1240 6247 1111 0000 4972 9171', uwagi: ''},
    { id: 91, data_umowy: '25/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Rafał Kulczycki', adres: 'Zimowit 45/6, 35-605 Rzeszów', pesel: 68102902297,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '', nr_rach_inwest: '  11 1030 0019 0109 8510 0208 9664', uwagi: ', Pitbull. Królowie Autostrad" ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania'},
    { id: 92, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Jakubas', adres: 'Parcele Łachockie 36D, 87-617 Rachcin', pesel: 73071404514,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '', nr_rach_inwest: '79 1050 1445 1000 0092 1308 1806', uwagi: ', SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI. '}, //z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 02.06.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 93, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Męcik', adres: 'Orlicz-Dreszera 27, 42-202 Częstochowa', pesel: 60021109339,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  80 1050 1142 1000 0022 4077 6076', uwagi: 'Brak podpisu'},
    { id: 94, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Celnik', adres: 'Nowolipki 28/10, 01-019 Warszawa', pesel: 56060801291,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '', nr_rach_inwest: '16 1020 1169 0000 8002 0057 6264', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, // 1.\xa0\xa0\xa0\xa0\xa0\xa0 --> przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 18.07.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES" (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 95, data_umowy: '30/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Strzaliński', adres: 'Żeromskiego 27, 05-070 Sulejówek', pesel: 78090301376,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1496 4360 0082', uwagi: 'zawartość dokumentów została powielona(są 2 skany)'},
    { id: 96, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Prokop', adres: 'Kleberga 3, 33-101 Tarnów', pesel: 71110309059,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  54 1140 2017 0000 4802 0258 0942', uwagi: 'Brak podpisu; zawartość dokumentów została powielona(są 2 skany)'},
    { id: 97, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Lis', adres: 'Trablice 83, 26-624 Kowala', pesel: '',  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '', nr_rach_inwest: '  13 1090 2590 0000 0001 2109 8249', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego. '}, //przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 23.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 98, data_umowy: '11/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Instytut Kształcenia Kadr Paweł Krokowski', adres: 'Michała Kruka 3, 20-706 Lublin ', pesel: '',  nip: 7121732898, regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '39 1090 2835 0000 0001 3532 8981', uwagi: ''},
    { id: 99, data_umowy: '12/03/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Trzeciecki', adres: 'Al. KEN 57/ 136, 02 -797 Warszawa', pesel: 63041002970,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '67 1240 5989 1111 0010 3195 9954', uwagi: 'dwa scany tej samej umowy'},
    { id: 100, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Gołębiewski', adres: 'Lotniczej 3A, 05-806 Komorów', pesel: 70072701190,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '76 1140 2004 0000 3902 2333 6980', uwagi: 'Brak podpisu spółki'},
    { id: 101, data_umowy: '07/03/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mateusz Kałasa', adres: 'KEN 90/37, 02-777 Warszawa', pesel: 76072200997,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  49 1090 1870 0000 0001 3103 4301', uwagi: 'Brak podpisu'},
    { id: 102, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marzena Suchocka', adres: 'Konstancińskiej 11 A m. 11, 02-942 Warszawa', pesel: 69081901145,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  43 2490 0005 0000 4100 3263 3898', uwagi: ''},
    { id: 103, data_umowy: '04/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marta Siusta', adres: 'Milsko 25, 66-004 Zabór', pesel: 80120303544,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 2340 0009 0180 4010 0002 3076', uwagi: 'Dołączono 2 skany'},
    { id: 104, data_umowy: '05/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Pyclik', adres: 'Grażyny 6, 31-217 Kraków', pesel: 74060100332,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  03 1050 1445 1000 0092 1007 3749', uwagi: 'dwa scany tej samej umowy'},
    { id: 105, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Grabowski', adres: 'Kuczmerowicza 2/2, 64-020 Czempiń', pesel: 74091905410,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '97 1020 4160 0000 2102 0042 4168', uwagi: ''},
    { id: 106, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Laskowski', adres: 'Krasnobrodzkiej 8/48, ,03-214 Warszawa', pesel: 76042403657,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 44_000, nr_rach_spol: '', nr_rach_inwest: '  98 1140 2004 0000 3502 7471 4479', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ. '}, //1.\xa0\xa0\xa0\xa0\xa0\xa0 --> należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 11.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad" ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 107, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Lech', adres: 'Baccierellego 51/7, 51-649 Wrocław', pesel: 60052308853,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 104_000, nr_rach_spol: '', nr_rach_inwest: '34 1950 0001 2006 0061 4034 0002', uwagi: 'Wpłata kwoty współfinansowania zostanie dolconana poprzez potrącenie przez SPÓŁKĘ należności przysługującej INWESTOROWI. '}, //1.\xa0\xa0\xa0\xa0\xa0\xa0 -->z tytułu Umów inwestycyjnych o finansowanie produkcji filmowych z dnia 25.05.2017 r. oraz z dnia 16.02.2016 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy", „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytulu wpłaty kwoty współfinansowania.
    { id: 108, data_umowy: '14/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Kocięda', adres: 'Kościuszki IOB, 13-200 Działdowo', pesel: 72101800876,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '28124053381111000050632424', uwagi: 'Brak podpisu'},
    { id: 109, data_umowy: '29/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Konwerga Sp. z o.o. Jarosław Ławicki — Prezesa Zarządu', adres: 'Janikowskiej 21, 61-070 Poznań', pesel: '',  nip: 7822334860, regon: 300097243.0, przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  43 1020 4027 0000 1102 0451 5151', uwagi: ''},
    { id: 110, data_umowy: '07/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Katarzyna Melon', adres: 'Fleminga 47B, 03-176 Warszawa', pesel: 72102800646,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '20 1160 2202 0000 0000 1051 0976', uwagi: ''},
    { id: 111, data_umowy: '30/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Katarzyna Dyba', adres: 'Książkowej 54 f, 03-134 Warszawa', pesel: 73051702801,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  11 1440 1101 0000 0000 1194 3926', uwagi: 'Brak podpisu'},
    { id: 112, data_umowy: '19/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jerzy Podczaski', adres: 'Grunwaldzkiej 41/18, 43-300 Bielsko Biała ', pesel: 49020804414,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 40_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 2490 0005 0000 4000 2870 4933', uwagi: 'brak podpisu w jednym ze skanów, posada 2 skany'},
    { id: 113, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Duński', adres: 'Dworcowej 38/4, 44-100 Gliwice', pesel: 41082100716,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1240 1343 1111 0000 2354 9766', uwagi: 'Dołączono 2 skany'},
    { id: 114, data_umowy: '27/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Stróżyk', adres: 'Olszynka 4, 60-303 Poznań', pesel: 68051606170,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '23 1950 0001 2006 0074 4715 0002', uwagi: ''},
    { id: 115, data_umowy: '09/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Paź, Ewa Paź', adres: 'Klonowej 1 1a, , 05-200 Wołomin-Lipinki', pesel: 69073107517.8407,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  30 1020 1042 0000 8402 0227 1005', uwagi: ''},
    { id: 116, data_umowy: '19/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Kiepurski', adres: 'Bruzdowej 102C/8, 02-991 Warszawa', pesel: 72122600477,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '22 1140 2017 0000 4702 0620 4905', uwagi: ''},
    { id: 117, data_umowy: '12/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Burnat', adres: 'Szafranów 20a, 04769 Warszawa', pesel: 70022409697,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  64 1500 1878 1012 7008 8018 0000', uwagi: 'Brak podpisu'},
    { id: 118, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Bogdaniuk', adres: 'Osiedlowej 45, 05-509 Józefosław', pesel: 79101000657,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  86 1440 1101 0000 0000 0511 9208', uwagi: ''},
    { id: 119, data_umowy: '04/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ewa Dernoga', adres: 'Szamarzewskiego 13/15/b1, 60-514 Poznań', pesel: 82072304686,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '87 1090 1623 0000 0001 0599 9457', uwagi: 'zawartość dokumentów została powielona(są 2 skany)'},
    { id: 120, data_umowy: '14/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dorota Marciniak', adres: 'Sosnowej 8, 66-470 Kostrzyn nad Odrą', pesel: 60012205767,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '66 1020 1954 0000 7102 0020 6938', uwagi: 'Brak podpisu'},
    { id: 121, data_umowy: '24/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dariusz Sławomir Bromke', adres: 'Głównej 28, 05-119 Michałów Reginów', pesel: 68051701257,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 40_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1020 1055 0000 9702 0128 8166', uwagi: ''},
    { id: 122, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dariusz Baran', adres: 'Lawendowej 24, 86-031 Osielsko', pesel: 68041801772,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '67 1440 1215 0000 0000 1236 7015', uwagi: 'zawartość dokumentów została powielona(są 3 skany)'},
    { id: 123, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Brzezińska', adres: 'Wyspiańskiego 6/8 m, 27, 01-577 Warszawa', pesel: 88062503109,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '', nr_rach_inwest: '  33 1030 0019 0109 8510 0146 5461', uwagi: 'dwa scany tej samej umowy Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ. '}, //należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 17.07.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad" ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania. Posiada 2 skany
    { id: 124, data_umowy: '29/03/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Artur Binkowski', adres: 'Korsaka 6/91, 03744 Warszawa', pesel: 79050707113,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '10 1140 2004 0000 3402 3120 2106', uwagi: ''},
    { id: 125, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Robiński', adres: 'os. Stare Żegrze 2/4, 61-249 Poznań', pesel: 85070700010,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 45_000, nr_rach_spol: '', nr_rach_inwest: '  56 1140 2004 0000 3302 3475 4825', uwagi: 'Wpłata kwoty współfinansowania zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności'}, //w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 30.06.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.
    { id: 126, data_umowy: '23/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Alicja Szymańska', adres: 'Wolica, przy ulicy Zielonej 6, 05-850 Nadarzyn', pesel: 62111203145,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '90 1050 1025 1000 0022 0108 9295', uwagi: 'd'},
    { id: 127, data_umowy: '20/03/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Cypryk-Chmielewska', adres: 'Darwina 18 m 34, 03-488 Warszawa', pesel: 60011901183,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '62 1160 2202 0000 0003 1968 0745', uwagi: 'dwa scany tej samej umowy'},
    { id: 128, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Brzezińska', adres: 'Wyspiańskiego 6/8 m. 27, 01-577 Warszawa', pesel: 60031503028,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '', nr_rach_inwest: '17 1030 0019 0109 8510 0144 7319', uwagi: 'Wpłata kwoty współfinansowania.'}, //zostanie dokonana poprzez potrącenie przez SPÓŁKĘ należności w postaci zwrotu wkładu inwestycyjnego przysługującej INWESTOROWI z tytułu Umowy inwestycyjnej o finansowanie produkcji filmowych z dnia 17.07.2017 r. w przedmiocie realizacji dzieła filmowego pod tytułem „PITBULL. OSTATNI PIES” (tytuły robocze „Pitbull. Król ulicy”, „Pitbull. Królowie Autostrad" ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.; 3 scany tej samej umowy
    { id: 129, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Adrian Chrapek', adres: 'Cybernetyki 7439, 02-677 Warszawa', pesel: 85092008330,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  18 1050 1054 1000 0091 1604 0701', uwagi: ''},
    { id: 130, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Olszański', adres: 'Wschodniej 25, 05-500 Chyliczki', pesel: 54072903394,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '', nr_rach_inwest: '', uwagi: ', Pitbull. Królowie Autostrad” ze zobowiązaniem INWESTORA z tytułu wpłaty kwoty współfinansowania.'},
    { id: 131, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Olszański', adres: 'Wschodniej 25, 05-500 Chyliczki', pesel: 54072903394,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '  10 2490 0005 0000 4004 6090 5449', uwagi: ''},
    { id: 132, data_umowy: '28/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jan Gorgosz', adres: 'Targowej 23/12, 43-430 Skoczów', pesel: 41052805830,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '39 2490 0005 0000 4000 2528 5881', uwagi: ''},
    { id: 133, data_umowy: '27/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jan Gorgosz', adres: 'Targowej 23/12, 43-430 Skoczów', pesel: 41052805830,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 95_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '39 2490 0005 0000 4000 2528 5881', uwagi: ''},
    { id: 134, data_umowy: '18/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Irena Mazurek', adres: 'Kuszewo 2, 62-285 Kuszewo', pesel: 77022502986,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 40_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: ''},
    { id: 135, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Irena Mazurek', adres: 'Kuszewo 2, 62-285 Kuszewo', pesel: 77022502986,  nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '46 1020 3903 0000 1002 0015 7446', uwagi: ''},
    { id: 136, data_umowy: '23/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agencja Pracy i Doradztwa Marzanna Rutkowska', adres: 'Kacza 6/13, Ol013 Warszawa', pesel: '',  nip: 5421654210, regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '03 1950 0001 2006 0124 4984 0002', uwagi: ''},
    { id: 137, data_umowy: '14/12/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ewa Sadowska', adres: 'Rodzinnej 34, 30-377 Kraków', pesel: 65122400086,  nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 30_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '53 1050 1445 1000 0022 2643 9897', uwagi: ''},
    { id: 138, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ewa Sadowska', adres: 'Rodzinnej 34, 30-377 Kraków', pesel: 65122400086,  nip: '', regon: '', przedmiot: '', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Aneks do umowy'},
    { id: 139, data_umowy: '08/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Skurski', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 70_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '61 1240 6175 1111 0000 4579 3859', uwagi: 'Brak podpisu inwestora'},
    { id: 140, data_umowy: '20/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Robert Bąk', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '92 1440 1387 0000 0000 1638 3147', uwagi: ''},
    { id: 141, data_umowy: '18/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mieczysław Rybak', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'imię nieczytelne, trzeba to sprawdzić'},
    { id: 142, data_umowy: '27/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ewa Haszyńska', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '84 1140 2004 0000 3102 1714 4942', uwagi: 'nazwisko delikatnie nieczytelne, lepiej sprawdzić '},
    { id: 143, data_umowy: '27/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Krupa', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '64 1240 6133 1111 0010 2418 2156', uwagi: ''},
    { id: 144, data_umowy: '30/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Magdalena Gronkiewicz', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '56 1140 2004 0000 3702 4119 7660', uwagi: 'nieczytelne nazwisko'},
    { id: 145, data_umowy: '10/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Gomoliński', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '42 1140 2004 0000 3802 3481 1092', uwagi: 'nieczytelne nazwisko '},
    { id: 146, data_umowy: '22/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Urszula Głowacka', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '28 1020 1013 0000 0102 0074 4888', uwagi: ''},
    { id: 147, data_umowy: '24/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Ocznowicz', adres: '', pesel: '',  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1020 3958 0000 9702 0053 1095', uwagi: 'Dołączono 2 skany, nazwisko nieczytelne, w jednej z umów jest zawarta kwota, a w drugiej jej brak'},
    { id: 148, data_umowy: '24/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Katarzyna Kacpula', adres: '', pesel: '',  nip: '', regon: '', przedmiot: '"GROM"', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '19 1020 1097 0000 7102 0030 3404', uwagi: ''},
    { id: 149, data_umowy: '24/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Cholewa', adres: '', pesel: '',  nip: '', regon: '', przedmiot: '"GROM"', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '32 1020 1097 0000 7202 0056 9483', uwagi: ''},
    { id: 150, data_umowy: '22/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marida Błaszezyk', adres: '', pesel: '',  nip: '', regon: '', przedmiot: '"GROM"', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '85 1240 6104 1111 0000 4785 1333', uwagi: 'Dane inwestora są nieczytelne'},
    { id: 151, data_umowy: '18/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Filip Kruszczyński', adres: '', pesel: '',  nip: '', regon: '', przedmiot: '"Chłopaki nie płaczą 2"', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak number rachunku inwestora'},
    { id: 152, data_umowy: '18/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Martyna Krzyżanowska', adres: 'Azaliowa 8, 43-436 Górki Wielkie', pesel: 97072009769,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '78 1160 2202 0000 0001 9983 5599', uwagi: ''},
    { id: 153, data_umowy: '15/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Władysław Czajkowski', adres: 'Wieniawskiego 84/2, 58-309 Wałbrzych ', pesel: 42040700737,  nip: '', regon: '', przedmiot: '"GROM"', kwota: 2_650_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '26 2490 0005 0000 4000 7534 6263', uwagi: 'Inwestor opłacił 3 filmy '},
    { id: 154, data_umowy: '15/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Władysław Czajkowski', adres: 'Wieniawskiego 84/2, 58-309 Wałbrzych ', pesel: 42040700737,  nip: '', regon: '', przedmiot: '"Chłopaki nie płaczą" lub "Konglomerat śmierci"', kwota: 1_200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '26 2490 0005 0000 4000 7534 6263', uwagi: ''},
    { id: 155, data_umowy: '15/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Władysław Czajkowski', adres: 'Wieniawskiego 84/2, 58-309 Wałbrzych ', pesel: 42040700737,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 1_150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '26 2490 0005 0000 4000 7534 6263', uwagi: ''},
    { id: 156, data_umowy: '13/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'VECTRA S.A. z siedzibą w Gdyni', adres: 'Al. Zwycięstwa 253, 81-525 Gdynia', pesel: '',  nip: '586-20-40-690', regon: '', przedmiot: '"GROM"', kwota: 400_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '92 1240 6247 1111 0000 4972 9171', uwagi: ''},
    { id: 157, data_umowy: '11/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Pluta', adres: 'Bursztynowej 16/25, 20576 Lublin', pesel: 70010803270,  nip: '', regon: '', przedmiot: '"GROM. Narodziny legendy"', kwota: 80_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '65 1020 3176 0000 5502 0015 6711', uwagi: 'inwestor powtarza się drugi raz,aneks'},
    { id: 158, data_umowy: '24/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Strzaliński', adres: 'Żeromskiego 27, 05-070 Sulejówek', pesel: 78090301376,  nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '64 1020 1013 0000 0402 0173 9895', uwagi: ''},
    { id: 159, data_umowy: '23/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Duński', adres: 'Dworcowej 38/4, 44-100 Gliwice', pesel: 41082100716, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 150_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1240 1343 1111 0000 2354 9766', uwagi: 'Inwestor inwestuje w 2 filmy'},
    { id: 160, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Katarzyna Drabowicz', adres: 'Oś. Stare Zegrze 89 c/2, 62-224 Poznań', pesel: 66071610427, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50_000, nr_rach_spol: '', nr_rach_inwest: '70 1240 1763 1111 0000 1790 3679', uwagi: 'osoba finansuje film Pitbull, lecz jest napisane na pierwszej stronie, że będzie finansować film GROM. '}, //, aneks, brak podpisu, brak podanego numberu rachunku spółki oraz terminu zobowiązania
    { id: 161, data_umowy: '30/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Nikodem Dziadek', adres: 'Pniewskiego 4, 60-692 Poznań', pesel: 'NR. DOWODU: AXK802001', nip: '', regon: '', przedmiot: 'PitBull - płacowi vs. zorganizowani', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1140 2004 0000 3302 0411 4176', uwagi: 'aneks'},
    { id: 162, data_umowy: '20/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '', nip: '648-19-97-718', regon: 2733295877.0, przedmiot: 'Dywizjon 303', kwota: 250000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: 'brak numeru rachunku ', uwagi: 'aneks'},
    { id: 163, data_umowy: '14/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mateusz Kałasa', adres: 'Aleja Komisji Narodowej 90/37 02-777 Warszawa', pesel: 76072200997, nip: '', regon: '', przedmiot: 'GROM', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '49 1090 1870 0000 0001 3103 4301', uwagi: ''},
    { id: 164, data_umowy: '17/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Brzezińska', adres: 'Wyspiańskiego 6/8 m. 27, 01-577 Warszawa', pesel: 60031503028, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '17 1030 0019 0109 8510 0144 7319', uwagi: 'dwa scany tej samej umowy'},
    { id: 165, data_umowy: '17/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Brzezińska', adres: 'Wyspiańskiego 6/8 m, 27, 01-577 Warszawa', pesel: 88062503109, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 25_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '33 1030 0019 0109 8510 0146 5461', uwagi: 'dwa scany tej samej umowy'},
    { id: 166, data_umowy: '12/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Bojdol', adres: 'Wrocławskiej 272, 59-220 Legnica', pesel: 74062606150, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 60_000, nr_rach_spol: '', nr_rach_inwest: '51 1050 1748 1000 0090 9689 3996', uwagi: 'Brak number rachunku spółki oraz brak terminu zobowiązania'},
    { id: 167, data_umowy: '20/02/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Bojdol', adres: 'Wrocławskiej 272, 59-220 Legnica', pesel: 74062606150, nip: '', regon: '', przedmiot: 'GROM ', kwota: 50_000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: '77 1050 1748 1000 0092 0334 8991', uwagi: ''},
    { id: 168, data_umowy: '18/09/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Bojdol', adres: 'Wrocławskiej 272, 59-220 Legnica', pesel: 74062606150, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '77 1050 1748 1000 0092 0334 8991', uwagi: 'ANEKS '},
    { id: 169, data_umowy: '26/01/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Radosław Nowak', adres: 'Wawelskiej 2/25, 41-700 Ruda śląska ', pesel: 75022101310, nip: '', regon: '', przedmiot: 'PITBULL.OSTATNI PIES', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: 'brak numeru rachunku ', uwagi: ''},
    { id: 170, data_umowy: '23/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Lis', adres: 'Trablice 83, 26-624 Kowala', pesel: '', nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1090 2590 0000 0001 2109 8249', uwagi: ''},
    { id: 171, data_umowy: '27/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '', nip: '648-19-97-718', regon: 2733295877.0, przedmiot: '', kwota: 450_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'ANEKS, brak nr rachunku'},
    { id: 172, data_umowy: '16/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Nikodem Dziadek', adres: 'Pniewskiego 4, 60-692 Poznań', pesel: 'NR. DOWODU: AXK802001', nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 490_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'ANEKS'},
    { id: 173, data_umowy: '12/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wojciech Waliczek', adres: 'ul. Opolczyka 2/29, 43-200 Pszczyna ', pesel: '64031607591 | Nr. Dowodu: CDX 137104', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '69 1050 1315 1000 0090 7683 3467', uwagi: ''},
    { id: 174, data_umowy: '11/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wojciech Waliczek', adres: 'ul. Opolczyka 2/29, 43-200 Pszczyna ', pesel: '64031607591 | Nr. Dowodu: CDX 137104', nip: '', regon: '', przedmiot: 'GROM', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '69 1050 1315 1000 0090 7683 3467', uwagi: ''},
    { id: 175, data_umowy: '04/06/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kamila Polak', adres: 'Wyrobki 10, 88-300 Mogilno', pesel: 86050806803, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '89 1140 2004 0000 3102 7623 4051', uwagi: ''},
    { id: 176, data_umowy: '02/07/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kamila Polak', adres: 'Wyrobki 10, 88-300 Mogilno', pesel: 86050806803, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak podanego rachunku bankowego '},
    { id: 177, data_umowy: '17/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Majrowski', adres: '84-300 Lębork, Harcerzy 35A', pesel: 75011401458, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '78 1050 1764 1000 0092 3408 5729', uwagi: ''},
    { id: 178, data_umowy: '14/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Majrowski', adres: '84-300 Lębork, Harcerzy 35A', pesel: 75011401458, nip: '', regon: '', przedmiot: 'Chłopaki nie płaczą 2', kwota: 688_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '78 1050 1764 1000 0092 3408 5729', uwagi: ''},
    { id: 179, data_umowy: '01/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Majrowski', adres: '84-300 Lębork, Harcerzy 35A', pesel: 75011401458, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 250_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '78 1050 1764 1000 0092 3408 5729', uwagi: ''},
    { id: 180, data_umowy: '04/10/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Dryja ', adres: 'Kwiatów Polrzyek 3, 05-090 Pawidy Bankowe ', pesel: '72060301265 tel. 607 044 843', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 60_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Nieczyteleny adres zamieszkania, brak podango numeru rachunku'},
    { id: 181, data_umowy: '26/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Jaśkowski', adres: 'ul. Żurawia 49, 62-002 Złotniki ', pesel: 67051308891, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '89 1940 1076 4611 4076 0000 0000 ', uwagi: 'kopia'},
    { id: 182, data_umowy: '11/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Fularczyk', adres: 'ul. Szafranowa 6b/2, 81-591 Gdynia', pesel: 75052704370, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1940 1076 4930 6082 0000 0000', uwagi: 'd'},
    { id: 183, data_umowy: '21/03/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Wieczorek', adres: '05-092 Łomianki, Wołodyjowskiego 4 ', pesel: '91041013373', nip: '', regon: '', przedmiot: 'GROM', kwota: 30_000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: '44 1140 2004 0000 3902 6216 9372', uwagi: 'dwa scany tej samej umowy'},
    { id: 184, data_umowy: '14/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bartłomiej Krawczyk ', adres: 'ul. Świdnicka 5/11; 50-064 Wrocław(adres. Korespondencyjny ul. Sucharskiego 45; 52-205 Wrocław)', pesel: '83060600797', nip: '', regon: '', przedmiot: 'GROM', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '54 1050 1575 1000 0022 8428 5141', uwagi: 'dwa scany tej samej umowy'},
    { id: 185, data_umowy: '', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bartłomiej Krawczyk ', adres: 'ul. Świdnicka 5/11; 50-064 Wrocław(adres. Korespondencyjny ul. Sucharskiego 45; 52-205 Wrocław)', pesel: '83060600797', nip: '', regon: '', przedmiot: 'Chłopaki nie płaczą 2', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '54 1050 1575 1000 0022 8428 5141', uwagi: 'dwa scany tej samej umowy'},
    { id: 186, data_umowy: '20/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski', adres: '', pesel: 74031402010, nip: '', regon: '', przedmiot: 'PitBull - pałacowi vs. zorganiowani', kwota: 70000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1140 2004 0000 3002 2981 2855', uwagi: 'Brak adresu inwestora'},
    { id: 187, data_umowy: '20/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski', adres: '', pesel: 74031402010, nip: '', regon: '', przedmiot: 'SmallWorld', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1140 2004 0000 3002 2981 2855', uwagi: 'Brak adresu inwestora'},
    { id: 188, data_umowy: '02/03/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski', adres: 'Botauiczna 7E 13-190, Mikołów', pesel: '', nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 120000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Nieczytelny adres , brak peselu, brak numeru rachunku'},
    { id: 189, data_umowy: '02/03/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski', adres: 'Botauiczna 7E 13-190, Mikołów', pesel: '', nip: '', regon: '', przedmiot: 'SmallWorld', kwota: 120000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Nieczytelny adres , brak peselu, brak numeru rachunku'},
    { id: 190, data_umowy: '10/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Małgorzata Mazanek', adres: 'ul. Odkrytej 36A/5, 03-140 Warszawa', pesel: 67101910989, nip: '', regon: '', przedmiot: 'GROM', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '19 1750 0012 0000 0000 1100 8291', uwagi: ''},
    { id: 191, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Mazanek', adres: 'ul. Odkrytej 36A/5, 03-140 Warszawa', pesel: 68062201030, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '19 1750 0012 0000 0000 1100 8291', uwagi: 'dwa scany tej samej umowy'},
    { id: 192, data_umowy: '22/04/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Milton Foxberg Finanse sp.z.o.o sp. k.', adres: 'ul. Dekabrystów 82 42-200 Częstochowa ', pesel: '', nip: 5732853791, regon: 361000670.0, przedmiot: 'PitBull - pałacowi vs. zorganiowani', kwota: 600000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '71 8980 0009 2011 0072 9031 0002', uwagi: 'Brak pospisu inwestora'},
    { id: 193, data_umowy: '25/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marzena Bochen', adres: 'ul. T.Kościuszki 142c/17, 50-439 Wrocław', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '23 2490 0005 0000 4000 3656 5038', uwagi: 'Brak peselu'},
    { id: 194, data_umowy: '28/09/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Filip ', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'PutBull. Śmierć frajerom', kwota: 1000000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak peselu, nazwisko nieczytelne, brak adresu zamieszkania, brak numeru rachunku'},
    { id: 195, data_umowy: '15/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Skóbel', adres: '', pesel: 70010514938, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 60000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '37 1140 2004 0000 3802 1146 9781', uwagi: 'Brak adresu inwestora'},
    { id: 196, data_umowy: '19/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Nalazek', adres: 'Mińsk Mazowiecki, ul. Świętokrzyska 37 ', pesel: '65041612306   tel. 694 066 779 ', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '80 1030 0019 0109 8517 0047 4551', uwagi: ''},
    { id: 197, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Swęda ', adres: 'Drużbackiej 4/15, 60-756 Poznań ', pesel: 68102104750, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 33000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1061 4490 0003', uwagi: 'dwa scany tej samej umowy'},
    { id: 198, data_umowy: '30/06/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Robiński', adres: 'os. Stare Żegrze 2/4, 61-249 Poznań', pesel: 85070700010, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 45000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '56 1140 2004 0000 3302 3475 4825', uwagi: ''},
    { id: 199, data_umowy: '03/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Patryk Szczechowicz', adres: 'ul. Powstańców Śląskich 87/268, 01-355 Warszawa', pesel: '', nip: 5242487988, regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak peselu oraz brak numeru bankowego'},
    { id: 200, data_umowy: '06/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Książek ', adres: 'ul. Klonowa 2, 05-126 Michałów-Grabina', pesel: 79041103474, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '33 1090 1694 0000 0001 3374 2780', uwagi: 'Brak pospisu spółki'},
    { id: 201, data_umowy: '22/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Książek ', adres: 'ul. Klonowa 2, 05-126 Michałów-Grabina', pesel: 79041103474, nip: '', regon: '', przedmiot: 'GROM', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '33 1090 1694 0000 0001 3374 2780', uwagi: ''},
    { id: 202, data_umowy: '23/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grochulski', adres: 'ul. Dembego 5/69, 02-796 Warszawa', pesel: 50020904554, nip: '', regon: '', przedmiot: 'GROM', kwota: 35000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 1560 0013 2381 0748 8964 0004', uwagi: ''},
    { id: 203, data_umowy: '12/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grochulski', adres: 'ul. Dembego 5/69, 02-796 Warszawa', pesel: 50020904554, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 150000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 1560 0013 2381 0748 8964 0004', uwagi: ''},
    { id: 204, data_umowy: '14/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Grzegorczyk', adres: 'Przasnyskiej 2/172, 01-756 Warszawa', pesel: 78012311997, nip: '', regon: '', przedmiot: '', kwota: 125000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak podanego filmu oraz numeru konta ---- ANEKS'},
    { id: 205, data_umowy: '18/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Celnik', adres: 'Nowolipki 28/10, 01-019 Warszawa', pesel: '56060801291, AWF 659115', nip: '', regon: '', przedmiot: 'PitBull. Król Ulicy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1020 1169 0000 8002 0057 6264', uwagi: ''},
    { id: 206, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Celnik', adres: 'Nowolipki 28/10, 01-019 Warszawa', pesel: '56060801291, AWF 659115', nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1020 1169 0000 8002 0057 6264', uwagi: ''},
    { id: 207, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Laskowski ', adres: 'Krasnobrodzkiej 8/48, ,03-214 Warszawa', pesel: 76042403657, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 44000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '98 1140 2004 0000 3502 7471 4479', uwagi: 'Brak podpisu inwestora'},
    { id: 208, data_umowy: '28/11/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Rustanowicz', adres: 'Wąwozowej 23/15, 02-796 Warszawa', pesel: 49050703617, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1050 1025 1000 0023 1433 7409', uwagi: ''},
    { id: 209, data_umowy: '23/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Rustanowicz', adres: 'Wąwozowej 23/15, 02-796 Warszawa', pesel: 49050703617, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1050 1025 1000 0023 1433 7409', uwagi: ''},
    { id: 210, data_umowy: '29/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Rustanowicz', adres: 'Wąwozowej 23/15, 02-796 Warszawa', pesel: 49050703617, nip: '', regon: '', przedmiot: 'Pies łańcuchowy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1050 1025 1000 0023 1433 7409', uwagi: ''},
    { id: 211, data_umowy: '16/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Grabowski', adres: 'Kuczmerowicza 2/2, 64-020 Czempiń', pesel: 74091905410, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '97 1020 4160 0000 2102 0042 4168', uwagi: 'Brak podanego terminy zobowiązania umowy '},
    { id: 212, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Grabowski', adres: 'Kuczmerowicza 2/2, 64-020 Czempiń', pesel: 74091905410, nip: '', regon: '', przedmiot: 'GROM', kwota: 260000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '97 1020 4160 0000 2102 0042 4168', uwagi: ''},
    { id: 213, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Grabowski', adres: 'Kuczmerowicza 2/2, 64-020 Czempiń', pesel: 74091905410, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '97 1020 4160 0000 2102 0042 4168', uwagi: ''},
    { id: 214, data_umowy: '04/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Sobieraj', adres: 'ul. Dźwigowa 34, 02-437 Warszawa', pesel: 53093004914, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 300000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '04 1030 0019 0109 8517 0011 6922', uwagi: ''},
    { id: 215, data_umowy: '04/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Emil Sieligowski', adres: 'ul. Szajnowicza 1/94, 02-796 Warszawa', pesel: '84050305216, CDK 4230062', nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 1460 1181 2012 0060 4787 0002', uwagi: ''},
    { id: 216, data_umowy: '18/07/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Celnik', adres: 'ul. Nowolipki 28 m.10, 01-019 Warszawa', pesel: '56060801291, AWF 659115', nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1020 1169 0000 8002 0057 6264', uwagi: ''},
    { id: 217, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Celnik', adres: 'ul. Nowolipki 28 m.10, 01-019 Warszawa', pesel: '56060801291, AWF 659115', nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1020 1169 0000 8002 0057 6264', uwagi: ''},
    { id: 218, data_umowy: '22/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mariola Błaszezyk', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '95 1240 6104 1111 0000 4785 1333', uwagi: 'Nieczytelne imie i nazwisko, brak peselu oraz miejsca zamieszkania'},
    { id: 219, data_umowy: '23/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bogusław Ordon ', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '78 1240 2887 1111 0000 3390 3158', uwagi: 'Brak peselu oraz miejsca zamieszkania'},
    { id: 220, data_umowy: '23/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dorota Berger-Gostkiewicz', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '77 1050 1025 1000 0092 1872 6413', uwagi: 'Brak peselu oraz miejsca zamieszkania, nazwisko nieczytelne'},
    { id: 221, data_umowy: '20/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski ', adres: '', pesel: 74031402010, nip: '', regon: '', przedmiot: 'SmallWorld', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1140 2004 0000 3002 2981 2885', uwagi: 'brak miejsca zamieszkania'},
    { id: 222, data_umowy: '20/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski ', adres: '', pesel: 74031402010, nip: '', regon: '', przedmiot: 'PitBull - pałacowi vs. zorganiowani', kwota: 70000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1140 2004 0000 3002 2981 2885', uwagi: 'brak miejsca zamieszkania'},
    { id: 223, data_umowy: '02/03/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski ', adres: 'ul. Botanicznej 7e, 43-190, Mikołów', pesel: 74031402010, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 204000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '38 1140 2004 0000 3002 2981 2885', uwagi: 'brak podpisu spółki'},
    { id: 224, data_umowy: '02/03/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Krzysztof Brzyski ', adres: 'ul. Botanicznej 7e, 43-190, Mikołów', pesel: 74031402010, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 120000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak podanego numeru rachunkowego '},
    { id: 225, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Cetens', adres: 'ul.Wrzeciono 59B/66, 01-950 Warszawa', pesel: 51102201190, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 60000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1870 1045 2078 1166 9175 0002', uwagi: 'dwa scany tej samej umowy'},
    { id: 226, data_umowy: '16/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Cetens', adres: 'ul.Wrzeciono 59B/66, 01-950 Warszawa', pesel: 51102201190, nip: '', regon: '', przedmiot: 'GROM', kwota: 22000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1870 1045 2078 1166 9175 0002', uwagi: 'wpłata w gotówce, dwa scany tej samej umowy'},
    { id: 227, data_umowy: '30/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Cetens', adres: 'ul.Wrzeciono 59B/66, 01-950 Warszawa', pesel: 51102201190, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '02 1870 1045 2078 1166 9175 0002', uwagi: 'wpłata w gotówce, dwa scany tej samej umowy'},
    { id: 228, data_umowy: '16/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Miziołek', adres: 'Zamojskiego 34, 09-300 Żuromin', pesel: 60091201007, nip: '', regon: '', przedmiot: 'GROM', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '31 1870 1045 2078 1169 7107 0001', uwagi: ''},
    { id: 229, data_umowy: '04/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Zawadzki', adres: 'ul. Sucharskiego 6 m.19, 01-390 Warszawa', pesel: 56110100039, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '77 1440 1387 0000 0000 0959 2156', uwagi: ''},
    { id: 230, data_umowy: '27/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Monika Suda', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '12 1950 0001 2006 0265 8450 0002', uwagi: 'Brak podanego miejsca zamieszkania oraz peselu'},
    { id: 231, data_umowy: '12/05/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Laskowski', adres: 'ul. Krasnobrodzkiej 8/48, 03-214 Warszawa', pesel: '76042403657, AGR 989546', nip: '', regon: '', przedmiot: 'PitBull - pałacowi vs. zorganiowani', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '98 1140 2004 0000 3502 7471 4479', uwagi: 'Nieczytelne nazwisko, imię oraz adres zamieszkania'},
    { id: 232, data_umowy: '11/02/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Laskowski', adres: 'ul. Krasnobrodzkiej 8/48, 03-214 Warszawa', pesel: 76042403657, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '98 1140 2004 0000 3502 7471 4479', uwagi: ''},
    { id: 233, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Laskowski', adres: 'ul. Krasnobrodzkiej 8/48, 03-214 Warszawa', pesel: 76042403657, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 44000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '98 1140 2004 0000 3502 7471 4479', uwagi: ''},
    { id: 234, data_umowy: '01/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Skowronek', adres: '02-495 Warszawa', pesel: '71112900432, AWT 423219', nip: '522-129-68-75', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak podanej ulicy inwestora, brak podanego numeru bankowego, brak kratki z podpisem'},
    { id: 235, data_umowy: '01/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Piotr Skowronek', adres: '02-495 Warszawa', pesel: '71112900432, AWT 423219', nip: '522-129-68-75', regon: '', przedmiot: 'GROM', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '44 1020 1055 0000 9602 0069 7086', uwagi: 'brak podanej ulicy inwestora, brak podanej daty zawarcia umowy'},
    { id: 236, data_umowy: '19/06/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Pro-En Spółka z ograniczoną odpowiedzialnością', adres: 'ul. Łopuszańska 95, 02-457 Warszawa', pesel: '', nip: '525-22-90-603', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '24 1090 1014 0000 0001 2401 1867', uwagi: ''},
    { id: 237, data_umowy: '08/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Skurski', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 70000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '61 1240 6175 1111 0000 4579 3859', uwagi: 'brak podanego adresu zamieszkania oraz peselu, brak podpisu inwestora'},
    { id: 238, data_umowy: '27/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Rafał Łauruszczuk', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '88 1160 2202 0000 0002 3767 0948', uwagi: 'brak podanego adresu zamieszkania oraz peselu'},
    { id: 239, data_umowy: '18/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mirosław Rybak', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak podanego adresu zamieszkania, peselu oraz numeru rachunku bankowego'},
    { id: 240, data_umowy: '16/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Marszałek', adres: 'ul. Wiejska 3a/15 05-270 Marki ', pesel: 85123106255, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 1000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '49 1030 0019 0109 8518 0593 1763', uwagi: ''},
    { id: 241, data_umowy: '24/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Ocznowicz', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1020 3958 0000 9702 0053 1095', uwagi: 'brak podanego adresu zamieszkania oraz peselu'},
    { id: 242, data_umowy: '11/09/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Gryka ', adres: 'ul. Gołkowskiej 59a, 05-502 Gołków', pesel: 75020604631, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1625 0160 0079', uwagi: ''},
    { id: 243, data_umowy: '26/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Paweł Smela', adres: 'ul. Gen. Boruty-Spiechowicza 16/7, 43-300 Bielsko-Biała', pesel: 75042319751, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '84 1050 1070 1000 0001 0369 5383', uwagi: ''},
    { id: 244, data_umowy: '30/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Anna Lasiota', adres: 'Ogińskiego 16/36, 80-134 Gdańsk', pesel: 75030602364, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 130000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1140 2004 0000 3212 0494 7034', uwagi: ''},
    { id: 245, data_umowy: '02/05/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'LTA Doractwo Prawne Dopierała i Wspólnicy" Spółka Komandytowa', adres: 'Al.. Wojska polskiego 11', pesel: '', nip: '', regon: 140739797.0, przedmiot: 'PitBull - Śmierć Frajerom', kwota: 300000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '89 1910 1048 2215 1600 9527 0001', uwagi: ''},
    { id: 246, data_umowy: '05/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Asapon sp.z.o.o', adres: 'ul.Sienkiewicza 8, 26-610 Radom', pesel: '', nip: '796-296-53-59', regon: '', przedmiot: 'PitBull - Śmierć Frajerom', kwota: 250000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: ''},
    { id: 247, data_umowy: '08/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'IT Busine ', adres: 'ul. Triback 4, 00-074 Warszawa', pesel: '', nip: '', regon: '', przedmiot: 'PitBull - Śmierć Frajerom', kwota: 250000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: 'brak numeru rachunku ', uwagi: 'Nieczytelna nazwa inwestora, nieczytelna ulica inwestora, brak numeru bankowego'},
    { id: 248, data_umowy: '21/03/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Wieczorek', adres: 'ul. Wołodyjowskiego 4, 05-092 Łomianki', pesel: 55030307315, nip: '', regon: '', przedmiot: 'GROM', kwota: 150000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1039 1970 0021 ', uwagi: ''},
    { id: 249, data_umowy: '26/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Beata Gołębiewska ', adres: 'ul. Lotniczej 3a, 05-806 Komorów', pesel: 70080401789, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '14 1140 2004 0000 3102 5528 8930', uwagi: 'Brak podpisu spółki'},
    { id: 250, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Kiepurski', adres: 'ul Bruzdowej 102C/8, 02-991 Warszawa', pesel: 72122600477, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '22 1140 2017 0000 4702 0620 4905', uwagi: ''},
    { id: 251, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Kiepurski', adres: 'ul Bruzdowej 102C/8, 02-991 Warszawa', pesel: 72122600477, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '22 1140 2017 0000 4702 0620 4905', uwagi: ''},
    { id: 252, data_umowy: '09/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dariusz Mierzejewski', adres: 'ul Krakowskiego 11/14 04-042 Warszawa', pesel: 59313117777, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '30 2490 0005 0000 4000 8435 8461', uwagi: ''},
    { id: 253, data_umowy: '03/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Maciaszek', adres: 'ul Lipowa 12b 05-540 Konstancin Jeziorna', pesel: 72052900270, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 40000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '90 1160 2202 0000 0002 6872 0752', uwagi: 'Brak stron w umowie'},
    { id: 254, data_umowy: '30/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marcin Sągal', adres: 'al. Stanów Zjednoczonych 18/87', pesel: 77122416934, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '74 1140 2004 0000 3202 3303 5031', uwagi: ''},
    { id: 255, data_umowy: '20/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jan Czajka', adres: 'ul Majolikowa 27/24 03-125 Warszawa', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '79 1160 2202 0000 0002 3634 9000', uwagi: ''},
    { id: 257, data_umowy: '20/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Izabela Klusek', adres: 'ul Łukiska 2/2 04-123 Warszawa', pesel: 71122201381, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '31 1030 0019 0109 8501 7005 3471', uwagi: ''},
    { id: 258, data_umowy: '16/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Jasiński', adres: 'al. Gen Chruściela 37/39 m 62', pesel: 59040504230, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 10000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1160 2202 0000 0000 6923 7564', uwagi: 'Umowa nie podpisana'},
    { id: 259, data_umowy: '09/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Rafał Kubiak', adres: 'os Boh Września 2/31 31-620 Kraków', pesel: 86010101195, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '70 1140 2004 0000 3702 7738 5683', uwagi: ''},
    { id: 260, data_umowy: '15/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Jędrzejczyk', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: 'brak numeru rachunku ', uwagi: ''},
    { id: 261, data_umowy: '15/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Jędrzejczyk', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: 'brak numeru rachunku ', uwagi: ''},
    { id: 262, data_umowy: '03/09/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Gutkowska', adres: 'Barszczeska 6/4,  01-354Warszawa', pesel: 71092904400, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 80000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '54 12406175 1111 0000 4576 6534', uwagi: ''},
    { id: 263, data_umowy: '18/07/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Stanisław Zimnoch', adres: 'Kiprów 9/11 m 21, 04-324 Warszawa', pesel: 35111301731, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '39 1140 2004 0000 3002 3415 5527', uwagi: ''},
    { id: 264, data_umowy: '10/12/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Eximp Grzegorz Kuta, Marek Kuta Sp. J.', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 250000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: 'brak numeru rachunku ', uwagi: 'drugi scan? Przekreślone i parafowane niektóre par.'},
    { id: 265, data_umowy: '28/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Norbert Kruk', adres: 'ul. Malczewskiego 21, 05-820', pesel: 71090907719, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 12000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '59 2490 1044 0000 4200 5827 1427', uwagi: ''},
    { id: 266, data_umowy: '28/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Norbert Kruk', adres: 'ul. Malczewskiego 21, 05-820', pesel: 71090907719, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 12000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '59 2490 1044 0000 4200 5827 1427', uwagi: ''},
    { id: 267, data_umowy: '05/12/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Konrad Majchrowski', adres: '02-649 Warszawa, Pułku Baszta 7/26', pesel: 79100800319, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '15 1050 1025 1000 0024 0433 6394', nr_rach_inwest: '77 1140 2004 0000 3202 5657 5907', uwagi: '2 scany tej samej umowy'},
    { id: 268, data_umowy: '12/05/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kares Trade sp. z o.o.', adres: '07-100 Węgrów, ul. Gajowa 14', pesel: '', nip: '779-242-18-43', regon: 302716756.0, przedmiot: 'dwa filmy fabularne', kwota: 20_000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '56 1020 4476 0000 8202 0337 2562', uwagi: 'umowa inwestycyjna na 2 filmy fabularne,'},
    { id: 269, data_umowy: '20/03/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Janina Stankiewicz', adres: '55-311 Kostomłoty, Pażdziorno 17', pesel: 55031502863, nip: '', regon: '', przedmiot: 'PitBull. Nowe porządki', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '66 9584 1106 2011 1103 1802 0001', uwagi: ''},
    { id: 270, data_umowy: '13/04/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Janina Stankiewicz', adres: '55-311 Kostomłoty, Pażdziorno 17', pesel: 55031502863, nip: '', regon: '', przedmiot: 'smallworld', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '66 9584 1106 2011 1103 1802 0001', uwagi: ''},
    { id: 271, data_umowy: '24/08/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Janina Stankiewicz', adres: '55-311 Kostomłoty, Pażdziorno 17', pesel: 55031502863, nip: '', regon: '', przedmiot: 'PitBull. Królowie autostrad', kwota: 201000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '66 9584 1106 2011 1103 1802 0001', uwagi: 'Brak adresu inwestora'},
    { id: 272, data_umowy: '11/08/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Janina Stankiewicz', adres: '55-311 Kostomłoty, Pażdziorno 17', pesel: 55031502863, nip: '', regon: '', przedmiot: 'dwa filmy fabularne', kwota: 400000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '66 9584 1106 2011 1103 1802 0001', uwagi: ''},
    { id: 273, data_umowy: '05/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mateusz Maślanka', adres: '95-200 Pabianice, ul. Bracka 10/12 m.3', pesel: 83091106578, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: 'gotówka', nr_rach_inwest: '27 1140 2004 0000 3902 5826 8920', uwagi: ''},
    { id: 274, data_umowy: '27/06/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tadeusz Piotrowski', adres: '34-300 Żywiec, ul. Podtorze 55A', pesel: 57010112632, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '55 1160 2202 0000 0002 2836 7399', uwagi: ''},
    { id: 275, data_umowy: '10/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bart-Film', adres: '', pesel: '', nip: '671-00-05-139', regon: 330031918.0, przedmiot: 'Dziewczyny z Dubaju', kwota: 800000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '76 1050 1559 1000 0092 4317 6899', uwagi: 'spółka miała prawo odstąpić od umowy w przypadku'}, // nie rozpoczecia zdjęć do filmu przed 30.04.2019, dwie wpłaty: 500,000 PLN i 300,000 PLN
    { id: 276, data_umowy: '24/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jarosław Więckowski', adres: '05-532 Pilawa', pesel: 59090201897, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '90 1140 2017 0000 4402 0332 3219', uwagi: ''},
    { id: 277, data_umowy: '14/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Agata Miłkowska', adres: '05-300 Mińsk Maz., Ul. Florencja 8A', pesel: 75061515945, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1500 1663 1016 6041 8625 0000', uwagi: 'dwie strony od par.6 do par.5 pkt.4 z różnym nr rachunku inwestora.'}, //Wpisano do zestawienia nr z pierwszej strony
    { id: 278, data_umowy: '28/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Bogumiła Szczukocka', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '70 1240 3116 1111 0000 3522 1690', uwagi: ''},
    { id: 279, data_umowy: '13/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Zaręba', adres: '32-650 Kęty, Ul. Asnyka 10', pesel: 61031903757, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '33 1240 4852 1111 0000 4708 6852', uwagi: ''},
    { id: 280, data_umowy: '09/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kazimierz Bihun', adres: '31-160 Kraków, ul. Oskara Kolberga 15/3', pesel: 51031503354, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 2340 0009 1510 1030 0000 2307', uwagi: ''},
    { id: 281, data_umowy: '26/04/2018', 'Spółka': 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Kubiak', adres: '31-620 Kraków, ul. Bohaterów Września 2/31', pesel: 76032703350, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '20 2490 0005 0000 4004 1686 7851', uwagi: ''},
    { id: 282, data_umowy: '18/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Kubiak', adres: '31-620 Kraków, ul. Bohaterów Września 2/31', pesel: 76032703350, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '20 2490 0005 0000 4004 1686 7851', uwagi: 'dwa scany tej samej umowy, jeden bez podpisu spółki'},
    { id: 283, data_umowy: '03/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Grzywaczewski', adres: '03-944 Warszawa, PL.Przymierza 6/86', pesel: 64110408736, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1750 0012 0000 0000 0865 8773', uwagi: 'dwa scany tej samej umowy'},
    { id: 284, data_umowy: '12/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Kiliński', adres: '05-660 Warka, ul. Kusocińskiego 1', pesel: 72110202939, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '61 1050 1777 1000 0022 8420 6725', uwagi: 'Brak podpisu inwestora, 2 scany, na drugim jest podpis inwestora'},
    { id: 285, data_umowy: '17/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jan Amborski', adres: '', pesel: 72062608616, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 40000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '09 1140 204 0000 3102 3647 5482', uwagi: ''},
    { id: 286, data_umowy: '19/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Secure-Net Tomasz Kawa', adres: '30-392 Krakow, ul. Czerwone Maki 59/34 ', pesel: '', nip: '517-006-54-90', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 400000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1140 2004 0000 3602 7433 6305', uwagi: ''},
    { id: 287, data_umowy: '19/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Secure-Net Tomasz Kawa', adres: '30-392 Krakow, ul. Czerwone Maki 59/34 ', pesel: '', nip: '517-006-54-90', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1140 2004 0000 3602 7433 6305', uwagi: ''},
    { id: 288, data_umowy: '19/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Secure-Net Tomasz Kawa', adres: '30-392 Krakow, ul. Czerwone Maki 59/34 ', pesel: '', nip: '517-006-54-90', regon: '', przedmiot: 'Chłopaki nie płaczą', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1140 2004 0000 3602 7433 6305', uwagi: 'dw'},
    { id: 289, data_umowy: '08/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Gorząd', adres: '52-116 Iwiny, ul. Kościuszki 27', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '87 1140 2017 0000 4202 0162 2088', uwagi: 'Brak peselu, dwa scany tej umowy'},
    { id: 290, data_umowy: '08/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Michał Gorząd', adres: '52-116 Iwiny, ul. Kościuszki 27', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '87 1140 2017 0000 4202 0162 2088', uwagi: 'Brak peselu, dwa scany tej umowy'},
    { id: 291, data_umowy: '23/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Eximp Grzegorz Kuta, Marek Kuta Sp. J.', adres: '03-816 Warszawa, ul. Chodakowska 53/57', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 250000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '23 1020 1097 0000 7102 0001 2914', uwagi: ''},
    { id: 292, data_umowy: '29/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kamil Stankiewicz', adres: '05-077 Warszawa, ul. Rubinoiwa 26', pesel: 83110700198, nip: '', regon: '', przedmiot: 'GROM', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '74 1140 2004 0000 3502 3679 7514', uwagi: 'dwa scany umowy na jednej Brak podpisu inwestora'},
    { id: 293, data_umowy: '29/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Kamil Stankiewicz', adres: '05-077 Warszawa, ul. Rubinoiwa 26', pesel: 83110700198, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '74 1140 2004 0000 3502 3679 7514', uwagi: 'dwa scany tej samej umowy'},
    { id: 294, data_umowy: '09/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Beata Wikiera', adres: '51-604 Wrocław, ul. Cieszkowskiego 15/2', pesel: 58010109626, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '16 1090 2473 0000 0006 2401 3201', uwagi: 'brak podpisu spółki, dwa scany tej umowy, jeden z wszystkimi podpisami'},
    { id: 295, data_umowy: '22/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Zbrzeźny', adres: '05-307 Dobre, ul. Polna 7', pesel: 67110810150, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1050 1894 1000 0023 1634 4486', uwagi: 'dwa scany tej samej umowy'},
    { id: 296, data_umowy: '23/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Mariusz Wojciechowski', adres: '04-036 Warszawa, Al.. Stanów Zjedn 34', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '20 1160 2202 0000 0000 9258 6071', uwagi: 'Brak peselu, wpłaty 2xpo 50,000 PLN, dwa scany'},
    { id: 297, data_umowy: '31/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Cezariusz Mariusz Ścisiński', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '08 1870 1045 2078 1212 2886 0001', uwagi: 'Brak peselu oraz miejsca zamieszkania, dwa scany tej samej umowy'},
    { id: 298, data_umowy: '31/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Cezariusz Mariusz Ścisiński', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '08 1870 1045 2078 1212 2886 0001', uwagi: 'Brak peselu oraz miejsca zamieszkania, dwa scany tej samej umowy'},
    { id: 299, data_umowy: '18/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Maciej Gliwny', adres: '91-084 Łódź, ul. Bardowskiego 52 m.16', pesel: 81072701691, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 25000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '80 1140 2004 0000 3602 5916 9257', uwagi: 'dwa scany tej samej umowy, jeden bez podpisu inwestora'},
    { id: 300, data_umowy: '07/01/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Grzegorz Urbanik', adres: '43-246 Strumień, ul. Końcowa 5', pesel: 56112600452, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1020 2528 0000 0702 0111 9643', uwagi: 'dwa scany, na jednym brak podpisu spółki'},
    { id: 301, data_umowy: '05/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Barbara Tołkacz', adres: '94-234 Łódź ul. Podchorążych 35b/5', pesel: 77031101088, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '71 1140 2004 0000 3302 7626 3474', uwagi: ''},
    { id: 302, data_umowy: '27/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Julian Golonka', adres: '32-080 Zabierzów, ul. Poziomkowa 1', pesel: 51052618350, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '48 1910 1048 2110 0023 2368 0001', uwagi: ''},
    { id: 303, data_umowy: '04/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Julian Golonka', adres: '32-080 Zabierzów, ul. Poziomkowa 1', pesel: 51052618350, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '48 1910 1048 2110 0023 2368 0001', uwagi: ''},
    { id: 304, data_umowy: '15/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Ciężkowski', adres: '02-793 Warszawa, ul. Raabego 1/11', pesel: 54030601375, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 0, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak kwoty i nr rachunku inwestora, umowa podpisana'},
    { id: 305, data_umowy: '', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Zbrzeźny', adres: '05-307 Dobre, ul. Polna 7', pesel: 67110810150, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1050 1894 1000 0023 1634 4486', uwagi: 'sprawdzić czy to nie ta sama umowa na dziewczyny ze scanu z data na 9.11.2018'},
    { id: 306, data_umowy: '25/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Izydora Kos-Górczyńska', adres: '02-796 Warszawa, ul. Wańkowicza 2/217', pesel: 52020406388, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 20000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '79 1240 1125 1111 0000 0363 0141', uwagi: 'dwa scany tej samej umowy'},
    { id: 307, data_umowy: '09/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jerzy Grandys', adres: '00-712 Warszawa, ul. Bluszczańska 68/7', pesel: 74111701172, nip: '', regon: '', przedmiot: 'GROM', kwota: 70000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '47 1500 1197 1011 4000 6399 0000', uwagi: 'dwa scany tej samej umowy'},
    { id: 308, data_umowy: '09/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Zbrzeźny', adres: '05-307 Dobre, ul. Polna 7', pesel: 67110810150, nip: '', regon: '', przedmiot: 'GROM', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1050 1894 1000 0023 1634 4486', uwagi: 'dwa scany tej samej umowy'},
    { id: 309, data_umowy: '18/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Artur Dominik', adres: '31-624 Kraków, os. Piastów 23/25', pesel: 76121103139, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1160 2202 0000 0003 6626 0062', uwagi: 'brak podpisu spółki, dwa scany tej umowy, jeden z wszystkimi podpisami'},
    { id: 310, data_umowy: '18/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Artur Dominik', adres: '31-624 Kraków, os. Piastów 23/25', pesel: 76121103139, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1160 2202 0000 0003 6626 0062', uwagi: 'brak podpisu spółki, dwa scany tej umowy, jeden z wszystkimi podpisami'},
    { id: 311, data_umowy: '18/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Leszek Prenkiewicz', adres: '31-080 Zabierzów, ul. Śląska 334d', pesel: 75060217374, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '92 1240 2294 1111 0000 3713 8150', uwagi: 'brak podpisu spółki, dwa scany jeden z wszystkimi podpisami'},
    { id: 312, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Podsiadło', adres: '86-050 Solec Kujawski, ul. Toruńska 52d/50', pesel: 85120910596, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1140 2004 0000 3002 3559 8883', uwagi: 'wpłata 130,000 PLN przez\xa0potrącenie z Pitbulla, 70,000 PLN wpłata na rach w ing, dwa scany tej samej umowy'},
    { id: 313, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Mróz', adres: '02-704 Warszawa, ul. Idzikowskiego 33/1', pesel: 69081800116, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 75000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '41 1140 2004 0000 3102 1046 0767', uwagi: 'wpłata 65,000 PLN poprzez potrącenie z Pitbulla, 10,000 PLN wpłąta na rach w ing'},
    { id: 314, data_umowy: '24/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Janusz Loranc', adres: '01-005 Warszawa, ul. Nowolipie 20/10', pesel: 53040903891, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 10000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 5558 1111 1319 6140 0048', uwagi: ''},
    { id: 315, data_umowy: '23/07/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Wojciechowska', adres: '04-822 Warszawa, ul. Izbicka 70', pesel: 66020102120, nip: '', regon: '', przedmiot: 'GROM', kwota: 40000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '77 2490 0005 0000 4000 2916 6070', uwagi: ''},
    { id: 316, data_umowy: '29/10/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Dawid Dąbruś', adres: '01-471 Warszawa, ul. Narwik 10/38', pesel: 76122602538, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 40000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '72 1090 2545 0000 0006 3802 0543', uwagi: ''},
    { id: 317, data_umowy: '21/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Adamus', adres: '05-200 Wołomin ul. Kopernika 18', pesel: 75120106013, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '62 2490 0005 0000 4000 9456 7232', uwagi: ''},
    { id: 318, data_umowy: '21/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Roman Adamus', adres: '05-200 Wołomin ul. Kopernika 18', pesel: 75120106013, nip: '', regon: '', przedmiot: 'GROM', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '62 2490 0005 0000 4000 9456 7232', uwagi: ''},
    { id: 319, data_umowy: '01/04/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ludwik Olejarz', adres: '02-954 Warszawa, ul. Królowej Marysieńki 23', pesel: 42082502997, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'Brak number rachunku inwestora, dwa scany tej samej umowy '},
    { id: 320, data_umowy: '07/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Gozdek', adres: '97-300 Piotrków Tryb, Piastowska 9 m.8', pesel: 66112605333, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 200000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '75 1020 3916 0000 0102 0182 8839', uwagi: ''},
    { id: 321, data_umowy: '18/11/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Wieczorek', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'PitBull Śmierć Frajerom', kwota: 34000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '53 1140 2004 0000 3102 7565 7937', uwagi: 'Brak peselu oraz miejsca zamieszkania'},
    { id: 322, data_umowy: '18/07/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Wieczorek', adres: '05-092 Łomianki, Wołodyjowskiego 4 ', pesel: '91041013373', nip: '', regon: '', przedmiot: 'smallworld', kwota: 15000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '44 1140 2004 0000 3902 6216 9372', uwagi: ''},
    { id: 323, data_umowy: '21/03/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Wieczorek', adres: '05-092 Łomianki, Wołodyjowskiego 4 ', pesel: '91041013373', nip: '', regon: '', przedmiot: 'PitBull3', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '44 1140 2004 0000 3902 6216 9372', uwagi: '15,000 PLN przeniesione z wpłaty na smallworld, 15,000 wpłata w ing'},
    { id: 324, data_umowy: '21/03/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Marek Wieczorek', adres: '05-092 Łomianki, Wołodyjowskiego 4 ', pesel: '91041013373', nip: '', regon: '', przedmiot: 'Dywizjon 303', kwota: 30000, nr_rach_spol: '18 1050 1025 1000 0090 3108 3109', nr_rach_inwest: '44 1140 2004 0000 3902 6216 9372', uwagi: ''},
    { id: 325, data_umowy: '22/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Stanisław Biegun', adres: '34-350 Węgierska Górka, ul. Graniczna 32', pesel: 73082709619, nip: '', regon: '', przedmiot: 'GROM', kwota: 250000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '10 1560 1023 2006 5184 9000 0001 ', uwagi: ''},
    { id: 326, data_umowy: '25/02/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Stanisław Biegun', adres: '34-350 Węgierska Górka, ul. Graniczna 32', pesel: 73082709619, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 150000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '10 1560 1023 2006 5184 9000 0001 ', uwagi: ''},
    { id: 327, data_umowy: '19/02/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Ryszard Mróz MR. Estate Ryszard Mróz', adres: '04-838 Warszawa, ul. Izbicka 20', pesel: 63032800170, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '29 1030 0019 0109 8530 0016 7023', uwagi: ''},
    { id: 328, data_umowy: '25/06/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'brak', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'PitBull pałacowi vs miastowi', kwota: 393416, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '81 1050 1588 1000 0002 0317 2614', uwagi: 'brak danych inwestora, umowa podpisana nieczytelnym podpisem'},
    { id: 329, data_umowy: '24/05/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Szymon Sikora', adres: '60-185 Skórzewo, ul. Jałowcowa 3/3', pesel: 73101209610, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '62 1140 2004 0000 3802 4243 2410', uwagi: 'wpłata 65,000 PLN poprzez potrącenie z Pitbulla,35,000  PLN wpłąta na rach w ing'},
    { id: 330, data_umowy: '12/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Andrzej Czarnecki', adres: '00-987 Warszawa, ul. Targowa 73/61', pesel: 78042001033, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'zwrot gotówkowy'},
    { id: 331, data_umowy: '27/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Grzeszkiewicz, Maria Grzeszkiewicz', adres: '95-070 Aleksandrów Łodzki, Franin 32', pesel: '73052814673, 7601250582', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 300000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '64 1090 2705 0000 0001 2279 4782', uwagi: 'brak podpisu Marii Grzeszkiewicz'},
    { id: 332, data_umowy: '05/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Sekuter', adres: '96-100 Skierniewice, ul. Mokra Prawa 96', pesel: 78021009818, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 1500000, nr_rach_spol: '', nr_rach_inwest: '', uwagi: 'brak rachunków inwestora i spółki, trzy  scany na dwóch  wplata gotówką!!!'},
    { id: 333, data_umowy: '15/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Elżbieta Tchórznicka', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '83 9221 0000 0025 7169 3000 0010', uwagi: 'Brak adresu i pesel inwestora'},
    { id: 334, data_umowy: '26/03/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Agnieszka Krauze', adres: '05-077 Warszawa, ul. Kruszyny 7b/1', pesel: '', nip: '', regon: '', przedmiot: 'GROM', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '49 1140 2004 0000 3302 4416 2787', uwagi: 'Brak peselu'},
    { id: 335, data_umowy: '20/01/2016', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '', nip: '648-19-97-718', regon: 2733295877.0, przedmiot: 'PitBull3', kwota: 700000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'nr rachunku inwestora nieczytelny'},
    { id: 336, data_umowy: '25/06/2015', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zarys International Group Sp. z o.o. ', adres: 'ul.Pod Borem 18, 41-808 Zabrze', pesel: '', nip: '648-19-97-718', regon: 2733295877.0, przedmiot: 'PitBull pałacowi vs miastowi', kwota: 393416, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '81 1050 1588 1000 0002 0317 2614', uwagi: ''},
    { id: 337, data_umowy: '25/05/2017', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jacek Podsiadło', adres: '86-050 Solec Kujawski, ul. Toruńska 52d/50', pesel: 85120910596, nip: '', regon: '', przedmiot: 'PitBull. Król ulicy', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1140 2004 0000 3002 3559 8883', uwagi: ''},
    { id: 338, data_umowy: '18/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Czesław Smoła', adres: '38-312 Ropa, Ropa 389', pesel: 7309110691, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '83 2490 0005 0000 4000 9226 7663', uwagi: 'Brak podpisu inwestora'},
    { id: 339, data_umowy: '26/04/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Małgorzata Zawiszewska', adres: '81-582 Gdynia, ul. Kukułki 9', pesel: 88121915621, nip: '', regon: '', przedmiot: 'GROM. Narodziny legendy', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '58 1140 2004 0000 3202 4833 1249', uwagi: ''},
    { id: 340, data_umowy: '09/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Zbigniew Zbrzeźny', adres: '05-307 Dobre, ul. Polna 7', pesel: 67110810150, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 30000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '13 1050 1894 1000 0023 1634 4486', uwagi: 'sprawdzić czy to nie ta sama umowa na dziewczyny przy której w scanie nie ma daty'},
    { id: 341, data_umowy: '30/08/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Kiliński', adres: '05-660 Warka, ul. Kusocińskiego 1', pesel: 72110202939, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '61 1050 1777 1000 0022 8420 6725', uwagi: ''},
    { id: 342, data_umowy: '05/09/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Arkadiusz Sekuter', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 1000000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak rachunku inwestora, brak podpisów stron '},
    { id: 343, data_umowy: '', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'brak', adres: '', pesel: '', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 0, nr_rach_spol: '', nr_rach_inwest: '', uwagi: '52 1460 1181 2025 5453 8397 0001 brak podpisu inwestora, brak kwoty, dopisany odręcznie nr rachunku bank'},
    { id: 344, data_umowy: '20/08/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Jolanta Czerwińska', adres: '01-779 Warszawa, ul. Krasińskiego 40a/69', pesel: 64100900220, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '', uwagi: 'brak rachunku inwestora'},
    { id: 345, data_umowy: '23/09/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Karina Popieluch', adres: '01-361 Warszawa, ul. Szobera 4/3', pesel: 76062600568, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '19 1160 2202 0000 0000 7549 6435', uwagi: ''},
    { id: 346, data_umowy: '25/10/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Tomasz Rojda', adres: 'Warszawa, ul. Rejmonta 4/28', pesel: '68010103?72', nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 75000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '75 1910 1048 2205 3705 6877 0001', uwagi: 'nieczytelny pesel i słabo czytelny nr rachunku inwestora, nr dow os CER283802'},
    { id: 347, data_umowy: '06/11/2019', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Robert Kołodziejczyk', adres: '00-201 Warszawa, ul. Andersa 26/38', pesel: 75070800537, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 50000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '09 1140 2004 0000 3502 5971 0569', uwagi: ''},
    { id: 348, data_umowy: '27/11/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wieńczysław Bronny', adres: '03-982 Warszawa, ul. Abrahama 12 m.42', pesel: 66052200911, nip: '', regon: '', przedmiot: 'Dziewczyny z Dubaju', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 1127 0000 1302 0062 7323', uwagi: ''},
    { id: 349, data_umowy: '19/12/2018', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wieńczysław Bronny', adres: '03-982 Warszawa, ul. Abrahama 12 m.42', pesel: 66052200911, nip: '', regon: '', przedmiot: 'GROM', kwota: 100000, nr_rach_spol: '73 1050 1025 1000 0090 3018 1086 ', nr_rach_inwest: '50 1020 1127 0000 1302 0062 7323', uwagi: ''},
    { id: 350, data_umowy: '28/01/2020', spolka: 'ENT ONE INVESTMENTS', nazwa_inwest: 'Wieńczysław Bronny', adres: '03-982 Warszawa, ul. Abrahama 12 m.42', pesel: 66052200911, nip: '', regon: '', przedmiot: 'Plac świetego Piotra', kwota: 100000, nr_rach_spol: '78 1050 1012 1000 0090 9613 5885', nr_rach_inwest: '50 1020 1127 0000 1302 0062 7323', uwagi: ''},
];

var tableEntry = document.querySelector('tbody');
const id = "#search-id";
const search_data_zawarcia_umowy = "#search-data_zawarcia_umowy";
const spolka = "#search-spolka";
const search_nazwa_inwestroa = "#search-nazwa_inwestroa";
const adres = "#search-adres";
const pesel = "#search-pesel";
const nip = "#search-nip";
const regon = "#search-REGON";
const przedmiot = "#search-przedmiot";
const kwota = "#search-kwota";
const nr_rach_spol = "#search-nr_rachunku_spolki";
const nr_rach_inwest = "#search-nr_rachunku_inwestora";
const uwagi = "#search-uwagi";

const nazwa_tabeli = "#example-table";
const kwota_calkowita = '#kwota_calkowita';
// Here is a method to fileter data -- creator Wojciech Chodasiewicz
function FilterData(nazwa_elemenu, nazwa_tabeli) {
    $(nazwa_elemenu).on("keyup", function() {
      var idValue = $(id).val().trim();
      var search_data_zawarcia_umowyValue = $(search_data_zawarcia_umowy).val().trim();
      var spolkaValue = $(spolka).val().trim();
      var search_nazwa_inwestroaValue = $(search_nazwa_inwestroa).val().trim();
      var adresValue = $(adres).val().trim();
      var peselValue = $(pesel).val().trim();
      var nipValue = $(nip).val().trim();
      var regonValue = $(regon).val().trim();
      var przedmiotValue = $(przedmiot).val().trim();
      var kwotaValue = $(kwota).val().trim();
      var nr_rach_spolValue = $(nr_rach_spol).val().trim();
      var nr_rach_inwestValue = $(nr_rach_inwest).val().trim();
      var uwagiValue = $(uwagi).val().trim();
      var KwotaSum = 0;

      var searchValues = [idValue, search_data_zawarcia_umowyValue, 
                        spolkaValue, search_nazwa_inwestroaValue, 
                        adresValue, peselValue, nipValue, regonValue, 
                        przedmiotValue,kwotaValue, nr_rach_spolValue,
                        nr_rach_inwestValue, uwagiValue
                    ];
      $(nazwa_tabeli+">tbody>tr").each(function() {
        var showRow = true;
        for (var j=0; j<searchValues.length; j++) {
            if(searchValues[j] == idValue || searchValues[j] == kwotaValue){
                if (searchValues[j] !== "" && !new RegExp("\\b" + searchValues[j] + "\\b", "i").test($(this).find("td:eq(" + j + ")").text())) {
                    showRow = false;
                    break;
                }
            }else if (searchValues[j] !== "" && !$(this).find("td:eq(" + j + ")").text().toLowerCase().includes(searchValues[j].toLowerCase())) {
                showRow = false;
                break;
            }
        }
        if (showRow){
          $(this).show();
          KwotaSum += parseFloat($(this).find("td:eq(9)").text());
        }else
          $(this).hide();
      });
      displayKwotaSum(KwotaSum);
    });
}

function displayKwotaSum(KwotaSum) {
    if (isNaN(KwotaSum))
        KwotaSum = 40315000;
    $(kwota_calkowita).text("Całkowita kwota: " + KwotaSum);
}

function isEmpty(str) {
    return !str.length;
}

//Filter ID
FilterData(id, nazwa_tabeli);
//Filter data_zawarcia_umowy
FilterData(search_data_zawarcia_umowy, nazwa_tabeli);
//Filter spółki
FilterData(spolka, nazwa_tabeli);
//Filter nazwa inwestora
FilterData(search_nazwa_inwestroa, nazwa_tabeli);
//Filter adres
FilterData(adres, nazwa_tabeli);
//Filter pesel
FilterData(pesel, nazwa_tabeli);
//Filter nip
FilterData(nip, nazwa_tabeli);
//Filter regon
FilterData(regon, nazwa_tabeli);
//Filter przedmiot
FilterData(przedmiot, nazwa_tabeli);
//Filter kwota
FilterData(kwota, nazwa_tabeli);
//Filter nr_rach_spol
FilterData(nr_rach_spol, nazwa_tabeli);
//Filter nr_rach_inwest
FilterData(nr_rach_inwest, nazwa_tabeli);
//Filter uwagi
FilterData(uwagi, nazwa_tabeli);

// Export to CSV file:
function exportToCSV() {
    var table = document.getElementById("example-table");
    var rows = table.querySelectorAll(nazwa_tabeli+">tbody>tr");
    var filteredData = [];

    // Add new row to filteredData
    var newRow = ['ID', 'Data zawarcia umowy', 
        'Spółka', 'Nazwa Inwestora', 'Adres', 'Pesel', 'NIP', 'REGON',
        'Przedmiot', 'Kwota', 'Nr. rachunku spółki', 'Nr. rachunku inwestora',
        'Uwagi'
    ];
    filteredData.push(newRow);

    for (var i = 0; i < rows.length; i++) {
        if (rows[i].style.display !== "none") {
            var row = [];
            rows[i].querySelectorAll("td").forEach(function(cell) {
                row.push(cell.innerText);
            });
            filteredData.push(row);
        }
    }

    var csvContent = "data:text/csv;charset=utf-8,";
    filteredData.forEach(function(rowArray) {
        csvContent += rowArray.join(",") + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "AnalizaTabel.csv");
    document.body.appendChild(link);
    link.click();
}


// Export to Excel file:
function exportToExcel() {
    var table = document.getElementById("example-table");
    var rows = table.querySelectorAll(nazwa_tabeli + ">tbody>tr");
    var filteredData = [];
  
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].style.display !== "none") {
            filteredData.push(rows[i]);
        }
    }
  
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.table_to_sheet(table);
  
    // Adding a new row to the worksheet
    XLSX.utils.sheet_add_aoa(worksheet, [['ID', 'Data zawarcia umowy', 
        'Spółka', 'Nazwa Inwestora', 'Adres', 'Pesel', 'NIP', 'REGON',
        'Przedmiot', 'Kwota', 'Nr. rachunku spółki', 'Nr. rachunku inwestora',
        'Uwagi'
    ]]);
  
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    var excelContent = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  
    var blob = new Blob([s2ab(excelContent)], { type: "application/octet-stream" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "AnalizaTabel.xlsx";
    link.click();
}
  
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
}
  

// Sorting functionality:
// Add event listener to all filter input fields to enable sorting on click
function SortByString(iteration){
    $(nazwa_tabeli + ">thead>tr>th:eq("+ iteration +")").on("click", function () {
        var tableRows = $(nazwa_tabeli + ">tbody>tr").toArray();
        var sortOrder = $(this).hasClass("sorting-asc") ? 1 : -1;
        tableRows.sort(function (a, b) {
            var aVal = $(a).find("td:eq("+ iteration +")").text().trim().toLowerCase();
            var bVal = $(b).find("td:eq("+ iteration +")").text().trim().toLowerCase();
            return aVal.localeCompare(bVal) * sortOrder;
        });
    
        // Toggle sorting order between ascending and descending
        $(nazwa_tabeli + ">thead>tr>th:eq("+ iteration +")").removeClass("sorting-asc sorting-desc");
        if (sortOrder === 1) {
            $(this).removeClass("sorting-asc").addClass("sorting-desc");
        } else {
            $(this).removeClass("sorting-desc").addClass("sorting-asc");
        }
    
        // Reorder table rows based on sorted data
        $(nazwa_tabeli + ">tbody").empty();
        $.each(tableRows, function (i, row) {
            $(nazwa_tabeli + ">tbody").append(row);
        });
    });
}

SortByString(2);
SortByString(3);
SortByString(4);
SortByString(8);
SortByString(12);

function SortByNumber(iterations){
    $(nazwa_tabeli + ">thead>tr>th:eq("+ iterations +")").on("click", function () {
        var tableRows = $(nazwa_tabeli + ">tbody>tr").toArray();
        var sortOrder = $(this).hasClass("sorting-asc") ? 1 : -1;
        tableRows.sort(function (a, b) {
            var aVal = parseInt($(a).find("td:eq("+ iterations +")").text().trim());
            var bVal = parseInt($(b).find("td:eq("+ iterations +")").text().trim());
            if (isNaN(aVal)) {
                return 1 * sortOrder;
            }
            if (isNaN(bVal)) {
                return -1 * sortOrder;
            }
            return (aVal - bVal) * sortOrder;
        });

        // Toggle sorting order between ascending and descending
        $(nazwa_tabeli + ">thead>tr>th:eq("+ iterations +")").removeClass("sorting-asc sorting-desc");
        if (sortOrder === 1) {
            $(this).removeClass("sorting-asc").addClass("sorting-desc");
        } else {
            $(this).removeClass("sorting-desc").addClass("sorting-asc");
        }

        // Reorder table rows based on sorted data
        $(nazwa_tabeli + ">tbody").empty();
        $.each(tableRows, function (i, row) {
            $(nazwa_tabeli + ">tbody").append(row);
        });
    });
}
SortByNumber(0);
SortByNumber(1);
SortByNumber(5);
SortByNumber(6);
SortByNumber(7);
SortByNumber(9);
SortByNumber(10);
SortByNumber(11);
  

// This is not my implemetation of the code:
window.onload = function(){
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    var DBOpenRequest = window.indexedDB.open('DataList', 1);

    DBOpenRequest.onsuccess = function(event) {
        db = DBOpenRequest.result;
        populateData();
    };
  
    DBOpenRequest.onupgradeneeded = function(event) { 
        var db = event.target.result;
        
        db.onerror = function(event) {
            console.log('Error loading database.');
        };
        
        var objectStore = db.createObjectStore('DataList', { keyPath: 'id' }); 
        objectStore.createIndex('data_umowy', 'data_umowy'); 
        objectStore.createIndex('spolka', 'spolka');
        objectStore.createIndex('nazwa_inwest', 'nazwa_inwest');
        objectStore.createIndex('adres', 'adres');
        objectStore.createIndex('pesel', 'pesel');
        objectStore.createIndex('nip', 'nip');
        objectStore.createIndex('regon', 'regon');
        objectStore.createIndex('przedmiot', 'przedmiot');
        objectStore.createIndex('kwota', 'kwota');
        objectStore.createIndex('nr_rach_spol', 'nr_rach_spol');
        objectStore.createIndex('nr_rach_inwest', 'nr_rach_inwest');
        objectStore.createIndex('uwagi', 'uwagi');
    };
    
    function populateData() {
        var transaction = db.transaction(['DataList'], 'readwrite');
        var objectStore = transaction.objectStore('DataList');
        for(i = 0; i < contacts.length; i++) {
            var request = objectStore.put(contacts[i]);
        };
        transaction.oncomplete = function(){
            displayDataByKey();
        };
    };

  var thControls = document.querySelectorAll('th');
    for(i = 0; i < thControls.length; i++) {
        var activeThead = thControls[i];
        activeThead.onclick = function(e) {
            activeIndex = e.target.innerHTML;
            if(activeIndex == 'ID')
                displayDataByKey(); 
            else {
                if(activeIndex == "Data Umowy")
                displayDataByIndex(data_umowy);
                else if(activeIndex == "spolka")
                displayDataByIndex(spolka);
                else if(activeIndex == "nazwa_inwest")
                displayDataByIndex(nazwa_inwest);
                else if(activeIndex == "adres")
                displayDataByIndex(adres);
                else if(activeIndex == "pesel")
                displayDataByIndex(pesel);
                else if(activeIndex == "nip")
                displayDataByIndex(nip);
                else if(activeIndex == "regon")
                displayDataByIndex(regon);
                else if(activeIndex == "przedmiot")
                displayDataByIndex(przedmiot);
                else if(activeIndex == "kwota")
                displayDataByIndex(kwota);
                else if(activeIndex == "nr_rach_spol")
                displayDataByIndex(nr_rach_spol);
                else if(activeIndex == "nr_rach_inwest")
                displayDataByIndex(nr_rach_inwest);
                else if(activeIndex == "uwagi")
                displayDataByIndex(uwagi);
            }
        }
    }

    function displayDataByKey(){
        tableEntry.innerHTML = '';
        var transaction = db.transaction(['DataList'], 'readonly');
        var objectStore = transaction.objectStore('DataList');

        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {
                var tableRow = document.createElement('tr');
                tableRow.innerHTML =  '<td>' + cursor.value.id      + '</td>'
                                    + '<td>' + cursor.value.data_umowy  + '</td>'
                                    + '<td>' + cursor.value.spolka   + '</td>'
                                    + '<td>' + cursor.value.nazwa_inwest  + '</td>'
                                    + '<td>' + cursor.value.adres + '</td>'
                                    + '<td>' + cursor.value.pesel   + '</td>'
                                    + '<td>' + cursor.value.nip   + '</td>'
                                    + '<td>' + cursor.value.regon     + '</td>'
                                    + '<td>' + cursor.value.przedmiot     + '</td>'
                                    + '<td>' + cursor.value.kwota     + '</td>'
                                    + '<td>' + cursor.value.nr_rach_spol     + '</td>'
                                    + '<td>' + cursor.value.nr_rach_inwest     + '</td>'
                                    + '<td>' + cursor.value.uwagi     + '</td>';
                tableEntry.appendChild(tableRow);  
                cursor.continue();
            }else
                console.log('Entries all displayed.');    
        };
    };

    function displayDataByIndex(activeIndex) {
        tableEntry.innerHTML = '';
        var transaction = db.transaction(['DataList'], 'readonly');
        var objectStore = transaction.objectStore('DataList');

        var myIndex = objectStore.index(activeIndex);

        console.log(myIndex.name);
        console.log(myIndex.objectStore);
        console.log(myIndex.keyPath);
        console.log(myIndex.multiEntry);
        console.log(myIndex.unique);
    
        var countRequest = myIndex.count();
        countRequest.onsuccess = function() {
            console.log(countRequest.result);
        }
     
        myIndex.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor) {
                var tableRow = document.createElement('tr');
                tableRow.innerHTML = '<td>' + cursor.value.id + '</td>'
                                + '<td>' + cursor.value.data_umowy + '</td>'
                                + '<td>' + cursor.value.spolka + '</td>'
                                + '<td>' + cursor.value.nazwa_inwest + '</td>'
                                + '<td>' + cursor.value.adres + '</td>'
                                + '<td>' + cursor.value.pesel + '</td>'
                                + '<td>' + cursor.value.nip + '</td>'
                                + '<td>' + cursor.value.regon + '</td>'
                                + '<td>' + cursor.value.przedmiot + '</td>'
                                + '<td>' + cursor.value.kwota + '</td>'
                                + '<td>' + cursor.value.nr_rach_spol + '</td>'
                                + '<td>' + cursor.value.nr_rach_inwest + '</td>'
                                + '<td>' + cursor.value.uwagi + '</td>';
                tableEntry.appendChild(tableRow);  

                cursor.continue();
        } else
            console.log('Entries all displayed.');    
        };
    };
    
};

