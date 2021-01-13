const isEqualNumXandO = (text) => {
    const str = text.toLowerCase();
  
    if (!str.includes('x') && !str.includes('o')) {
      return true;
    }
    return str.split('x').length - 1 === str.split('o').length - 1;
  }
  
  console.log(isEqualNumXandO('oox'));
  console.log(isEqualNumXandO('xooxx'));
  console.log(isEqualNumXandO('ooxXm'));
  console.log(isEqualNumXandO('zpzpzpp'));
  console.log(isEqualNumXandO('zzoo'));