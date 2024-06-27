const CURRENCTY_MAP = {IDR: 'id-ID', USD: 'en-US'};

export const formatIDR = (money: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(money)
    .replace(/[,]/gi, '.');
};

export const numberKiloFormat = (number: number) => {
  if (number < 100000) {
    return numberFormatIDR(number);
  }

  const formating = Number(number / 1000).toFixed(0);
  return String(formating).replace('.', ',').concat('K');
};

export const currentcyKiloFormat = (money: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(money / 1000)
    .replace(/[,]/gi, '.')
    .replace(/[IDR]/gi, '')
    .concat('K');
};

export const numberFormatIDR = (money: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(money)
    .replace(/[,]/gi, '.')
    .replace(/[IDRP]/gi, '');
};

type Currency = 'IDR' | 'USD';
export const currencyFormat = (
  money: number,
  currency: Currency,
  minimumFractionDigits = 0,
) => {
  let results = new Intl.NumberFormat(CURRENCTY_MAP[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits,
  }).format(money);

  if (currency === 'IDR') {
    return results.replace(/[,]/gi, '.');
  }
  return results;
};
