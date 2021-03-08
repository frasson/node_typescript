interface HelloWorld {
    msg: String;
}

function greeting(param: HelloWorld) {
    console.log(param.msg);
}

greeting({"msg" : "Hello World!"});