function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["1", "1", "c", "х",
    "х", "х", "к", "к", "O"
  ];
  
  console.log( unique(strings) ); 