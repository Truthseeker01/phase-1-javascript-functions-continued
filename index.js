// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
};

function wrapAdjective(x = "*"){
    return function (adjective = "spectial"){
        return `You are ${x}${adjective}${x}!`
        } 
};
