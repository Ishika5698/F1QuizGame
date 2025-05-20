const questions = {
    easy: [
        { question: "What color is associated with Ferrari in F1?", options: ["Red", "Blue", "Yellow", "Green"], answer: "Red" },
        { question: "How many wheels does an F1 car have?", options: ["2", "3", "4", "6"], answer: "4" },
        { question: "What is the name of the F1 race in Monaco?", options: ["Monaco Grand Prix", "Italian Grand Prix", "British Grand Prix", "French Grand Prix"], answer: "Monaco Grand Prix" },
        { question: "What do F1 drivers wear to protect their heads?", options: ["Cap", "Helmet", "Hat", "Hood"], answer: "Helmet" },
        { question: "Which company supplies tires for F1?", options: ["Pirelli", "Michelin", "Goodyear", "Bridgestone"], answer: "Pirelli" },
        { question: "What is the name of the F1 race in Italy?", options: ["Monaco Grand Prix", "Italian Grand Prix", "Spanish Grand Prix", "Austrian Grand Prix"], answer: "Italian Grand Prix" },
        { question: "Which country hosts the Silverstone circuit?", options: ["UK", "USA", "Germany", "Japan"], answer: "UK" },
        { question: "What is the main material of an F1 car’s chassis?", options: ["Steel", "Aluminum", "Carbon Fiber", "Plastic"], answer: "Carbon Fiber" },
        { question: "What does the checkered flag signal in F1?", options: ["Race Start", "Race End", "Pit Stop", "Caution"], answer: "Race End" },
        { question: "Which city hosts the Canadian Grand Prix?", options: ["Toronto", "Montreal", "Vancouver", "Ottawa"], answer: "Montreal" },
        { question: "What is the name of the F1 race in Brazil?", options: ["Brazilian Grand Prix", "Argentine Grand Prix", "Mexican Grand Prix", "Chilean Grand Prix"], answer: "Brazilian Grand Prix" },
        { question: "Which team is known for the Silver Arrows nickname?", options: ["Ferrari", "Mercedes", "Red Bull", "McLaren"], answer: "Mercedes" },
        { question: "What is the minimum age to drive in F1?", options: ["16", "17", "18", "19"], answer: "19" },
        { question: "What is the name of the F1 race in Japan?", options: ["Japanese Grand Prix", "Chinese Grand Prix", "Korean Grand Prix", "Indian Grand Prix"], answer: "Japanese Grand Prix" },
        { question: "Which circuit is known as 'The Temple of Speed'?", options: ["Monza", "Spa", "Silverstone", "Suzuka"], answer: "Monza" },
        { question: "What is the name of the F1 race in Australia?", options: ["Australian Grand Prix", "New Zealand Grand Prix", "Singapore Grand Prix", "Malaysian Grand Prix"], answer: "Australian Grand Prix" },
        { question: "Which team has a prancing horse logo?", options: ["Ferrari", "Red Bull", "Mercedes", "Alpine"], answer: "Ferrari" },
        { question: "What is the name of the F1 race in the USA?", options: ["United States Grand Prix", "Canadian Grand Prix", "Mexican Grand Prix", "Brazilian Grand Prix"], answer: "United States Grand Prix" },
        { question: "What do F1 drivers use to communicate with their team?", options: ["Phone", "Radio", "Tablet", "Laptop"], answer: "Radio" },
        { question: "Which circuit hosts the Belgian Grand Prix?", options: ["Spa-Francorchamps", "Monza", "Silverstone", "Hungaroring"], answer: "Spa-Francorchamps" },
        { question: "What is the name of the F1 race in Spain?", options: ["Spanish Grand Prix", "Portuguese Grand Prix", "Italian Grand Prix", "French Grand Prix"], answer: "Spanish Grand Prix" },
        { question: "Which team is based in Woking, UK?", options: ["McLaren", "Ferrari", "Red Bull", "Alpine"], answer: "McLaren" },
        { question: "What does the red flag mean in F1?", options: ["Race Stopped", "Race Start", "Pit Stop", "Fast Lap"], answer: "Race Stopped" },
        { question: "Which city hosts the Singapore Grand Prix?", options: ["Singapore", "Bangkok", "Kuala Lumpur", "Jakarta"], answer: "Singapore" },
        { question: "What is the name of the F1 race in Austria?", options: ["Austrian Grand Prix", "German Grand Prix", "Swiss Grand Prix", "Dutch Grand Prix"], answer: "Austrian Grand Prix" },
        { question: "Which team is known for its orange livery?", options: ["McLaren", "Ferrari", "Mercedes", "Alpine"], answer: "McLaren" },
        { question: "What is the name of the F1 race in Hungary?", options: ["Hungarian Grand Prix", "Polish Grand Prix", "Czech Grand Prix", "Romanian Grand Prix"], answer: "Hungarian Grand Prix" },
        { question: "Which circuit is known for its 'Eau Rouge' corner?", options: ["Spa-Francorchamps", "Monza", "Silverstone", "Suzuka"], answer: "Spa-Francorchamps" },
        { question: "What is the name of the F1 race in Mexico?", options: ["Mexican Grand Prix", "Brazilian Grand Prix", "Argentine Grand Prix", "Chilean Grand Prix"], answer: "Mexican Grand Prix" },
        { question: "Which team is based in Milton Keynes, UK?", options: ["Red Bull", "Ferrari", "Mercedes", "Alpine"], answer: "Red Bull" },
        { question: "Which city hosts the Miami Grand Prix?", options: ["Miami", "Los Angeles", "New York", "Chicago"], answer: "Miami" },
        { question: "What is the name of the F1 race in France?", options: ["French Grand Prix", "Spanish Grand Prix", "Italian Grand Prix", "Monaco Grand Prix"], answer: "French Grand Prix" },
        { question: "Which team is known for its blue and yellow livery?", options: ["Alpine", "Ferrari", "Mercedes", "Red Bull"], answer: "Alpine" },
        { question: "What does the yellow flag mean in F1?", options: ["Caution", "Race End", "Pit Stop", "Fast Lap"], answer: "Caution" },
        { question: "Which circuit hosts the Dutch Grand Prix?", options: ["Zandvoort", "Monza", "Spa", "Silverstone"], answer: "Zandvoort" },
        { question: "What is the name of the F1 race in China?", options: ["Chinese Grand Prix", "Japanese Grand Prix", "Korean Grand Prix", "Indian Grand Prix"], answer: "Chinese Grand Prix" },
        { question: "Which team is based in Faenza, Italy?", options: ["RB", "Ferrari", "Mercedes", "McLaren"], answer: "RB" },
        { question: "What is the name of the F1 race in Portugal?", options: ["Portuguese Grand Prix", "Spanish Grand Prix", "Italian Grand Prix", "French Grand Prix"], answer: "Portuguese Grand Prix" },
        { question: "Which circuit is known for its 'Senna S' corner?", options: ["Interlagos", "Monza", "Spa", "Suzuka"], answer: "Interlagos" },
        { question: "What is the name of the F1 race in Las Vegas?", options: ["Las Vegas Grand Prix", "Miami Grand Prix", "United States Grand Prix", "Canadian Grand Prix"], answer: "Las Vegas Grand Prix" },
        // New Easy Questions (17)
        { question: "Which city hosts the Emilia Romagna Grand Prix?", options: ["Imola", "Monza", "Mugello", "Rome"], answer: "Imola" },
        { question: "What is the name of the F1 race in Germany?", options: ["German Grand Prix", "Austrian Grand Prix", "Swiss Grand Prix", "Dutch Grand Prix"], answer: "German Grand Prix" },
        { question: "Which team uses a green livery?", options: ["Aston Martin", "Ferrari", "McLaren", "Alpine"], answer: "Aston Martin" },
        { question: "What does the blue flag mean in F1?", options: ["Let Faster Car Pass", "Race End", "Pit Stop", "Caution"], answer: "Let Faster Car Pass" },
        { question: "Which country hosts the Suzuka circuit?", options: ["Japan", "China", "South Korea", "Malaysia"], answer: "Japan" },
        { question: "What is the name of the F1 race in Malaysia?", options: ["Malaysian Grand Prix", "Singapore Grand Prix", "Chinese Grand Prix", "Thai Grand Prix"], answer: "Malaysian Grand Prix" },
        { question: "Which team is based in Brackley, UK?", options: ["Mercedes", "Red Bull", "Ferrari", "Alpine"], answer: "Mercedes" },
        { question: "What is the name of the F1 race in Russia?", options: ["Russian Grand Prix", "Hungarian Grand Prix", "Polish Grand Prix", "Czech Grand Prix"], answer: "Russian Grand Prix" },
        { question: "Which circuit is known for its 'Maggotts-Becketts' complex?", options: ["Silverstone", "Spa", "Monza", "Suzuka"], answer: "Silverstone" },
        { question: "What is the name of the F1 race in Turkey?", options: ["Turkish Grand Prix", "Greek Grand Prix", "Cyprus Grand Prix", "Bulgarian Grand Prix"], answer: "Turkish Grand Prix" },
        { question: "Which team is known for its papaya orange color?", options: ["McLaren", "Ferrari", "Mercedes", "Alpine"], answer: "McLaren" },
        { question: "What is the name of the F1 race in India?", options: ["Indian Grand Prix", "Chinese Grand Prix", "Japanese Grand Prix", "Korean Grand Prix"], answer: "Indian Grand Prix" },
        { question: "Which circuit hosts the Abu Dhabi Grand Prix?", options: ["Yas Marina", "Bahrain International", "Jeddah Corniche", "Losail International"], answer: "Yas Marina" },
        { question: "What is the name of the F1 race in South Africa?", options: ["South African Grand Prix", "Moroccan Grand Prix", "Egyptian Grand Prix", "Nigerian Grand Prix"], answer: "South African Grand Prix" },
        { question: "Which team is based in Viry-Châtillon, France?", options: ["Alpine", "Ferrari", "Red Bull", "Mercedes"], answer: "Alpine" },
        { question: "What does the white flag mean in F1?", options: ["Slow Vehicle on Track", "Race End", "Pit Stop", "Fast Lap"], answer: "Slow Vehicle on Track" },
        { question: "Which city hosts the Qatar Grand Prix?", options: ["Doha", "Dubai", "Riyadh", "Abu Dhabi"], answer: "Doha" }
    ],
    medium: [
        { question: "What does DRS stand for in F1?", options: ["Drag Reduction System", "Downforce Reduction System", "Dynamic Racing System", "Driver Response System"], answer: "Drag Reduction System" },
        { question: "Which circuit hosts the British Grand Prix?", options: ["Silverstone", "Monza", "Spa", "Suzuka"], answer: "Silverstone" },
        { question: "How many points does the race winner get in F1?", options: ["10", "15", "25", "50"], answer: "25" },
        { question: "What is the minimum weight of an F1 car (including driver)?", options: ["600 kg", "700 kg", "800 kg", "900 kg"], answer: "800 kg" },
        { question: "Which city hosts the Australian Grand Prix?", options: ["Sydney", "Melbourne", "Perth", "Brisbane"], answer: "Melbourne" },
        { question: "How many laps are in the Monaco Grand Prix?", options: ["68", "78", "88", "98"], answer: "78" },
        { question: "Which driver holds the record for most pole positions?", options: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"], answer: "Lewis Hamilton" },
        { question: "What is the name of the circuit in Bahrain?", options: ["Bahrain International Circuit", "Yas Marina", "Jeddah Corniche", "Losail International"], answer: "Bahrain International Circuit" },
        { question: "Which team won the first F1 Constructors' Championship in 1958?", options: ["Vanwall", "Ferrari", "Mercedes", "Lotus"], answer: "Vanwall" },
        { question: "What is the length of the Monaco circuit?", options: ["3.337 km", "4.337 km", "5.337 km", "6.337 km"], answer: "3.337 km" },
        { question: "Which driver is known as 'The Flying Finn'?", options: ["Kimi Raikkonen", "Mika Hakkinen", "Valtteri Bottas", "All of the above"], answer: "All of the above" },
        { question: "What is the name of the circuit in Japan?", options: ["Suzuka", "Fuji", "Okayama", "Motegi"], answer: "Suzuka" },
        { question: "How many points for second place in an F1 race?", options: ["15", "18", "20", "25"], answer: "18" },
        { question: "Which circuit hosts the Dutch Grand Prix?", options: ["Zandvoort", "Assen", "Hockenheim", "Nurburgring"], answer: "Zandvoort" },
        { question: "What is the name of the F1 race in Abu Dhabi?", options: ["Abu Dhabi Grand Prix", "Dubai Grand Prix", "Qatar Grand Prix", "Saudi Arabian Grand Prix"], answer: "Abu Dhabi Grand Prix" },
        { question: "Which team is based in Maranello, Italy?", options: ["Ferrari", "Red Bull", "Mercedes", "Alpine"], answer: "Ferrari" },
        { question: "What is the penalty for exceeding track limits in F1?", options: ["5-second penalty", "10-second penalty", "Drive-through penalty", "All of the above"], answer: "All of the above" },
        { question: "Which circuit is known for its 'Wall of Champions'?", options: ["Montreal", "Monza", "Spa", "Silverstone"], answer: "Montreal" },
        { question: "How many points for third place in an F1 race?", options: ["10", "12", "15", "18"], answer: "15" },
        { question: "Which driver is nicknamed 'The Iceman'?", options: ["Kimi Raikkonen", "Sebastian Vettel", "Fernando Alonso", "Lewis Hamilton"], answer: "Kimi Raikkonen" },
        { question: "What is the name of the circuit in Austria?", options: ["Red Bull Ring", "Spielberg Circuit", "Zeltweg Circuit", "A1-Ring"], answer: "Red Bull Ring" },
        { question: "Which team won the Constructors' Championship in 2007?", options: ["Ferrari", "McLaren", "Red Bull", "Mercedes"], answer: "Ferrari" },
        { question: "What is the length of the Silverstone circuit?", options: ["5.891 km", "4.891 km", "6.891 km", "7.891 km"], answer: "5.891 km" },
        { question: "Which circuit hosts the Saudi Arabian Grand Prix?", options: ["Jeddah Corniche Circuit", "Bahrain International Circuit", "Yas Marina", "Losail International"], answer: "Jeddah Corniche Circuit" },
        { question: "What is the name of the F1 race in Qatar?", options: ["Qatar Grand Prix", "Bahrain Grand Prix", "Saudi Arabian Grand Prix", "Abu Dhabi Grand Prix"], answer: "Qatar Grand Prix" },
        { question: "Which driver won the first F1 World Championship in 1950?", options: ["Giuseppe Farina", "Juan Manuel Fangio", "Alberto Ascari", "Mike Hawthorn"], answer: "Giuseppe Farina" },
        { question: "What is the maximum fuel load for an F1 race?", options: ["100 kg", "110 kg", "120 kg", "130 kg"], answer: "110 kg" },
        { question: "Which circuit is known for its 'Parabolica' corner?", options: ["Monza", "Spa", "Suzuka", "Silverstone"], answer: "Monza" },
        { question: "How many points for the fastest lap in an F1 race (if in top 10)?", options: ["1", "2", "3", "5"], answer: "1" },
        { question: "Which team is based in Enstone, UK?", options: ["Alpine", "Ferrari", "Red Bull", "Mercedes"], answer: "Alpine" },
        { question: "Which driver won the 2021 F1 World Championship?", options: ["Max Verstappen", "Lewis Hamilton", "Valtteri Bottas", "Charles Leclerc"], answer: "Max Verstappen" },
        { question: "What is the length of the Circuit de Monaco?", options: ["3.337 km", "4.337 km", "5.337 km", "6.337 km"], answer: "3.337 km" },
        { question: "Which team won the Constructors' Championship in 2023?", options: ["Red Bull", "Mercedes", "Ferrari", "McLaren"], answer: "Red Bull" },
        { question: "How many points are awarded for a sprint race win?", options: ["8", "10", "12", "15"], answer: "8" },
        { question: "Which circuit hosts the Azerbaijan Grand Prix?", options: ["Baku City Circuit", "Yas Marina", "Jeddah Corniche", "Losail International"], answer: "Baku City Circuit" },
        { question: "Which driver is nicknamed 'Honey Badger'?", options: ["Daniel Ricciardo", "Sebastian Vettel", "Fernando Alonso", "Lando Norris"], answer: "Daniel Ricciardo" },
        { question: "What is the length of the Circuit Gilles Villeneuve?", options: ["4.361 km", "5.361 km", "6.361 km", "7.361 km"], answer: "4.361 km" },
        { question: "Which team is based in Hinwil, Switzerland?", options: ["Sauber", "Ferrari", "Red Bull", "Mercedes"], answer: "Sauber" },
        { question: "How many races were in the 2023 F1 season?", options: ["22", "20", "18", "24"], answer: "22" },
        { question: "Which circuit is known for its 'Ascari' chicane?", options: ["Monza", "Spa", "Suzuka", "Silverstone"], answer: "Monza" },
        // New Medium Questions (16)
        { question: "Which driver won the 2024 F1 World Championship?", options: ["Max Verstappen", "Lando Norris", "Charles Leclerc", "Lewis Hamilton"], answer: "Max Verstappen" },
        { question: "What is the length of the Zandvoort circuit?", options: ["4.259 km", "5.259 km", "6.259 km", "7.259 km"], answer: "4.259 km" },
        { question: "Which team won the Constructors' Championship in 2024?", options: ["McLaren", "Red Bull", "Ferrari", "Mercedes"], answer: "McLaren" },
        { question: "How many points for fourth place in an F1 race?", options: ["12", "15", "18", "20"], answer: "12" },
        { question: "Which circuit hosts the Hungarian Grand Prix?", options: ["Hungaroring", "Red Bull Ring", "Zandvoort", "Baku"], answer: "Hungaroring" },
        { question: "Which driver is nicknamed 'Checo'?", options: ["Sergio Perez", "Carlos Sainz", "Esteban Ocon", "Pierre Gasly"], answer: "Sergio Perez" },
        { question: "What is the length of the Yas Marina circuit?", options: ["5.281 km", "4.281 km", "6.281 km", "7.281 km"], answer: "5.281 km" },
        { question: "Which team is based in Leafield, UK?", options: ["Aston Martin", "Ferrari", "Red Bull", "Mercedes"], answer: "Aston Martin" },
        { question: "How many races were in the 2024 F1 season?", options: ["24", "22", "20", "18"], answer: "24" },
        { question: "Which circuit is known for its '130R' corner?", options: ["Suzuka", "Monza", "Spa", "Silverstone"], answer: "Suzuka" },
        { question: "Which driver won the 2008 F1 World Championship?", options: ["Lewis Hamilton", "Felipe Massa", "Kimi Raikkonen", "Fernando Alonso"], answer: "Lewis Hamilton" },
        { question: "What is the length of the Baku City Circuit?", options: ["6.003 km", "5.003 km", "7.003 km", "8.003 km"], answer: "6.003 km" },
        { question: "Which team won the Constructors' Championship in 2005?", options: ["Renault", "Ferrari", "McLaren", "Williams"], answer: "Renault" },
        { question: "How many points for fifth place in an F1 race?", options: ["10", "12", "15", "18"], answer: "10" },
        { question: "Which circuit hosts the Russian Grand Prix?", options: ["Sochi Autodrom", "Moscow Raceway", "Yas Marina", "Baku"], answer: "Sochi Autodrom" },
        { question: "Which driver is nicknamed 'Mr. Monaco'?", options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Alain Prost"], answer: "Ayrton Senna" }
    ],
    hard: [
        { question: "Which driver set the fastest lap at Monaco in 2023?", options: ["Max Verstappen", "Lewis Hamilton", "Charles Leclerc", "Fernando Alonso"], answer: "Max Verstappen" },
        { question: "How many gears does an F1 car typically have?", options: ["6", "7", "8", "9"], answer: "8" },
        { question: "What is the name of Red Bull's F1 engine supplier in 2025?", options: ["Honda", "Mercedes", "Ferrari", "Renault"], answer: "Honda" },
        { question: "Which driver won his first F1 race at the 2008 Hungarian Grand Prix?", options: ["Sebastian Vettel", "Robert Kubica", "Heikki Kovalainen", "Felipe Massa"], answer: "Heikki Kovalainen" },
        { question: "What is the length of the Spa-Francorchamps circuit?", options: ["5.5 km", "6.0 km", "7.0 km", "8.0 km"], answer: "7.0 km" },
        { question: "Which driver won the 1957 World Championship at age 46?", options: ["Juan Manuel Fangio", "Alberto Ascari", "Mike Hawthorn", "Giuseppe Farina"], answer: "Juan Manuel Fangio" },
        { question: "Which team was disqualified from the 2007 Constructors' Championship?", options: ["McLaren", "Ferrari", "Red Bull", "Renault"], answer: "McLaren" },
        { question: "What was the name of the first F1 race track in 1946?", options: ["Turin", "Monza", "Silverstone", "Spa"], answer: "Turin" },
        { question: "Which female driver scored points in the 1975 Spanish Grand Prix?", options: ["Lella Lombardi", "Divina Galica", "Desiré Wilson", "Giovanna Amati"], answer: "Lella Lombardi" },
        { question: "How many races did Mercedes win in the 2016 F1 season?", options: ["19", "17", "15", "13"], answer: "19" },
        { question: "Which driver broke the record for most race starts at the 2008 Turkish Grand Prix?", options: ["Rubens Barrichello", "Riccardo Patrese", "Michael Schumacher", "David Coulthard"], answer: "Rubens Barrichello" },
        { question: "Which circuit hosted the first French Grand Prix in 1950?", options: ["Reims", "Rouen", "Le Mans", "Monaco"], answer: "Reims" },
        { question: "Which team did Jenson Button drive for in the 2009 World Championship?", options: ["Brawn GP", "McLaren", "Ferrari", "Red Bull"], answer: "Brawn GP" },
        { question: "How many cars started the 2005 United States Grand Prix?", options: ["6", "8", "10", "12"], answer: "6" },
        { question: "At which track did Niki Lauda have a near-fatal crash in 1976?", options: ["Nurburgring", "Monza", "Spa", "Silverstone"], answer: "Nurburgring" },
        { question: "Which circuit was last used for the British Grand Prix in 1986?", options: ["Brands Hatch", "Silverstone", "Donington Park", "Aintree"], answer: "Brands Hatch" },
        { question: "Which driver won Ferrari’s 100th F1 victory at the 1990 French Grand Prix?", options: ["Alain Prost", "Nigel Mansell", "Gerhard Berger", "Jean Alesi"], answer: "Alain Prost" },
        { question: "How many different drivers have won the Japanese Grand Prix?", options: ["13", "15", "17", "19"], answer: "17" },
        { question: "Which driver has the most wins at the Japanese Grand Prix?", options: ["Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel", "Ayrton Senna"], answer: "Michael Schumacher" },
        { question: "What is the lap record time at Suzuka (as of 2023)?", options: ["1:30.983", "1:32.983", "1:34.983", "1:36.983"], answer: "1:30.983" },
        { question: "Which team introduced the first turbocharged engine in F1?", options: ["Renault", "Ferrari", "McLaren", "Williams"], answer: "Renault" },
        { question: "How many races were in the 1950 F1 season?", options: ["7", "9", "11", "13"], answer: "7" },
        { question: "Which driver won the first Monaco Grand Prix in 1929?", options: ["William Grover-Williams", "Louis Chiron", "Rudolf Caracciola", "Tazio Nuvolari"], answer: "William Grover-Williams" },
        { question: "What is the length of the Interlagos circuit in Brazil?", options: ["4.309 km", "5.309 km", "6.309 km", "7.309 km"], answer: "4.309 km" },
        { question: "Which driver set the fastest lap at Silverstone in 2020?", options: ["Lewis Hamilton", "Max Verstappen", "Valtteri Bottas", "Charles Leclerc"], answer: "Lewis Hamilton" },
        { question: "Which team won the Constructors' Championship in 1999?", options: ["Ferrari", "McLaren", "Williams", "Jordan"], answer: "Ferrari" },
        { question: "How many different circuits have hosted the British Grand Prix?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "Which driver won the 1988 F1 World Championship?", options: ["Ayrton Senna", "Alain Prost", "Nigel Mansell", "Nelson Piquet"], answer: "Ayrton Senna" },
        { question: "What is the length of the Hungaroring circuit?", options: ["4.381 km", "5.381 km", "6.381 km", "7.381 km"], answer: "4.381 km" },
        { question: "Which driver holds the record for most consecutive race starts?", options: ["Kimi Raikkonen", "Rubens Barrichello", "Lewis Hamilton", "Fernando Alonso"], answer: "Kimi Raikkonen" },
        { question: "Which driver set the fastest lap at the 2023 Singapore Grand Prix?", options: ["Carlos Sainz", "Charles Leclerc", "Lando Norris", "Max Verstappen"], answer: "Carlos Sainz" },
        { question: "What was the first F1 team to use a hybrid engine?", options: ["McLaren", "Ferrari", "Mercedes", "Renault"], answer: "McLaren" },
        { question: "Which driver won the 1994 F1 World Championship amid controversy?", options: ["Michael Schumacher", "Damon Hill", "Ayrton Senna", "Alain Prost"], answer: "Michael Schumacher" },
        { question: "How many laps are in the Bahrain Grand Prix?", options: ["57", "67", "77", "87"], answer: "57" },
        { question: "Which circuit hosted the first San Marino Grand Prix in 1981?", options: ["Imola", "Monza", "Mugello", "Vallelunga"], answer: "Imola" },
        { question: "Which driver set the fastest lap at the 2020 Austrian Grand Prix?", options: ["Carlos Sainz", "Lewis Hamilton", "Valtteri Bottas", "Lando Norris"], answer: "Carlos Sainz" },
        { question: "What is the lap record time at Interlagos (as of 2023)?", options: ["1:10.540", "1:12.540", "1:14.540", "1:16.540"], answer: "1:10.540" },
        { question: "Which team won the Constructors' Championship in 1983?", options: ["Ferrari", "McLaren", "Williams", "Renault"], answer: "Ferrari" },
        { question: "Which driver won his first F1 race at the 2003 Australian Grand Prix?", options: ["Kimi Raikkonen", "Fernando Alonso", "David Coulthard", "Juan Pablo Montoya"], answer: "David Coulthard" },
        { question: "How many different drivers won races in the 1982 F1 season?", options: ["11", "9", "7", "5"], answer: "11" },
        // New Hard Questions (17)
        { question: "Which driver set the fastest lap at the 2024 Miami Grand Prix?", options: ["Max Verstappen", "Lando Norris", "Charles Leclerc", "Sergio Perez"], answer: "Max Verstappen" },
        { question: "What is the lap record time at Monaco (as of 2024)?", options: ["1:11.212", "1:13.212", "1:15.212", "1:17.212"], answer: "1:11.212" },
        { question: "Which team won the Constructors' Championship in 1975?", options: ["Ferrari", "McLaren", "Brabham", "Lotus"], answer: "Ferrari" },
        { question: "Which driver won his first F1 race at the 2016 Spanish Grand Prix?", options: ["Max Verstappen", "Carlos Sainz", "Lando Norris", "Charles Leclerc"], answer: "Max Verstappen" },
        { question: "How many laps are in the Singapore Grand Prix?", options: ["61", "71", "81", "91"], answer: "61" },
        { question: "Which circuit hosted the first Portuguese Grand Prix in 1958?", options: ["Portimao", "Estoril", "Boavista", "Monsanto"], answer: "Boavista" },
        { question: "Which driver set the fastest lap at the 2023 Abu Dhabi Grand Prix?", options: ["Max Verstappen", "Charles Leclerc", "George Russell", "Sergio Perez"], answer: "Max Verstappen" },
        { question: "What is the lap record time at Silverstone (as of 2024)?", options: ["1:27.097", "1:29.097", "1:31.097", "1:33.097"], answer: "1:27.097" },
        { question: "Which team won the Constructors' Championship in 1992?", options: ["Williams", "McLaren", "Ferrari", "Benetton"], answer: "Williams" },
        { question: "Which driver won his first F1 race at the 2007 Canadian Grand Prix?", options: ["Lewis Hamilton", "Robert Kubica", "Nick Heidfeld", "Fernando Alonso"], answer: "Lewis Hamilton" },
        { question: "How many different drivers won races in the 2012 F1 season?", options: ["8", "6", "4", "10"], answer: "8" },
        { question: "Which circuit hosted the first Austrian Grand Prix in 1964?", options: ["Zeltweg", "Red Bull Ring", "A1-Ring", "Spielberg"], answer: "Zeltweg" },
        { question: "Which driver set the fastest lap at the 2024 Australian Grand Prix?", options: ["Charles Leclerc", "Max Verstappen", "Carlos Sainz", "Lando Norris"], answer: "Charles Leclerc" },
        { question: "What is the lap record time at Spa-Francorchamps (as of 2024)?", options: ["1:41.252", "1:43.252", "1:45.252", "1:47.252"], answer: "1:41.252" },
        { question: "Which team won the Constructors' Championship in 2000?", options: ["Ferrari", "McLaren", "Williams", "Benetton"], answer: "Ferrari" },
        { question: "Which driver won his first F1 race at the 2019 Brazilian Grand Prix?", options: ["Max Verstappen", "Pierre Gasly", "Carlos Sainz", "Charles Leclerc"], answer: "Max Verstappen" },
        { question: "How many different circuits hosted the United States Grand Prix?", options: ["10", "8", "6", "4"], answer: "10" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let currentDifficulty = '';
let incorrectAnswers = [];
let timerInterval;
let timeLeft = 15;

const correctSound = document.getElementById('correct-sound');
const incorrectSound = document.getElementById('incorrect-sound');

function showDifficulty() {
    clearInterval(timerInterval);
    document.getElementById('difficulty').classList.remove('hidden');
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('high-score').classList.add('hidden');
    document.getElementById('incorrect-answers').classList.add('hidden');
    document.getElementById('try-again').classList.add('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('timer').innerHTML = '';
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    shuffledQuestions = questions[difficulty].sort(() => Math.random() - 0.5).slice(0, 5);
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = [];
    document.getElementById('difficulty').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    showQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `<div>Time Left: ${timeLeft}s</div><div id="timer-bar"><div id="timer-progress"></div></div>`;
    const progressElement = document.getElementById('timer-progress');
    progressElement.style.width = '100%';
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.querySelector('div').textContent = `Time Left: ${timeLeft}s`;
        progressElement.style.width = `${(timeLeft / 15) * 100}%`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            incorrectSound.play();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            incorrectAnswers.push({
                question: currentQuestion.question,
                selected: 'No answer (time out)',
                correct: currentQuestion.answer
            });
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }
    }, 1000);
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const progressElement = document.getElementById('progress');
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    progressElement.textContent = `Question ${currentQuestionIndex + 1}/5`;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option, button));
        optionsElement.appendChild(button);
    });
    setTimeout(startTimer, 0);
}

