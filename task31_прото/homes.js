let hOdn = {
    s(a,b,c) {
      return a * b * c;
    },
  
    

  };
  
 
  let hMans = {
    s(a,b,c, a2, b2, c2) {
      return ((a * b * c) + (a2 * b2 * c2));
      
    },
    __proto__: hOdn
    

  };


  let hPristr = {
    s(a,b,c, a2, b2, c2) {
      return ((a * b * c) + (a2 * b2 * c2));
    },
    __proto__: hMans
    

  };


  
  let ccc = hOdn.s(4,5,4);
  console.log(ccc);