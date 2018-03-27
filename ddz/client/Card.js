/*
扑克牌
*/
var Card = (function() {
  class Card {
    constructor () {
      //点数
      this._point = null;
      //花色, 0表示大小王
      this._suit = null;
    }

    /*
    根据点数和花色获取一个牌
    */
    static get(point, suit) {
      if (point == Card.points.BlackJoker)
        return blackJokerCard;
      if (point == Card.points.RedJoker)
        return redJokerCard;
      return cards[suit - 1][point - 3];
    }

    getPoint () { return this._point; }
    getSuit () { return this._suit; }

    toString () {
      return (this._suit > 0 ? suitNames[this._suit - 1] : '') + pointNames[this._point - 3];
    }

  }

  //点数
  Card.points = (function() {
    // 11~15, 16, 17
    var points = {
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
      2: 15,
      BlackJoker: 16, //小王
      RedJoker: 17   //大王
    };

    // 3~10
    for (var n = 3; n <= 10; n++) {
      points[n] = n;
    }

    return Object.freeze(points);
  })();

  //花色
  Card.suits = (function() {
    return Object.freeze({
      heart: 1,  //红桃
      spade: 2,  //黑桃
      club: 3,   //梅花
      diamond: 4 //方块
    });
  })();

  const suitNames = ['红桃', '黑桃', '梅花', '方块'];
  const pointNames = [3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A', '2', '小王', '大王'];

  // 点数和花色的所有组合的牌
  const cards = [];
  const blackJokerCard =  makeCard(Card.points.BlackJoker, 0);
  const redJokerCard = makeCard(Card.points.RedJoker, 0);

  initCards();

  function initCards() {
    for (var suit = 1; suit <= 4; suit++) {
      cards.push([]);
      for (var point = 3; point <= 15; point++) {
        cards[suit - 1][point - 3] = makeCard(point, suit);
      }
    }
    Object.freeze(cards);
  }

  function makeCard(point, suit) {
    var card = new Card();
    card._point = point;
    card._suit = suit;
    return card;
  }

  return Object.freeze(Card);
})();
