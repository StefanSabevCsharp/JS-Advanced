
function deckOfCards(cards) {
    function generateCard(name, suit) {
  
        let validCards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        if(!validCards.includes(name) || !validSuits.hasOwnProperty(suit)){
            throw new Error('Error');
        }
        return {
            name,
            suit: validSuits[suit],
            toString: function () {
                return this.name + this.suit;
            }
        }
    
    }
    let result = [];
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let name = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];
        if (name.length === 2 && !isNaN(name[0])) {
            name = name[0] + name[1];
            suit = card[card.length - 1];
        }
        try {
            result.push(generateCard(name, suit).toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']); // Invalid card: 1C