const formatValue = (value) => `R$ ${new Intl.NumberFormat('de-DE', {
  minimumFractionDigits: 2,
}).format(value)}`;

export default formatValue;
