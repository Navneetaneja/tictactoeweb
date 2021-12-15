import { useState } from 'react';
import './tictactoe.css';

var z="";
var c="";
var ct=0;
localStorage.setItem("zerocount",0);
localStorage.setItem("crosscount",0);
function Tictactoe()
{
    const arr=["123", "147", "159", "213", "258", "321", "369","357","231", "312", "471", "714", "591", "915", "132", "321", "582", "825",
        "693", "936", "573", "735", "417", "174", "195", "285", "396", "375", "456", "465", "528", "519", "537", "546", "564", "639", "654", "645", "741",
        "789", "798", "753", "852", "879", "897", "951", "963", "987", "978"];
    const [zero,setZero]=useState(false);
    const [cross,setCross]=useState(true);
    const val=`${zero===true?"0":"X"}`;

    const reset=()=>{
        for(var k=0;k<9;k++)
        document.getElementsByClassName("reset")[k].textContent="";
        setCross(true);
        setZero(false);
        ct=0;
    }

    const setImage=(e,value)=>{
        if(ct===8)
        {
        alert("Draw");
        window.location.reload(false);
        reset();
        }
        if(e.target.textContent==="")
        {
            ct=ct+1;
            e.target.textContent=val;
            if(val==="0")
            z+=value;
            else
            c+=value;
            // console.log(z,c);
                for(var i=0;i<arr.length;i++)
                {
                    if(z.indexOf(arr[i])!==-1)
                    {
                        var t=localStorage.getItem("zerocount");
                        localStorage.setItem("zerocount",parseInt(t)+1);
                        alert("zero win");
                        z="";
                        c="";
                        reset();
                    }
                }
            
            
                for(var j=0;j<arr.length;j++)
                {
                    if(c.indexOf(arr[j])!==-1)
                    {
                        var b=localStorage.getItem("crosscount");
                        localStorage.setItem("crosscount",parseInt(b)+1);
                        alert("cross win");
                        reset();
                        z="";
                        c="";
                    }
                }
            

            setZero(!zero);
            setCross(!cross);
            
        }
    }
    return(
        <div className="container">
            <table>
                <tbody>
                    <tr className="r1">
                        <td onClick={(e)=>{setImage(e,"1")}} className="r1c1 reset"></td><td  className="reset" onClick={(e)=>{setImage(e,"2")}}></td><td  onClick={(e)=>{setImage(e,"3")}} className="r1c3 reset"></td>
                    </tr>
                    <tr className="r2">
                        <td onClick={(e)=>{setImage(e,"4")}} className="r2c1 reset"></td><td className="reset" onClick={(e)=>{setImage(e,"5")}}></td><td  onClick={(e)=>{setImage(e,"6")}} className="r2c3 reset"></td>
                    </tr>
                    <tr className="r3">
                        <td onClick={(e)=>{setImage(e,"7")}}  className="r3c1 reset"></td><td className="reset" onClick={(e)=>{setImage(e,"8")}}></td><td  onClick={(e)=>{setImage(e,"9")}} className="r3c3 reset"></td>
                    </tr>
                </tbody>
            </table>
            <h3>ZERO WON : {localStorage.getItem("zerocount")}</h3>
            <h3>CROSS WON : {localStorage.getItem("crosscount")}</h3>
        </div>
    );
}
export default Tictactoe;