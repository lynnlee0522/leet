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
  ],
};

const result = [];
const dfs = (node) => {
  if (!node) {
    return;
  }

  result.push({
    id: node.id,
    name: node.name,
  });

  if (node?.children) {
    const children = node.children;
    for (let i = 0; i < children?.length; i++) {
      const target = children[i];
      dfs(target);
    }
  }
};

dfs(tree);
console.log("--result--", result);
