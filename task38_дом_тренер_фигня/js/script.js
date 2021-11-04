let out = "<div class ='box'>";
for (let i = 1; i < 30; i++ ){
    if (i%2==0)
    out+="<span class ='red'> {$i} </span><br>";
    
}
out+="</div>";
document.write(out);