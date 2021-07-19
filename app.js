let countFactory = (function() {
    let staticCount = 0;
    
    return function() {
        let localCount = 0;
        
        return {
            increase: function () {
                
                return {
                    static: ++staticCount,
                    local: ++localCount
                };
            },
            decrease: function() {
                
                return {
                    static: --staticCount,
                    local: --localCount
                };
            }
        };
    };
}());
console.log('countFactory: ', countFactory)
let counter = countFactory(), counter2 = countFactory();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter2.decrease());
console.log(counter.increase());