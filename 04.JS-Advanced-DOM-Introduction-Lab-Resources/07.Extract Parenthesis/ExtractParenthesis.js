function extract(content) {
    let result = [];
    let pattern = /\((.+?)\)/g;
    let match = pattern.exec(content);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(content);
    }
   console.log(result.join('; '));
}