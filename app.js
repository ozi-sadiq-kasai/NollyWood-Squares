function find(val){
  if (val == 'a'){
    return 'alpha';
  }
  else if (val == 'b'){
    return 'beta';
  }
  else if (val == 'c'){
    return 'camma';
  }
  else if (val == 'g'){
    return 'gamma';
  }
  else{
    return 'no idea';
  }
}

console.log(find('g'));