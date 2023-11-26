/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

function loopTriangle(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    result += "#";
    console.log(result);
  }
  return result;
}

console.log(loopTriangle(7));

// Time: o(n), Space: o(n)
