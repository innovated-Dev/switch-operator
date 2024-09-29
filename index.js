var dayOfWeek = prompt("enter day of week ");

switch (dayOfWeek.toLowerCase()) {
  case "friday":
    alert("TGIF");
    break;
  case "monday":
    alert("Monday blessing ");
    break;
  case "tuesday":
    alert("i dont like tuesdays ");
  default:
    alert("day of week does not exist");
    break;
}

//loop

for (number = 1; number <= 10; number++) {
  if (number == 6) {
    continue;
  }
  console.log("hellowrold" + number);
}

// print numbers divisible by 5 and 7 between 1500 t0 3600

for (num = 1500; num <= 3600; num++) {
  if (num % 5 === 0 && num % 7 === 0) {
    if (num == 1750) {
      continue;
    }
    console.log(num);
  }
}

var x =1.4

var array =['jibola','Quadri','Relix']


for(num = 0; num < array.length; num++){
    console.log(array[num]+"@appclick.com")
}

var products = [
    {
        name:'iphone',
        price:2300,
        desc:'lorem ipsium'
    },
    {
        name:'samsung s29',
        price:40000,
        desc:'ldgshjd gdfh'
    }
]


