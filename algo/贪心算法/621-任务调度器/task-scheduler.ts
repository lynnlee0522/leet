function leastInterval(tasks: string[], n: number): number {
  var tasksStatic = {
    // 最大值的值
    maxCount: 0,
    // 最大值分别是什么
    maxValue: new Set(),
  };
  for (var i = 0; i < tasks.length; i++) {
    if (!tasksStatic[tasks[i]]) {
      tasksStatic[tasks[i]] = 1;
    } else {
      tasksStatic[tasks[i]] += 1;
    }
    if (tasksStatic[tasks[i]] > tasksStatic.maxCount) {
      tasksStatic.maxCount = tasksStatic[tasks[i]];
      tasksStatic.maxValue = new Set(tasks[i]);
    } else if (tasksStatic[tasks[i]] === tasksStatic.maxCount) {
      tasksStatic.maxValue.add(tasks[i]);
    }
  }

  return Math.max(
    tasks.length,
    (tasksStatic.maxCount - 1) * (n + 1) + tasksStatic.maxValue.size
  );
}

leastInterval(["A", "A", "A", "B", "B", "B"], 2);
