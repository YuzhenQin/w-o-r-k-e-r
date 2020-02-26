function main(args) {
    var str = args.str;
    var toFind = args.toFind;
    var st = 0; 
    var times = 0;
    for(;str.indexOf(toFind,st) != -1;)
    {
        var findedIndex = str.indexOf(toFind,st);
        if(findedIndex != -1)
        {
            st = findedIndex + toFind.length - 1;
            times++;
        }
    }
    return times;
};