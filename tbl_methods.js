function getRowTotal(tbl_name, fld_lst, tar_fld)
{
    var fld_index=[];
    var tar_index=-1;
    var fld_str=tokenize(fld_lst);
    
    var qexp="."+tbl_name+" tr";
    var x=document.querySelectorAll(qexp);
    var z=x[0].getElementsByTagName("th");
    var k=0;
    
    for(var i=0; i<fld_str.length;i++)    
    {
        for(var j=0; j<z.length;j++)    
        {
            
            if(fld_str[i]==z[j].innerHTML)
            {
                
                fld_index[k]=j;
                k++;
            }
            if(z[j].innerHTML==tar_fld)
            {
                tar_index=j;       
            }
        }
    }
    
    var y;
    var sum=0;
    for(var i=1;i<x.length;i++)
    {
        sum=0;
        y=x[i].getElementsByTagName("td");
        for(var j=0;j<fld_index.length;j++)
        {
            
            sum+=parseInt(y[parseInt(fld_index[j])].innerHTML);
        }
        y[tar_index].innerHTML=sum;
    }
   
}

function tokenize(str)
{
    var tar_str_arr=[];
    var temp_str="";
    var j=0;
    for(var i=0; i<str.length;i++)
    {
        if(str[i]==',')
        {
            tar_str_arr[j]=temp_str.trim();
            temp_str="";
            j++;
        }
        else
        {
            temp_str+=str[i];
        }
    }
    tar_str_arr[j]=temp_str.trim();
    return tar_str_arr;
}
function isNumeric(str)
{
    for(var i=0;i <str.length; i++)
    {
        if(str.charCodeAt(i)<48 || str.charCodeAt(i)>57)        
        {
            return false;        
        }
    }
    return true;
}
function getAmt(tbl_name, src_fld, pr, tar_fld)
{
    var src_index=-1;
    var tar_index=-1;
    
    var price=parseFloat(document.getElementById(pr).value).toFixed(2);
    var x=document.querySelectorAll("."+tbl_name+" tr");
    var y=x[0].getElementsByTagName("th");
    for(var i=0;i<y.length;i++)
    {
        if(y[i].innerHTML==src_fld)
        {
            src_index=i;    
        }
        if(y[i].innerHTML==tar_fld)
        {
            tar_index=i;    
        }
    }
    
    for(var i=1;i<x.length-1;i++)
    {
        y=x[i].getElementsByTagName("td");
        
        y[tar_index].innerHTML=parseFloat(parseInt(y[src_index].innerHTML)*price).toFixed(2);
    }
}