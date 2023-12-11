function mergeSorted(list1, list2) {
  // insertion sort
  let a = list1;
  let b = list2;
  let c = [];
  let i, j, k, l=0, point;

  for (k=0; k < (a.length + b.length); k++){
    c[k] = a[l];
    c[k+1] = b[l];
    // console.log(c);
    k++;
    l++;
  }

  for (i = 1; i < c.length; i++) {
    point = c[i];
    j = i - 1;

    while (j >= 0 && c[j] > point) {
      c[j + 1] = c[j];
      j = j - 1;
    }
    c[j + 1] = point;
  }
  // console.log(c);
  return c;
}


let l1 = [1, 2, 8, 3, 11];
let l2 = [1, 3, 6, 10, 9];

mergeSorted(l1, l2)