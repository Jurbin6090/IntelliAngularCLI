export default class Test{
  constructor(testValue){
    this.testValue = testValue
    this.test();
  }

  test(){
    alert(this.testValue)
  }

  testMethod(){
    return 'testMethod'
  }
}
