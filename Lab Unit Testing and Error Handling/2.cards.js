function card(name, suit) {
  
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
export {card};
console.log(card('A', 'S').toString()); // A♠