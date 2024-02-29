export default function IndexOfObject(field, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i][field] == value) {
      return i;
    }
  }

  return -1;
}
