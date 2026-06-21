---
title: 二叉树的遍历
subject: data-structure
chapter: 第二章 树
order: 1
pubDate: 2026-03-05
description: 前序、中序、后序与层序遍历的递归与迭代实现
tags: [二叉树, 遍历, 递归]
---

## 四种遍历方式

二叉树遍历指按某种规则访问每个节点恰好一次：

| 遍历方式 | 访问顺序 |
|---------|---------|
| 前序 | 根 → 左 → 右 |
| 中序 | 左 → 根 → 右 |
| 后序 | 左 → 右 → 根 |
| 层序 | 按深度逐层访问 |

## 递归实现

前序遍历的递归写法最为直观：

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder(root: TreeNode | None) -> list[int]:
    if root is None:
        return []
    return [root.val] + preorder(root.left) + preorder(root.right)
```

## 迭代实现（用栈）

递归写法简洁，但理解栈的迭代写法有助于掌握底层机制：

```python
def preorder_iterative(root: TreeNode | None) -> list[int]:
    if not root:
        return []
    stack, result = [root], []
    while stack:
        node = stack.pop()
        result.append(node.val)
        # 先压右再压左，保证左先出栈
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    return result
```

> 时间复杂度均为 $O(n)$，空间复杂度 $O(h)$，其中 $h$ 为树高。
