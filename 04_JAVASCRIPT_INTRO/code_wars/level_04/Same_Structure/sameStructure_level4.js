Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  return this.every((item, index) => {
    if (Array.isArray(item)) {
      if (item.length !== other[index].length) return false;

      return item.sameStructureAs(other[index]);
    }

    return (!Array.isArray(other[index]));
  })
};
