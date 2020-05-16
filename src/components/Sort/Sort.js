var Sort = new function () {

  this.priceLowToHigh = (arrayElements) => {
    arrayElements.sort(function (a, b) {
      return parseInt(a.price.actual) - parseInt(b.price.actual)
    });
    return arrayElements

  }

  this.priceHighToLow = (arrayElements) => {
    arrayElements.sort(function (a, b) {
      return parseInt(b.price.actual) - parseInt(a.price.actual)
    });
    return arrayElements

  }

  this.discountHighToLow = (arrayElements) => {

    arrayElements.sort(function (a, b) {
      return parseInt(b.discount) - parseInt(a.discount)
    });
    return arrayElements

  }
}
export default Sort

