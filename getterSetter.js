class Teacher {
    constructor(subject, grade) {
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;
    }
  
    get subject() {
      return this._subject;
    }
  
    set subject(newSubject) {
      this._subject = newSubject;
    }
  }