function validateObject(obj){

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let validUri = /^[A-Za-z0-9.]+$/;
    let validMessage = /^[^<>\\&'"]*$/;

    if(obj.method === undefined || !validMethods.includes(obj.method)){
        throw new Error('Invalid request header: Invalid Method');
    }
    if(obj.uri === undefined || !validUri.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }
    if(obj.version === undefined || !validVersions.includes(obj.version)){
        throw new Error('Invalid request header: Invalid Version');
    }
    if(obj.message === undefined || !validMessage.test(obj.message)){
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;

}

validateObject({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  );