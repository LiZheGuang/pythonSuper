// 销售目标起算器-随机的销售目标

function Sum_A() {
  // 商品的价格
  const prices = [1019, 729, 1039, 103, 206, 509, 2029];

  // 最小销售量和目标总销售额
  const minQuantity = 200;
  const targetRevenue = 2000000;

  // 初始化销售量数组
  let quantities = [];

  // 随机生成销售量，范围在 `minQuantity` 和 `minQuantity+100` 之间
  for (let i = 0; i < prices.length; i++) {
    quantities.push(Math.floor(Math.random() * 100 + minQuantity));
  }

  // 计算初步的总销售额
  let currentRevenue = prices.reduce(
    (acc, price, i) => acc + price * quantities[i],
    0
  );

  // 调整销售量
  for (let i = prices.length - 1; i >= 0; i--) {
    while (currentRevenue > targetRevenue && quantities[i] > minQuantity) {
      quantities[i]--;
      currentRevenue -= prices[i];
    }
  }

  // 如果总销售额仍然超过目标总销售额，继续调整最便宜商品的销售量
  while (currentRevenue > targetRevenue && quantities[0] > minQuantity) {
    quantities[0]--;
    currentRevenue -= prices[0];
  }

  // 如果总销售额仍然低于目标总销售额，增加最便宜商品的销售量
  while (currentRevenue < targetRevenue) {
    quantities[0]++;
    currentRevenue += prices[0];
  }

  // 打印结果
  console.log("Prices:", prices);
  console.log("Quantities:", quantities);
  console.log("Total Revenue:", currentRevenue);
}

// 固定目标计算器-固定的销售目标
function Sum_B() {
  // 商品的价格
  const prices = [1019, 729, 1039, 103, 206, 509, 2029];

  // 最小销售量和目标总销售额
  const minQuantity = 200;
  const targetRevenue = 2000000;

  // 初始化销售量数组
  let quantities = new Array(prices.length).fill(minQuantity);

  // 计算初步的总销售额
  let currentRevenue = prices.reduce(
    (acc, price, i) => acc + price * quantities[i],
    0
  );

  // 调整销售量
  for (let i = prices.length - 1; i >= 0; i--) {
    while (currentRevenue > targetRevenue && quantities[i] > minQuantity) {
      quantities[i]--;
      currentRevenue -= prices[i];
    }
  }

  // 如果总销售额仍然超过目标总销售额，继续调整最便宜商品的销售量
  while (currentRevenue > targetRevenue && quantities[0] > minQuantity) {
    quantities[0]--;
    currentRevenue -= prices[0];
  }

  // 如果总销售额仍然低于目标总销售额，增加最便宜商品的销售量
  while (currentRevenue < targetRevenue) {
    quantities[0]++;
    currentRevenue += prices[0];
  }

  // 打印结果
  console.log("Quantities:", quantities);
  console.log("Total Revenue:", currentRevenue);
}
