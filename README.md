# RandomWalkGenerator

Поставим задачу конструирования 3х точечного распределения с заданными $\mu, D, S, K$

$\mu=u_1p_1+u_2p_2+vq$

Матожидание остается таким же из-за конструкции

$\Large
p_i=\frac{1+\mu}{1+u_i}w_i
$

где 

$\Large
w_i=\frac{u_i^{-T}}{\sum\limits_ju_j^{-T}}
$

$\Large
w_i < 1
$

$\Large
w_1 + w_2 = 1
$

$v=-1$

$q=1-p_1-p_2$

остальные моменты обозначим их как центральные но они не явлются центральными

$\Large
\begin{aligned}
D &= u_1^2 p_1 + u_2^2 p_2 + v^2 q, \\
S &= u_1^3 p_1 + u_2^3 p_2 + v^3 q, \\
K &= u_1^4 p_1 + u_2^4 p_2 + v^4 q.
\end{aligned}
$

Упрощение для $D$:

$\Large
\begin{aligned}
D &= u_1^2 p_1 + u_2^2 p_2 + 1 - p_1 - p_2, \\
\frac{D - 1}{1+\mu} &= (u_1-1) w_1 + (u_2-1) w_2 \\
\frac{D - 1}{1+\mu} + 1 &= u_1w_1 + u_2w_2 \\
D' &= \frac{D - 1}{1+\mu} + 1
\end{aligned}
$

Выразим из уравнения явно T

$\Large
\begin{aligned}
D'(u_1^{-T}+u_2^{-T}) &= u_1u_1^{-T} + u_2u_2^{-T} \\
D'(u_1^{-T}+u_2^{-T}) &= u_1u_1^{-T} + u_2u_2^{-T} |: u_1^{-T} \\
D'\left(1+\left(\frac{u_1}{u_2}\right)^{T}\right) &= u_1 + u_2\left(\frac{u_1}{u_2}\right)^{T} \\
D'\left(1+\left(\frac{u_1}{u_2}\right)^{T}\right) &= u_1 + u_2\left(\frac{u_1}{u_2}\right)^{T} \\
D'+D'\left(\frac{u_1}{u_2}\right)^{T} &= u_1 + u_2\left(\frac{u_1}{u_2}\right)^{T} \\
\left(D'-u_2\right)\left(\frac{u_1}{u_2}\right)^{T} &= u_1 - D' \\
\left(\frac{u_1}{u_2}\right)^{T} &= \frac{u_1 - D'}{D'-u_2} \\
T\ln\left(\frac{u_1}{u_2}\right) &= \ln\frac{u_1 - D'}{D'-u_2} \\
T &= \frac{\ln\frac{u_1 - D'}{D'-u_2}}{\ln\left(\frac{u_1}{u_2}\right)} \\
\end{aligned}
$


Упрощение для $S$:

$\Large
\begin{aligned}
S &= u_1^3 p_1 + u_2^3 p_2 + v^3 q, \\
S &= u_1^3 p_1 + u_2^3 p_2 - 1 + p_1 + p_2, \\
S &= (u_1^3+1) p_1 + (u_2^3 + 1) p_2 - 1, \\
S &= (u_1^2 - u_1 + 1) w_1 + (u_2^2 - u_2 + 1) w_2 - 1, \\
\frac{S-1}{1+\mu} - 1 &= (u_1^2 - u_1) w_1 + (u_2^2 - u_2) w_2, \\
\frac{S-1}{1+\mu} - 1 + \frac{D - 1}{1+\mu} + 1 &= u_1^2 w_1 + u_2^2 w_2, \\
\frac{S-1}{1+\mu} + \frac{D - 1}{1+\mu} &= u_1^2 w_1 + u_2^2 w_2, \\
\frac{D+S-2}{1+\mu} &= u_1^2 w_1 + u_2^2 w_2, \\
S' &= \frac{D+S-2}{1+\mu}, \\
\end{aligned}
$

Выражаем $T$:

$\Large
\begin{aligned}
S' &= u_1^2 w_1 + u_2^2 w_2, \\
S'(u_1^{-T}+u_2^{-T}) &= u_1^2 u_1^{-T} + u_2^2 u_2^{-T}, \\
S'\left(1+\left(\frac{u_1}{u_2}\right)^{T}\right) &= u_1^2  + u_2^2 \left(\frac{u_1}{u_2}\right)^{T}, \\
S'+S'\left(\frac{u_1}{u_2}\right)^{T} &= u_1^2  + u_2^2 \left(\frac{u_1}{u_2}\right)^{T}, \\
(S'-u_2^2)\left(\frac{u_1}{u_2}\right)^{T} &= u_1^2  - S', \\
\left(\frac{u_1}{u_2}\right)^{T} &= \frac{u_1^2  - S'}{S'-u_2^2}, \\
T &= \frac{\ln\frac{u_1^2  - S'}{S'-u_2^2}}{\ln{\frac{u_1}{u_2}}}, \\
\end{aligned}
$

Упрощение для $K$:

$\Large
\begin{aligned}
K &= u_1^4 p_1 + u_2^4 p_2 + v^4 q, \\
K &= u_1^4 p_1 + u_2^4 p_2 + 1 - p_1 - p_2, \\
K &= (u_1^4 - 1) p_1 + (u_2^4 - 1) p_2 + 1, \\
\frac{K - 1}{1+\mu} &= (u_1^2 + 1)(u_1 - 1) w_1 + (u_2^2 + 1)(u_2 - 1) w_2, \\
\frac{K - 1}{1+\mu} &= (u_1^3 - u_1^2 + u_1 - 1) w_1 + (u_2^3 - u_2^2 + u_2 - 1) w_2, \\
\frac{K - 1}{1+\mu} &= u_1^3w_1 + u_2^3w_2 - S'+ D' - 1, \\
\frac{K - 1}{1+\mu} &= u_1^3w_1 + u_2^3w_2 - S'+ D' - 1, \\
D' &= \frac{D - 1}{1+\mu} + 1, \\
S' &= \frac{D+S-2}{1+\mu}, \\
\frac{K - 1}{1+\mu} &= u_1^3w_1 + u_2^3w_2, \\
\frac{K + S - 2}{1+\mu} &= u_1^3w_1 + u_2^3w_2, \\
K' &= \frac{K + S - 2}{1+\mu} \\
K' &= u_1^3w_1 + u_2^3w_2, \\
T &= \frac{\ln\frac{u_1^3  - K'}{K'-u_3^2}}{\ln{\frac{u_1}{u_2}}}, \\
\end{aligned}
$