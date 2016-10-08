/**
 * Created by cag on 2016/9/23.
 */
export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        return `我的名字是：${this.name}，我今年${this.age}岁了。`;
    }
}