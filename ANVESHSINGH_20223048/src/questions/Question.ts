
export const question=(topic:"SCIENCE"|"POPCULTURE"|"MYTHOLOGY") =>{
if(topic=="SCIENCE"){
    return [
        {"ques": "swipe left or right to start the quiz", "ans": undefined},
        {"ques": "The Earth revolves around the Sun in exactly 365 days.", "ans": false},
        {"ques": "Humans have more than five senses.", "ans": true},
        {"ques": "Water boils at 100 degrees Celsius at standard atmospheric pressure.", "ans": true},
        {"ques": "Lightning never strikes the same place twice.", "ans": false},
        {"ques": "The chemical symbol for gold is Au.", "ans": true},
        {"ques": "Plants produce oxygen during the process of photosynthesis.", "ans": true},
        {"ques": "The human skeleton is made up of 206 bones.", "ans": true},
        {"ques": "Bats are blind and rely entirely on echolocation to navigate.", "ans": false},
        {"ques": "Sound travels faster in water than in air.", "ans": true},
        {"ques": "An adult human body contains approximately 5 liters of blood.", "ans": true},
        {"ques": "Diamonds are the hardest known natural material.", "ans": true},
        {"ques": "The mitochondria is known as the powerhouse of the cell.", "ans": true},
        {"ques": "Pure water is a good conductor of electricity.", "ans": false},
        {"ques": "Venus is the hottest planet in our solar system.", "ans": true},
        {"ques": "All living organisms are made of cells.", "ans": true}
      ];
}
else if(topic=="POPCULTURE"){
    return [
        {"ques": "swipe left or right to start the quiz", "ans": undefined},
        {"ques": "The Beatles were originally formed in Liverpool, England.", "ans": true},
        {"ques": "The TV show 'Friends' originally aired in the 1980s.", "ans": false},
        {"ques": "Michael Jackson's album 'Thriller' is the best-selling album of all time.", "ans": true},
        {"ques": "The character Harry Potter was created by J.K. Rowling.", "ans": true},
        {"ques": "'Star Wars: A New Hope' was the first movie released in the Star Wars franchise.", "ans": true},
        {"ques": "The character of Indiana Jones is played by Harrison Ford.", "ans": true},
        {"ques": "The song 'Bohemian Rhapsody' was released by The Rolling Stones.", "ans": false},
        {"ques": "The movie 'Titanic' won 11 Academy Awards.", "ans": true},
        {"ques": "'Game of Thrones' is based on a series of books written by J.R.R. Tolkien.", "ans": false},
        {"ques": "The Marvel Cinematic Universe began with the movie 'Iron Man' in 2008.", "ans": true},
        {"ques": "The TV series 'Breaking Bad' is set in New York City.", "ans": false},
        {"ques": "Beyoncé was a member of the girl group Destiny's Child.", "ans": true},
        {"ques": "'Avatar' directed by James Cameron, is the highest-grossing film of all time.", "ans": true},
        {"ques": "The character 'The Joker' is a villain in the Marvel Universe.", "ans": false},
        {"ques": "The sitcom 'Seinfeld' was created by Larry David and Jerry Seinfeld.", "ans": true}
      ];      
}
else  {
   return  [
    {"ques": "swipe left or right to start the quiz", "ans": undefined},
    {"ques": "Zeus is the king of the gods in Greek mythology.", "ans": true},
    {"ques": "Thor is known as the god of war in Norse mythology.", "ans": false},
    {"ques": "In Egyptian mythology, Anubis is the god of the dead.", "ans": true},
    {"ques": "The Minotaur in Greek mythology has the body of a man and the head of a bull.", "ans": true},
    {"ques": "In Hindu mythology, the Trimurti consists of Brahma, Vishnu, and Shiva.", "ans": true},
    {"ques": "In Roman mythology, Neptune is the god of the sky.", "ans": false},
    {"ques": "The Sphinx in Greek mythology asks riddles to travelers.", "ans": true},
    {"ques": "Odin is the chief god in Norse mythology.", "ans": true},
    {"ques": "Medusa, in Greek mythology, can turn people to stone with her gaze.", "ans": true},
    {"ques": "In Greek mythology, Hermes is the god of wine.", "ans": false},
    {"ques": "The Phoenix is a mythical bird that is said to rise from its own ashes.", "ans": true},
    {"ques": "In Roman mythology, Venus is the goddess of love.", "ans": true},
    {"ques": "Loki is considered a hero in Norse mythology.", "ans": false},
    {"ques": "In Greek mythology, Achilles was invulnerable except for his heel.", "ans": true},
    {"ques": "Ra is the sun god in Egyptian mythology.", "ans": true}
  ];
  
}
}