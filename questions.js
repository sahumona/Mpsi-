// Compact format: T("question", [options], correctIndex, "explanation")
function T(q, options, answer, explanation) {
  return { q, options, answer, explanation };
}

const questionsDB = {

  english: {
    sections: {
      "Grammar": {
        easy: [
          T("I ___ a student.", ["is","am","are","be"], 1, "I → am"),
          T("He ___ homework yesterday.", ["do","does","did","doing"], 2, "Yesterday → did"),
          T("He is ___ honest man.", ["a","an","the","none"], 1, "Vowel → an"),
          T("Correct sentence?", ["She don't like tea.","She doesn't like tea.","She not like tea.","She no like tea."], 1, "3rd person → doesn't")
        ],
        moderate: [
          T("If I ___ rich, I would travel.", ["am","was","were","will be"], 2, "Hypothetical → were"),
          T("Neither of the boys ___ present.", ["are","were","was","have"], 2, "Singular verb"),
          T("Living here ___ 2010.", ["for","since","from","by"], 1, "Point of time → since"),
          T("Correct sentence?", ["He is senior than me.","He is senior to me.","He is more senior than me.","He is senior from me."], 1, "Latin comparative → to")
        ],
        hard: [
          T("Scarcely had I reached ___ bell rang.", ["than","when","then","that"], 1, "Scarcely...when"),
          T("No sooner did he see police ___ he ran.", ["when","then","than","that"], 2, "No sooner...than"),
          T("It is high time we ___ truth.", ["tell","told","will tell","have told"], 1, "Past subjunctive"),
          T("The jury ___ divided in opinions.", ["was","were","is","has"], 1, "Divided → plural")
        ]
      },
      "Vocabulary": {
        easy: [
          T("Synonym of 'Begin':", ["Start","End","Stop","Finish"], 0, "Begin = Start"),
          T("Antonym of 'Ancient':", ["Old","Modern","Historic","Past"], 1, "Opposite = Modern"),
          T("Synonym of 'Big':", ["Small","Tiny","Large","Little"], 2, "Big = Large"),
          T("Antonym of 'Friend':", ["Ally","Enemy","Companion","Buddy"], 1, "Opposite = Enemy")
        ],
        moderate: [
          T("Synonym of 'Candid':", ["Rude","Frank","Shy","Rough"], 1, "Candid = Frank"),
          T("Antonym of 'Frugal':", ["Thrifty","Extravagant","Careful","Saving"], 1, "Opposite = Extravagant"),
          T("Synonym of 'Diligent':", ["Lazy","Hardworking","Careless","Idle"], 1, "Diligent = mehnati"),
          T("Antonym of 'Conceal':", ["Hide","Reveal","Cover","Bury"], 1, "Opposite = Reveal")
        ],
        hard: [
          T("Synonym of 'Pusillanimous':", ["Brave","Cowardly","Proud","Wise"], 1, "= kayar"),
          T("Antonym of 'Prolific':", ["Productive","Barren","Creative","Fruitful"], 1, "Opposite = Barren"),
          T("Synonym of 'Ubiquitous':", ["Rare","Omnipresent","Hidden","Scarce"], 1, "= har jagah"),
          T("Antonym of 'Garrulous':", ["Talkative","Taciturn","Chatty","Loquacious"], 1, "Opposite = Taciturn")
        ]
      },
      "Idioms & Phrases": {
        easy: [
          T("'Once in a blue moon':", ["Very often","Very rarely","Daily","Never"], 1, "Bohot kam"),
          T("'Piece of cake':", ["Hard task","Very easy task","Sweet dish","Party"], 1, "Aasan kaam"),
          T("'Break a leg':", ["Get hurt","Good luck","Run fast","Fall down"], 1, "Good luck"),
          T("'Hit the books':", ["Throw books","Study hard","Buy books","Read casually"], 1, "Padhai karna")
        ],
        moderate: [
          T("'Let the cat out of the bag':", ["Free animal","Reveal a secret","Make noise","Run away"], 1, "Secret reveal"),
          T("'A bolt from the blue':", ["Loud noise","Sudden shock","Blue sky","Lightning"], 1, "Achanak shock"),
          T("'Bury the hatchet':", ["Dig hole","Make peace","Fight","Hide"], 1, "Dushmani bhulana"),
          T("'Smell a rat':", ["Smell bad","Suspect something","See a rat","Be dirty"], 1, "Shak karna")
        ],
        hard: [
          T("'To play to the gallery':", ["Act on stage","Seek popular approval","Paint","Fool people"], 1, "Janta ko khush karna"),
          T("'To burn the midnight oil':", ["Waste oil","Work late into the night","Light fire","Sleep early"], 1, "Raat bhar mehnat"),
          T("'To carry coals to Newcastle':", ["Unnecessary work","Carry goods","Travel","Help someone"], 0, "Fizool kaam"),
          T("'To turn a deaf ear':", ["Hear carefully","Ignore","Be deaf","Listen"], 1, "Dhyan na dena")
        ]
      },
      "One Word Substitution": {
        easy: [
          T("Cannot read or write:", ["Ignorant","Illiterate","Innocent","Idiot"], 1, "Illiterate"),
          T("Place for books:", ["Museum","Library","Gallery","Archives"], 1, "Library"),
          T("Flies aircraft:", ["Driver","Pilot","Sailor","Captain"], 1, "Pilot"),
          T("Treats children:", ["Cardiologist","Pediatrician","Dermatologist","Neurologist"], 1, "Pediatrician")
        ],
        moderate: [
          T("Speech without prep:", ["Extempore","Oratory","Monologue","Soliloquy"], 0, "Extempore"),
          T("Government by people:", ["Monarchy","Democracy","Autocracy","Oligarchy"], 1, "Democracy"),
          T("Lover of mankind:", ["Misanthrope","Philanthropist","Egoist","Altruist"], 1, "Philanthropist"),
          T("Bees kept:", ["Aviary","Apiary","Aquarium","Zoo"], 1, "Apiary")
        ],
        hard: [
          T("Easily deceived:", ["Cynic","Gullible","Stubborn","Skeptic"], 1, "Gullible"),
          T("Speaks many languages:", ["Bilingual","Polyglot","Linguist","Orator"], 1, "Polyglot"),
          T("Self-contradictory statement:", ["Paradox","Parody","Parable","Parallel"], 0, "Paradox"),
          T("Indifferent to pleasure & pain:", ["Stoic","Hedonist","Optimist","Realist"], 0, "Stoic")
        ]
      }
    }
  },

  gk: {
    sections: {
      "Static GK": {
        easy: [
          T("National animal of India?", ["Lion","Tiger","Elephant","Peacock"], 1, "Tiger"),
          T("Capital of India?", ["Mumbai","Kolkata","New Delhi","Chennai"], 2, "New Delhi"),
          T("National bird?", ["Parrot","Crow","Peacock","Eagle"], 2, "Peacock"),
          T("Currency of India?", ["Dollar","Euro","Rupee","Yen"], 2, "Rupee")
        ],
        moderate: [
          T("Largest continent?", ["Africa","Europe","Asia","Australia"], 2, "Asia"),
          T("Smallest country?", ["Monaco","Vatican City","Nauru","San Marino"], 1, "Vatican"),
          T("Longest river?", ["Amazon","Nile","Ganga","Yangtze"], 1, "Nile"),
          T("Largest ocean?", ["Atlantic","Indian","Arctic","Pacific"], 3, "Pacific")
        ],
        hard: [
          T("Largest desert?", ["Sahara","Thar","Antarctica","Gobi"], 2, "Antarctica (cold)"),
          T("World Environment Day?", ["5 June","5 July","22 April","1 May"], 0, "5 June"),
          T("Red Planet?", ["Venus","Mars","Jupiter","Saturn"], 1, "Mars"),
          T("First Indian in space?", ["Kalpana","Rakesh Sharma","Sunita","Vikram"], 1, "Rakesh Sharma 1984")
        ]
      },
      "Books & Authors": {
        easy: [
          T("National Anthem writer?", ["Bankim","Tagore","Premchand","Iqbal"], 1, "Tagore"),
          T("National Song writer?", ["Tagore","Bankim Chandra","Premchand","Iqbal"], 1, "Bankim Chandra"),
          T("'Discovery of India'?", ["Gandhi","Nehru","Tagore","Ambedkar"], 1, "Nehru"),
          T("'Wings of Fire'?", ["Nehru","APJ Kalam","Ambedkar","Tagore"], 1, "APJ Kalam")
        ],
        moderate: [
          T("'Wealth of Nations'?", ["Marx","Adam Smith","Keynes","Ricardo"], 1, "Adam Smith"),
          T("'Mein Kampf'?", ["Mussolini","Hitler","Stalin","Lenin"], 1, "Hitler"),
          T("'Ramayana'?", ["Ved Vyas","Valmiki","Tulsidas","Kalidasa"], 1, "Valmiki"),
          T("'Mahabharata'?", ["Valmiki","Ved Vyas","Tulsidas","Kalidasa"], 1, "Ved Vyas")
        ],
        hard: [
          T("'Origin of Species'?", ["Newton","Darwin","Einstein","Mendel"], 1, "Darwin"),
          T("'Republic'?", ["Aristotle","Plato","Socrates","Homer"], 1, "Plato"),
          T("'Das Kapital'?", ["Marx","Engels","Lenin","Stalin"], 0, "Karl Marx"),
          T("'Geetanjali'?", ["Tagore","Bankim","Premchand","Iqbal"], 0, "Tagore")
        ]
      },
      "Sports & Awards": {
        easy: [
          T("Cricket team players?", ["9","10","11","12"], 2, "11"),
          T("National game (traditional)?", ["Cricket","Hockey","Football","Kabaddi"], 1, "Hockey"),
          T("Olympics every ___ years?", ["2","3","4","5"], 2, "4 saal"),
          T("Sachin plays?", ["Hockey","Cricket","Tennis","Football"], 1, "Cricket")
        ],
        moderate: [
          T("Bharat Ratna started?", ["1950","1954","1955","1960"], 1, "1954"),
          T("1st individual Olympic gold Indian?", ["Sushil","Abhinav Bindra","Vijender","Mary Kom"], 1, "Abhinav Bindra 2008"),
          T("Dronacharya Award for?", ["Literature","Coaching","Acting","Science"], 1, "Sports coaching"),
          T("Wimbledon sport?", ["Badminton","Tennis","Cricket","Football"], 1, "Tennis")
        ],
        hard: [
          T("India won Cricket WC how many times?", ["1","2","3","4"], 1, "1983 & 2011"),
          T("'Flying Sikh'?", ["Milkha Singh","Neeraj Chopra","PT Usha","Dhyan Chand"], 0, "Milkha Singh"),
          T("1st woman Olympic medal India?", ["Saina","Karnam Malleswari","Mary Kom","PV Sindhu"], 1, "Karnam 2000"),
          T("1st Indian woman Olympic silver?", ["Saina","PV Sindhu","Mary Kom","Sakshi"], 1, "PV Sindhu 2016")
        ]
      },
      "Important Days": {
        easy: [
          T("Independence Day?", ["26 Jan","15 Aug","2 Oct","14 Nov"], 1, "15 August"),
          T("Republic Day?", ["26 Jan","15 Aug","2 Oct","14 Nov"], 0, "26 January"),
          T("Gandhi Jayanti?", ["15 Aug","26 Jan","2 Oct","14 Nov"], 2, "2 October"),
          T("Children's Day?", ["14 Nov","15 Aug","1 May","5 Sept"], 0, "14 November")
        ],
        moderate: [
          T("Women's Day?", ["8 March","1 May","5 June","10 Dec"], 0, "8 March"),
          T("World Health Day?", ["7 April","5 June","1 Dec","10 Oct"], 0, "7 April"),
          T("Yoga Day?", ["21 June","5 June","1 July","21 May"], 0, "21 June"),
          T("Human Rights Day?", ["10 Dec","5 June","1 May","7 April"], 0, "10 December")
        ],
        hard: [
          T("United Nations Day?", ["24 Oct","10 Dec","5 June","1 May"], 0, "24 October"),
          T("World AIDS Day?", ["1 Dec","5 June","24 Oct","7 April"], 0, "1 December"),
          T("National Science Day?", ["28 Feb","5 Sept","1 May","14 Nov"], 0, "28 Feb (Raman)"),
          T("Teachers' Day India?", ["5 Sept","14 Nov","2 Oct","1 May"], 0, "5 September")
        ]
      }
    }
  },

  gs: {
    sections: {
      "Indian Polity": {
        easy: [
          T("Fundamental Rights count?", ["5","6","7","8"], 1, "6 FRs"),
          T("Head of state?", ["PM","President","CJI","Governor"], 1, "President"),
          T("Father of Constitution?", ["Nehru","Ambedkar","Rajendra Prasad","Patel"], 1, "Dr. Ambedkar"),
          T("Lok Sabha max strength?", ["545","550","552","560"], 2, "552")
        ],
        moderate: [
          T("National Emergency Article?", ["352","356","360","370"], 0, "Article 352"),
          T("Money Bill only in?", ["Rajya Sabha","Lok Sabha","Either","SC"], 1, "Lok Sabha (Art 110)"),
          T("Article 356 = ?", ["National Emg","President's Rule","Financial Emg","FRs"], 1, "President's Rule"),
          T("President term?", ["4 yrs","5 yrs","6 yrs","7 yrs"], 1, "5 years")
        ],
        hard: [
          T("RTE under Article?", ["19","21","21A","32"], 2, "21A (86th Amd)"),
          T("Anti-defection Schedule?", ["8th","9th","10th","11th"], 2, "10th (52nd Amd)"),
          T("Article 32 called?", ["Heart of Constitution","Soul","Backbone","Head"], 0, "Heart & Soul"),
          T("Rajya Sabha max?", ["238","245","250","252"], 2, "250")
        ]
      },
      "Science": {
        easy: [
          T("Largest gland?", ["Pancreas","Liver","Thyroid","Pituitary"], 1, "Liver"),
          T("Planet closest to Sun?", ["Venus","Mercury","Mars","Earth"], 1, "Mercury"),
          T("Balloon gas?", ["Oxygen","Hydrogen","Helium","Nitrogen"], 2, "Helium"),
          T("Photosynthesis releases?", ["CO2","Oxygen","Nitrogen","Hydrogen"], 1, "Oxygen")
        ],
        moderate: [
          T("Hardest natural substance?", ["Iron","Diamond","Quartz","Gold"], 1, "Diamond"),
          T("Smallest bone?", ["Stapes","Femur","Tibia","Radius"], 0, "Stapes (ear)"),
          T("Stomach acid?", ["H2SO4","HCl","HNO3","CH3COOH"], 1, "HCl"),
          T("Vitamin in citrus?", ["A","B","C","D"], 2, "Vitamin C")
        ],
        hard: [
          T("Carbon atomic number?", ["4","6","8","12"], 1, "6"),
          T("pH of pure water?", ["5","6","7","8"], 2, "7 (neutral)"),
          T("SI unit of force?", ["Joule","Newton","Watt","Pascal"], 1, "Newton"),
          T("Dry ice is?", ["Solid CO2","Solid N2","Solid O2","Solid H2"], 0, "Solid CO2")
        ]
      },
      "History": {
        easy: [
          T("First PM of India?", ["Patel","Nehru","Rajendra Prasad","Gandhi"], 1, "Nehru"),
          T("First President?", ["Nehru","Rajendra Prasad","Radhakrishnan","Zakir"], 1, "Rajendra Prasad"),
          T("Father of Nation?", ["Nehru","Mahatma Gandhi","Bhagat Singh","Patel"], 1, "Mahatma Gandhi"),
          T("First Independence war?", ["1857","1867","1877","1887"], 0, "1857")
        ],
        moderate: [
          T("Discovered America?", ["Vasco","Columbus","Magellan","Cook"], 1, "Columbus 1492"),
          T("National Anthem writer?", ["Bankim","Tagore","Premchand","Iqbal"], 1, "Tagore"),
          T("1st woman PM world?", ["Indira","Sirimavo Bandaranaike","Golda Meir","Thatcher"], 1, "Sirimavo, Sri Lanka"),
          T("1st Indian Nobel?", ["C.V. Raman","Tagore","Amartya Sen","Mother Teresa"], 1, "Tagore 1913")
        ],
        hard: [
          T("'Missile Man'?", ["Homi Bhabha","APJ Kalam","Vikram Sarabhai","C.V. Raman"], 1, "APJ Kalam"),
          T("1st woman President India?", ["Indira","Pratibha Patil","Sarojini Naidu","Droupadi Murmu"], 1, "Pratibha Patil"),
          T("Nobel Prize started?", ["1895","1901","1911","1921"], 1, "1901"),
          T("1st Indian in space?", ["Kalpana","Rakesh Sharma","Sunita","Vikram"], 1, "Rakesh Sharma 1984")
        ]
      },
      "Geography": {
        easy: [
          T("Longest river India?", ["Yamuna","Ganga","Godavari","Narmada"], 1, "Ganga"),
          T("Largest state by area?", ["MP","UP","Rajasthan","Maharashtra"], 2, "Rajasthan"),
          T("States in India?", ["25","28","29","30"], 1, "28 states"),
          T("Taj Mahal city?", ["Delhi","Agra","Jaipur","Lucknow"], 1, "Agra")
        ],
        moderate: [
          T("Highest peak?", ["K2","Everest","Kanchenjunga","Makalu"], 1, "Everest"),
          T("Longest coastline state?", ["Kerala","Gujarat","TN","Odisha"], 1, "Gujarat"),
          T("Most districts state?", ["UP","MP","Bihar","Maharashtra"], 0, "UP (75)"),
          T("Tropic of Cancer passes how many states?", ["6","7","8","9"], 2, "8 states")
        ],
        hard: [
          T("Largest river island?", ["Sri Lanka","Majuli","Bali","Java"], 1, "Majuli, Assam"),
          T("Highest waterfall India?", ["Jog","Kunchikal","Dudhsagar","Shivanasamudra"], 1, "Kunchikal"),
          T("'Spice Garden of India'?", ["Kerala","Tamil Nadu","Karnataka","Goa"], 0, "Kerala"),
          T("Smallest state by area?", ["Goa","Sikkim","Tripura","Manipur"], 0, "Goa")
        ]
      }
    }
  },

  math: {
    sections: {
      "Arithmetic": {
        easy: [
          T("15 + 27 = ?", ["40","42","44","45"], 1, "42"),
          T("8 × 7 = ?", ["48","54","56","64"], 2, "56"),
          T("LCM of 4 & 6?", ["10","12","16","24"], 1, "12"),
          T("HCF of 12 & 18?", ["2","3","6","9"], 2, "6")
        ],
        moderate: [
          T("12 + 6 ÷ 3 × 2 = ?", ["12","16","20","24"], 1, "BODMAS = 16"),
          T("Sum 1 to 20?", ["180","200","210","220"], 2, "n(n+1)/2 = 210"),
          T("HCF of 24,36,48?", ["6","8","12","24"], 2, "12"),
          T("Smallest prime?", ["0","1","2","3"], 2, "2")
        ],
        hard: [
          T("Sum first 50 odd numbers?", ["2400","2500","2600","2700"], 1, "n² = 2500"),
          T("HCF of co-primes?", ["0","1","Number itself","Product"], 1, "1"),
          T("LCM of co-primes?", ["1","Sum","Product","Difference"], 2, "Product"),
          T("Neither prime nor composite?", ["0","1","2","4"], 1, "1")
        ]
      },
      "Percentage & Profit-Loss": {
        easy: [
          T("20% of 150?", ["20","25","30","35"], 2, "30"),
          T("50% of 80?", ["30","35","40","45"], 2, "40"),
          T("SP=120, CP=100. Profit?", ["10","15","20","25"], 2, "₹20"),
          T("CP=500, Loss=50, SP?", ["400","450","500","550"], 1, "₹450")
        ],
        moderate: [
          T("25% of x = 50, x = ?", ["150","175","200","225"], 2, "200"),
          T("CP=400, SP=500. Profit%?", ["20%","25%","30%","40%"], 1, "25%"),
          T("80 → 100, Increase%?", ["20%","25%","30%","40%"], 1, "25%"),
          T("SP=900, Loss=10%, CP=?", ["950","1000","1050","1100"], 1, "₹1000")
        ],
        hard: [
          T("SP=720, Profit=20%, CP?", ["550","600","620","650"], 1, "₹600"),
          T("Successive 10% & 20% discount?", ["28%","30%","32%","25%"], 0, "28%"),
          T("Price +25%, reduce consumption?", ["15%","18%","20%","25%"], 2, "20%"),
          T("MP +40%, discount 25%. Profit%?", ["5%","10%","15%","20%"], 0, "5%")
        ]
      },
      "Ratio, Average & Interest": {
        easy: [
          T("8:12 = ?", ["1:2","2:3","3:4","4:5"], 1, "2:3"),
          T("Avg of 4,6,8,10?", ["6","7","8","9"], 1, "7"),
          T("SI on ₹1000 @5% 2yrs?", ["50","100","150","200"], 1, "₹100"),
          T("₹200 in 1:3 = ?", ["50,150","60,140","40,160","80,120"], 0, "₹50, ₹150")
        ],
        moderate: [
          T("A:B=3:4, B:C=2:5, A:C?", ["3:10","3:8","6:20","6:10"], 0, "3:10"),
          T("Avg of 5 nums = 20, sum?", ["80","100","120","150"], 1, "100"),
          T("CI ₹1000 @10% 2yrs?", ["200","210","220","230"], 1, "₹210"),
          T("60km in 1.5hr, speed?", ["30","35","40","45"], 2, "40 km/h")
        ],
        hard: [
          T("Avg 10 nums = 25, remove 40, new avg?", ["20","22","23.33","25"], 2, "23.33"),
          T("CI ₹2000 @5% 2yrs?", ["200","205","210","215"], 1, "₹205"),
          T("A=10d, B=15d, together?", ["5","6","7","8"], 1, "6 days"),
          T("A:B=2:3, B:C=4:5, C:D=6:7, A:D?", ["16:35","16:21","48:105","Both A & C"], 3, "16:35")
        ]
      },// Compact format: T("question", [options], correctIndex, "explanation")
function T(q, options, answer, explanation) {
  return { q, options, answer, explanation };
}

const questionsDB = {

  english: {
    sections: {
      "Grammar": {
        easy: [
          T("I ___ a student.", ["is","am","are","be"], 1, "I → am"),
          T("He ___ homework yesterday.", ["do","does","did","doing"], 2, "Yesterday → did"),
          T("He is ___ honest man.", ["a","an","the","none"], 1, "Vowel → an"),
          T("Correct sentence?", ["She don't like tea.","She doesn't like tea.","She not like tea.","She no like tea."], 1, "3rd person → doesn't")
        ],
        moderate: [
          T("If I ___ rich, I would travel.", ["am","was","were","will be"], 2, "Hypothetical → were"),
          T("Neither of the boys ___ present.", ["are","were","was","have"], 2, "Singular verb"),
          T("Living here ___ 2010.", ["for","since","from","by"], 1, "Point of time → since"),
          T("Correct sentence?", ["He is senior than me.","He is senior to me.","He is more senior than me.","He is senior from me."], 1, "Latin comparative → to")
        ],
        hard: [
          T("Scarcely had I reached ___ bell rang.", ["than","when","then","that"], 1, "Scarcely...when"),
          T("No sooner did he see police ___ he ran.", ["when","then","than","that"], 2, "No sooner...than"),
          T("It is high time we ___ truth.", ["tell","told","will tell","have told"], 1, "Past subjunctive"),
          T("The jury ___ divided in opinions.", ["was","were","is","has"], 1, "Divided → plural")
        ]
      },
      "Vocabulary": {
        easy: [
          T("Synonym of 'Begin':", ["Start","End","Stop","Finish"], 0, "Begin = Start"),
          T("Antonym of 'Ancient':", ["Old","Modern","Historic","Past"], 1, "Opposite = Modern"),
          T("Synonym of 'Big':", ["Small","Tiny","Large","Little"], 2, "Big = Large"),
          T("Antonym of 'Friend':", ["Ally","Enemy","Companion","Buddy"], 1, "Opposite = Enemy")
        ],
        moderate: [
          T("Synonym of 'Candid':", ["Rude","Frank","Shy","Rough"], 1, "Candid = Frank"),
          T("Antonym of 'Frugal':", ["Thrifty","Extravagant","Careful","Saving"], 1, "Opposite = Extravagant"),
          T("Synonym of 'Diligent':", ["Lazy","Hardworking","Careless","Idle"], 1, "Diligent = mehnati"),
          T("Antonym of 'Conceal':", ["Hide","Reveal","Cover","Bury"], 1, "Opposite = Reveal")
        ],
        hard: [
          T("Synonym of 'Pusillanimous':", ["Brave","Cowardly","Proud","Wise"], 1, "= kayar"),
          T("Antonym of 'Prolific':", ["Productive","Barren","Creative","Fruitful"], 1, "Opposite = Barren"),
          T("Synonym of 'Ubiquitous':", ["Rare","Omnipresent","Hidden","Scarce"], 1, "= har jagah"),
          T("Antonym of 'Garrulous':", ["Talkative","Taciturn","Chatty","Loquacious"], 1, "Opposite = Taciturn")
        ]
      },
      "Idioms & Phrases": {
        easy: [
          T("'Once in a blue moon':", ["Very often","Very rarely","Daily","Never"], 1, "Bohot kam"),
          T("'Piece of cake':", ["Hard task","Very easy task","Sweet dish","Party"], 1, "Aasan kaam"),
          T("'Break a leg':", ["Get hurt","Good luck","Run fast","Fall down"], 1, "Good luck"),
          T("'Hit the books':", ["Throw books","Study hard","Buy books","Read casually"], 1, "Padhai karna")
        ],
        moderate: [
          T("'Let the cat out of the bag':", ["Free animal","Reveal a secret","Make noise","Run away"], 1, "Secret reveal"),
          T("'A bolt from the blue':", ["Loud noise","Sudden shock","Blue sky","Lightning"], 1, "Achanak shock"),
          T("'Bury the hatchet':", ["Dig hole","Make peace","Fight","Hide"], 1, "Dushmani bhulana"),
          T("'Smell a rat':", ["Smell bad","Suspect something","See a rat","Be dirty"], 1, "Shak karna")
        ],
        hard: [
          T("'To play to the gallery':", ["Act on stage","Seek popular approval","Paint","Fool people"], 1, "Janta ko khush karna"),
          T("'To burn the midnight oil':", ["Waste oil","Work late into the night","Light fire","Sleep early"], 1, "Raat bhar mehnat"),
          T("'To carry coals to Newcastle':", ["Unnecessary work","Carry goods","Travel","Help someone"], 0, "Fizool kaam"),
          T("'To turn a deaf ear':", ["Hear carefully","Ignore","Be deaf","Listen"], 1, "Dhyan na dena")
        ]
      },
      "One Word Substitution": {
        easy: [
          T("Cannot read or write:", ["Ignorant","Illiterate","Innocent","Idiot"], 1, "Illiterate"),
          T("Place for books:", ["Museum","Library","Gallery","Archives"], 1, "Library"),
          T("Flies aircraft:", ["Driver","Pilot","Sailor","Captain"], 1, "Pilot"),
          T("Treats children:", ["Cardiologist","Pediatrician","Dermatologist","Neurologist"], 1, "Pediatrician")
        ],
        moderate: [
          T("Speech without prep:", ["Extempore","Oratory","Monologue","Soliloquy"], 0, "Extempore"),
          T("Government by people:", ["Monarchy","Democracy","Autocracy","Oligarchy"], 1, "Democracy"),
          T("Lover of mankind:", ["Misanthrope","Philanthropist","Egoist","Altruist"], 1, "Philanthropist"),
          T("Bees kept:", ["Aviary","Apiary","Aquarium","Zoo"], 1, "Apiary")
        ],
        hard: [
          T("Easily deceived:", ["Cynic","Gullible","Stubborn","Skeptic"], 1, "Gullible"),
          T("Speaks many languages:", ["Bilingual","Polyglot","Linguist","Orator"], 1, "Polyglot"),
          T("Self-contradictory statement:", ["Paradox","Parody","Parable","Parallel"], 0, "Paradox"),
          T("Indifferent to pleasure & pain:", ["Stoic","Hedonist","Optimist","Realist"], 0, "Stoic")
        ]
      }
    }
  },

  gk: {
    sections: {
      "Static GK": {
        easy: [
          T("National animal of India?", ["Lion","Tiger","Elephant","Peacock"], 1, "Tiger"),
          T("Capital of India?", ["Mumbai","Kolkata","New Delhi","Chennai"], 2, "New Delhi"),
          T("National bird?", ["Parrot","Crow","Peacock","Eagle"], 2, "Peacock"),
          T("Currency of India?", ["Dollar","Euro","Rupee","Yen"], 2, "Rupee")
        ],
        moderate: [
          T("Largest continent?", ["Africa","Europe","Asia","Australia"], 2, "Asia"),
          T("Smallest country?", ["Monaco","Vatican City","Nauru","San Marino"], 1, "Vatican"),
          T("Longest river?", ["Amazon","Nile","Ganga","Yangtze"], 1, "Nile"),
          T("Largest ocean?", ["Atlantic","Indian","Arctic","Pacific"], 3, "Pacific")
        ],
        hard: [
          T("Largest desert?", ["Sahara","Thar","Antarctica","Gobi"], 2, "Antarctica (cold)"),
          T("World Environment Day?", ["5 June","5 July","22 April","1 May"], 0, "5 June"),
          T("Red Planet?", ["Venus","Mars","Jupiter","Saturn"], 1, "Mars"),
          T("First Indian in space?", ["Kalpana","Rakesh Sharma","Sunita","Vikram"], 1, "Rakesh Sharma 1984")
        ]
      },
      "Books & Authors": {
        easy: [
          T("National Anthem writer?", ["Bankim","Tagore","Premchand","Iqbal"], 1, "Tagore"),
          T("National Song writer?", ["Tagore","Bankim Chandra","Premchand","Iqbal"], 1, "Bankim Chandra"),
          T("'Discovery of India'?", ["Gandhi","Nehru","Tagore","Ambedkar"], 1, "Nehru"),
          T("'Wings of Fire'?", ["Nehru","APJ Kalam","Ambedkar","Tagore"], 1, "APJ Kalam")
        ],
        moderate: [
          T("'Wealth of Nations'?", ["Marx","Adam Smith","Keynes","Ricardo"], 1, "Adam Smith"),
          T("'Mein Kampf'?", ["Mussolini","Hitler","Stalin","Lenin"], 1, "Hitler"),
          T("'Ramayana'?", ["Ved Vyas","Valmiki","Tulsidas","Kalidasa"], 1, "Valmiki"),
          T("'Mahabharata'?", ["Valmiki","Ved Vyas","Tulsidas","Kalidasa"], 1, "Ved Vyas")
        ],
        hard: [
          T("'Origin of Species'?", ["Newton","Darwin","Einstein","Mendel"], 1, "Darwin"),
          T("'Republic'?", ["Aristotle","Plato","Socrates","Homer"], 1, "Plato"),
          T("'Das Kapital'?", ["Marx","Engels","Lenin","Stalin"], 0, "Karl Marx"),
          T("'Geetanjali'?", ["Tagore","Bankim","Premchand","Iqbal"], 0, "Tagore")
        ]
      },
      "Sports & Awards": {
        easy: [
          T("Cricket team players?", ["9","10","11","12"], 2, "11"),
          T("National game (traditional)?", ["Cricket","Hockey","Football","Kabaddi"], 1, "Hockey"),
          T("Olympics every ___ years?", ["2","3","4","5"], 2, "4 saal"),
          T("Sachin plays?", ["Hockey","Cricket","Tennis","Football"], 1, "Cricket")
        ],
        moderate: [
          T("Bharat Ratna started?", ["1950","1954","1955","1960"], 1, "1954"),
          T("1st individual Olympic gold Indian?", ["Sushil","Abhinav Bindra","Vijender","Mary Kom"], 1, "Abhinav Bindra 2008"),
          T("Dronacharya Award for?", ["Literature","Coaching","Acting","Science"], 1, "Sports coaching"),
          T("Wimbledon sport?", ["Badminton","Tennis","Cricket","Football"], 1, "Tennis")
        ],
        hard: [
          T("India won Cricket WC how many times?", ["1","2","3","4"], 1, "1983 & 2011"),
          T("'Flying Sikh'?", ["Milkha Singh","Neeraj Chopra","PT Usha","Dhyan Chand"], 0, "Milkha Singh"),
          T("1st woman Olympic medal India?", ["Saina","Karnam Malleswari","Mary Kom","PV Sindhu"], 1, "Karnam 2000"),
          T("1st Indian woman Olympic silver?", ["Saina","PV Sindhu","Mary Kom","Sakshi"], 1, "PV Sindhu 2016")
        ]
      },
      "Important Days": {
        easy: [
          T("Independence Day?", ["26 Jan","15 Aug","2 Oct","14 Nov"], 1, "15 August"),
          T("Republic Day?", ["26 Jan","15 Aug","2 Oct","14 Nov"], 0, "26 January"),
          T("Gandhi Jayanti?", ["15 Aug","26 Jan","2 Oct","14 Nov"], 2, "2 October"),
          T("Children's Day?", ["14 Nov","15 Aug","1 May","5 Sept"], 0, "14 November")
        ],
        moderate: [
          T("Women's Day?", ["8 March","1 May","5 June","10 Dec"], 0, "8 March"),
          T("World Health Day?", ["7 April","5 June","1 Dec","10 Oct"], 0, "7 April"),
          T("Yoga Day?", ["21 June","5 June","1 July","21 May"], 0, "21 June"),
          T("Human Rights Day?", ["10 Dec","5 June","1 May","7 April"], 0, "10 December")
        ],
        hard: [
          T("United Nations Day?", ["24 Oct","10 Dec","5 June","1 May"], 0, "24 October"),
          T("World AIDS Day?", ["1 Dec","5 June","24 Oct","7 April"], 0, "1 December"),
          T("National Science Day?", ["28 Feb","5 Sept","1 May","14 Nov"], 0, "28 Feb (Raman)"),
          T("Teachers' Day India?", ["5 Sept","14 Nov","2 Oct","1 May"], 0, "5 September")
        ]
      }
    }
  },

  gs: {
    sections: {
      "Indian Polity": {
        easy: [
          T("Fundamental Rights count?", ["5","6","7","8"], 1, "6 FRs"),
          T("Head of state?", ["PM","President","CJI","Governor"], 1, "President"),
          T("Father of Constitution?", ["Nehru","Ambedkar","Rajendra Prasad","Patel"], 1, "Dr. Ambedkar"),
          T("Lok Sabha max strength?", ["545","550","552","560"], 2, "552")
        ],
        moderate: [
          T("National Emergency Article?", ["352","356","360","370"], 0, "Article 352"),
          T("Money Bill only in?", ["Rajya Sabha","Lok Sabha","Either","SC"], 1, "Lok Sabha (Art 110)"),
          T("Article 356 = ?", ["National Emg","President's Rule","Financial Emg","FRs"], 1, "President's Rule"),
          T("President term?", ["4 yrs","5 yrs","6 yrs","7 yrs"], 1, "5 years")
        ],
        hard: [
          T("RTE under Article?", ["19","21","21A","32"], 2, "21A (86th Amd)"),
          T("Anti-defection Schedule?", ["8th","9th","10th","11th"], 2, "10th (52nd Amd)"),
          T("Article 32 called?", ["Heart of Constitution","Soul","Backbone","Head"], 0, "Heart & Soul"),
          T("Rajya Sabha max?", ["238","245","250","252"], 2, "250")
        ]
      },
      "Science": {
        easy: [
          T("Largest gland?", ["Pancreas","Liver","Thyroid","Pituitary"], 1, "Liver"),
          T("Planet closest to Sun?", ["Venus","Mercury","Mars","Earth"], 1, "Mercury"),
          T("Balloon gas?", ["Oxygen","Hydrogen","Helium","Nitrogen"], 2, "Helium"),
          T("Photosynthesis releases?", ["CO2","Oxygen","Nitrogen","Hydrogen"], 1, "Oxygen")
        ],
        moderate: [
          T("Hardest natural substance?", ["Iron","Diamond","Quartz","Gold"], 1, "Diamond"),
          T("Smallest bone?", ["Stapes","Femur","Tibia","Radius"], 0, "Stapes (ear)"),
          T("Stomach acid?", ["H2SO4","HCl","HNO3","CH3COOH"], 1, "HCl"),
          T("Vitamin in citrus?", ["A","B","C","D"], 2, "Vitamin C")
        ],
        hard: [
          T("Carbon atomic number?", ["4","6","8","12"], 1, "6"),
          T("pH of pure water?", ["5","6","7","8"], 2, "7 (neutral)"),
          T("SI unit of force?", ["Joule","Newton","Watt","Pascal"], 1, "Newton"),
          T("Dry ice is?", ["Solid CO2","Solid N2","Solid O2","Solid H2"], 0, "Solid CO2")
        ]
      },
      "History": {
        easy: [
          T("First PM of India?", ["Patel","Nehru","Rajendra Prasad","Gandhi"], 1, "Nehru"),
          T("First President?", ["Nehru","Rajendra Prasad","Radhakrishnan","Zakir"], 1, "Rajendra Prasad"),
          T("Father of Nation?", ["Nehru","Mahatma Gandhi","Bhagat Singh","Patel"], 1, "Mahatma Gandhi"),
          T("First Independence war?", ["1857","1867","1877","1887"], 0, "1857")
        ],
        moderate: [
          T("Discovered America?", ["Vasco","Columbus","Magellan","Cook"], 1, "Columbus 1492"),
          T("National Anthem writer?", ["Bankim","Tagore","Premchand","Iqbal"], 1, "Tagore"),
          T("1st woman PM world?", ["Indira","Sirimavo Bandaranaike","Golda Meir","Thatcher"], 1, "Sirimavo, Sri Lanka"),
          T("1st Indian Nobel?", ["C.V. Raman","Tagore","Amartya Sen","Mother Teresa"], 1, "Tagore 1913")
        ],
        hard: [
          T("'Missile Man'?", ["Homi Bhabha","APJ Kalam","Vikram Sarabhai","C.V. Raman"], 1, "APJ Kalam"),
          T("1st woman President India?", ["Indira","Pratibha Patil","Sarojini Naidu","Droupadi Murmu"], 1, "Pratibha Patil"),
          T("Nobel Prize started?", ["1895","1901","1911","1921"], 1, "1901"),
          T("1st Indian in space?", ["Kalpana","Rakesh Sharma","Sunita","Vikram"], 1, "Rakesh Sharma 1984")
        ]
      },
      "Geography": {
        easy: [
          T("Longest river India?", ["Yamuna","Ganga","Godavari","Narmada"], 1, "Ganga"),
          T("Largest state by area?", ["MP","UP","Rajasthan","Maharashtra"], 2, "Rajasthan"),
          T("States in India?", ["25","28","29","30"], 1, "28 states"),
          T("Taj Mahal city?", ["Delhi","Agra","Jaipur","Lucknow"], 1, "Agra")
        ],
        moderate: [
          T("Highest peak?", ["K2","Everest","Kanchenjunga","Makalu"], 1, "Everest"),
          T("Longest coastline state?", ["Kerala","Gujarat","TN","Odisha"], 1, "Gujarat"),
          T("Most districts state?", ["UP","MP","Bihar","Maharashtra"], 0, "UP (75)"),
          T("Tropic of Cancer passes how many states?", ["6","7","8","9"], 2, "8 states")
        ],
        hard: [
          T("Largest river island?", ["Sri Lanka","Majuli","Bali","Java"], 1, "Majuli, Assam"),
          T("Highest waterfall India?", ["Jog","Kunchikal","Dudhsagar","Shivanasamudra"], 1, "Kunchikal"),
          T("'Spice Garden of India'?", ["Kerala","Tamil Nadu","Karnataka","Goa"], 0, "Kerala"),
          T("Smallest state by area?", ["Goa","Sikkim","Tripura","Manipur"], 0, "Goa")
        ]
      }
    }
  },

  math: {
    sections: {
      "Arithmetic": {
        easy: [
          T("15 + 27 = ?", ["40","42","44","45"], 1, "42"),
          T("8 × 7 = ?", ["48","54","56","64"], 2, "56"),
          T("LCM of 4 & 6?", ["10","12","16","24"], 1, "12"),
          T("HCF of 12 & 18?", ["2","3","6","9"], 2, "6")
        ],
        moderate: [
          T("12 + 6 ÷ 3 × 2 = ?", ["12","16","20","24"], 1, "BODMAS = 16"),
          T("Sum 1 to 20?", ["180","200","210","220"], 2, "n(n+1)/2 = 210"),
          T("HCF of 24,36,48?", ["6","8","12","24"], 2, "12"),
          T("Smallest prime?", ["0","1","2","3"], 2, "2")
        ],
        hard: [
          T("Sum first 50 odd numbers?", ["2400","2500","2600","2700"], 1, "n² = 2500"),
          T("HCF of co-primes?", ["0","1","Number itself","Product"], 1, "1"),
          T("LCM of co-primes?", ["1","Sum","Product","Difference"], 2, "Product"),
          T("Neither prime nor composite?", ["0","1","2","4"], 1, "1")
        ]
      },
      "Percentage & Profit-Loss": {
        easy: [
          T("20% of 150?", ["20","25","30","35"], 2, "30"),
          T("50% of 80?", ["30","35","40","45"], 2, "40"),
          T("SP=120, CP=100. Profit?", ["10","15","20","25"], 2, "₹20"),
          T("CP=500, Loss=50, SP?", ["400","450","500","550"], 1, "₹450")
        ],
        moderate: [
          T("25% of x = 50, x = ?", ["150","175","200","225"], 2, "200"),
          T("CP=400, SP=500. Profit%?", ["20%","25%","30%","40%"], 1, "25%"),
          T("80 → 100, Increase%?", ["20%","25%","30%","40%"], 1, "25%"),
          T("SP=900, Loss=10%, CP=?", ["950","1000","1050","1100"], 1, "₹1000")
        ],
        hard: [
          T("SP=720, Profit=20%, CP?", ["550","600","620","650"], 1, "₹600"),
          T("Successive 10% & 20% discount?", ["28%","30%","32%","25%"], 0, "28%"),
          T("Price +25%, reduce consumption?", ["15%","18%","20%","25%"], 2, "20%"),
          T("MP +40%, discount 25%. Profit%?", ["5%","10%","15%","20%"], 0, "5%")
        ]
      },
      "Ratio, Average & Interest": {
        easy: [
          T("8:12 = ?", ["1:2","2:3","3:4","4:5"], 1, "2:3"),
          T("Avg of 4,6,8,10?", ["6","7","8","9"], 1, "7"),
          T("SI on ₹1000 @5% 2yrs?", ["50","100","150","200"], 1, "₹100"),
          T("₹200 in 1:3 = ?", ["50,150","60,140","40,160","80,120"], 0, "₹50, ₹150")
        ],
        moderate: [
          T("A:B=3:4, B:C=2:5, A:C?", ["3:10","3:8","6:20","6:10"], 0, "3:10"),
          T("Avg of 5 nums = 20, sum?", ["80","100","120","150"], 1, "100"),
          T("CI ₹1000 @10% 2yrs?", ["200","210","220","230"], 1, "₹210"),
          T("60km in 1.5hr, speed?", ["30","35","40","45"], 2, "40 km/h")
        ],
        hard: [
          T("Avg 10 nums = 25, remove 40, new avg?", ["20","22","23.33","25"], 2, "23.33"),
          T("CI ₹2000 @5% 2yrs?", ["200","205","210","215"], 1, "₹205"),
          T("A=10d, B=15d, together?", ["5","6","7","8"], 1, "6 days"),
          T("A:B=2:3, B:C=4:5, C:D=6:7, A:D?", ["16:35","16:21","48:105","Both A & C"], 3, "16:35")
        ]
      },
      "Algebra": {
        easy: [
          T("x + 5 = 12, x = ?", ["5","6","7","8"], 2, "7"),
          T("2x = 18, x = ?", ["6","8","9","12"], 2, "9"),
          T("(a+b)² = ?", ["a²+b²","a²+2ab+b²","a²−2ab+b²","a²−b²"], 1, "Formula"),
          T("x=3, x² = ?", ["6","8","9","12"], 2, "9")
        ],
        moderate: [
          T("x² = 49, x = ?", ["±5","±6","±7","±8"], 2, "±7"),
          T("(a−b)² = ?", ["a²+b²","a²+2ab+b²","a²−2ab+b²","a²−b²"], 2, "Formula"),
          T("3x+2y=12, x=2, y=?", ["2","3","4","5"], 1, "3"),
          T("x²−9 = ?", ["(x−3)(x−3)","(x+3)(x+3)","(x−3)(x+3)","x(x−9)"], 2, "Diff of squares")
        ],
        hard: [
          T("a+b=10, ab=21, a²+b²=?", ["52","54","56","58"], 3, "58"),
          T("a+b=8, a−b=4, ab=?", ["8","10","12","14"], 2, "12"),
          T("a+b=5, ab=6, a³+b³=?", ["35","45","55","65"], 0, "35"),
          T("Roots x²−5x+6=0", ["1,6","2,3","−2,−3","1,5"], 1, "2,3")
        ]
      },
      "Geometry & Mensuration": {
        easy: [
          T("Triangle angle sum?", ["90°","180°","270°","360°"], 1, "180°"),
          T("Rectangle area l=5,b=3?", ["10","12","15","18"], 2, "15"),
          T("Square perimeter side 4?", ["8","12","16","20"], 2, "16"),
          T("Diameter r=7?", ["7","10","14","21"], 2, "14")
        ],
        moderate: [
          T("Circle area r=7 (π=22/7)?", ["144","154","164","174"], 1, "154"),
          T("Circumference r=7?", ["22","33","44","55"], 2, "44"),
          T("Triangle area b=10,h=6?", ["20","30","40","60"], 1, "30"),
          T("Pythagoras c² = ?", ["a+b","a²+b²","a²−b²","(a+b)²"], 1, "a²+b²")
        ],
        hard: [
          T("Cube volume side 4?", ["12","16","48","64"], 3, "64"),
          T("Cylinder vol r=7,h=10?", ["1440","1540","1640","1740"], 1, "1540"),
          T("Cube TSA side 5?", ["100","125","150","175"], 2, "150"),
          T("Square diagonal side 5?", ["5√2","5√3","10","5"], 0, "5√2")
        ]
      }
    }
  }
};
      "Algebra": {
        easy: [
          T("x + 5 = 12, x = ?", ["5","6","7","8"], 2, "7"),
          T("2x = 18, x = ?", ["6","8","9","12"], 2, "9"),
          T("(a+b)² = ?", ["a²+b²","a²+2ab+b²","a²−2ab+b²","a²−b²"], 1, "Formula"),
          T("x=3, x² = ?", ["6","8","9","12"], 2, "9")
        ],
        moderate: [
          T("x² = 49, x = ?", ["±5","±6","±7","±8"], 2, "±7"),
          T("(a−b)² = ?", ["a²+b²","a²+2ab+b²","a²−2ab+b²","a²−b²"], 2, "Formula"),
          T("3x+2y=12, x=2, y=?", ["2","3","4","5"], 1, "3"),
          T("x²−9 = ?", ["(x−3)(x−3)","(x+3)(x+3)","(x−3)(x+3)","x(x−9)"], 2, "Diff of squares")
        ],
        hard: [
          T("a+b=10, ab=21, a²+b²=?", ["52","54","56","58"], 3, "58"),
          T("a+b=8, a−b=4, ab=?", ["8","10","12","14"], 2, "12"),
          T("a+b=5, ab=6, a³+b³=?", ["35","45","55","65"], 0, "35"),
          T("Roots x²−5x+6=0", ["1,6","2,3","−2,−3","1,5"], 1, "2,3")
        ]
      },
      "Geometry & Mensuration": {
        easy: [
          T("Triangle angle sum?", ["90°","180°","270°","360°"], 1, "180°"),
          T("Rectangle area l=5,b=3?", ["10","12","15","18"], 2, "15"),
          T("Square perimeter side 4?", ["8","12","16","20"], 2, "16"),
          T("Diameter r=7?", ["7","10","14","21"], 2, "14")
        ],
        moderate: [
          T("Circle area r=7 (π=22/7)?", ["144","154","164","174"], 1, "154"),
          T("Circumference r=7?", ["22","33","44","55"], 2, "44"),
          T("Triangle area b=10,h=6?", ["2
