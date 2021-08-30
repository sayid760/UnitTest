const MyClass = require('../src/myClass')
const sinon = require('sinon')
const myObj = new MyClass()
const chai = require('chai')
const { expectation } = require('sinon')
const expect = chai.expect
const chaiaspromise = require("chai-as-promised")
chai.use(chaiaspromise)
const nock = require("nock")

describe.skip('Test suit', ()=>{
    after(function() {
        console.log("===================== After the test suit")
    })
    before(function() {
        console.log("===================== Before the test suit")
    })
    afterEach(function() {
        console.log("======= After every test case inside this test suit")
    })
    beforeEach(function() {
        // Sinon包装必须在测试用例之前或之后恢复
        sinon.restore()
        console.log("======= Before every test case inside this test suit")
    })

    it('Test the add method',()=>{
        expect(myObj.add(1, 2)).to.be.equal(3)
    })

    it('spy the add method',()=>{
        const spy = sinon.spy(myObj, 'add') // 追踪add函数是否被调用
        myObj.callAnotherFn(1, 2)
        // 断言add函数在里面是否被执行一次
        // sinon.assert.calledOnce(spy)
        expect(spy.calledTwice).to.be.false
        expect(spy.calledWith(1, 2)).to.be.true
    })

    it('spy the callback method',()=>{
        const spy = sinon.spy() // 设置一个追踪器
        myObj.callTheCallback(spy)
        expect(spy.calledOnce).to.be.true
    })

    // it('mock the sayHello method',()=>{
    //     myObj.callAnotherFn(3, 4)
    // })

    it('mock the sayHello method',()=>{
        const mock = sinon.mock(myObj)
        const expetcation = mock.expects('sayHello')
        expetcation.exactly(1)
        expectation.withArgs('hello world 111')
        myObj.callAnotherFn(3, 4)
        mock.verify() // 验证对模拟的所有期望
    })
})

describe.skip('Test suit for stub', ()=>{
    it('stub the add method', ()=>{
        let stub = sinon.stub(myObj, 'add') // 用来替换myObj.add函数，自定义返回结果
        stub
            .withArgs(10, 20)
            .onFirstCall()
            .returns(100) // 定义第一次执行时的返回结果为100
            .onSecondCall()
            .returns(200) // 定义第二次执行时的返回结果为200

        expect(myObj.callAnotherFn(10, 20)).to.be.equal(100) // 测试返回结果
        expect(myObj.callAnotherFn(10, 20)).to.be.equal(200)
    })
})

describe.skip("Test the promise", function() {
    it("Promise test case", function(done) {
      this.timeout(4000)
      myObj.testPromise().then(function(result) {
        expect(result).to.be.equal(6)
        done()
      })
    })
})

describe.skip("Test the promise", function() {
    it("Promise test case with chai-as-promised", function() {
        this.timeout(0)
        return expect(myObj.testPromise()).to.eventually.equal(6)
    })
})

describe("XHR test suit", function() {
    it("Mock and stub xhr call", function(done) {
      var obj = { id: 123 }
      const scope = nock("https://echo-service-new.herokuapp.com")
        .post("/echo")
        .reply(200, obj)
      myObj
        .xhrFn()
        .then(function(result) {
          expect(result).to.be.eql(obj)
          done()
        })
        .catch(error => {
          done(new Error("test case failed: " + error))
        })
    })
})