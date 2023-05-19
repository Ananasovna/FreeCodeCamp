const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {

  let count = 0;
  for (let key in allUsers) {
    if (allUsers[key].online === true) {
      ++count;
    }
  }
  return count;

}

console.log(countOnline(users));