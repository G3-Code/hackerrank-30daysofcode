class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id, scores);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    // console.log(this.id);
    // console.log(this.scores);
    if (this.scores) {
      var avgScore =
        this.scores.reduce((p, n) => {
          return p + n;
        }, 0) / this.scores.length;

      if (avgScore < 40) {
        return "T";
      } else if (avgScore >= 40 && avgScore < 55) {
        return "D";
      } else if (avgScore >= 55 && avgScore < 70) {
        return "P";
      } else if (avgScore >= 70 && avgScore < 80) {
        return "A";
      } else if (avgScore >= 80 && avgScore < 90) {
        return "E";
      } else if (avgScore >= 90 && avgScore <= 100) {
        return "O";
      }
    }
  }
}
