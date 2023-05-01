代码执行过程如下： 
1
开头定义了async1和async2两个函数，但是并未执行，执行script中的代码，所以打印出script start；
2
遇到定时器Settimeout，它是一个宏任务，将其加入到宏任务队列；
3
之后执行函数async1，首先打印出async1 start；
4
遇到await，执行async2，打印出async2，并阻断后面代码的执行，将后面的代码加入到微任务队列；
5
然后跳出async1和async2，遇到Promise，打印出promise1；
6
遇到resolve，将其加入到微任务队列，然后执行后面的script代码，打印出script end；
7
之后就该执行微任务队列了，首先打印出async1 end，然后打印出promise2；
8
执行完微任务队列，就开始执行宏任务队列中的定时器，打印出setTimeout。