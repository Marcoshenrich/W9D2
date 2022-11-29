class Util {
    inherits(childClass, parentClass) {
        function Sur(){}
        Sur.prototype = parentClass.prototype
        childClass.prototype = new Sur()
        childClass.prototype.constructor = childClass
    }

 
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    }
        
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }

};

export default Util;