function selectOption(selected, button) {
    clearInterval(timerInterval);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
    });
    if (selected === currentQuestion.answer) {
        button.classList.add('correct');
        correctSound.play();
        score++;
    } else {
        button.classList.add('incorrect');
        incorrectSound.play();
        incorrectAnswers.push({
            question: currentQuestion.question,
            selected: selected,
            correct: currentQuestion.answer
        });
        options.forEach(opt => {
            if (opt.textContent === currentQuestion.answer) {
                opt.classList.add('correct');
            }
        });
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    clearInterval(timerInterval);
    const resultElement = document.getElementById('result');
    const highScoreElement = document.getElementById('high-score');
    const incorrectElement = document.getElementById('incorrect-answers');
    resultElement.textContent = `Your Score: ${score}/${shuffledQuestions.length} (${currentDifficulty})`;
    resultElement.classList.remove('hidden');
    resultElement.classList.add('result-animation');

    const highScoreKey = `f1QuizHighScore_${currentDifficulty}`;
    let highScore = parseInt(localStorage.getItem(highScoreKey)) || 0;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem(highScoreKey, highScore);
    }
    highScoreElement.textContent = `High Score: ${highScore}/${shuffledQuestions.length} (${currentDifficulty})`;
    highScoreElement.classList.remove('hidden');

    if (incorrectAnswers.length > 0) {
        incorrectElement.innerHTML = '<h3>Incorrect Answers:</h3>';
        incorrectAnswers.forEach(item => {
            const p = document.createElement('p');
            p.textContent = `Question: ${item.question} | Your Answer: ${item.selected} | Correct Answer: ${item.correct}`;
            incorrectElement.appendChild(p);
        });
        incorrectElement.classList.remove('hidden');
    } else {
        incorrectElement.innerHTML = '<p>All answers correct!</p>';
        incorrectElement.classList.remove('hidden');
    }
    document.getElementById('progress').textContent = '';
    document.getElementById('timer').innerHTML = '';
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('try-again').classList.remove('hidden');
    document.getElementById('home').classList.remove('hidden');
}

function restartQuiz() {
    startQuiz(currentDifficulty);
}

showDifficulty();