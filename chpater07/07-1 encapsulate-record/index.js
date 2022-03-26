const organization = { name: '에크미 구스베리', country: 'GB' };

result += `<h1>${organization.name}</h1>`;
organization.name = 'newName';

const customerData = {
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
      },
      2015: {
        1: 70,
        2: 63,
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    // 생략
  },
};

function compareUsage(customerId, laterYear, month) {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];

  return {
    laterAmount: later,
    change: later - earlier,
  };
}
