---
title: 导数的定义
subject: advanced-math
chapter: 第二章 导数与微分
order: 1
pubDate: 2026-03-10
description: 从极限到导数，瞬时变化率的严格定义
tags: [导数, 极限]
---

## 从平均变化率到瞬时变化率

函数 $f(x)$ 在 $x_0$ 附近的平均变化率为：

$$
\bar{v} = \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

当 $\Delta x \to 0$ 时，就得到瞬时变化率，即**导数**。

## 导数的定义

若极限

$$
f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

存在，则称 $f$ 在 $x_0$ 处可导，该极限值为 $f$ 在 $x_0$ 的导数。

## 基本求导法则

幂函数：$(x^n)' = n x^{n-1}$

和、差、积、商法则：

- $(u \pm v)' = u' \pm v'$
- $(uv)' = u'v + uv'$
- $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$

链式法则：$(f(g(x)))' = f'(g(x)) \cdot g'(x)$

> 导数建立在 [[极限的定义]] 之上，是微积分的核心工具。
