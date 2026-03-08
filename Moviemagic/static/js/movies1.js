// movies.js - Data file for MovieMagic website

const movies = [
    // Telugu Movies
    {
        id: 1,
        name: "Sarvam maya",
        description: "Prabhendu (Nivin Pauly), an atheist guitarist from a traditional priest family who begins performing rituals for money. After a bizarre, ghostly encounter, he is haunted by a friendly spirit he nicknames \"Delulu\" (Riya Shibu). She aids his music career and personal life, ultimately helping him navigate grief and find emotional closure.",
        languages: ["Telugu", "Hindi", "Malayalam", "Kannada", "Tamil"],
        locations: [
            { city: "hyderabad", theater: "PVR Inorbit Mall, Madhapur", address: "5th Floor, Inorbit Mall, Mindspace, Madhapur, Hyderabad" },
            { city: "hyderabad", theater: "AMB Cinemas, Gachibowli", address: "Gachibowli, Hyderabad, Telangana 500032" },
            { city: "mumbai", theater: "PVR Phoenix MarketCity, Kurla", address: "Phoenix MarketCity, LBS Marg, Kurla (W), Mumbai" },
            { city: "bangalore", theater: "PVR Forum Mall, Koramangala", address: "The Forum, Hosur Rd, Koramangala, Bengaluru" },
                    { city: "Dindigul", theater: "Aarthi Grand cineplex", address: "AArthi theatre Road ,Dindigul" },
                    { city: "Dindigul", theater: "Umaa rajendra", address: "Round Rd ,Ram Nagar,Elil Nagar,Dindigul" }
        ],
        timings: ["10:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
        price: 180,
        poster: "../static/images/sarvam maya.jpeg"
    },
    {
        id: 2,
        name: "Thaai kizhavi",
        description: "Greedy sons, initially awaiting their paralysed mother's death, frantically try to keep her alive after discovering she holds a valuable treasure..",
        languages: ["Telugu", "Hindi", "Tamil", "Kannada", "Malayalam"],
        locations: [
            { city: "hyderabad", theater: "Prasads Multiplex, Necklace Road", address: "Necklace Road, Hyderabad, Telangana 500004" },
            { city: "delhi", theater: "PVR Select Citywalk, Saket", address: "Select Citywalk, Saket, New Delhi, Delhi 110017" },
            { city: "bangalore", theater: "INOX Garuda Mall, Magrath Road", address: "Garuda Mall, Magrath Road, Bengaluru" },
             { city: "Dindigul", theater: "Aarthi Grand cineplex", address: "AArthi theatre Road ,Dindigul" },
                    { city: "Dindigul", theater: "Umaa rajendra", address: "Round Rd ,Ram Nagar,Elil Nagar,Dindigul" }
        ],
        timings: ["11:00 AM", "3:00 PM", "7:00 PM"],
        price: 200,
        poster: "../static/images/Thaai kizhavi.jpeg"
    },
    {
        id: 3,
        name: "sirai",
        description: "Sirai (2025) is a Tamil-language emotional crime thriller starring Vikram Prabhu as Kathiravan, an Armed Reserve cop. He is tasked with escorting Abdul (L.K. Akshay Kumar), a murder accused, from Vellore to Sivagangai",
        languages: ["Telugu", "Hindi", "Tamil", "Malayalam"],
        locations: [
            { city: "hyderabad", theater: "INOX GVK One, Banjara Hills", address: "GVK One Mall, Road No. 1, Banjara Hills, Hyderabad" },
            { city: "mumbai", theater: "INOX R-City, Ghatkopar", address: "R-City Mall, Ghatkopar (W), Mumbai" },
            { city: "delhi", theater: "PVR Promenade, Vasant Kunj", address: "DLF Promenade, Vasant Kunj, New Delhi" },
             { city: "Dindigul", theater: "Aarthi Grand cineplex", address: "AArthi theatre Road ,Dindigul" },
                    { city: "Dindigul", theater: "Umaa rajendra", address: "Round Rd ,Ram Nagar,Elil Nagar,Dindigul" }
        
        ],
        timings: ["10:30 AM", "3:30 PM", "7:30 PM"],
        price: 220,
        poster: "../static/images/sirai.jpeg"
    },
    {
        id: 4,
        name: "With Love",
        description: "The plot follows two people on a blind date who decide to travel together to find and confess feelings to their respective school-time crushes",
        languages: ["Telugu", "Tamil", "Malayalam"],
        locations: [
            { city: "hyderabad", theater: "Mirajkar Cinemas, Attapur", address: "City Mall, Attapur, Hyderabad" },
            { city: "bangalore", theater: "Cinepolis Nexus Shantiniketan", address: "Shantiniketan, Whitefield, Bengaluru" },
       { city: "Dindigul", theater: "Aarthi Grand cineplex", address: "AArthi theatre Road ,Dindigul" },
                    { city: "Dindigul", theater: "Umaa rajendra", address: "Round Rd ,Ram Nagar,Elil Nagar,Dindigul" }
        
        ],
        timings: ["11:30 AM", "3:15 PM", "6:45 PM", "10:00 PM"],
        price: 190,
        poster: "../static/images/withlove.jpeg"
    },
    {
        id: 5,
        name: "Bimbisara",
        description: "A cruel king from ancient times travels to the present day through time travel and faces unexpected situations.",
        languages: ["Telugu", "Hindi"],
        locations: [
            { city: "hyderabad", theater: "Asian Cinema, Uppal", address: "GSM Mall, Uppal, Hyderabad" },
            { city: "delhi", theater: "PVR Vegas, Dwarka", address: "Vegas Mall, Dwarka, New Delhi" }
        ],
        timings: ["9:45 AM", "1:15 PM", "4:45 PM", "8:15 PM"],
        price: 170,
        poster: "../static/images/bimbisara.jpeg"
    },
    {
        id: 6,
        name: "Karthikeya 2",
        description: "A mystic adventure story about Dr. Karthikeya's quest to find the lost anklet of Lord Krishna.",
        languages: ["Telugu", "Hindi", "Kannada"],
        locations: [
            { city: "hyderabad", theater: "PVR Icon, Hitech City", address: "Hitech City Main Road, Hyderabad" },
            { city: "mumbai", theater: "Cinépolis, Andheri West", address: "Fun Republic Mall, Andheri West, Mumbai" }
        ],
        timings: ["10:15 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
        price: 175,
        poster: "../static/images/karthikeya.jpeg"
    },
    {
        id: 7,
        name: "Mad^2",
        description: "A comedy-action film set in a college where a group of students take on corrupt authorities.",
        languages: ["Telugu", "Tamil"],
        locations: [
            { city: "hyderabad", theater: "Sudarshan 35mm, RTC X Roads", address: "RTC X Roads, Hyderabad" },
            { city: "bangalore", theater: "PVR Orion Mall, Malleshwaram", address: "Orion Mall, Rajajinagar, Bengaluru" }
        ],
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
        price: 160,
        poster: "../static/images/mad.jpg"
    },
    {
        id: 8,
        name: "Robinhood",
        description: "A young man from a village becomes a vigilante who steals from the rich to help the poor.",
        languages: ["Telugu", "Hindi"],
        locations: [
            { city: "hyderabad", theater: "Sandhya 70MM, RTC X Roads", address: "RTC X Roads, Hyderabad" },
            { city: "mumbai", theater: "INOX Insignia, Atria Mall", address: "Atria Mall, Worli, Mumbai" }
        ],
        timings: ["10:45 AM", "2:15 PM", "5:45 PM", "9:15 PM"],
        price: 165,
        poster: "../static/images/robinhood.jpg"
    },

    // Hindi Movies
    {
        id: 9,
        name: "Pathaan",
        description: "An Indian spy embarks on a mission to take down a global terrorist organization.",
        languages: ["Hindi", "Tamil", "Telugu"],
        locations: [
            { city: "delhi", theater: "PVR Vegas, Dwarka", address: "Vegas Mall, Dwarka, New Delhi" },
            { city: "mumbai", theater: "PVR ICON, Infiniti Mall", address: "Infiniti Mall, Andheri, Mumbai" },
            { city: "hyderabad", theater: "PVR Irrum Manzil", address: "Next Galleria Mall, Irrum Manzil, Hyderabad" }
        ],
        timings: ["11:00 AM", "3:00 PM", "7:30 PM"],
        price: 180,
        poster: "../static/images/pathan2.jpeg"
    },
    {
        id: 10,
        name: "Brahmastra",
        description: "A fantasy adventure about a young man who discovers he has supernatural powers.",
        languages: ["Hindi", "Telugu", "Tamil", "Malayalam", "Kannada"],
        locations: [
            { city: "mumbai", theater: "PVR ICON, Lower Parel", address: "High Street Phoenix, Lower Parel, Mumbai" },
            { city: "delhi", theater: "INOX Nehru Place", address: "Nehru Place, New Delhi" },
            { city: "bangalore", theater: "INOX Forum Neighbourhood Mall", address: "Whitefield, Bengaluru" }
        ],
        timings: ["10:15 AM", "1:45 PM", "5:15 PM", "8:45 PM"],
        price: 210,
        poster: "../static/images/bramhastra.jpeg"
    },
    {
        id: 11,
        name: "Jawan",
        description: "A man with a mission takes on a powerful adversary to protect the nation from harm.",
        languages: ["Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "delhi", theater: "PVR ECX, Chanakyapuri", address: "Chanakya, Chanakyapuri, New Delhi" },
            { city: "mumbai", theater: "INOX Megaplex, Inorbit Mall", address: "Inorbit Mall, Malad West, Mumbai" },
            { city: "bangalore", theater: "Cinepolis ETA Mall", address: "ETA Mall, Binnypet, Bengaluru" }
        ],
        timings: ["9:30 AM", "1:00 PM", "4:30 PM", "8:00 PM", "11:30 PM"],
        price: 190,
        poster: "../static/images/jawan.jpeg"
    },
    {
        id: 12,
        name: "Animal",
        description: "A son's love for his father turns obsessive, leading him down a dark path of violence and revenge.",
        languages: ["Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "mumbai", theater: "Cinépolis, Viviana Mall", address: "Viviana Mall, Thane, Mumbai" },
            { city: "delhi", theater: "PVR Director's Cut, Ambience Mall", address: "Ambience Mall, Vasant Kunj, New Delhi" },
            { city: "hyderabad", theater: "PVR Central, Panjagutta", address: "Central, Panjagutta, Hyderabad" }
        ],
        timings: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
        price: 220,
        poster: "../static/images/animal.jpeg"
    },
    {
        id: 13,
        name: "Tiger 3",
        description: "Tiger is back on a mission to protect his country while also safeguarding his family.",
        languages: ["Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "delhi", theater: "PVR Select CITYWALK", address: "Select CITYWALK, Saket, New Delhi" },
            { city: "mumbai", theater: "INOX Laserplex, CR2", address: "CR2 Mall, Nariman Point, Mumbai" }
        ],
        timings: ["11:15 AM", "2:45 PM", "6:15 PM", "9:45 PM"],
        price: 200,
        poster: "../static/images/tiger3.jpeg"
    },
    {
        id: 14,
        name: "Gangubai Kathiawadi",
        description: "The story of a girl who was sold into prostitution but rises to become a powerful figure in Mumbai's Kamathipura.",
        languages: ["Hindi"],
        locations: [
            { city: "mumbai", theater: "PVR Dynamix Mall", address: "Dynamix Mall, Juhu, Mumbai" },
            { city: "delhi", theater: "Cinepolis DLF Place", address: "DLF Place Mall, Saket, New Delhi" }
        ],
        timings: ["10:30 AM", "2:15 PM", "6:00 PM", "9:45 PM"],
        price: 180,
        poster: "../static/images/gangubahi.jpeg"
    },

    // English Movies
    {
        id: 15,
        name: "Avatar: The Way of Water",
        description: "Jake Sully and Neytiri's family face new threats on Pandora.",
        languages: ["English", "Hindi", "Telugu", "Tamil", "Malayalam"],
        locations: [
            { city: "bangalore", theater: "INOX Lido Mall", address: "Lido Mall, Ulsoor, Bengaluru" },
            { city: "mumbai", theater: "PVR Citi Mall", address: "Citi Mall, Andheri West, Mumbai" },
            { city: "delhi", theater: "PVR Pacific Mall", address: "Pacific Mall, Tagore Garden, New Delhi" }
        ],
        timings: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
        price: 300,
        poster: "../static/images/avathar.jpeg"
    },
    {
        id: 16,
        name: "Oppenheimer",
        description: "The story of J. Robert Oppenheimer and his role in developing the atomic bomb.",
        languages: ["English", "Hindi"],
        locations: [
            { city: "bangalore", theater: "PVR Gold Forum Mall", address: "Forum Mall, Koramangala, Bengaluru" },
            { city: "mumbai", theater: "INOX Nariman Point", address: "CR2 Mall, Nariman Point, Mumbai" },
            { city: "delhi", theater: "PVR Anupam", address: "Saket, New Delhi" }
        ],
        timings: ["11:30 AM", "3:15 PM", "7:00 PM", "10:45 PM"],
        price: 320,
        poster: "../static/images/oppenheimer.jpeg"
    },
    {
        id: 17,
        name: "Dune: Part Two",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
        languages: ["English", "Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "bangalore", theater: "INOX Mantri Square", address: "Mantri Square Mall, Malleswaram, Bengaluru" },
            { city: "hyderabad", theater: "PVR Kukatpally", address: "Kukatpally, Hyderabad" },
            { city: "delhi", theater: "PVR Prashant Vihar", address: "Prashant Vihar, New Delhi" }
        ],
        timings: ["9:45 AM", "1:30 PM", "5:15 PM", "9:00 PM"],
        price: 310,
        poster: "../static/images/Dune.jpeg"
    },
    {
        id: 18,
        name: "Presence",
        description: "A family discovers a paranormal presence in their new home and must fight to survive.",
        languages: ["English", "Hindi"],
        locations: [
            { city: "mumbai", theater: "PVR Market City", address: "Market City, Kurla, Mumbai" },
            { city: "bangalore", theater: "Cinepolis Royal Meenakshi Mall", address: "Royal Meenakshi Mall, Bengaluru" }
        ],
        timings: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"],
        price: 280,
        poster: "../static/images/presence.jpg"
    },
    {
        id: 19,
        name: "The Batman",
        description: "Batman uncovers corruption in Gotham City that connects to his own family.",
        languages: ["English", "Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "delhi", theater: "PVR Pacific D21", address: "Pacific Mall, Dwarka, New Delhi" },
            { city: "mumbai", theater: "INOX Raghuleela Mall", address: "Raghuleela Mall, Vashi, Mumbai" }
        ],
        timings: ["10:15 AM", "1:45 PM", "5:15 PM", "8:45 PM"],
        price: 290,
        poster: "../static/images/batman.jpeg"
    },
    {
        id: 20,
        name: "Mission: Impossible - Dead Reckoning",
        description: "Ethan Hunt and his IMF team embark on their most dangerous mission yet.",
        languages: ["English", "Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "hyderabad", theater: "PVR ICON, Hitech City", address: "Hitech City, Hyderabad" },
            { city: "delhi", theater: "INOX Epicuria", address: "Epicuria, Nehru Place, New Delhi" },
            { city: "bangalore", theater: "PVR Phoenix MarketCity", address: "Phoenix MarketCity, Whitefield, Bengaluru" }
        ],
        timings: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
        price: 300,
        poster: "../static/images/mission.jpeg"
    },

    // Tamil Movies
    {
        id: 21,
        name: "Leo",
        description: "A cafe owner's peaceful life turns upside down when his past comes back to haunt him.",
        languages: ["Tamil", "Telugu", "Hindi", "Kannada"],
        locations: [
            { city: "bangalore", theater: "PVR Vega City", address: "Vega City Mall, Bannerghatta Road, Bengaluru" },
            { city: "hyderabad", theater: "AMB Cinemas", address: "Gachibowli, Hyderabad" },
            { city: "mumbai", theater: "PVR ICON, Oberoi Mall", address: "Oberoi Mall, Goregaon, Mumbai" }
        ],
        timings: ["10:15 AM", "1:45 PM", "5:15 PM", "8:45 PM"],
        price: 190,
        poster: "../static/images/leo.jpeg"
    },
    {
        id: 22,
        name: "Jailer",
        description: "A prison warden takes on a dangerous criminal organization to protect his family.",
        languages: ["Tamil", "Telugu", "Hindi", "Kannada", "Malayalam"],
        locations: [
            { city: "hyderabad", theater: "PVR Next Galleria Mall", address: "Panjagutta, Hyderabad" },
            { city: "bangalore", theater: "INOX GT World Mall", address: "Magadi Road, Bengaluru" },
            { city: "delhi", theater: "PVR Vikaspuri", address: "Vikaspuri, New Delhi" }
        ],
        timings: ["9:30 AM", "12:45 PM", "4:00 PM", "7:15 PM", "10:30 PM"],
        price: 180,
        poster: "../static/images/jailer.jpeg"
    },
    {
        id: 23,
        name: "Ponniyin Selvan: Part 2",
        description: "The epic conclusion to the saga of the Chola dynasty and the battle for the throne.",
        languages: ["Tamil", "Telugu", "Hindi", "Malayalam", "Kannada"],
        locations: [
            { city: "bangalore", theater: "Cinepolis Forum Shantiniketan", address: "Whitefield, Bengaluru" },
            { city: "hyderabad", theater: "Asian Cine Square", address: "Uppal, Hyderabad" },
            { city: "mumbai", theater: "PVR Juhu", address: "Juhu, Mumbai" }
        ],
        timings: ["10:00 AM", "2:00 PM", "6:00 PM", "10:00 PM"],
        price: 200,
        poster: "../static/images/ps.jpeg"
    },
    {
        id: 24,
        name: "Vikram",
        description: "A special agent is tasked with investigating a series of mysterious murders.",
        languages: ["Tamil", "Telugu", "Hindi", "Malayalam"],
        locations: [
            { city: "bangalore", theater: "PVR Orion Mall", address: "Rajajinagar, Bengaluru" },
            { city: "hyderabad", theater: "Prasads Multiplex", address: "Necklace Road, Hyderabad" },
            { city: "delhi", theater: "PVR Naraina", address: "Naraina, New Delhi" }
        ],
        timings: ["11:15 AM", "2:45 PM", "6:15 PM", "9:45 PM"],
        price: 190,
        poster: "../static/images/vikram.jpeg"
    },
    {
        id: 25,
        name: "Kaithi",
        description: "A prisoner on his way to meet his daughter gets caught in a face-off between police and drug lords.",
        languages: ["Tamil", "Telugu"],
        locations: [
            { city: "hyderabad", theater: "PVR RK Cineplex", address: "Banjara Hills, Hyderabad" },
            { city: "bangalore", theater: "INOX Brookefield", address: "Brookefield, Bengaluru" }
        ],
        timings: ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM", "10:30 PM"],
        price: 175,
        poster: "../static/images/kaithi.jpeg"
    },

    // More Mixed Movies
    {
        id: 26,
        name: "Kantara",
        description: "A conflict erupts between villagers and evil forces when a divine spirit protects a forest and its people.",
        languages: ["Kannada", "Telugu", "Tamil", "Hindi", "Malayalam"],
        locations: [
            { city: "bangalore", theater: "PVR Nexus Koramangala", address: "Koramangala, Bengaluru" },
            { city: "hyderabad", theater: "PVR Punjagutta", address: "Punjagutta, Hyderabad" },
            { city: "mumbai", theater: "INOX Megaplex", address: "Malad, Mumbai" }
        ],
        timings: ["9:45 AM", "1:15 PM", "4:45 PM", "8:15 PM"],
        price: 180,
        poster: "../static/images/kantara.jpeg"
    },
    {
        id: 27,
        name: "KGF: Chapter 2",
        description: "Rocky takes control of the Kolar Gold Fields and becomes both savior and oppressor.",
        languages: ["Kannada", "Telugu", "Tamil", "Hindi", "Malayalam"],
        locations: [
            { city: "bangalore", theater: "PVR Phoenix MarketCity", address: "Whitefield, Bengaluru" },
            { city: "hyderabad", theater: "INOX GVK One", address: "Banjara Hills, Hyderabad" },
            { city: "delhi", theater: "PVR Select CITYWALK", address: "Saket, New Delhi" }
        ],
        timings: ["10:15 AM", "1:45 PM", "5:15 PM", "8:45 PM"],
        price: 210,
        poster: "../static/images/kgf.jpeg"
    },
    {
        id: 28,
        name: "Romancham",
        description: "A group of friends experience supernatural events after using an Ouija board.",
        languages: ["Malayalam", "Telugu", "Tamil"],
        locations: [
            { city: "bangalore", theater: "PVR Gold, Phoenix Marketcity", address: "Whitefield, Bengaluru" },
            { city: "hyderabad", theater: "Platinum Movietime", address: "Gachibowli, Hyderabad" }
        ],
        timings: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
        price: 170,
        poster: "../static/images/Romancham.jpeg"
    },
    {
        id: 29,
        name: "2018",
        description: "Based on the true events of the 2018 Kerala floods, the story of hope and survival.",
        languages: ["Malayalam", "Telugu", "Tamil", "Hindi"],
        locations: [
            { city: "bangalore", theater: "INOX Garuda Mall", address: "Magrath Road, Bengaluru" },
            { city: "hyderabad", theater: "PVR Central", address: "Panjagutta, Hyderabad" }
        ],
        timings: ["10:30 AM", "1:45 PM", "5:00 PM", "8:15 PM"],
        price: 180,
        poster: "../static/images/2018.jpeg"
    },
    {
        id: 30,
        name: "Stree 2",
        description: "The ghost of Stree returns to haunt the village of Chanderi once again.",
        languages: ["Hindi", "Telugu", "Tamil"],
        locations: [
            { city: "delhi", theater: "PVR Select CITYWALK", address: "Saket, New Delhi" },
            { city: "mumbai", theater: "INOX R City", address: "Ghatkopar, Mumbai" },
            { city: "hyderabad", theater: "PVR ICON", address: "Hitech City, Hyderabad" }
        ],
        timings: ["11:15 AM", "2:45 PM", "6:15 PM", "9:45 PM"],
        price: 190,
        poster: "../static/images/Stree 2.jpeg"
    }
];

// Function to get trending movies (can be modified based on criteria)
function getTrendingMovies(count = 4) {
    // You can sort by popularity, recency, or any other criteria
    return movies.slice(0, count);
}

// Function to filter movies by language and city
function filterMovies(language, city) {
    return movies.filter(movie => 
        movie.languages.includes(language) && 
        movie.locations.some(loc => loc.city.toLowerCase() === city.toLowerCase())
    );
}

// Function to get movie by ID
function getMovieById(id) {
    return movies.find(movie => movie.id === id);
}

// Function to get movie by name
function getMovieByName(name) {
    return movies.find(movie => movie.name === name);
}

// Export functions if used in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        movies,
        getTrendingMovies,
        filterMovies,
        getMovieById,
        getMovieByName
    };
}
