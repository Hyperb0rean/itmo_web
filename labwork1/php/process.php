<?php



function xval($x){
    if($x == ''){
        return false;
    }
    if(!is_numeric($x)){
        return false;
    }
    if($x <= -5 or $x >= 5){
        return false;
    }

    return true;
}

function rval($r){
    if($r == ''){
        return false;
    }
    if(!is_numeric($r)){
        return false;
    }
    if(!in_array($r,array(1,2,3,4,5))){
        return false;
    }
    return true;
}
function yval($y){
    if($y == ''){
        return false;
    }
    if(!is_numeric($y)){
        return false;
    }
    if(!in_array($y,array(-3,-2,-1,0,1,2,3))){
        return false;
    }
    return true;
}

$start = microtime(true);
$result = false;
$x =$_GET['x-value'];
$x = substr(strval($x),0,10);
$y =$_GET['y-value'];
$r =$_GET['r-value'];

if(xval($x) and rval($r) and yval($y)){



    if($x>=0 and $y >=0) {
        if($x<=$r and $y<=$r) {
            $result=true;
        }
    }
    if($x>=0 and $y <0) {
        if($x*$x + $y*$y <= $r*$r) {
            $result=true;
        }
    }
    if($x<0 and $y <0) {
        if(0.5*$r - $x <= $y) {
            $result=true;
        }
    }

    if($result){
        $resultStr = "+15 social credits";
    }
    else{
        $resultStr="-30 social credits";
    }

    echo '<tr class="text">
  <td class="text">' . $x . '</td>
  <td class="text">' . $y . '</td>
  <td class="text">' . $r . '</td>
  <td class="text">' .date("H:i:s",time()) . '</td>
  <td class="text">' . number_format((microtime(true) - $start )*1000 , 3) . 'ms </td>
  <td class="text">'. $resultStr . '</td>
  </tr>';
}
else{
    echo '<div class="text">Data is invalid</div>';
}


