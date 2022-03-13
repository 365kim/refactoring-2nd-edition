function printOwing(invoice) {
  const outstanding = calculateOutstanding();

  printBanner();
  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function calculateOutstanding() {
    let outstanding = 0;

    for (const o of invoice.orders) {
      outstanding += o.amount;
    }

    return outstanding;
  }

  function recordDueDate() {
    const today = Clock.today; // https://martinfowler.com/bliki/ClockWrapper.html
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }

  function printBanner() {
    console.log('***********');
    console.log('**고객 채무**');
    console.log('***********');
  }

  function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
