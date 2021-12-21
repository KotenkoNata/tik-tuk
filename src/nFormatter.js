function nFormatter(number_) {
  if (number_ >= 1_000_000_000) {
    return `${(number_ / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}G`;
  }
  if (number_ >= 1_000_000) {
    return `${(number_ / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (number_ >= 1000) {
    return `${(number_ / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return number_;
}

export default nFormatter;
