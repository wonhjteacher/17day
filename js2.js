const user = {
    get nameOut() {
      return this._name;
    },
   
    set nameIn(value) {
      if (value.length < 5) {
        console.log("글자수를 다시 확인해주세요");
        return;
      }
      this._name = value;
    }
  };
   
  user.nameIn = "ben";
  console.log(user.nameOut); 







