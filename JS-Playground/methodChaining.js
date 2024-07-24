// class Arithmetic {
//     constructor() {
//       this.value = 0;
//     }
//     sum(...args) {
//       this.value = args.reduce((sum, current) => sum + current, 0);
//       return this;
//     }
//     addition(value) {
//       this.value = this.value + value;
//       return this;
//     }
//     subtraction(value) {
//       this.value = this.value - value;
//       return this;
//     }
//     average(...args) {
//       this.value = args.length? (this.sum(...args).value) /
//     args.length: undefined;
//       return this;
//     }
//   }


//   const Arithmetic 1= new Arithmetic()
//   Arithmetic1
//     .sum(1, 3, 6)   // => { value: 10 }
//     .subtraction(3)   // => { value: 7 }
//     .add(4)        // => { value: 11 }
//     .value         // => 11
