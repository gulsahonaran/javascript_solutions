function persistence(num) {
  let count = 0;
  if(num%10 == num){
    return 0
  }
  do{
    num = num.toString().split('').reduce((a,b) => parseInt(a) * parseInt(b));
    count ++;
  }while(num%10 != num) 
  
  return count;
}

//persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 //persistence(4) === 0 // because 4 is already a one-digit number
