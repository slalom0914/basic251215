// 클래스 - ES6(ECMAScript 2015) 지원
{
  class Fruit{
    //생성자 함수 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji){
      this.name = name
      this.emoji = emoji
    }
    //사용자 정의함수
    //함수 선언시 function예약어 사용 불가
    display = () => {
      console.log(`${this.name} : ${this.emoji}`)
    }
  }//end of Fruit
  //insert here
  //tomato는 Fruit클래스의 인스턴스이다.
  const tomato = new Fruit("tomato","🍅")
  const kiwi = new Fruit("kiwi","🥝")
  console.log(tomato.name)
  console.log(tomato.emoji)
  tomato.display()
  kiwi.display()
  
  //주의
  // obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
  const obj = { name: "scott"} 
  console.log(obj.name)
}