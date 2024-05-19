const tree = {
  id: 1,
  name: "body",
  children: [
    {
      id: 2,
      name: "title",
      children: [
        {
          id: 3,
          name: "div",
        },
      ],
    },
    {
      id: 5,
      name: "title",
      children: [
        {
          id: 6,
          name: "div",
        },
      ],
    },
  ],
};

const bfs = (node) => {
  if (!node) {
    return;
  }
  // result 其实是一个队列
  const queue = [],
    result = [];
  queue.push(node);

  while (queue.length) {
    const target = queue.shift();
    result.push({
      id: target.id,
      name: target.name,
    });

    if (target.children) {
      for (let i = 0; i < target.children?.length; i++) {
        queue.push(target.children[i]);
      }
    }
  }

  return result;
};

console.log(bfs(tree))
