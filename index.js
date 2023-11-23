var a=new Array(),n="";
a[1]='T';a[2]='Ô';a[3]='I';a[4]=' ';a[5]='L';a[6]='À';a[7]=' ';a[8]='S';a[9]='U';a[10]='P';a[11]='E';a[12]='R';a[13]='M';a[14]='A';a[15]='N';a[16]='!';a[17]='!';a[18]='!';a[19]='!';a[20]='!';a[21]='!';a[22]='!';
function typeTextarea(){
    t = document.f.txt.value;
    j = t.length;
    if(j > 0)
    {
        for(var i=1; i<=j; i++)
        {
            n = n + a[i];
            if(i == 22)
            {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;
    n="";
    setTimeout("typeTextarea()", 1);
    //return false;
}