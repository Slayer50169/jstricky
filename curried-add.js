function curriedAdd(total = 0) {
    return function add(num = undefined){
        if(num === undefined) return total;
        total += num
        return add;
    }
}

module.exports = { curriedAdd };
