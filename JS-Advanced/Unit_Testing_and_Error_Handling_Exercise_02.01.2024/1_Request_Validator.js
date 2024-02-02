function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /[^A-Za-z0-9\.\*]+/;
    let messagePattern = /[<>\\\&\'\"]+/;

    if (obj.method === undefined || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.uri === undefined || obj.uri == '' || uriPattern.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (obj.version === undefined || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.message === undefined || messagePattern.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(requestValidator({ method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' })); // { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' }
console.log('-----------------');
console.log(requestValidator({ method: 'OPTIONS', uri: 'git.master', version: 'HTTP/1.1', message: '-recursive' })); // Invalid request header: Invalid Method
console.log('-----------------');
console.log(requestValidator({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' })); // Invalid request header: Invalid Version