function findRoots(a, b, c) {
    //  To Check if the equation is linear
    if (a === 0) {
      console.log("The equation is linear, no roots to calculate.");
      return;
    }
  
    let discriminant = b * b - 4 * a * c;
  
    // Determine the type of roots
    if (discriminant > 0) {
      // Real and different roots
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`Roots are real and different: ${root1} and ${root2}`);
    } else if (discriminant === 0) {
      // Real and equal roots
      let root = -b / (2 * a);
      console.log(`Roots are real and equal: ${root}`);
    } else {
      // Complex conjugate roots
      let realPart = -b / (2 * a);
      let imagPart = Math.sqrt(-discriminant) / (2 * a);
      console.log(`Roots are complex and conjugate: ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
  }
  
  findRoots(1, 5, 6);
   