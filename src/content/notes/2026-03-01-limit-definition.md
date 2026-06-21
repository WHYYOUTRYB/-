---
title: 极限的定义
subject: advanced-math
chapter: 第一章 极限与连续
order: 1
pubDate: 2026-03-01
description: 数列极限的 ε-N 定义与几何理解
tags: [极限, 定义]
---

## 直观理解

极限刻画的是：当自变量无限趋近某个值时，函数值"趋近"的目标。

数列 $\{a_n\}$ 收敛于 $A$，记作：

$$
\lim_{n \to \infty} a_n = A
$$

## ε-N 严格定义

设 $\{a_n\}$ 为数列，$A$ 为常数。若对任意 $\varepsilon > 0$，存在正整数 $N$，使得当 $n > N$ 时恒有

$$
|a_n - A| < \varepsilon
$$

则称数列 $\{a_n\}$ 的极限为 $A$。

## 例子

证明 $\lim_{n \to \infty} \dfrac{1}{n} = 0$。

对任意 $\varepsilon > 0$，取 $N = \lceil 1/\varepsilon \rceil$，则当 $n > N$ 时：

$$
\left|\frac{1}{n} - 0\right| = \frac{1}{n} < \frac{1}{N} \leq \varepsilon
$$

证毕。

> 极限是微积分的基石，后续的导数、积分都建立在极限之上。相关内容见 [[导数的定义]]。
