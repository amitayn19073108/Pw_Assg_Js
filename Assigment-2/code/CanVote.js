function canVote(n) {
    let res = n>18? "You can vote" : "You cannot vote";
    return res;
}
console.log(canVote(19));
console.log(canVote(16));
