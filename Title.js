function titleCase(str) {
    var StrSplit=str.split(' '),
        m,
        i,
        newstr="";
    for (i=0; i<StrSplit.length; i++){

        newstr+=StrSplit[i][0].toUpperCase();
        for (m=1; m<StrSplit[i].length; m++){

            newstr+=StrSplit[i][m].toLowerCase();

        }
        console.log(i!=StrSplit.length-1);
        if (i!=StrSplit.length-1){
            newstr+=" "
        }


    }
    console.log(i)
    //  console.log("Here Is My Handle Here Is My Spout " ==="Here Is My Handle Here Is My Spout")
    return newstr;
}
console.log(titleCase("I'm a little tea pot"))
// titleCase("I'm a little tea pot");