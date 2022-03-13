function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;

  function moreThanFiveLateDeliveries(dvr) {
    return dvr.numberOfLateDeliveries > 5;
  }
}

function reportLines(aCustomer) {
  const lines = [];

  gatherCustomerData(lines, aCustomer);

  return lines;

  function gatherCustomerData(out, aCustomer) {
    out.push(['name', aCustomer.name]);
    out.push(['location', aCustomer.location]);
  }
}
