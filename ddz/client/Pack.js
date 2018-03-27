/*
斗地主中一副牌
*/
class Pack {
  constructor () {
    var cards = [];
    for (var p in Card.points) {
      if (p != 'BlackJoker' && p != 'RedJoker') {
        for (var s in Card.suits)
          cards.push( Card.get(Card.points[p], Card.suits[s]) );
      }
    }
    cards.push( Card.get(Card.points.BlackJoker) );
    cards.push( Card.get(Card.points.RedJoker) );
    this._cards = cards;
  }

  shuffle (t = 100) {
    var cnt = this._cards.length;
    while (t--) {
      var x = randInt(0, cnt);
      var y = randInt(0, cnt);
      if (x != y)
        ArrayUtils.swap(this._cards, x, y);
    }
  }

  sort (cmp) {
    this._cards.sort(function(card1, card2) {
      var r = card1.getPoint() - card2.getPoint();
      return r == 0 ? card2.getSuit() - card1.getSuit() : r;
    });
  }

  toCards () {
    return this._cards.map(function(card) { return card });
  }
}
