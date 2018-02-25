// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let ExchangeResult = {};
    if( currency <= 0){
      return ExchangeResult;
 }
    if(currency > 10000){
        let error = 'You are rich, my friend! We don\'t have so much coins for exchange';
        ExchangeResult.error = error;
        return ExchangeResult;
    }
    if( (currency > 0) && (currency < 10000)) {

        let ostatok = currency % 50;//41 if currency == 91
          let H = parseInt(currency / 50);// 1!=0
         if(H !== 0){
             ExchangeResult.H = H;
         }
        if(ostatok === 0){
            return ExchangeResult;
        }
        let Q = parseInt(ostatok / 25); // 1
        if(Q !== 0){
            ExchangeResult.Q = Q;
        }
        ostatok = ostatok % 25;
        if(ostatok === 0){
            return ExchangeResult;
        }// 16
       let D = parseInt(ostatok / 10); //1
        if(D !== 0){
            ExchangeResult.D = D;
        }
        ostatok = ostatok % 10; // 6
        if(ostatok === 0){
            return ExchangeResult;
        }
        let  N = parseInt(ostatok / 5) // 1
        if(N !== 0){
            ExchangeResult.N =N;
        }
        ostatok = ostatok % 5;
        if(ostatok === 0){
            return ExchangeResult;
        }
        let P = parseInt(ostatok / 1);
        if(P !== 0){
            ExchangeResult.P = P;
        }
        ostatok = ostatok % 1;
        if(ostatok === 0){
            return ExchangeResult;
        }

        return ExchangeResult;
    }

}
